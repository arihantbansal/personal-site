import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { SITE } from "@/lib/site-config";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
	return (
		<main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
			<h1
				className={`${GeistSans.className} mb-10 text-5xl font-semibold tracking-tight text-neutral-50 sm:text-6xl`}>
				gm!
				<span aria-hidden className="caret text-cyan-400">
					▍
				</span>
			</h1>

			<div className="space-y-5 text-[15px] leading-relaxed text-neutral-300 sm:text-base">
				<p>
					i&apos;m <span className="text-cyan-400">Arihant</span> — a software engineer based in
					india, building confidential computing infrastructure. passionate about problems at the
					intersection of privacy and distributed systems.
				</p>
				<p>
					i work @ <A href="https://arcium.com/">arcium</A>, building the next-gen supercomputer for
					a hyperencrypted internet. graduated from{" "}
					<A href="https://www.bits-pilani.ac.in/goa">bits pilani</A>
					{" with a bachelors in electrical & electronics engineering."}
				</p>
			</div>

			<p className="mt-10 text-sm text-neutral-400">
				<span className="text-neutral-500">now</span>{" "}
				<span aria-hidden className="mx-2 text-neutral-700">
					·
				</span>{" "}
				{SITE.now}
			</p>

			<Rule />

			<Section title="~ buidls">
				<ul className="space-y-3 text-sm leading-relaxed text-neutral-400">
					{SITE.buidls.map((b) => (
						<li key={b.name}>
							<A href={b.href}>{b.name}</A>
							<span aria-hidden className="text-neutral-700">
								{" — "}
							</span>
							{b.description}
						</li>
					))}
				</ul>
			</Section>

			<Rule />

			<Section title="~ find me">
				<SocialLinks />
			</Section>
		</main>
	);
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section>
			<h2 className="mb-5 text-sm text-neutral-600 italic">{title}</h2>
			{children}
		</section>
	);
}

function Rule() {
	return <hr className="my-12 border-neutral-900" />;
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
