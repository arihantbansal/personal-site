interface Link {
	label: string;
	href: string;
}

interface SiteContent {
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	updatedAt: string;
	profile: {
		introduction: string;
		outside: string;
		knowsAbout: string[];
	};
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
		dates: string;
		duration: string;
		employeeOrder: string;
		scope: string;
		paper: {
			label: string;
			title: string;
			href: string;
			datePublished: string;
			authors: string[];
		};
	};
	education: {
		institution: string;
		campus: string;
		href: string;
		degree: string;
	};
	socials: Link[];
}

export const site = {
	name: "Arihant Bansal",
	jobTitle: "Engineer",
	description: "Engineer building and experimenting with AI, mostly around consumer software.",
	url: "https://arihantbansal.com",
	updatedAt: "2026-09-08",
	profile: {
		introduction:
			"I'm building and experimenting with AI, mostly around consumer software. I'm interested in how people interact with it and what it takes for agents to do useful work on their behalf.",
		outside:
			"Outside work, I read crime thrillers, listen to a lot of music, travel when I can, and play video games.",
		knowsAbout: [
			"Agent harnesses",
			"Human-agent interaction",
			"Developer tools",
			"Distributed systems",
			"Privacy-preserving computation",
			"Federated learning",
		],
	},
	research: {
		title: "UnifyFL",
		href: "https://arxiv.org/abs/2504.18916",
		doi: "https://doi.org/10.1145/3721462.3730955",
		summary: "explored federated learning without a central coordinator",
		publication: "ACM Middleware 2025",
		advisor: {
			label: "Dr. Arnab K. Paul",
			href: "https://www.bits-pilani.ac.in/goa/arnab-kumar-paul",
		},
	},
	experience: {
		organization: "Arcium",
		href: "https://www.arcium.com/",
		dates: "June 2023 to July 2026",
		duration: "three years",
		employeeOrder: "third employee",
		scope:
			"worked across product and engineering, building developer APIs, tools, and integrations that reached production",
		paper: {
			label: "Arcium Purplepaper",
			title: "The Arcium Network Confidential Supercomputer",
			href: "https://www.arcium.com/research/purplepaper",
			datePublished: "2026-06-03",
			authors: [
				"Yannik Schrade",
				"Leopold Joy",
				"Daniel Filipe Nunes Silva",
				"Nicolas Le Bel",
				"Lukas Steiner",
				"Nico Schapeler",
				"Arihant Bansal",
			],
		},
	},
	education: {
		institution: "BITS Pilani, Goa",
		campus: "BITS Pilani, K K Birla Goa Campus",
		href: "https://www.bits-pilani.ac.in/goa/",
		degree: "electrical engineering",
	},
	socials: [
		{ label: "GitHub", href: "https://github.com/arihantbansal" },
		{ label: "X", href: "https://x.com/arihantbansal" },
		{ label: "LinkedIn", href: "https://linkedin.com/in/arihantbansal" },
	],
} satisfies SiteContent;
