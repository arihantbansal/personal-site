interface Link {
	label: string;
	href: string;
}

interface Project extends Link {
	description: string;
}

interface SiteContent {
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	updatedAt: string;
	profile: {
		introduction: string;
		privacy: string;
		ai: string;
		outside: string;
		knowsAbout: string[];
	};
	projects: Project[];
	research: {
		title: string;
		href: string;
		doi: string;
		summary: string;
		publication: string;
		advisor: Link;
	};
	experience: {
		organization: string;
		href: string;
		summary: string;
		dates: string;
		duration: string;
		employeeOrder: string;
		paper: Link & { title: string };
	};
	education: {
		institution: string;
		href: string;
		degree: string;
	};
	contact: {
		email: string;
	};
	socials: Link[];
}

export const site = {
	name: "Arihant Bansal",
	jobTitle: "Engineer",
	description: "Engineer who likes building developer tools and consumer software.",
	url: "https://arihantbansal.com",
	updatedAt: "2026-10-03",
	profile: {
		introduction:
			"I'm an engineer. I like building developer tools and consumer software, and I care about how things look and feel. If a product doesn't care about the details, I'll leave for one that does.",
		privacy: "I've cared about privacy since I was a kid. That's what got me into cryptography.",
		ai: "I think consumer AI is still early. Most of it is a chat box stuck on top of an app. I'd rather the app itself got smarter, so everyone ends up with a version that fits how they use it. Lately I've been reading a lot about mechanistic interpretability.",
		outside:
			"I read crime thrillers (send me recommendations), listen to a lot of music, travel when I can, and play video games.",
		knowsAbout: [
			"Developer tools",
			"Consumer AI",
			"Cryptography",
			"Zero-knowledge proofs",
			"Multi-party computation",
			"Distributed systems",
			"Federated learning",
		],
	},
	projects: [
		{
			label: "Lightbox",
			href: "https://github.com/arihantbansal/claude-lightbox",
			description: "a Claude Code plugin that shows the images you paste as previews",
		},
		{
			label: "gpu-color",
			href: "https://arihantbansal.com/gpu-color/",
			description: "a tiny model that turns a colour name into a hex code in your browser",
		},
	],
	research: {
		title: "UnifyFL",
		href: "https://arxiv.org/abs/2504.18916",
		doi: "https://doi.org/10.1145/3721462.3730955",
		summary: "training models across organisations without a central coordinator",
		publication: "ACM Middleware 2025",
		advisor: {
			label: "Dr. Arnab K. Paul",
			href: "https://www.bits-pilani.ac.in/goa/arnab-kumar-paul",
		},
	},
	experience: {
		organization: "Arcium",
		href: "https://www.arcium.com/",
		summary: "a cryptography startup building infrastructure for private AI",
		dates: "June 2023 to July 2026",
		duration: "three years",
		employeeOrder: "third employee",
		paper: {
			label: "Arcium Purplepaper",
			title: "The Arcium Network Confidential Supercomputer",
			href: "https://www.arcium.com/research/purplepaper",
		},
	},
	education: {
		institution: "BITS Pilani",
		href: "https://www.bits-pilani.ac.in/goa/",
		degree: "electrical engineering",
	},
	contact: {
		// Written out so it reads as text, not a mailto link, and is harder to scrape.
		email: "arihant dot bansal at gmail",
	},
	socials: [
		{ label: "GitHub", href: "https://github.com/arihantbansal" },
		{ label: "X", href: "https://x.com/arihantbansal" },
		{ label: "LinkedIn", href: "https://linkedin.com/in/arihantbansal" },
	],
} satisfies SiteContent;
