import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Link from "next/link";
import { Service } from "../models/types";
import { ProjectResponse } from "../models/responseTypes";

type FilteredProjectsProps = {
  projects: ProjectResponse[],
  services: Service[],
  maxCount?: number | undefined,
  selectedServicesUUID: string[]
}

export default function FilteredProjects({projects, services, maxCount, selectedServicesUUID}: FilteredProjectsProps){

  const getServiceTag = (serviceUUID: string)=>{
    const res = services.find(({uuid})=>uuid === serviceUUID);
    
    return res !== undefined ? res.tag : "undefined";
  }

  const servicesAreSelected = (servicesTags: string[])=>{
    return servicesTags.reduce((current, service)=>{
      return current || selectedServicesUUID.reduce((current, uuid)=>{
        return current || uuid === service}, false);
    }, false)
  }

  return <div className="grid grid-cols-3 col-span-3 gap-14">
    {
      projects
        .filter(({content}) => (selectedServicesUUID.length === 0 || servicesAreSelected(content.services)))
        .slice(0, maxCount)
        .map(({slug, content})=>{
      return <Link href={`/projects/${slug}`} key={slug} className="[&:hover_.arrow]:opacity-100">
        <div className="mb-4 aspect-[7/10] rounded-2xl bg-design-background-secondary"></div>

        <div className="grid grid-cols-[9fr_min-content]">
          <h3>{content.projectTitle}</h3>
          <h4 className="uppercase col-start-1 text-xs text-design-accent">{content.services.reduce((str, uuid, index)=>{
            return str + (index > 0 ?" / " : "") + getServiceTag(uuid);
          }, "")}</h4>
          <div className="arrow flex col-start-2 row-start-1 row-span-2 w-11 aspect-square rounded-full self-center bg-design-accent opacity-0 transition-opacity">
            <Arrow className="m-auto h-5 w-5 text-design-background-primary"/>
          </div>
        </div>
      </Link>
    })}
  </div>
}