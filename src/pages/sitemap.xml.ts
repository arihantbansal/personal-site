import type { APIRoute } from "astro";
import { publicRoutes } from "../data/pages";
import { site } from "../data/site";

const urls = publicRoutes
	.map(
		({ path }) => `\t<url>
\t\t<loc>${site.url}${path}</loc>
\t</url>`,
	)
	.join("\n");

const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
