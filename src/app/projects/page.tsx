import fetchServicesRest from "@/lib/api/fetchServicesRest";
import { fetchProjects, fetchServicesTags } from "@/lib/api/mockedAPI";
import Star from "@/lib/assets/star-31x31.svg"
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSelection from "@/lib/components/ProjectsSelection";


export default async function Projects(){
  const tags = (await fetchServicesRest()).map((service)=> service.tag);

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

    <ProjectsSelection projects={await fetchProjects()} tags={tags}/>
    <LetsConnectBanner />
  </main>
}