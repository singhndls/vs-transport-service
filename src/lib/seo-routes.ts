/**
 * Auto-synced registry of publicly-crawlable routes. Consumed by the
 * /sitemap.xml handler in src/server/entry.ts.
 *
 * DO NOT add or remove paths by hand. Static paths are mirrored here from
 * src/routes.tsx automatically whenever that file is edited (any manual
 * path edit would be overwritten on the next routes.tsx change). For sync
 * to pick up a route, its `path` must be a literal string starting with "/";
 * template literals and identifier refs are skipped, and dynamic-param routes
 * like "/products/:id" are excluded.
 *
 * The only fields safe to hand-edit are the per-entry metadata below, after a
 * sync:
 * - `priority` (0.0–1.0): Home = 1.0, main sections = 0.8, deep pages = 0.5.
 * - `changefreq` and `lastmod`.
 */

export interface SeoRoute {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  lastmod?: string;
}

export const seoRoutes: SeoRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0, lastmod: "2026-06-29" },
  { path: "/blog", changefreq: "weekly", priority: 0.8, lastmod: "2026-06-29" },
  // Blog posts
  { path: "/blog/transport-tips-delhi-ncr", changefreq: "monthly", priority: 0.7, lastmod: "2026-05-20" },
  { path: "/blog/warehouse-storage-guide-delhi", changefreq: "monthly", priority: 0.7, lastmod: "2026-05-22" },
  { path: "/blog/household-shifting-guide-delhi", changefreq: "monthly", priority: 0.7, lastmod: "2026-05-25" },
  { path: "/blog/loading-unloading-service-delhi", changefreq: "monthly", priority: 0.7, lastmod: "2026-06-28" },
  { path: "/blog/transport-service-okhla-delhi", changefreq: "monthly", priority: 0.7, lastmod: "2026-07-05" },
  { path: "/blog/chota-hathi-vs-bolero-pickup", changefreq: "monthly", priority: 0.7, lastmod: "2026-07-12" },
  { path: "/blog/how-to-choose-transport-company-delhi", changefreq: "monthly", priority: 0.7, lastmod: "2026-07-19" },
  { path: "/blog/packers-movers-vs-transport-delhi", changefreq: "monthly", priority: 0.7, lastmod: "2026-07-26" },
  { path: "/blog/transport-service-gurgaon-delhi", changefreq: "monthly", priority: 0.7, lastmod: "2026-08-02" },
  { path: "/blog/warehouse-storage-tips-delhi-businesses", changefreq: "monthly", priority: 0.7, lastmod: "2026-08-09" },
  { path: "/blog/same-day-delivery-service-delhi-ncr", changefreq: "monthly", priority: 0.7, lastmod: "2026-08-16" },
  // Service pages
  { path: "/services/chota-hathi", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-28" },
  { path: "/services/bolero-pickup", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-28" },
  { path: "/services/warehouse", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-28" },
  { path: "/services/fleet-transport", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-28" },
  { path: "/services/delhi-ncr", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-28" },
  { path: "/services/okhla", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-29" },
  { path: "/services/noida", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-29" },
  { path: "/services/gurgaon", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-29" },
  { path: "/services/loading-unloading", changefreq: "monthly", priority: 0.9, lastmod: "2026-06-29" },
  // Legal
  { path: "/privacy-policy", changefreq: "yearly", priority: 0.3, lastmod: "2026-05-28" },
  { path: "/terms", changefreq: "yearly", priority: 0.3, lastmod: "2026-05-28" },
];
