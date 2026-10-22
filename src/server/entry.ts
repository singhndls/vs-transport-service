import express, { type NextFunction, type Request, type Response } from "express";
import { fileURLToPath } from "node:url";
import { dirname, extname, join } from "node:path";
import { readFileSync } from "node:fs";

// <api-imports>
import analytics__config__get from "./api/analytics/config/GET";
import health__get from "./api/health/GET";
// </api-imports>
import { seoRoutes } from "../lib/seo-routes";

function normalizeCommerceApiBaseUrlEnv() {
	if (process.env.GODADDY_API_BASE_URL) return;
	const hostOnly = process.env.VITE_GODADDY_API_HOST;
	if (!hostOnly) return;
	const normalizedHost = hostOnly.replace(/^https?:\/\//, "").trim();
	if (!normalizedHost) return;
	process.env.GODADDY_API_BASE_URL = `https://${normalizedHost}`;
}

normalizeCommerceApiBaseUrlEnv();

const app = express();

// Honour x-forwarded-* from the load balancer so req.protocol/req.hostname
// reflect the public-facing values. Express-maintained parsing respects the
// existing trust-proxy config; direct header reads would let a client spoof
// the sitemap origin in robots.txt.
app.set("trust proxy", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security headers
app.use((_req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'SAMEORIGIN');
  res.set('X-XSS-Protection', '1; mode=block');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // Disable Cloudflare email obfuscation — it rewrites email addresses in the
  // SSR HTML which causes a server/client HTML mismatch and breaks React hydration
  res.set('X-Email-Obfuscation', 'off');
  // HSTS — tell browsers to always use HTTPS for 1 year (production only)
  if (process.env.NODE_ENV === 'production') {
    res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
  // Content Security Policy — allow resources from known trusted origins
  res.set('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https: http:",
    "media-src 'self' https:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
    "frame-src 'self' https://www.google.com https://maps.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '));
  next();
});

// <api-registrations>
app.get("/api/analytics/config", analytics__config__get);
app.get("/api/health", health__get);
// </api-registrations>

// Error middleware must be registered AFTER the routes it protects; Express
// only passes errors to middleware defined later in the stack.
app.use("/api", (err: unknown, req: Request, res: Response, _next: NextFunction) => {
	// Always respond JSON on /api so clients parsing response.json() don't
	// receive Express's default HTML error page for non-Error throws.
	console.error("ssr.api.error", {
		url: req.url,
		error: err instanceof Error ? err.stack : String(err),
	});
	res.status(500).json({ error: "Internal server error" });
});

function baseUrl(req: Request): string {
	const env = process.env.PUBLIC_URL || process.env.SITE_URL;
	if (env) return env.replace(/\/+$/, "");
	return `${req.protocol}://${req.hostname}`;
}

function escapeXml(s: string): string {
	return s.replace(/[&<>"']/g, (c) =>
		({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!,
	);
}

app.get("/robots.txt", (req, res) => {
	const base = baseUrl(req);
	const body = [
		"User-agent: *",
		"Allow: /",
		"Disallow: /api/",
		"",
		"User-agent: Googlebot",
		"Allow: /",
		"Disallow: /api/",
		"",
		"User-agent: Bingbot",
		"Allow: /",
		"Disallow: /api/",
		"",
		`Sitemap: ${base}/sitemap.xml`,
		"",
	].join("\n");
	res.type("text/plain").set("Cache-Control", "public, max-age=3600").send(body);
});

app.get("/sitemap.xml", (req, res) => {
	const base = baseUrl(req);
	const urls = seoRoutes
		.filter((r) => typeof r.path === "string" && r.path.startsWith("/"))
		.map((r) => {
			const loc = `${base}${r.path}`;
			const parts = [`    <loc>${escapeXml(loc)}</loc>`];
			if (r.lastmod) parts.push(`    <lastmod>${escapeXml(r.lastmod)}</lastmod>`);
			if (r.changefreq) parts.push(`    <changefreq>${r.changefreq}</changefreq>`);
			if (r.priority !== undefined)
				parts.push(`    <priority>${r.priority.toFixed(1)}</priority>`);
			return `  <url>\n${parts.join("\n")}\n  </url>`;
		})
		.join("\n");
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	res.type("application/xml").set("Cache-Control", "public, max-age=3600").send(body);
});

if (import.meta.env.PROD) {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const clientDir = join(__dirname, "client");

	// ── Compression middleware (gzip/brotli) ──────────────────────────────────
	// Pure-JS, no native addon — safe on Alpine/musl.
	// Compresses HTML, JS, CSS, JSON, SVG responses.
	app.use(async (req, res, next) => {
		const accept = req.headers["accept-encoding"] || "";
		const ext = extname(req.path);
		const compressible = /\.(html|js|css|json|svg|xml|txt)$/.test(ext) || !ext;
		if (!compressible) return next();

		const zlib = await import("node:zlib");
		const { pipeline } = await import("node:stream");
		const { promisify } = await import("node:util");
		const pipelineAsync = promisify(pipeline);

		const origWrite = res.write.bind(res);
		const origEnd = res.end.bind(res);
		let compressor: import("node:zlib").Gzip | import("node:zlib").BrotliCompress | null = null;

		if (accept.includes("br")) {
			res.setHeader("Content-Encoding", "br");
			compressor = zlib.createBrotliCompress({ params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 4 } });
		} else if (accept.includes("gzip")) {
			res.setHeader("Content-Encoding", "gzip");
			compressor = zlib.createGzip({ level: 6 });
		}

		if (!compressor) return next();
		res.removeHeader("Content-Length");

		const chunks: Buffer[] = [];
		compressor.on("data", (chunk: Buffer) => chunks.push(chunk));
		compressor.on("end", () => {
			const compressed = Buffer.concat(chunks);
			res.setHeader("Content-Length", compressed.length);
			origWrite(compressed);
			origEnd();
		});

		res.write = (chunk: unknown) => { compressor!.write(chunk); return true; };
		res.end = (chunk?: unknown) => { if (chunk) compressor!.write(chunk); compressor!.end(); return res; };

		void pipelineAsync; // suppress unused warning
		next();
	});

	app.use(
		express.static(clientDir, {
			index: false,
			setHeaders(res, filePath) {
				// Hashed assets → 1 year immutable
				if (filePath.includes("/assets/")) {
					res.set("Cache-Control", "public, max-age=31536000, immutable");
				} else if (/\.(woff2?|ttf|otf|eot)$/.test(filePath)) {
					// Fonts → 1 year (rarely change)
					res.set("Cache-Control", "public, max-age=31536000, immutable");
				} else if (/\.(png|jpe?g|webp|avif|gif|svg|ico)$/.test(filePath)) {
					// Static images → 30 days
					res.set("Cache-Control", "public, max-age=2592000");
				} else {
					res.set("Cache-Control", "no-cache");
				}
			},
		}),
	);

	// ── Performance & security headers for all responses ─────────────────────
	app.use((_req, res, next) => {
		res.set("Cache-Control", "no-cache");
		next();
	});

	let template: string;
	try {
		template = readFileSync(join(clientDir, "index.html"), "utf-8");
	} catch (err) {
		console.error("ssr.template.load-failed", {
			path: join(clientDir, "index.html"),
			error: err instanceof Error ? err.message : String(err),
		});
		process.exit(1);
	}
	if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
		// Fail fast at boot, same as a template load failure above: without
		// markers, every .replace() call on the render path is a no-op and we
		// would serve a shell with no <head> content and no rendered body on
		// every request. Preferring process.exit over a degraded mode ensures
		// an operator notices and fixes the build rather than serving broken
		// SEO-invisible pages indefinitely.
		console.error("ssr.template.markers-missing", {
			hasHead: template.includes("<!--app-head-->"),
			hasHtml: template.includes("<!--app-html-->"),
		});
		process.exit(1);
	}
	const fallbackShell = template
		.replace("<!--app-head-->", "")
		.replace("<!--app-html-->", "");

	// Resolve the SSR module once into a stable render function. A failed
	// load is unrecoverable at runtime - exiting lets the container
	// scheduler restart with a clean slate rather than leaving the server
	// to serve silent 503s indefinitely against a single startup log.
	type RenderResult = {
		html: string;
		head: string;
		status: number;
		redirect?: string;
	};
	let renderFn: ((url: string) => Promise<RenderResult>) | null = null;
	const SSR_MODULE_LOAD_TIMEOUT_MS = 30_000;
	const loadTimeout = setTimeout(() => {
		if (renderFn !== null) return;
		console.error("ssr.module.load-timeout", {
			timeoutMs: SSR_MODULE_LOAD_TIMEOUT_MS,
		});
		process.exit(1);
	}, SSR_MODULE_LOAD_TIMEOUT_MS);
	loadTimeout.unref();
	import("../entry-server").then(
		(mod) => {
			clearTimeout(loadTimeout);
			renderFn = mod.render;
		},
		(err) => {
			clearTimeout(loadTimeout);
			console.error("ssr.module.load-failed", {
				error: err instanceof Error ? err.stack : String(err),
			});
			process.exit(1);
		},
	);

	app.get(/.*/, async (req, res, next) => {
		if (req.method !== "GET") return next();
		if (req.path.startsWith("/api")) return next();
		if (extname(req.path)) return next();
		const sendFallback = () =>
			res
				.status(503)
				.set("Content-Type", "text/html; charset=utf-8")
				.set("Cache-Control", "no-store")
				.send(fallbackShell);
		if (renderFn === null) {
			// Module not yet resolved; fall back without logging to avoid startup
			// noise before the first render is even possible. A terminal load
			// failure (import reject or 30s timeout) process.exit(1)s from the
			// loader above, so this branch is only the brief warmup window.
			return sendFallback();
		}
		try {
			const result = await renderFn(req.url);
			if (result.redirect) {
				// Redirect thrown from a loader/action surfaces as a Response.
				// Forward it so the browser actually navigates to the new URL
				// instead of seeing an empty shell with a stale status.
				res.redirect(result.status, result.redirect);
				return;
			}
			if (!result.html) {
				// A non-redirect Response was thrown from a loader (e.g.
				// `throw new Response(null, { status: 404 })`). renderToString
				// produced no markup, so we have a real status but no body.
				// Log so the case is observable in ops dashboards, and mark
				// no-store so CDNs don't cache an empty page as a valid hit.
				// User-visible 404 / error pages should come from a route
				// errorElement, not from this fallback path.
				console.error("ssr.render.error-response", {
					url: req.url,
					status: result.status,
				});
				res
					.status(result.status)
					.set("Content-Type", "text/html; charset=utf-8")
					.set("Cache-Control", "no-store")
					.send(fallbackShell);
				return;
			}
			// Function replacements disable String.replace's $-special sequences
			// ($&, $', $`, $$) so user-authored titles / JSON-LD like
			// "Save $& today" insert literally instead of being interpolated.
			const resourceHints = [
				'<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous">',
				'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">',
				'<link rel="preconnect" href="https://blobby.wsimg.com" crossorigin="anonymous">',
				'<link rel="dns-prefetch" href="https://www.googletagmanager.com">',
				'<link rel="dns-prefetch" href="https://pagead2.googlesyndication.com">',
				'<link rel="preload" as="image" href="/airo-assets/images/pages/home/hero" fetchpriority="high">',
				// Disable Cloudflare email obfuscation — it rewrites email addresses in
				// the SSR HTML which breaks React hydration (server/client HTML mismatch)
				'<meta name="email-protection" content="off">',
			].join('\n');

			const out = template
				.replace("<!--app-head-->", () => resourceHints + '\n' + result.head)
				.replace("<!--app-html-->", () => result.html);
			res
				.status(result.status)
				.set("Content-Type", "text/html; charset=utf-8")
				.set("Cache-Control", "no-cache")
				.send(out);
		} catch (err) {
			// 503 surfaces the failure in CDN/monitoring without caching a broken
			// page as success. console.error (not warn) puts it at the right log
			// level for the observability pipeline to alert on.
			console.error("ssr.render.failed", {
				url: req.url,
				// Log the full stack — React's renderToString annotates it with
				// the failing component's call tree, which the message alone
				// discards.
				error: err instanceof Error ? err.stack : String(err),
			});
			sendFallback();
		}
	});

	const shutdown = async (signal: string) => {
		console.log(`Got ${signal}, shutting down gracefully...`);
		// Scope the ERR_MODULE_NOT_FOUND suppression to the import() only.
		// A closeConnection() failure that happens to carry the same code
		// (unlikely but possible for wrapped errors) must not be silently
		// swallowed - it indicates a real db-close failure worth logging.
		let mod: { closeConnection?: () => Promise<void> | void } | null = null;
		try {
			const dbClient = "./db/client" + ".js";
			// Source-literal optional module path; no request, environment, or user input reaches import().
			// eslint-disable-next-line no-unsanitized/method
			mod = await import(/* @vite-ignore */ dbClient);
		} catch (error: unknown) {
			const code = (error as { code?: string } | null)?.code;
			if (code !== "ERR_MODULE_NOT_FOUND") {
				console.error("ssr.shutdown.db-import-failed", {
					error: error instanceof Error ? error.message : String(error),
				});
			}
		}
		if (mod && typeof mod.closeConnection === "function") {
			try {
				await mod.closeConnection();
				console.log("Database connections closed");
			} catch (error: unknown) {
				console.error("ssr.shutdown.db-close-failed", {
					error: error instanceof Error ? error.message : String(error),
				});
			}
		}
		process.exit(0);
	};

	(["SIGTERM", "SIGINT"] as const).forEach((signal) => {
		process.once(signal, () => {
			void shutdown(signal);
		});
	});

	const rawPort = process.env.PORT || "3000";
	const port = parseInt(rawPort, 10);
	if (!Number.isInteger(port) || port <= 0 || port > 65535) {
		// parseInt("abc") returns NaN; passing that to app.listen throws
		// synchronously before the server.on("error") handler below can catch
		// it. Fail fast with an actionable log rather than a cryptic crash.
		console.error("ssr.server.invalid-port", { rawPort });
		process.exit(1);
	}
	const host = process.env.HOST || "0.0.0.0";
	const server = app.listen(port, host, () => {
		console.log(`Server listening on http://${host}:${port}`);
	});
	server.on("error", (err: NodeJS.ErrnoException) => {
		console.error("ssr.server.listen-failed", {
			port,
			host,
			code: err.code,
			error: err.message,
		});
		process.exit(1);
	});
}

export default app;

// ── Exported helpers used by entry.test.ts ──────────────────────────────────

interface AdSenseConfig {
  publisherId: string | null;
  scriptHtml: string;
  adsTxt: string | null;
  appAdsTxt: string | null;
}

export function registerAdSenseTextRoutes(
  expressApp: import('express').Express,
  config: AdSenseConfig,
): void {
  const textRoute = (path: string, content: string | null) => {
    expressApp.get(path, (_req, res) => {
      res.set('Content-Type', 'text/plain').set('Cache-Control', 'no-cache');
      if (content) {
        res.status(200).send(content);
      } else {
        res.status(404).send('Not found');
      }
    });
  };
  textRoute('/ads.txt', config.adsTxt);
  textRoute('/app-ads.txt', config.appAdsTxt);
}

interface SsrParts {
  head: string;
  html: string;
}

interface AdSenseScriptConfig {
  scriptHtml: string;
}

export function renderSsrDocument(
  template: string,
  parts: SsrParts,
  adSense: AdSenseScriptConfig,
): string {
  const headContent = adSense.scriptHtml
    ? `${parts.head}\n${adSense.scriptHtml}`
    : parts.head;
  return template
    .replace('<!--app-head-->', () => headContent)
    .replace('<!--app-html-->', () => parts.html);
}
