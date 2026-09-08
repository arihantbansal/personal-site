# Personal site

This is a text-first personal site for humans and agents. Keep it direct, factual, fast, and accessible; clarity and trust matter more than decorative complexity or framework convenience.

- Treat `src/data/site.ts` and `src/data/pages.ts` as the public-content registry. Reuse facts across HTML, Markdown, metadata, and agent-facing files; change biographical claims only from the user's request or a linked primary source.
- Keep HTML and explicit `.md` versions consistent through shared content. Keep this site statically generated; format negotiation does not justify adding a server.
- Prefer Astro and plain browser code without a client-framework runtime. If a feature genuinely needs one, explain the tradeoff and propose the smallest change before adding it. Check visible changes on mobile and desktop, light and dark, keyboard focus, and reduced motion.
