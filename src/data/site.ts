interface Link {
	label: string;
	href: string;
}

interface WorkItem {
	title: string;
	href: string;
	description: string;
	detail: string;
}

interface SiteContent {
	name: string;
	jobTitle: string;
	title: string;
	description: string;
	url: string;
	updatedAt: string;
	profile: {
		introduction: string;
		lately: string;
		outside: string;
	};
	work: WorkItem[];
	research: {
		title: string;
		href: string;
		doi: string;
		description: string;
		detail: string;
		advisor: Link;
	};
	experience: {
		organization: string;
		href: string;
		dates: string;
		scope: string;
		detail: string;
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
		href: string;
		degree: string;
	};
	socials: Link[];
}

export const site = {
	name: "Arihant Bansal",
	jobTitle: "Engineer",
	title: "Arihant Bansal",
	description: "Engineer working on agents, developer tools, and distributed systems.",
	url: "https://arihantbansal.com",
	updatedAt: "2026-08-22",
	profile: {
		introduction:
			"I'm an engineer building tools for agents, especially ways for them to take initiative while keeping their work easy to follow.",
		lately:
			"These days I'm working on tools for agents. I keep thinking about what changes when they can take initiative instead of waiting for a prompt, and what it should feel like to work with them when chat is only one part of the interface.",
		outside:
			"Outside work, I read crime thrillers, listen to a lot of music, travel when I can, and play video games.",
	},
	work: [
		{
			title: "Default Apps for Raycast",
			href: "https://github.com/arihantbansal/default-apps-raycast",
			description: "view and change default apps for macOS file types from Raycast",
			detail:
				"A Raycast extension for viewing and changing the default macOS app for each file type.",
		},
		{
			title: "Solana Keypair Search",
			href: "https://github.com/arihantbansal/solana-keypair-search",
			description:
				"find forgotten Solana keypairs on your device and see whether they still hold funds",
			detail:
				"A terminal tool that recursively searches local folders for Solana keypairs, then checks their mainnet, devnet, and testnet balances, deployed programs, and reclaimable rent.",
		},
	],
	research: {
		title: "UnifyFL",
		href: "https://arxiv.org/abs/2504.18916",
		doi: "https://doi.org/10.1145/3721462.3730955",
		description:
			"undergraduate research on federated learning without a central coordinator, published at ACM Middleware 2025",
		detail:
			"UnifyFL explores federated learning without a central coordinator and was published at ACM Middleware 2025.",
		advisor: {
			label: "Dr. Arnab K. Paul",
			href: "https://www.bits-pilani.ac.in/goa/arnab-kumar-paul",
		},
	},
	experience: {
		organization: "Arcium",
		href: "https://www.arcium.com/",
		dates: "June 2023 to July 2026",
		scope:
			"worked across product and engineering, building developer APIs, tools, and integrations from early prototypes through production",
		detail:
			"His work spanned product and engineering: developer APIs, tools, and integrations from early prototypes through production.",
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
		href: "https://www.bits-pilani.ac.in/goa/",
		degree: "electrical engineering",
	},
	socials: [
		{ label: "GitHub", href: "https://github.com/arihantbansal" },
		{ label: "X", href: "https://x.com/arihantbansal" },
		{ label: "LinkedIn", href: "https://linkedin.com/in/arihantbansal" },
	],
} satisfies SiteContent;
