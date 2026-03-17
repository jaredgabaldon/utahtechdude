import type { APIRoute } from "astro";
import { locationPages, servicePages } from "../data/services";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://utahtechdude.com");
  const urls = [
    new URL("/", baseUrl).toString(),
    new URL("/services/", baseUrl).toString(),
    new URL("/pricing/", baseUrl).toString(),
    new URL("/faq/", baseUrl).toString(),
    new URL("/contact/", baseUrl).toString(),
    ...servicePages.map((service) =>
      new URL(`/services/${service.slug}/`, baseUrl).toString(),
    ),
    ...locationPages.map((location) =>
      new URL(`/locations/${location.slug}/`, baseUrl).toString(),
    ),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
