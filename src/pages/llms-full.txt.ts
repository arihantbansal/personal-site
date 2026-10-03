import type { APIRoute } from "astro";
import { site } from "@/data/site";

const socialLinks = site.socials.map(({ label, href }) => `- ${label}: ${href}`).join("\n");
const projects = site.projects
	.map(({ label, href, description }) => `- ${label}: ${description}\n  ${href}`)
	.join("\n");

const content = `# ${site.name}

Last updated: ${site.updatedAt}

## Profile

${site.profile.introduction}

${site.profile.privacy}

${site.profile.ai}

${site.profile.outside}

## Experience

From ${site.experience.dates}, Arihant spent ${site.experience.duration} at ${site.experience.organization}, ${site.experience.summary}. He joined as the ${site.experience.employeeOrder} while still at university and did a bit of everything, mostly engineering. He co-authored the ${site.experience.paper.label}, ${site.experience.paper.title}.

Company: ${site.experience.href}
Paper: ${site.experience.paper.href}

## Projects

${projects}

## Research

During his undergraduate studies at ${site.education.institution}, Arihant worked with ${site.research.advisor.label} on ${site.research.title}, published at ${site.research.publication}, on ${site.research.summary}.

Paper: ${site.research.href}
DOI: ${site.research.doi}
Advisor: ${site.research.advisor.href}

## Education

He studied ${site.education.degree} at ${site.education.institution}.

## Contact

Email: ${site.contact.email}

${socialLinks}
- Site: ${site.url}/
`;

export const GET: APIRoute = () =>
	new Response(content, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
