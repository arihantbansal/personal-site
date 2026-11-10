import { next, rewrite } from "@vercel/functions";

// Vercel Routing Middleware: agents that ask for Markdown get /index.md at the same URL.
export const config = { matcher: "/" };

export default function middleware(request: Request) {
	const accept = request.headers.get("accept") ?? "";
	if (!accept.includes("text/markdown")) return next();
	return rewrite(new URL("/index.md", request.url));
}
