import Logo from "@/lib/assets/white-logo-79x19.svg";
import Link from "next/link";

const links: { text: string; href: string }[] = [
	{ text: "About", href: "/about" },
	{ text: "Services", href: "/services" },
	{ text: "Projects", href: "/projects" },
];

export default function Footer() {
	return (
		<footer className="container mb-11 mt-7 grid grid-cols-3 text-design-primary-text">
			<Link href={"/"} className="logo">
				<Logo />
			</Link>

			<div className="flex justify-center">
				{links.map(({ text, href }) => {
					return (
						<Link
							key={href}
							href={href}
							className="w-full text-center font-display uppercase"
						>
							{text}
						</Link>
					);
				})}
			</div>

			<Link
				href={"/linkedin"}
				className="text-end font-display uppercase text-design-accent"
			>
				Linkedin
			</Link>
		</footer>
	);
}
