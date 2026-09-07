import type { APIRoute } from "astro";
import { homeMarkdown } from "../content/markdown";
import { markdownResponse } from "../lib/responses";

export const GET: APIRoute = () => markdownResponse(homeMarkdown);
