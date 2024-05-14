import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Link from "next/link";

const placeholderProject = {
  id: "123",
  title: "Matria",
  description: "With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master's degrees and an ongoing Ph.D. in our respective fields.",
  services: ["branding", "newsletter"],
  body: <>
  </>
};

const projects = (()=>{
  const arr = [];
  for(let i = 0; i < 9; i++){
    arr.push({...placeholderProject ,id: Math.random()})
  }
  
  return arr;
})();

type FilteredProjectsProps = {
  maxCount: number,
  tags: string[]
}

export default function FilteredProjects({maxCount, tags}: FilteredProjectsProps){
  const servicesAreTagged = (services: string[])=>{
    return services.reduce((current, service)=>{
      return current || tags.reduce((current, tag)=>{
        return current || tag === service}, false);
    }, false)
  }

  return <div className="grid grid-cols-3 col-span-3 gap-14">
    {
      projects
        .filter(({services}) => (tags.length === 0 || servicesAreTagged(services)))
        .slice(0, maxCount)
        .map(({id, title, services})=>{
      return <Link href={"/services"} key={id} className="[&:hover_.arrow]:opacity-100">
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