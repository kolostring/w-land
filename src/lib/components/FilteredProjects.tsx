import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Link from "next/link";
import { ProjectResponse, ServiceResponse } from "../models/responseTypes";
import Image from "next/image";

type FilteredProjectsProps = {
	projects: ProjectResponse[];
	services: ServiceResponse[];
	maxCount?: number | undefined;
	selectedServicesUUID: string[];
};

export default function FilteredProjects({
	projects,
	services,
	maxCount,
	selectedServicesUUID,
}: FilteredProjectsProps) {
	const getServiceTag = (serviceUUID: string) => {
		const res = services.find(({ uuid }) => uuid === serviceUUID);

		return res !== undefined ? res.content.tag : "undefined";
	};

	const servicesAreSelected = (servicesTags: string[]) => {
		return servicesTags.reduce((current, service) => {
			return (
				current ||
				selectedServicesUUID.reduce((current, uuid) => {
					return current || uuid === service;
				}, false)
			);
		}, false);
	};

	return (
		<div className="col-span-3 grid grid-cols-3 gap-14">
			{projects
				.filter(
					({ content }) =>
						selectedServicesUUID.length === 0 ||
						servicesAreSelected(content.services),
				)
				.slice(0, maxCount)
				.map(({ slug, content }) => {
					return (
						<Link
							href={`/projects/${slug}`}
							key={slug}
							className="[&:hover_.arrow]:opacity-100 [&:hover_img]:scale-105"
						>
							<div className="relative mb-4 aspect-[7/10] overflow-hidden rounded-2xl bg-design-background-secondary">
								<Image
									alt={content.image.alt ?? "" ?? "#"}
									src={content.image.filename + "/m/0x600/filters:quality(80)"}
									width={0}
									height={0}
									unoptimized
									className="h-full w-full object-cover object-top transition-transform"
								/>
							</div>

							<div className="grid grid-cols-[9fr_min-content]">
								<h3>{content.projectTitle}</h3>
								<h4 className="col-start-1 text-xs uppercase text-design-accent">
									{content.services.reduce((str, uuid, index) => {
										return str + (index > 0 ? " / " : "") + getServiceTag(uuid);
									}, "")}
								</h4>
								<div className="arrow col-start-2 row-span-2 row-start-1 flex aspect-square w-11 self-center rounded-full bg-design-accent opacity-0 transition-opacity">
									<Arrow className="m-auto h-5 w-5 text-design-background-primary" />
								</div>
							</div>
						</Link>
					);
				})}
		</div>
	);
}
