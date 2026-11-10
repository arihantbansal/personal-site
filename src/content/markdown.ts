import { site } from "@/data/site";

const join = (items: string[]) =>
	items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;

const socials = join(site.socials.map(({ label, href }) => `[${label}](${href})`));

export const homeMarkdown = `# ${site.name}

${site.intro.join("\n\n")}

## Side projects

${site.projects.map(({ name, href, description }) => `- [${name}](${href}): ${description}`).join("\n")}

## Outside work

${site.outsideWork}

Find me on ${socials}.
`;
