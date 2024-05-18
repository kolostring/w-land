import Star from "@/lib/assets/star-31x31.svg";
import fetchProjectsRest from "@/lib/api/fetchProjectsRest";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import fetchServicesRest from "@/lib/api/fetchServicesRest";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
	const projects = await fetchProjectsRest();

	return projects.map((project) => {
		return { slug: project.slug };
	});
}

export default async function ProjectInfo({
	params,
}: Readonly<{ params: { slug: string } }>) {
	const currentProject = (await fetchProjectsRest()).find(
		(project) => project.slug === params.slug,
	);
	const services = await fetchServicesRest();

	const getServiceTag = (serviceUUID: string) => {
		const res = services.find(({ uuid }) => uuid === serviceUUID);
		return res !== undefined ? res.content.tag : "undefined";
	};

	return (
		<main className="container">
			<section className="hero mb-24 h-svh pb-5 pt-44">
				<div className="mb-24 grid h-full grid-cols-3 gap-x-14">
					<div>
						<Star className="mb-10 text-design-accent" />
						<h1 className="mb-5 text-6xl">
							{currentProject?.content.projectTitle}
						</h1>
						<p className="mb-10">{currentProject?.content.description}</p>

						<h2 className="mb-10 uppercase text-design-accent">Services</h2>
						<div className="flex gap-3">
							{currentProject?.content.services.map((projectServiceUUID) => {
								return (
									<span
										className="rounded-full border border-design-secondary-text px-5 py-2 font-medium uppercase"
										key={projectServiceUUID}
									>
										{getServiceTag(projectServiceUUID)}
									</span>
								);
							})}
						</div>
					</div>

					<div className="relative col-span-2 h-full overflow-hidden rounded-2xl">
						<Image
							alt={currentProject?.content.image.alt ?? "" ?? "#"}
							src={
								currentProject?.content.image.filename +
									"/m/filters:quality(70)" ?? ""
							}
							width={800}
							height={700}
							className="w-full object-cover object-top"
						/>
					</div>
				</div>
			</section>

			{currentProject?.content.sections.map(
				({ _uid, header, images, linkText, linkURL, subSections }) => {
					return (
						<section key={_uid}>
							<div className="flex">
								<h2 className="uppercase">{header}</h2>
								<Link
									href={linkURL}
									className={`ml-auto uppercase text-design-accent ${linkText === undefined ? "hidden" : ""}`}
								>
									{linkText}
								</Link>
							</div>

							<hr />

							<div className="mb-24 pt-14 grid grid-cols-3 gap-x-14">
								<div className="">
									{subSections.map(({ subHeader, text }) => {
										return (
											<>
												<h3 className="mb-5 text-sm uppercase text-design-accent">
													{subHeader}
												</h3>
												<p>{text}</p>
											</>
										);
									})}
								</div>

								<div className="col-span-2 grid grid-cols-2 gap-10 [&>*:nth-child(3n+1)]:col-span-2 [&>*:nth-child(3n+1)]:h-[473px]">
									{images.map(({ filename, id, alt }) => (
										<div key={id} className="relative flex-1 rounded-2xl bg-design-background-secondary overflow-hidden h-[359px]">
											<Image
												src={filename + "/m/filters:quality(70)"}
												alt={alt}
												height={400}
												width={400}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
								</div>
							</div>
						</section>
					);
				},
			)}
			<LetsConnectBanner />
		</main>
	);
}
