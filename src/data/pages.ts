const privacyReviewedAt = "2026-09-08";

export const publicRoutes = [
	{ path: "/", markdownPath: "/index.md" },
	{ path: "/privacy", markdownPath: "/privacy.md" },
];

/** Returns the explicit Markdown alternate for a canonical public page. */
export function markdownPathFor(pathname: string): string | undefined {
	const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
	return publicRoutes.find(({ path }) => path === normalizedPath)?.markdownPath;
}

export interface PageLink {
	label: string;
	href: string;
	detail: string;
}

export interface PageSection {
	heading: string;
	paragraphs: string[];
}

export interface ContentPage {
	title: string;
	description: string;
	introduction: string;
	sections: PageSection[];
	linksHeading: string;
	links: PageLink[];
}

export const privacyPage = {
	title: "Privacy",
	description:
		"How arihantbansal.com handles local preferences, hosting request data, analytics, and links to third-party services.",
	introduction:
		"This site uses Cloudflare Web Analytics and saves your theme preference in your browser.",
	sections: [
		{
			heading: "Hosting and analytics",
			paragraphs: [
				"Vercel hosts this site and may process request metadata to deliver and secure it.",
				"Cloudflare Web Analytics measures page views and page-load performance. This site does not send custom analytics events. See Cloudflare's policy below for details.",
			],
		},
		{
			heading: "Theme preference",
			paragraphs: [
				"The theme control saves light or dark in your browser's local storage under theme. Clear this site's browser data to remove it.",
			],
		},
		{
			heading: "External links and changes",
			paragraphs: [
				"External links are governed by the destination service's own terms and privacy practices. This notice will be updated when this site's data practices materially change.",
				`Last reviewed: ${privacyReviewedAt}.`,
			],
		},
	],
	linksHeading: "Provider policies",
	links: [
		{
			label: "Cloudflare Web Analytics data collection",
			href: "https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/",
			detail: "Cloudflare's description of the beacon and collected performance data.",
		},
		{
			label: "Vercel privacy notice",
			href: "https://vercel.com/legal/privacy-notice",
			detail: "Privacy terms for the site's hosting provider.",
		},
	],
} satisfies ContentPage;
