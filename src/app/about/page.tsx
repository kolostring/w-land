import { fetchMembersRest } from "@/lib/api/fetchMemberRest";
import fetchSkillSetRest from "@/lib/api/fetchSkillSetRest";
import Star from "@/lib/assets/star-31x31.svg";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSection from "@/lib/components/ProjectsSection";
import Image from "next/image";

const clients = [1, 2, 3];

export default async function AboutUs() {
	const skillSet = await fetchSkillSetRest();
	const team = await fetchMembersRest("team");
	const collaborators = await fetchMembersRest("collaborators");

	return (
		<main className="container">
			<section className="hero pt-44">
				<h1 className="mb-5">About Us</h1>

				<div className="mb-24 grid grid-cols-3 gap-x-14">
					<Star className="text-design-accent" />
					<div className="col-span-2 max-w-[79ch]">
						<h3 className="mb-8">
							We are a dynamic team of four highly skilled professionals
							originally from Cuba, now based in Spain and France. Fluent in
							Spanish, English, and French.
						</h3>

						<p className="mb-4">
							With nearly a decade of experience in communication, journalism,
							politics, development, and visual storytelling, our previous
							experiences include working in academia, the United Nations, media
							outlets, NGOs and philanthropic organizations. As a team, we have
							also sought further education, with master&apos;s degrees and an
							ongoing Ph.D. in our respective fields.{" "}
						</p>
						<p className="mb-9">
							As part of our work, we have obtained several recognitions, such
							as the LASA Media Award 2023, one nomination for Gabo&apos;s top
							10 innovation in 2022, CELAP 2021 Investigative Journalism Award,
							and two Chevening scholarships in 2018.
						</p>

						<p className="mb-4">
							Our multidisciplinary skill, language proficiency and commitment
							to social causes empower us to effectively connect with a global
							audience. We are comfortable exploring the intersections between
							democracy and healthy information ecosystems and proposing
							solutions through information and communication tools.
						</p>
						<p className="mb-8">
							We understand the importance of participation in every project we
							undertake. We are committed to combining state-of-the-art
							standards with culturally diverse approaches such as popular,
							community and social change communication.
						</p>

						<h3 className="mb-5 text-4xl text-design-accent">
							Our skills, tools & platforms
						</h3>
						<div className="flex flex-wrap gap-x-5 gap-y-3">
							{skillSet.map((skill, index) => {
								return (
									<div
										key={index}
										className="rounded-full border border-design-secondary-text px-4 py-2 font-medium uppercase "
									>
										{skill}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			<section className="mb-24">
				<div className="mb-5 grid w-full grid-cols-[auto_1fr] gap-5">
					<h2 className="text-sm uppercase">Our Team</h2>
					<span>
						<hr />
					</span>
				</div>

				<div className="mb-10 grid w-full grid-cols-3 items-end gap-14">
					{team.content.members.map(({ fullName, role, image }) => {
						return (
							<div
								key={fullName}
								className="flex aspect-[36/18] items-center gap-6 rounded-2xl bg-design-background-secondary px-8"
							>
								<div className="relative aspect-square h-[104px] overflow-hidden rounded-full bg-design-secondary-text">
									<Image
										src={image.filename + "/m/0x130" ?? ""}
										alt={image.alt ?? ""}
										width={0}
										height={0}
										unoptimized
										className="h-full w-full object-cover object-top"
									/>
								</div>
								<div>
									<h3 className="max-w-[6ch] self-end">{fullName}</h3>
									<h4 className="max-w-[17ch] text-xs uppercase">{role}</h4>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mb-5 grid w-full grid-cols-[auto_1fr] gap-5">
					<h2 className="text-sm uppercase">Our Collaborators</h2>
					<span>
						<hr />
					</span>
				</div>

				<div className="grid w-full grid-cols-3 gap-14">
					{collaborators.content.members.map(({ fullName, role, image }) => {
						return (
							<div
								key={fullName}
								className="flex aspect-[36/18] items-center gap-6 rounded-2xl bg-design-background-secondary px-8"
							>
								<div className="relative aspect-square h-[104px] overflow-hidden rounded-full bg-design-secondary-text">
									<Image
										src={image.filename + "/m/0x130" ?? ""}
										alt={image.alt ?? ""}
										width={0}
										height={0}
										unoptimized
										className="h-full w-full object-cover object-top"
									/>
								</div>
								<div>
									<h3 className="max-w-[10ch] self-end">{fullName}</h3>
									<h4 className="max-w-[17ch] text-xs uppercase">{role}</h4>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className="mb-24">
				<div className="mb-5 grid w-full grid-cols-[auto_1fr] gap-5">
					<h2 className="text-sm uppercase">Our Clients</h2>
					<span>
						<hr />
					</span>
				</div>

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
			</section>

			<ProjectsSection />
			<LetsConnectBanner />
		</main>
	);
}
