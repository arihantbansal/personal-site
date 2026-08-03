import type { APIRoute } from "astro";
import { site } from "../data/site";

const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${site.url}/</loc>
		<lastmod>${site.updatedAt}</lastmod>
	</url>
</urlset>
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
