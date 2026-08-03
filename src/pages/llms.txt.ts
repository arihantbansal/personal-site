import type { APIRoute } from "astro";
import { site } from "../data/site";

const workLinks = site.work
	.map(({ title, href, detail }) => `- [${title}](${href}): ${detail}`)
	.join("\n");

const introduction = [site.profile.introduction, site.profile.outside].join("\n\n");
const socialLinks = site.socials.map(({ label, href }) => `- [${label}](${href})`).join("\n");

const content = `# ${site.name}

${introduction}

## Lately

${site.profile.lately}

## Primary

- [Portfolio](${site.url}/): Current focus, selected work, research, and background.
${socialLinks}

## Selected work

${workLinks}

## Experience

- [${site.experience.organization}](${site.experience.href}) (${site.experience.period}): Arihant worked across ${site.experience.scope}.
- [${site.experience.paper.label}](${site.experience.paper.href}): Co-authored ${site.experience.paper.title}.

## Research

- [${site.research.title}](${site.research.href}): ${site.research.detail}

## More detail

- [Full profile](${site.url}/llms-full.txt): Extended plain-text profile and project context.
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
