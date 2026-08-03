import type { APIRoute } from "astro";
import { site } from "../data/site";

const content = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
