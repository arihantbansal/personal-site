import { site } from "@/data/site";

const x = site.socials.find(({ label }) => label === "X") ?? site.socials[0];
const [lightbox, gpuColor] = site.projects;

export const homeMarkdown = `# ${site.name}

${site.profile.introduction}

I spent ${site.experience.duration} at [${site.experience.organization}](${site.experience.href}), ${site.experience.summary}. I joined as the ${site.experience.employeeOrder} while still at [${site.education.institution}](${site.education.href}) and did a bit of everything. ${site.profile.privacy}

${site.profile.ai}

Recently I built [${lightbox.label}](${lightbox.href}), ${lightbox.description}, and [${gpuColor.label}](${gpuColor.href}), ${gpuColor.description}.

${site.profile.outside}

Say hi on [${x.label}](${x.href}), or email ${site.contact.email}.

## Elsewhere

${site.socials.map(({ label, href }) => `- [${label}](${href})`).join("\n")}
`;
