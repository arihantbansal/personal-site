/** Returns the Markdown content for a static endpoint. */
export function markdownResponse(content: string): Response {
	return new Response(content, {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
