import { privacyPage, type ContentPage } from "../data/pages";
import { site } from "../data/site";

function renderPage(content: ContentPage): string {
	const sections = content.sections
		.map(({ heading, paragraphs }) => `## ${heading}\n\n${paragraphs.join("\n\n")}`)
		.join("\n\n");
	const links = content.links
		.map(({ label, href, detail }) => `- [${label}](${href}): ${detail}`)
		.join("\n");

	return `# ${content.title}

${content.introduction}

${sections}

## ${content.linksHeading}

${links}
`;
}

export const homeMarkdown = `# ${site.name}

${site.profile.introduction}

Previously, I joined [${site.experience.organization}](${site.experience.href}) as its third employee while still at university. Over three years, I ${site.experience.scope}. I also co-authored [${site.experience.paper.label}](${site.experience.paper.href}).

My undergraduate research, [${site.research.title}](${site.research.href}), explored federated learning without a central coordinator and was published at ACM Middleware 2025.

I studied ${site.education.degree} at [${site.education.institution}](${site.education.href}).

${site.profile.outside}

## Contact

${site.socials.map(({ label, href }) => `- [${label}](${href})`).join("\n")}

[Privacy](${site.url}/privacy.md)
`;

export const privacyMarkdown = renderPage(privacyPage);
