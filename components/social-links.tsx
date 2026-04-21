import Link from "next/link";
import { Fragment } from "react";
import { SITE } from "@/lib/site-config";

export function SocialLinks() {
	return (
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-400">
			{SITE.socials.map((s, i) => (
				<Fragment key={s.label}>
					{i > 0 && (
						<span aria-hidden className="text-neutral-700">
							·
						</span>
					)}
					<Link
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						className="link-amber underline-offset-4 transition-colors hover:text-amber-400">
						{s.label}
					</Link>
				</Fragment>
			))}
		</div>
	);
}
