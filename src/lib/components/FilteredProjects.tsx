import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Link from "next/link";
import { Project } from "../models/types";

type FilteredProjectsProps = {
  projects: Project[],
  maxCount: number,
  selectedTags: string[]
}

export default function FilteredProjects({projects, maxCount, selectedTags}: FilteredProjectsProps){
  
  const servicesAreSelected = (servicesTags: string[])=>{
    return servicesTags.reduce((current, service)=>{
      return current || selectedTags.reduce((current, tag)=>{
        return current || tag === service}, false);
    }, false)
  }

  return <div className="grid grid-cols-3 col-span-3 gap-14">
    {
      projects
        .filter(({servicesTags}) => (selectedTags.length === 0 || servicesAreSelected(servicesTags)))
        .slice(0, maxCount)
        .map(({slug, title, servicesTags: services})=>{
      return <Link href={`/projects/${slug}`} key={slug} className="[&:hover_.arrow]:opacity-100">
        <div className="mb-4 aspect-[7/10] rounded-2xl bg-design-background-secondary"></div>

        <div className="grid grid-cols-[9fr_min-content]">
          <h3>{title}</h3>
          <h4 className="uppercase col-start-1 text-xs text-design-accent">{services.reduce((str ,service, index)=>{
            return str + (index > 0 ?" / " : "") + service;
          }, "")}</h4>
          <div className="arrow flex col-start-2 row-start-1 row-span-2 w-11 aspect-square rounded-full self-center bg-design-accent opacity-0 transition-opacity">
            <Arrow className="m-auto h-5 w-5 text-design-background-primary"/>
          </div>
        </div>
      </Link>
    })}
  </div>
}