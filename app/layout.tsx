import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ConsoleEgg } from "@/components/console-egg";
import { SITE } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(SITE.url),
	title: SITE.title,
	description: SITE.description,
	keywords: ["Arihant", "Arihant Bansal", "arihantbansal", "portfolio", "personal site", "arcium"],
	openGraph: {
		title: SITE.title,
		description: SITE.description,
		url: SITE.url,
		siteName: SITE.title,
		images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: SITE.title,
		description: SITE.description,
		images: [`${SITE.url}${SITE.ogImage}`],
	},
	icons: {
		icon: [
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
		shortcut: "/favicon.ico",
	},
	manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
	themeColor: "#000000",
	colorScheme: "dark",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${GeistMono.variable} ${GeistSans.variable}`}>
			<body className={`${GeistMono.className} bg-black text-neutral-300`}>
				{children}
				<ConsoleEgg />
				<Script
					id="cloudflare-analytics"
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon={JSON.stringify({ token: SITE.cloudflare.token })}
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
