interface Link {
	label: string;
	href: string;
}

interface Project {
	name: string;
	href: string;
	description: string;
}

interface SiteContent {
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	updatedAt: string;
	// Paragraphs of the homepage introduction. Markdown inline links render as links.
	intro: string[];
	knowsAbout: string[];
	projects: Project[];
	outsideWork: string;
	hero: { src: string; width: number; height: number; alt: string; credit: string };
	education: { institution: string };
	socials: Link[];
}

export const site = {
	name: "Arihant Bansal",
	jobTitle: "Founding engineer",
	description:
		"I like building things that make hard technology easy to use. Previously employee #3 at Arcium; now building with AI.",
	url: "https://arihantbansal.com",
	updatedAt: "2026-11-10",
	intro: [
		"I like building things that make hard technology easy to use.",
		"Privacy has mattered to me since I was a kid, so for three years that meant cryptography. I was employee #3 at [Arcium](https://www.arcium.com/). We built a network that computes on private data without ever seeing it. I worked on everything from the protocol to the tools developers use.",
		"Now it means AI. I build tools for myself and my agents. I think consumer AI is still early. Chat is rarely the right interface, and there's a lot left to invent.",
		"Lately I've also been learning mechanistic interpretability, to understand how models work inside.",
	],
	knowsAbout: [
		"Product engineering",
		"Developer tools",
		"AI tools and agents",
		"Cryptography",
		"Multi-party computation",
		"Mechanistic interpretability",
	],
	projects: [
		{
			name: "rex-resume",
			href: "https://x.com/arihantbansal/status/2120093046377488701",
			description: "Brings my Claude Code sessions back after Rex restarts",
		},
		{
			name: "lightbox",
			href: "https://github.com/arihantbansal/claude-lightbox",
			description: "Shows the images you paste into Claude Code, not just [Image #1]",
		},
		{
			name: "gpu-color",
			href: "https://arihantbansal.com/gpu-color/",
			description: "Turns color names into hex codes, in your browser",
		},
	],
	outsideWork:
		"Playing Battlefield 6, reading Snow Crash, listening to Tame Impala and watching the Warriors.",
	hero: {
		src: "/difference-engine.jpg",
		width: 1600,
		height: 533,
		alt: "A woodcut of the number wheels of Charles Babbage's Difference Engine No. 1.",
		credit:
			"A portion of Charles Babbage's Difference Engine No. 1, assembled in 1833. Woodcut printed in 1853.",
	},
	education: { institution: "BITS Pilani" },
	socials: [
		{ label: "GitHub", href: "https://github.com/arihantbansal" },
		{ label: "X", href: "https://x.com/arihantbansal" },
		{ label: "LinkedIn", href: "https://linkedin.com/in/arihantbansal" },
	],
} satisfies SiteContent;
