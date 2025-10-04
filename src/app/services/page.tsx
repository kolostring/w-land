import fetchServicesRest from "@/lib/api/fetchServicesRest";
import Star from "@/lib/assets/star-31x31.svg";
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSection from "@/lib/components/ProjectsSection";
import Link from "next/link";

export default async function Services() {
  const services = await fetchServicesRest();

  return (
    <main className="container">
      <section className="hero pt-44">
        <h1 className="mb-5 font-display text-[120px] leading-none tracking-tighter">
          Our Services
        </h1>

        <div className="mb-24 grid grid-cols-3 gap-x-14">
          <Star className="text-design-accent" />
          <div className="col-span-2 max-w-[79ch]">
            <p className="mb-8 text-4xl font-display">
              We are a dynamic team of four highly skilled professionals
              originally from Cuba, now based in Spain and France. Fluent in
              Spanish, English, and French.
            </p>

            <p>
              With nearly a decade of experience in communication, journalism,
              politics, development, and visual storytelling, our previous
              experiences include working in academia, the United Nations, media
              outlets, NGOs and philanthropic organizations. As a team, we have
              also sought further education, with master`&apos;`s degrees and an
              ongoing Ph.D. in our respective fields.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex text-sm uppercase">
          <h2>Services</h2>
          <Link
            className="ml-auto flex items-center gap-2 text-design-accent"
            href="/services"
          >
            <span>Let`&apos;`s connect</span>
            <Arrow />
          </Link>
        </div>
        <hr />

        <div className="grid grid-cols-3 gap-x-14 gap-y-8">
          {services.map(({ content, uuid }) => {
            return (
              <div key={content.title} id={uuid}>
                <h3 className="text-design-accent text-3xl mb-3">
                  {content.title}
                </h3>
                <ul className="list-outside list-disc pl-6 leading-relaxed">
                  {content.description
                    .split("- ")
                    .filter((description) => description.length > 0)
                    .map((description, index) => {
                      return <li key={uuid + index}>{description}</li>;
                    })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <ProjectsSection />
      <LetsConnectBanner />
    </main>
  );
}
