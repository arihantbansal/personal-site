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
		period: string;
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
		href: string;
		degree: string;
	};
	socials: Link[];
}

export const site = {
	name: "Arihant Bansal",
	jobTitle: "Engineer",
	title: "Arihant Bansal",
	description:
		"Engineer working on agents, developer tools, cryptography, and distributed systems.",
	url: "https://www.arihantbansal.xyz",
	updatedAt: "2026-08-04",
	profile: {
		introduction:
			"I'm an engineer. I like starting with the product question and staying through the awkward edge cases.",
		lately:
			"These days I'm interested in tools for agents and better ways for people to work with them. I don't think chat is enough once an agent works for more than a few minutes; I keep thinking about how to understand what it's doing, step in when needed, and leave it alone the rest of the time.",
		outside:
			"Outside work, I read, listen to a lot of music, travel when I can, and play video games.",
	},
	work: [
		{
			title: "Default Apps for Raycast",
			href: "https://github.com/arihantbansal/default-apps-raycast",
			description: "manage macOS file associations from Raycast",
			detail:
				"A Raycast extension for browsing file types and changing their default macOS applications.",
		},
		{
			title: "Solana Keypair Search",
			href: "https://github.com/arihantbansal/solana-keypair-search",
			description: "find local Solana keypairs and check their balances without retaining them",
			detail:
				"A terminal tool that scans for Solana keypairs, checks balances and reclaimable rent, then clears secret bytes after deriving each public address.",
		},
	],
	research: {
		title: "UnifyFL",
		href: "https://arxiv.org/abs/2504.18916",
		doi: "https://doi.org/10.1145/3721462.3730955",
		description:
			"undergraduate research on federated learning without a central aggregator, with Dr. Arnab K. Paul",
		detail:
			"The work uses decentralized orchestration and distributed storage to support cross-organization federated learning without a central aggregator.",
		advisor: {
			label: "Dr. Arnab K. Paul",
			href: "https://www.bits-pilani.ac.in/goa/arnab-kumar-paul",
		},
	},
	experience: {
		organization: "Arcium",
		href: "https://www.arcium.com/",
		period: "June 2023–July 2026",
		scope:
			"product and engineering for its confidential computing network, from Solana programs and architecture to the SDKs and tools developers used",
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
