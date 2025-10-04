import fetchProjectsRest from "@/lib/api/fetchProjectsRest";
import fetchServicesRest from "@/lib/api/fetchServicesRest";
import Star from "@/lib/assets/star-31x31.svg";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSelection from "@/lib/components/ProjectsSelection";

export default async function Projects() {
  const projects = await fetchProjectsRest();
  const services = await fetchServicesRest();

  return (
    <>
      <header className="container hero pt-44">
        <h1 className="mb-5 font-display text-[120px] leading-none tracking-tighter">
          Selected Projects
        </h1>

        <div className="grid grid-cols-3 gap-x-14">
          <Star className="text-design-accent" />
          <div className="col-span-2">
            <p className="mb-5 font-display text-3xl">
              We are a dynamic team of four highly skilled professionals
              originally from Cuba, now based in Spain and France. Fluent in
              Spanish, English, and French.
            </p>

            <p>
              With nearly a decade of experience in communication, journalism,
              politics, development, and visual storytelling, our previous
              experiences include working in academia, the United Nations, media
              outlets, NGOs and philanthropic organizations. As a team, we have
              also sought further education, with master&apos;s degrees and an
              ongoing Ph.D. in our respective fields.{" "}
            </p>
          </div>
        </div>
      </header>
      <main className="container">
        <ProjectsSelection projects={projects} services={services} />
        <LetsConnectBanner />
      </main>
    </>
  );
}
