import type { APIRoute } from "astro";
import { site } from "../data/site";

const introduction = [site.profile.introduction, site.profile.outside].join("\n\n");
const socialLinks = site.socials.map(({ label, href }) => `- [${label}](${href})`).join("\n");

const content = `# ${site.name}

${introduction}

## Primary

- [Portfolio](${site.url}/): Current focus, research, and background.
${socialLinks}

## Experience

- [${site.experience.organization}](${site.experience.href}) (${site.experience.dates}): Arihant joined as its third employee while still at university. Over three years, he ${site.experience.scope}.
- [${site.experience.paper.label}](${site.experience.paper.href}): Co-authored ${site.experience.paper.title}.

## Research

- [${site.research.title}](${site.research.href}): ${site.research.detail}

## More detail

- [Full profile](${site.url}/llms-full.txt): Extended plain-text profile, research, and background.
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
