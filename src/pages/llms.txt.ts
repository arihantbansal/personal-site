import type { APIRoute } from "astro";
import { site } from "@/data/site";

const content = `# ${site.name}

> ${site.description}

Every page is static. There is no API, search endpoint, or MCP server.

## Pages

- [Profile](${site.url}/index.md): The homepage as Markdown.
- [Full profile](${site.url}/llms-full.txt): Everything in one plain-text file.
- [For agents](${site.url}/agents): What is available and how to fetch it.

## Notes

- Requesting ${site.url}/ with \`Accept: text/markdown\` returns the Markdown profile.
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
