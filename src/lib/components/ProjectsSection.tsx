import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Star from "@/lib/assets/star-31x31.svg";
import Link from "next/link";
import FilteredProjects from "./FilteredProjects";
import fetchProjectsRest from "../api/fetchProjectsRest";
import fetchServicesRest from "../api/fetchServicesRest";

export default async function ProjectsSection() {
	const projects = await fetchProjectsRest();
	const services = await fetchServicesRest();

	return (
		<section className="projects">
			<div className="flex text-sm uppercase">
				<h2>W.Land projects</h2>
				<Link
					className="ml-auto flex items-center gap-2 text-design-accent"
					href="/services"
				>
					<span>View all projects</span>
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

				<FilteredProjects
					maxCount={3}
					selectedServicesUUID={[]}
					projects={projects}
					services={services}
				/>
			</div>
		</section>
	);
}
