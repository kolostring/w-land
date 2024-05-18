import Link from "next/link";
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";

export default function LetsConnectBanner() {
	return (
		<div className="flex aspect-[12/6] flex-col items-center justify-center rounded-2xl bg-design-background-secondary">
			<span className="mb-4 text-sm uppercase text-design-accent">
				Got a project in mind?
			</span>
			<h1 className="mb-7 font-display text-8xl uppercase">
				Let&apos;s connect
			</h1>
			<Link
				className="flex items-center gap-1 rounded-full bg-design-accent px-8 py-2 font-medium text-design-background-primary"
				href={"/lets-talk"}
			>
				<span>Let&apos;s talk</span>
				<Arrow height="1rem" />
			</Link>
		</div>
	);
}
