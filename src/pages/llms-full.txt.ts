import type { APIRoute } from "astro";
import { homeMarkdown } from "@/content/markdown";
import { site } from "@/data/site";

const content = `${homeMarkdown}
Last updated: ${site.updatedAt}
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
