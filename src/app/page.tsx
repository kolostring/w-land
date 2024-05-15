import Star from "@/lib/assets/star-31x31.svg"
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg"
import Link from "next/link";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSection from "@/lib/components/ProjectsSection";
import { fetchServices } from "@/lib/api/mockedAPI";

export default async function Home() {
  const clients = [1,2,3];
  const services = await fetchServices();

  return (
    <main className="container">
      <section className="hero grid grid-cols-1 grid-rows-[auto_auto_1fr] pt-44 h-svh max-w-[786px] mx-auto">
        <h1 className="mb-5">Women Land Creative Studio</h1>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
          <Star className="text-design-accent col-start-2"/>
          <p className="col-start-3 text-justify uppercase">
          WE ARE A FULL-SERVICE CREATIVE STUDIO CREATING AWESOME DIGITAL EXPERIENCES AND SOLUTIONS. OUR MISSION IS TO MAKE WORK PROCESS MEANINGFUL.
          </p>
        </div>
        <Link href="/#about" className="self-center flex mx-auto border border-design-primary-text rounded-full w-20 aspect-square">
          <Arrow className="m-auto rotate-45 h-9 w-9 stroke-[0.4]"/>
        </Link>
      </section>

      <section id="about" className="about">
        <div className="flex uppercase text-sm">
          <h2>About W.Land</h2>
          <Link className="flex gap-2 ml-auto items-center text-design-accent" href="/about">
            <span>Learn More</span>
            <Arrow/>
          </Link>
        </div>

        <hr />

        <div className="grid grid-cols-3 gap-x-14 mb-24">
          <div className="text-design-accent">
            <Star/>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4">Jane Garsia Studio is an independent fullservice studio creating awesome digital experiences and solutions. We are an award winning group specializing in branding, design and engineering. Our mission is to make work meaningful.</h3>

            <p className="mb-10">With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master&apos;s degrees and an ongoing Ph.D. in our respective fields. <br /><br />
            As part of our work, we have obtained several recognitions, such as the LASA Media Award 2023, one nomination for Gabo&apos;s top 10 innovation in 2022, CELAP 2021 Investigative Journalism Award, and two Chevening scholarships in 2018.</p>

            <h2 className="uppercase text-sm mb-10">Our clients</h2>
            <div className="grid grid-cols-3 gap-10">
              {clients.map((client)=>{
                return <div key={client} className="rounded-2xl bg-design-background-secondary aspect-[3/1]"></div>
              })}
            </div>
          </div>
        </div>
      </section>
      
      <section className="services">
        <div className="flex uppercase text-sm">
          <h2>W.Land services</h2>
          <Link className="flex gap-2 ml-auto items-center text-design-accent" href="/services">
            <span>Learn More</span>
            <Arrow/>
          </Link>
        </div>

        <hr />

        <div className="grid grid-cols-3 gap-x-14 mb-24">
          <Star className="text-design-accent"/>

          <h3 className="col-span-2 mb-12">Here are some select projects that showcase my passion for creating memorable web experiences, products, and brands to life.</h3>
          
          <div className="grid grid-cols-3 col-span-3 gap-14">
            {services.map(({title})=>{
              return <Link href={`/services/#${title}`} key={title} className="grid grid-cols-[1fr_auto] p-8 pr-6 rounded-2xl bg-design-primary-text hover:bg-design-accent [&:hover>div]:bg-design-background-primary [&:hover>div]:text-design-primary-text transition-colors">
                <h3 className="text-4xl tracking-tight max-w-[12ch] text-design-background-primary">{title}</h3>
                <div className="flex w-11 aspect-square rounded-full self-end text-design-background-primary bg-design-accent transition-colors">
                  <Arrow className="h-5 w-5 m-auto"/>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>
      
      
      <ProjectsSection />
      <LetsConnectBanner />
    </main>
  );
}
