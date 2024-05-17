"use client"

import { useCallback, useState } from "react";
import FilteredProjects from "./FilteredProjects";
import { Project, Service } from "@/lib/models/types";

export type ProjectsSelectionProps = {
  projects: Project[],
  services: Service[],
}

export default function ProjectsSelection({projects, services}: ProjectsSelectionProps){
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const getFilteredServicesUUID = useCallback(() => {
    return filteredTags.map((filteredTag) => {
      const res = services.find(({tag}) => filteredTag === tag);
      return res !== undefined ? res.uuid : "undefined"; 
    })
  }, [filteredTags, services])

  const handleClick = (event: React.MouseEvent)=>{
    const handledTag = (event.target as HTMLButtonElement).innerText;
    
    if(filteredTags.includes(handledTag)){
      setFilteredTags(filteredTags.filter((tag)=>{return handledTag !== tag}));
    }else{
      setFilteredTags(filteredTags.concat([handledTag]));
    }
  }

  return <section className="projects-selection mb-24">
      <div className="flex uppercase text-sm">
        <h2>Projects Selection</h2>
      </div>

      <hr />

      <div className="mb-14">
        {services.map(({uuid, tag}) => {
          return <span key={uuid}>
            <button className={`px-4 py-2 rounded-full border mr-4 transition-colors ${filteredTags.includes(tag) ? "bg-design-accent border-design-accent text-design-background-primary": ""} `} onClick={handleClick}>{tag}</button>
          </span>
        })}
      </div>
      
      <div className="grid-cols-1 min-h-12 transition-transform">
        <FilteredProjects projects={projects} services={services} selectedServicesUUID={getFilteredServicesUUID()}/>
      </div>
  </section>
}