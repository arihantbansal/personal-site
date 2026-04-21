import Link from "next/link";
import { SITE } from "@/lib/site-config";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
	return (
		<main className="mx-auto max-w-2xl px-6 py-6 sm:py-10">
			<h1 className="mb-5 font-sans text-5xl font-semibold tracking-tight text-neutral-50 sm:text-6xl">
				gm!
				<span aria-hidden className="caret text-cyan-400">
					▍
				</span>
			</h1>

			<div className="space-y-4 text-[15px] leading-relaxed text-neutral-300 sm:text-base">
				<p>
					i&apos;m <span className="text-cyan-400">Arihant</span> — interested in distributed
					systems, privacy, and figuring out how models actually work.
				</p>
				<p>
					i work at <A href="https://arcium.com/">arcium</A>, where we&apos;re building a network
					that lets you run computation on encrypted data — without ever decrypting it.{" "}
					<A href="https://www.bits-pilani.ac.in/goa">bits pilani</A>
					{" '23, electrical engineering."}
				</p>
				<p>
					when i&apos;m not coding i&apos;m probably reading crime thrillers or rewatching rick and
					morty.
				</p>
			</div>

			<p className="mt-5 text-sm text-neutral-400">
				<span className="text-neutral-500">now</span>{" "}
				<span aria-hidden className="mx-2 text-neutral-700">
					·
				</span>{" "}
				{SITE.now}
			</p>

			<Rule />

			<section>
				<h2 className="mb-3 text-sm text-neutral-500 italic">~ tinkering</h2>
				<ul className="space-y-2 text-sm leading-relaxed text-neutral-400">
					{SITE.tinkering.map((t) => (
						<li key={t.name}>
							<A href={t.href}>{t.name}</A>
							<span aria-hidden className="text-neutral-700">
								{" — "}
							</span>
							{t.description}
						</li>
					))}
				</ul>
			</section>

			<Rule />

			<SocialLinks />
		</main>
	);
}

function Rule() {
	return <hr className="my-6 border-neutral-900" />;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
	const external = href.startsWith("http");
	return (
		<Link
			href={href}
			{...(external && { target: "_blank", rel: "noopener noreferrer" })}
			className="link-accent text-cyan-400">
			{children}
		</Link>
	);
}
