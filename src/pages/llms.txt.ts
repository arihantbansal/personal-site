import type { APIRoute } from "astro";
import { site } from "@/data/site";
import { plain } from "@/lib/inline";

const content = `# ${site.name}

> ${site.description}

${site.intro.slice(1).map(plain).join(" ")}

## Pages

- [Homepage as Markdown](${site.url}/index.md): the same page in Markdown. Requesting ${site.url}/ with \`Accept: text/markdown\` returns it too.

## Side projects

${site.projects.map(({ name, href, description }) => `- [${name}](${href}): ${description}`).join("\n")}

## Elsewhere

${site.socials.map(({ label, href }) => `- [${label}](${href})`).join("\n")}
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
