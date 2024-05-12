import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Star from "@/lib/assets/star-31x31.svg"
import Link from "next/link";

const projects = [{
  title: "Climate Animation",
  subtitle: "Design / Motion Graphics",
},
{
  title: "Climate Animation",
  subtitle: "Design / Motion Graphics",
},
{
  title: "Climate Animation",
  subtitle: "Design / Motion Graphics",
},
]

export default function ProjectsSection(){
  return <section className="services">
  <div className="flex uppercase text-sm">
    <h2>W.Land projects</h2>
    <Link className="flex gap-2 ml-auto items-center text-design-accent" href="/services">
      <span>View all projects</span>
      <Arrow/>
    </Link>
  </div>

  <hr />

  <div className="grid grid-cols-3 gap-x-14 mb-24">
    <Star className="text-design-accent"/>

    <h3 className="col-span-2 mb-12">Here are some select projects that showcase my passion for creating memorable web experiences, products, and brands to life.</h3>
    
    <div className="grid grid-cols-3 col-span-3 gap-14">
      {projects.map(({title, subtitle}, index)=>{
        return <Link href={"/services"} key={index} className="[&:hover_.arrow]:opacity-100">
          <div className="mb-4 aspect-[7/10] rounded-2xl bg-design-background-secondary"></div>

          <div className="grid grid-cols-[9fr_min-content]">
            <h3>{title}</h3>
            <h4 className="uppercase col-start-1 text-xs text-design-accent">{subtitle}</h4>
            <div className="arrow flex col-start-2 row-start-1 row-span-2 w-11 aspect-square rounded-full self-center bg-design-accent opacity-0 transition-opacity">
              <Arrow className="m-auto h-5 w-5 text-design-background-primary"/>
            </div>
          </div>
        </Link>
      })}
    </div>
  </div>
</section>
}