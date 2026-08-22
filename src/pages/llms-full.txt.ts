import type { APIRoute } from "astro";
import { site } from "../data/site";

const socialLinks = site.socials.map(({ label, href }) => `- ${label}: ${href}`).join("\n");
const introduction = [site.profile.introduction, site.profile.outside].join("\n\n");

const content = `# ${site.name}

Last updated: ${site.updatedAt}

## Profile

${introduction}

## Research

During his undergraduate studies at ${site.education.institution}, Arihant worked with ${site.research.advisor.label} on ${site.research.title}. ${site.research.detail}

Paper: ${site.research.href}
DOI: ${site.research.doi}
Advisor: ${site.research.advisor.href}

## Experience

From ${site.experience.dates}, Arihant worked at ${site.experience.organization}, joining as its third employee while still at university. ${site.experience.detail} He also co-authored the ${site.experience.paper.label}, ${site.experience.paper.title}.

Paper: ${site.experience.paper.href}

## Education

He studied ${site.education.degree} at ${site.education.institution}.

## Links

${socialLinks}
- Portfolio: ${site.url}/
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
