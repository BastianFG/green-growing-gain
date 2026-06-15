import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { fetchShopifyProducts } from "@/lib/products";

const BASE_URL = "https://www.bascharant.store";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split('T')[0];
        const shopifyProducts = await fetchShopifyProducts();
        
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly", lastmod: today },
          { path: "/tienda", priority: "0.9", changefreq: "daily", lastmod: today },
          { path: "/servicios", priority: "0.9", changefreq: "weekly", lastmod: today },
          ...shopifyProducts.map((p) => ({ path: `/producto/${p.slug}`, priority: "0.8", changefreq: "weekly", lastmod: today })),
        ];

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
