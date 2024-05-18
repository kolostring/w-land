"use client";

import { useCallback, useState } from "react";
import FilteredProjects from "./FilteredProjects";
import { ProjectResponse, ServiceResponse } from "../models/responseTypes";

export type ProjectsSelectionProps = {
	projects: ProjectResponse[];
	services: ServiceResponse[];
};

export default function ProjectsSelection({
	projects,
	services,
}: ProjectsSelectionProps) {
	const [filteredTags, setFilteredTags] = useState<string[]>([]);

	const getFilteredServicesUUID = useCallback(() => {
		return filteredTags.map((filteredTag) => {
			const res = services.find(({ content }) => filteredTag === content.tag);
			return res !== undefined ? res.uuid : "undefined";
		});
	}, [filteredTags, services]);

	const handleClick = (event: React.MouseEvent) => {
		const handledTag = (event.target as HTMLButtonElement).innerText;

		if (filteredTags.includes(handledTag)) {
			setFilteredTags(
				filteredTags.filter((tag) => {
					return handledTag !== tag;
				}),
			);
		} else {
			setFilteredTags(filteredTags.concat([handledTag]));
		}
	};

	return (
		<section className="projects-selection mb-24">
			<div className="flex text-sm uppercase">
				<h2>Projects Selection</h2>
			</div>

			<hr />

			<div className="mb-14">
				{services.map(({ uuid, content }) => {
					return (
						<span key={uuid}>
							<button
								className={`mr-4 rounded-full border px-4 py-2 transition-colors ${filteredTags.includes(content.tag) ? "border-design-accent bg-design-accent text-design-background-primary" : ""} `}
								onClick={handleClick}
							>
								{content.tag}
							</button>
						</span>
					);
				})}
			</div>

			<div className="min-h-12 grid-cols-1 transition-transform">
				<FilteredProjects
					projects={projects}
					services={services}
					selectedServicesUUID={getFilteredServicesUUID()}
				/>
			</div>
		</section>
	);
}
