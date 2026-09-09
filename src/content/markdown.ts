import { site } from "@/data/site";

export const homeMarkdown = `# ${site.name}

${site.profile.introduction}

Previously, I joined [${site.experience.organization}](${site.experience.href}) as its ${site.experience.employeeOrder} while still at university. Over ${site.experience.duration}, I ${site.experience.scope}. I also co-authored [${site.experience.paper.label}](${site.experience.paper.href}).

My undergraduate research, [${site.research.title}](${site.research.href}), ${site.research.summary} and was published at ${site.research.publication}.

I studied ${site.education.degree} at [${site.education.institution}](${site.education.href}).

${site.profile.outside}

## Contact

${site.socials.map(({ label, href }) => `- [${label}](${href})`).join("\n")}
`;
