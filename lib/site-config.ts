export const SITE = {
	title: "Arihant",
	description: "arihant's personal site",
	url: "https://arihantbansal.xyz",
	ogImage: "/image.png",
	now: "building confidential compute @ arcium · jun '23 – present",
	cloudflare: {
		token: "94d58999a13442ed9c54f58f2fd7d171",
	},
	tinkering: [
		{
			name: "solana-keypair-search",
			href: "https://github.com/arihantbansal/solana-keypair-search",
			description: "scan your device for stray solana keypairs and reclaim lost balance.",
		},
		{
			name: "default-apps-raycast",
			href: "https://github.com/arihantbansal/default-apps-raycast",
			description: "raycast extension to view and change default app associations per filetype.",
		},
		{
			name: "build-your-own-claude-code",
			href: "https://github.com/arihantbansal/build-your-own-claude-code",
			description: "rust: reimplementing claude code from scratch.",
		},
	],
	socials: [
		{ label: "x", href: "https://x.com/arihantbansal" },
		{ label: "github", href: "https://github.com/arihantbansal" },
		{ label: "linkedin", href: "https://linkedin.com/in/arihantbansal" },
	],
} as const;
