import type { APIRoute } from "astro";
import { privacyMarkdown } from "../content/markdown";
import { markdownResponse } from "../lib/responses";

export const GET: APIRoute = () => markdownResponse(privacyMarkdown);
