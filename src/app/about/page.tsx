import fetchTeamRest from "@/lib/api/fetchTeamRest";
import { fetchCollaborators, fetchToolsAndSkills } from "@/lib/api/mockedAPI";
import Star from "@/lib/assets/star-31x31.svg"
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSection from "@/lib/components/ProjectsSection";

const clients = [1,2,3];

export default async function AboutUs(){
  const skillSet = await fetchToolsAndSkills();
  const team = await fetchTeamRest();
  const collaborators = await fetchCollaborators();

  return <main className="container">
    <section className="hero pt-44">
      <h1 className="mb-5">About Us</h1>
    
      <div className="grid grid-cols-3 gap-x-14 mb-24">
        <Star className="text-design-accent" />
        <div className="col-span-2 max-w-[79ch]">
          <h3 className="mb-8">We are a dynamic team of four highly skilled professionals originally from Cuba, now based in Spain and France. Fluent in Spanish, English, and French.</h3>
          
          <p className="mb-4">With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master&apos;s degrees and an ongoing Ph.D. in our respective fields. </p>
          <p className="mb-9">As part of our work, we have obtained several recognitions, such as the LASA Media Award 2023, one nomination for Gabo&apos;s top 10 innovation in 2022, CELAP 2021 Investigative Journalism Award, and two Chevening scholarships in 2018.</p>

          <p className="mb-4">Our multidisciplinary skill, language proficiency and commitment to social causes empower us to effectively connect with a global audience. We are comfortable exploring the intersections between democracy and healthy information ecosystems and proposing solutions through information and communication tools.</p>
          <p className="mb-8">We understand the importance of participation in every project we undertake. We are committed to combining state-of-the-art standards with culturally diverse approaches such as popular, community and social change communication.</p>

          <h3 className="mb-5 text-4xl text-design-accent">Our skills, tools & platforms</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {skillSet.map((skill, index) => {
              return <div key={index} className="uppercase font-medium py-2 px-4 rounded-full border border-design-secondary-text ">{skill}</div>
            })}
          </div>
        </div>
      </div>
    </section>

    <section className="mb-24">
      <div className="grid grid-cols-[auto_1fr] gap-5 w-full mb-5">
        <h2 className="uppercase text-sm">Our Team</h2> 
        <span><hr /></span> 
      </div>

      <div className="grid grid-cols-3 items-end gap-14 w-full mb-10">
        {team.map(({fullName, role})=>{
          return <div key={fullName} className="flex items-center gap-6 rounded-2xl aspect-[36/18] px-8 bg-design-background-secondary">
            <div className="bg-design-secondary-text h-[104px] aspect-square rounded-full"></div>
            <div>
              <h3 className="self-end max-w-[6ch]">{fullName}</h3>
              <h4 className="uppercase max-w-[17ch] text-xs">{role}</h4>
            </div>
          </div>
        })
        }
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-5 w-full mb-5">
        <h2 className="uppercase text-sm">Our Collaborators</h2> 
        <span><hr /></span> 
      </div>

      <div className="grid grid-cols-3 gap-14 w-full">
        {collaborators.map(({fullName, role})=>{
          return <div key={fullName} className="flex items-center gap-6 rounded-2xl aspect-[36/18] px-8 bg-design-background-secondary">
            <div className="bg-design-secondary-text h-[104px] aspect-square rounded-full"></div>
            <div>
              <h3 className="self-end max-w-[10ch]">{fullName}</h3>
              <h4 className="uppercase max-w-[17ch] text-xs">{role}</h4>
            </div>
          </div>
        })}
      </div>
    </section> 

    <section className="mb-24">
      <div className="grid grid-cols-[auto_1fr] gap-5 w-full mb-5">
        <h2 className="uppercase text-sm">Our Clients</h2> 
        <span><hr /></span> 
      </div>

      <div className="grid grid-cols-3 gap-10">
        {clients.map((client)=>{
          return <div key={client} className="rounded-2xl bg-design-background-secondary aspect-[3/1]"></div>
        })}
      </div>
    </section>

    <ProjectsSection />
    <LetsConnectBanner />
  </main>
}