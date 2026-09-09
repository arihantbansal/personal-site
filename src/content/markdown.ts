import { site } from "@/data/site";

export const homeMarkdown = `# ${site.name}

${site.profile.introduction}

Previously, I joined [${site.experience.organization}](${site.experience.href}) as its third employee while still at university. Over three years, I ${site.experience.scope}. I also co-authored [${site.experience.paper.label}](${site.experience.paper.href}).

My undergraduate research, [${site.research.title}](${site.research.href}), explored federated learning without a central coordinator and was published at ACM Middleware 2025.

I studied ${site.education.degree} at [${site.education.institution}](${site.education.href}).

${site.profile.outside}

## Contact

${site.socials.map(({ label, href }) => `- [${label}](${href})`).join("\n")}
`;
