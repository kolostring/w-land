"use client"
import Star from "@/lib/assets/star-31x31.svg"
import FilteredProjects from "@/lib/components/FilteredProjects";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import { useEffect, useState } from "react";

const filterTags = ["illustration", "branding", "campaign", "social media", "website", "animation"];

export default function Projects(){
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const handleClick = (event: React.MouseEvent)=>{
    const handledTag = (event.target as HTMLButtonElement).innerText;
    
    if(filteredTags.includes(handledTag)){
      setFilteredTags(filteredTags.filter((tag)=>{return handledTag !== tag}));
    }else{
      setFilteredTags(filteredTags.concat([handledTag]));
    }
  }

  return <main className="container">
    <section className="hero pt-44">
      <h1 className="mb-5">Selected Projects</h1>
    
      <div className="grid grid-cols-3 gap-x-14">
        <Star className="text-design-accent" />
        <div className="col-span-2 max-w-[79ch]">
          <h3 className="mb-8">We are a dynamic team of four highly skilled professionals originally from Cuba, now based in Spain and France. Fluent in Spanish, English, and French.</h3>
          
          <p>With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master&apos;s degrees and an ongoing Ph.D. in our respective fields. </p>
        </div>
      </div>
    </section>

    <section className="services mb-24">
      <div className="flex uppercase text-sm">
        <h2>Projects Selection</h2>
      </div>

      <hr />

      <div className="mb-14">
        {filterTags.map((tag) => {
          return <span key={tag}>
            <button className={`px-4 py-2 rounded-full border mr-4 transition-colors ${filteredTags.includes(tag) ? "bg-design-accent border-design-accent text-design-background-primary": ""} `} onClick={handleClick}>{tag}</button>
          </span>
        })}
      </div>
      
      <div className="grid-cols-1 min-h-12 transition-transform">
        <FilteredProjects maxCount={9} tags={filteredTags}/>
      </div>
    </section>

    <LetsConnectBanner />
  </main>
}