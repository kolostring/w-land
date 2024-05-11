import Star from "@/lib/assets/star-31x31.svg"
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg"
import Link from "next/link";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";

export default function Home() {
  const clients = [1,2,3];
  const services = [
    "Branding design", "Web design & development", "Communication solutions", 
    "Strategic marketing", "Motion Graphics", "_placeholder"];
  
  const projects = [{
    title: "Climate Animation I",
    subtitle: "Design / Motion Graphics",
  },
  {
    title: "Climate Animation II",
    subtitle: "Design / Motion Graphics",
  },
  {
    title: "Climate Animation III",
    subtitle: "Design / Motion Graphics",
  },
  ]

  return (
    <main className="container">
      <section className="hero flex flex-col justify-center h-svh max-w-[786px] mx-auto">
        <h1 className="font-display text-[108px] leading-none">Women Land Creative Studio</h1>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 my-5">
          <Star className="text-design-accent col-start-2"/>
          <h3 className="col-start-3 text-justify uppercase">
          WE ARE A FULL-SERVICE CREATIVE STUDIO CREATING AWESOME DIGITAL EXPERIENCES AND SOLUTIONS. OUR MISSION IS TO MAKE WORK PROCESS MEANINGFUL.
          </h3>
        </div>
      </section>

      <section className="about">
        <div className="flex uppercase text-sm">
          <h3>About W.Land</h3>
          <Link className="flex gap-2 ml-auto items-center text-design-accent" href="/about">
            <h3>Learn More</h3>
            <Arrow/>
          </Link>
        </div>

        <hr />

        <div className="grid grid-cols-3 gap-x-14 mb-24">
          <div className="text-design-accent">
            <Star/>
          </div>
          <div className="col-span-2">
            <h2 className="text-3xl font-display mb-4">Jane Garsia Studio is an independent fullservice studio creating awesome digital experiences and solutions. We are an award winning group specializing in branding, design and engineering. Our mission is to make work meaningful.</h2>

            <p className="mb-10">With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master&apos;s degrees and an ongoing Ph.D. in our respective fields. <br /><br />
            As part of our work, we have obtained several recognitions, such as the LASA Media Award 2023, one nomination for Gabo&apos;s top 10 innovation in 2022, CELAP 2021 Investigative Journalism Award, and two Chevening scholarships in 2018.</p>

            <h3 className="uppercase mb-10">Our clients</h3>
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
          <h3>W.Land services</h3>
          <Link className="flex gap-2 ml-auto items-center text-design-accent" href="/services">
            <h3>Learn More</h3>
            <Arrow/>
          </Link>
        </div>

        <hr />

        <div className="grid grid-cols-3 gap-x-14 mb-24">
          <Star className="text-design-accent"/>

          <h2 className="col-span-2 text-3xl font-display mb-12">Here are some select projects that showcase my passion for creating memorable web experiences, products, and brands to life.</h2>
          
          <div className="grid grid-cols-3 col-span-3 gap-14">
            {services.map((service)=>{
              return <Link href={"/services"} key={service} className="grid grid-cols-[1fr_auto] p-8 pr-6 rounded-2xl bg-design-primary-text hover:bg-design-accent [&:hover>div]:bg-design-background-primary [&:hover>div]:text-design-primary-text transition-colors">
                <h2 className="font-display text-4xl max-w-[12ch] text-design-background-primary">{service}</h2>
                <div className="flex w-11 aspect-square rounded-full self-end text-design-background-primary bg-design-accent transition-colors">
                  <Arrow className="h-5 w-5 m-auto"/>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="flex uppercase text-sm">
          <h3>W.Land projects</h3>
          <Link className="flex gap-2 ml-auto items-center text-design-accent" href="/services">
            <h3>Learn More</h3>
            <Arrow/>
          </Link>
        </div>

        <hr />

        <div className="grid grid-cols-3 gap-x-14 mb-24">
          <Star className="text-design-accent"/>

          <h2 className="col-span-2 text-3xl font-display mb-12">Here are some select projects that showcase my passion for creating memorable web experiences, products, and brands to life.</h2>
          
          <div className="grid grid-cols-3 col-span-3 gap-14">
            {projects.map(({title, subtitle})=>{
              return <Link href={"/services"} key={title} className="[&:hover_.arrow]:opacity-100">
                <div className="mb-4 aspect-[7/10] rounded-2xl bg-design-background-secondary"></div>

                <div className="grid grid-cols-[9fr_min-content]">
                  <h3 className="font-display text-3xl leading-none">{title}</h3>
                  <h3 className="uppercase col-start-1 text-xs text-design-accent">{subtitle}</h3>
                  <div className="arrow flex col-start-2 row-start-1 row-span-2 w-11 aspect-square rounded-full self-center bg-design-accent opacity-0 transition-opacity">
                    <Arrow className="m-auto h-5 w-5 text-design-background-primary"/>
                  </div>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>

      <LetsConnectBanner />
    </main>
  );
}
