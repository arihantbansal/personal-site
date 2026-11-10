export type Segment = string | { label: string; href: string };

// Site copy uses Markdown inline links so the same string renders as HTML and as Markdown.
export const segments = (text: string): Segment[] =>
	text
		.split(/(\[[^\]]+\]\([^)]+\))/)
		.filter(Boolean)
		.map((part) => {
			const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
			return link ? { label: link[1]!, href: link[2]! } : part;
		});

export const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
