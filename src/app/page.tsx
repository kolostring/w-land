import Star from "@/lib/assets/star-31x31.svg";
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Link from "next/link";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSection from "@/lib/components/ProjectsSection";
import fetchServicesRest from "@/lib/api/fetchServicesRest";

export default async function Home() {
	const clients = [1, 2, 3];
	const services = await fetchServicesRest();

	return (
		<main className="container">
			<section className="hero mx-auto grid h-svh max-w-[786px] grid-cols-1 grid-rows-[auto_auto_1fr] pt-44">
				<h1 className="mb-5">Women Land Creative Studio</h1>
				<div className="grid grid-cols-[1fr_auto_1fr] gap-8">
					<Star className="col-start-2 text-design-accent" />
					<p className="col-start-3 text-justify uppercase">
						WE ARE A FULL-SERVICE CREATIVE STUDIO CREATING AWESOME DIGITAL
						EXPERIENCES AND SOLUTIONS. OUR MISSION IS TO MAKE WORK PROCESS
						MEANINGFUL.
					</p>
				</div>
				<Link
					href="/#about"
					className="mx-auto flex aspect-square w-20 self-center rounded-full border border-design-primary-text"
				>
					<Arrow className="m-auto h-9 w-9 rotate-45 stroke-[0.4]" />
				</Link>
			</section>

			<section id="about" className="about">
				<div className="flex text-sm uppercase">
					<h2>About W.Land</h2>
					<Link
						className="ml-auto flex items-center gap-2 text-design-accent"
						href="/about"
					>
						<span>Learn More</span>
						<Arrow />
					</Link>
				</div>

				<hr />

				<div className="mb-24 grid grid-cols-3 gap-x-14">
					<div className="text-design-accent">
						<Star />
					</div>
					<div className="col-span-2">
						<h3 className="mb-4">
							Jane Garsia Studio is an independent fullservice studio creating
							awesome digital experiences and solutions. We are an award winning
							group specializing in branding, design and engineering. Our
							mission is to make work meaningful.
						</h3>

						<p className="mb-10">
							With nearly a decade of experience in communication, journalism,
							politics, development, and visual storytelling, our previous
							experiences include working in academia, the United Nations, media
							outlets, NGOs and philanthropic organizations. As a team, we have
							also sought further education, with master&apos;s degrees and an
							ongoing Ph.D. in our respective fields. <br />
							<br />
							As part of our work, we have obtained several recognitions, such
							as the LASA Media Award 2023, one nomination for Gabo&apos;s top
							10 innovation in 2022, CELAP 2021 Investigative Journalism Award,
							and two Chevening scholarships in 2018.
						</p>

						<h2 className="mb-10 text-sm uppercase">Our clients</h2>
						<div className="grid grid-cols-3 gap-10">
							{clients.map((client) => {
								return (
									<div
										key={client}
										className="aspect-[3/1] rounded-2xl bg-design-background-secondary"
									></div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			<section className="services">
				<div className="flex text-sm uppercase">
					<h2>W.Land services</h2>
					<Link
						className="ml-auto flex items-center gap-2 text-design-accent"
						href="/services"
					>
						<span>Learn More</span>
						<Arrow />
					</Link>
				</div>

				<hr />

				<div className="mb-24 grid grid-cols-3 gap-x-14">
					<Star className="text-design-accent" />

					<h3 className="col-span-2 mb-12">
						Here are some select projects that showcase my passion for creating
						memorable web experiences, products, and brands to life.
					</h3>

					<div className="col-span-3 grid grid-cols-3 gap-14">
						{services.map(({ content, uuid }) => {
							return (
								<Link
									href={`/services/#${content.tag}`}
									key={uuid}
									className="grid grid-cols-[1fr_auto] rounded-2xl bg-design-primary-text p-8 pr-6 transition-colors hover:bg-design-accent [&:hover>div]:bg-design-background-primary [&:hover>div]:text-design-primary-text"
								>
									<h3 className="max-w-[12ch] text-4xl tracking-tight text-design-background-primary">
										{content.title}
									</h3>
									<div className="flex aspect-square w-11 self-end rounded-full bg-design-accent text-design-background-primary transition-colors">
										<Arrow className="m-auto h-5 w-5" />
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			<ProjectsSection />
			<LetsConnectBanner />
		</main>
	);
}
