/// <reference types="bun" />

import { describe, expect, test } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";
import { publicRoutes } from "@/data/pages";
import { site } from "@/data/site";
import vercel from "../vercel.json";

const read = (path: string) => readFileSync(`dist/${path}`, "utf8");

function runThemeScripts(options: {
	prefersDark?: boolean;
	storedTheme?: string;
	storageDenied?: boolean;
}) {
	const storage = new Map<string, string>();
	if (options.storedTheme) storage.set("theme", options.storedTheme);
	const attributes = new Map<string, string>();
	let onClick = () => {};
	const toggleButton = {
		hidden: true,
		setAttribute: (name: string, value: string) => attributes.set(name, value),
		getAttribute: (name: string) => attributes.get(name),
		removeAttribute() {
			this.hidden = false;
		},
		addEventListener(_event: string, handler: () => void) {
			onClick = handler;
		},
		click() {
			onClick();
		},
	};
	const metaAttributes = new Map<string, string>();
	const metaThemeColor = {
		setAttribute: (name: string, value: string) => metaAttributes.set(name, value),
		getAttribute: (name: string) => metaAttributes.get(name),
	};
	const documentElement: { dataset: { theme?: string } } = { dataset: {} };
	const context = vm.createContext({
		window: { matchMedia: () => ({ matches: options.prefersDark ?? false }) },
		document: {
			documentElement,
			querySelector: (selector: string) =>
				selector === "[data-theme-toggle]" ? toggleButton : metaThemeColor,
		},
		localStorage: {
			getItem(key: string) {
				if (options.storageDenied) throw new Error("Storage denied");
				return storage.get(key) ?? null;
			},
			setItem(key: string, value: string) {
				if (options.storageDenied) throw new Error("Storage denied");
				storage.set(key, value);
			},
		},
	});
	for (const [, script] of read("index.html").matchAll(/<script>([\s\S]*?)<\/script>/g)) {
		vm.runInContext(script, context);
	}
	return { documentElement, metaThemeColor, toggleButton, storage };
}

// Test the files that are deployed, rather than a development server.
describe("static site", () => {
	for (const { path, markdownPath } of publicRoutes) {
		test(`${path} has HTML, Markdown, and discovery links`, () => {
			const html = read(path === "/" ? "index.html" : `${path.slice(1)}/index.html`);
			const markdown = read(markdownPath.slice(1));
			expect(html.match(/<h1\b/g)).toHaveLength(1);
			expect(html).toContain(`href="${markdownPath}"`);
			expect(html).toContain('rel="alternate" type="text/markdown"');
			expect(html).toContain('rel="describedby" href="/llms.txt"');
			expect(markdown).toStartWith("# ");
			for (const match of html.matchAll(/href="(\/[^"#]*)"/g)) {
				const target = match[1].slice(1);
				expect(
					existsSync(`dist/${target || "index.html"}`) || existsSync(`dist/${target}/index.html`),
				).toBe(true);
			}
		});
	}

	test("published introduction and facts agree across formats", () => {
		for (const path of ["index.html", "index.md", "llms-full.txt"]) {
			const text = read(path).replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
			expect(text).toContain(site.profile.introduction);
			expect(text).toContain(site.experience.organization);
			expect(text).toContain(site.experience.employeeOrder);
			expect(text).toContain(site.experience.duration);
			expect(text).toContain(site.research.title);
			expect(text).toContain(site.research.publication);
			expect(text).toContain(site.research.summary);
			if (path === "index.html") {
				expect(text.replace(/<[^>]*>/g, "")).toContain(
					`${site.research.title}, ${site.research.summary}`,
				);
			}
			expect(text).toContain(site.experience.scope);
		}
		expect(read("llms.txt")).toContain(site.description);
	});

	test("homepage metadata identifies the person", () => {
		const html = read("index.html");
		const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
		expect(json).not.toBeNull();
		const graph = JSON.parse(json![1])["@graph"];
		const profile = graph.find(
			(entry: Record<string, unknown>) => entry["@type"] === "ProfilePage",
		);
		expect(profile.mainEntity).toEqual({ "@id": `${site.url}/#person` });
	});

	test("404 offers recovery and is excluded from indexing", () => {
		const html = read("404.html");
		expect(html).toContain('href="/"');
		expect(html).toContain('content="noindex, follow"');
		expect(html).not.toContain('rel="canonical"');
	});

	test("sitemap and agent index list the published pages", () => {
		for (const { path, markdownPath } of publicRoutes) {
			expect(read("sitemap.xml")).toContain(`<loc>${site.url}${path}</loc>`);
			expect(read("llms.txt")).toContain(`${site.url}${markdownPath}`);
		}
		const sitemapLocs = Array.from(read("sitemap.xml").matchAll(/<loc>(.*?)<\/loc>/g), (m) => m[1]);
		const expectedSitemapLocs = publicRoutes.map(({ path }) => `${site.url}${path}`);
		expect(sitemapLocs.sort()).toEqual(expectedSitemapLocs.sort());

		const llmsPageLinks = Array.from(
			read("llms.txt").matchAll(/- \[[^\]]+\]\((https?:[^)]+)\)/g),
			(m) => m[1],
		);
		const expectedLlmsLinks = [
			...publicRoutes.map(({ markdownPath }) => `${site.url}${markdownPath}`),
			`${site.url}/llms-full.txt`,
		];
		expect(llmsPageLinks.sort()).toEqual(expectedLlmsLinks.sort());
	});

	test("hosting configuration declares Markdown content type", () => {
		const mdRule = vercel.headers.find((rule) => rule.source === "/(.*).md");
		expect(mdRule).toBeDefined();
		expect(mdRule?.headers).toContainEqual({
			key: "Content-Type",
			value: "text/markdown; charset=utf-8",
		});
	});

	test("saved theme takes precedence over the system preference", () => {
		const env = runThemeScripts({ prefersDark: true, storedTheme: "light" });
		expect(env.documentElement.dataset.theme).toBe("light");
		expect(env.toggleButton.getAttribute("aria-label")).toBe("Use dark theme");
	});

	test("inline theme scripts update theme, meta, and aria-label", () => {
		const env = runThemeScripts({ prefersDark: false });
		expect(env.documentElement.dataset.theme).toBe("light");
		expect(env.metaThemeColor.getAttribute("content")).toBe("#fbfbfa");
		expect(env.toggleButton.hidden).toBe(false);
		expect(env.toggleButton.getAttribute("aria-label")).toBe("Use dark theme");

		env.toggleButton.click();
		expect(env.documentElement.dataset.theme).toBe("dark");
		expect(env.metaThemeColor.getAttribute("content")).toBe("#181817");
		expect(env.toggleButton.getAttribute("aria-label")).toBe("Use light theme");
		expect(env.storage.get("theme")).toBe("dark");

		env.toggleButton.click();
		expect(env.documentElement.dataset.theme).toBe("light");
		expect(env.metaThemeColor.getAttribute("content")).toBe("#fbfbfa");
		expect(env.toggleButton.getAttribute("aria-label")).toBe("Use dark theme");
		expect(env.storage.get("theme")).toBe("light");
	});

	test("inline theme scripts operate safely when storage access is denied", () => {
		const env = runThemeScripts({ prefersDark: true, storageDenied: true });
		expect(env.documentElement.dataset.theme).toBe("dark");
		expect(env.metaThemeColor.getAttribute("content")).toBe("#181817");
		expect(env.toggleButton.hidden).toBe(false);
		expect(env.toggleButton.getAttribute("aria-label")).toBe("Use light theme");

		expect(() => env.toggleButton.click()).not.toThrow();
		expect(env.documentElement.dataset.theme).toBe("light");
		expect(env.metaThemeColor.getAttribute("content")).toBe("#fbfbfa");
		expect(env.toggleButton.getAttribute("aria-label")).toBe("Use dark theme");

		expect(() => env.toggleButton.click()).not.toThrow();
		expect(env.documentElement.dataset.theme).toBe("dark");
		expect(env.metaThemeColor.getAttribute("content")).toBe("#181817");
		expect(env.toggleButton.getAttribute("aria-label")).toBe("Use light theme");
	});
});
