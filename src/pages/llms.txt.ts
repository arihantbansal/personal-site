import type { APIRoute } from "astro";
import { site } from "@/data/site";

const content = `# ${site.name}

> ${site.description}

Use this site for Arihant's public background, views, projects, research, and contact details.
Use linked papers and repositories for details about individual projects.

## Pages

- [Profile](${site.url}/index.md): Introduction, background, views, projects, and contact.
- [Full profile](${site.url}/llms-full.txt): Additional background and source links.
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
