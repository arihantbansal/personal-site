/// <reference types="bun" />

import { describe, expect, test } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { publicRoutes } from "@/data/pages";
import { site } from "@/data/site";
import vercel from "@root/vercel.json";

const read = (path: string) => readFileSync(`dist/${path}`, "utf8");

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

	test("published introduction agrees across formats", () => {
		for (const path of ["index.html", "index.md", "llms-full.txt"]) {
			const text = read(path).replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
			expect(text).toContain(site.profile.introduction);
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
		for (const path of ["llms.txt", "llms-full.txt", "sitemap.xml"]) {
			expect(read(path)).not.toMatch(/\/(about|contact)(?:\.md|<)/);
		}
	});

	test("hosting configuration declares Markdown content type", () => {
		expect(vercel.headers).toContainEqual({
			source: "/(.*).md",
			headers: [{ key: "Content-Type", value: "text/markdown; charset=utf-8" }],
		});
	});
});
