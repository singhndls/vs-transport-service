// This project was exported from Airo. These plugins only exist inside Airo and were
// removed, but this file still references them: sourceMapperPlugin, devToolsPlugin, fullStoryPlugin, errorInterceptorPlugin, mediaVersionsPlugin, hmrGatePlugin.
// Delete those references before running or building this project.
import { defineConfig, type Plugin, type ViteDevServer, mergeConfig as mergeViteConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";





import { contentPlugin } from "./export-plugins/content-plugin/index.ts";

function extractHostname(value: string): string {
  try {
    if (value.includes("://")) {
      return new URL(value).hostname;
    }
    return value;
  } catch {
    return value;
  }
}
function apiDevPlugin(): Plugin {
  return {
    name: "api-dev",
    apply: "serve",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api")) return next();
        try {
          const mod = await server.ssrLoadModule("/src/server/entry.ts");
          const handler = mod.default;
          handler(req, res, next);
        } catch (err) {
          if (err instanceof Error) server.ssrFixStacktrace(err);
          next(err);
        }
      });
    }
  };
}
const allowedHosts: string[] = [];
const corsOrigins: string[] = [];
if (process.env.FRONTEND_DOMAIN) {
  const frontendHost = extractHostname(process.env.FRONTEND_DOMAIN);
  allowedHosts.push(frontendHost);
  corsOrigins.push(`http://${frontendHost}`, `https://${frontendHost}`);
}
if (process.env.ALLOWED_ORIGINS) {
  const origins = process.env.ALLOWED_ORIGINS.split(",");
  allowedHosts.push(...origins.map(extractHostname));
  corsOrigins.push(...origins);
}
if (process.env.VITE_PARENT_ORIGIN) {
  allowedHosts.push(extractHostname(process.env.VITE_PARENT_ORIGIN));
  corsOrigins.push(process.env.VITE_PARENT_ORIGIN);
}
if (allowedHosts.length === 0) {
  allowedHosts.push("*");
}
if (corsOrigins.length === 0) {
  corsOrigins.push("*");
}
export default defineConfig(({
  mode,
  isSsrBuild
}) => ((configValue, mergeResolvedConfig) => typeof configValue === "function" ? async (...configArgs) => mergeResolvedConfig(await configValue(...configArgs)) : (async () => mergeResolvedConfig(await configValue))())({
  envPrefix: ["VITE_", "SITE_"],
  plugins: [contentPlugin(), react({
    babel: {
      plugins: [sourceMapperPlugin]
    }
  }), apiDevPlugin(), ...(mode === "development" ? [devToolsPlugin() as Plugin, fullStoryPlugin(), errorInterceptorPlugin(), mediaVersionsPlugin() as Plugin] : [])],
  resolve: {
    dedupe: ["react", "react-dom", "react-router"],
    alias: {
      nothing: "/src/fallbacks/missingModule.ts",
      "@/api": path.resolve(__dirname, "./src/server/api"),
      "@": path.resolve(__dirname, "./src")
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router"]
  },
  ssr: {
    noExternal: isSsrBuild ? true : undefined
  },
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "5173"),
    strictPort: !!process.env.PORT,
    allowedHosts,
    cors: {
      origin: corsOrigins,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept", "User-Agent"]
    },
    hmr: {
      overlay: false
    },
    watch: {
      ignored: ["**/dist/**"]
    }
  },
  preview: {
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "5173"),
    strictPort: !!process.env.PORT,
    allowedHosts,
    cors: {
      origin: corsOrigins,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept", "User-Agent"]
    }
  },
  build: isSsrBuild ? {
    outDir: "dist",
    emptyOutDir: false,
    copyPublicDir: false,
    ssr: "src/server/entry.ts",
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "server.bundle.mjs",
        chunkFileNames: "bin/[name]-[hash].js",
        banner: "import { createRequire } from 'module';\nconst require = createRequire(import.meta.url);"
      }
    }
  } : {
    outDir: "dist/client",
    emptyOutDir: true,
    copyPublicDir: true,
    // Warn when any chunk exceeds 500 kB (gzipped ~150 kB)
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Granular manual chunks keep initial JS payload small
        manualChunks(id: string) {
          // React core + scheduler must be in one chunk so every
          // React-dependent library (helmet, router, query, radix, motion)
          // always finds React.createContext defined when they initialise.
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/scheduler/') || id.includes('node_modules/react-router') || id.includes('node_modules/@remix-run/') || id.includes('node_modules/@dr.pogodin/react-helmet') || id.includes('node_modules/@tanstack/') || id.includes('node_modules/@radix-ui/') || id.includes('node_modules/motion/') || id.includes('node_modules/framer-motion/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
        }
      }
    }
  }
}, (resolvedConfig) => mergeViteConfig(resolvedConfig, {
  plugins: [hmrGatePlugin()]
})));