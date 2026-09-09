import type { APIRoute } from "astro";
import { site } from "@/data/site";

const content = `# ${site.name}

> ${site.description}

Use this site for Arihant's public background, work, research, and contact links.
Use linked papers and repositories for details about individual projects.

## Pages

- [Profile](${site.url}/index.md): Introduction, experience, research, and contact links.
- [Full profile](${site.url}/llms-full.txt): Additional background and source links.
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
