export const publicRoutes = [{ path: "/", markdownPath: "/index.md" }];

/** Returns the explicit Markdown alternate for a canonical public page. */
export function markdownPathFor(pathname: string): string | undefined {
	const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
	return publicRoutes.find(({ path }) => path === normalizedPath)?.markdownPath;
}
