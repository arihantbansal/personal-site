import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE.title,
		short_name: SITE.title,
		theme_color: "#000000",
		background_color: "#000000",
		display: "standalone",
	};
}
