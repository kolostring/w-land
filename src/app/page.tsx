import Star from "@/lib/assets/star-31x31.svg";
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";
import Link from "next/link";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSection from "@/lib/components/ProjectsSection";
import fetchServicesRest from "@/lib/api/fetchServicesRest";

export default async function Home() {
  const clients = [1, 2, 3];
  const services = await fetchServicesRest();

  return (
    <>
      <div className="container">
        <header className="hero mx-auto grid h-svh max-w-[786px] grid-cols-1 grid-rows-[auto_auto_1fr] pt-44">
          <h1 className="mb-5 font-display text-[120px] leading-none tracking-tighter">
            <span className="flex items-end">
              W
              <Star className="text-design-accent mb-3 mx-1 size-6" />
              Land
            </span>
            <span>Creative Studio</span>
          </h1>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
            <Star className="col-start-2 text-design-accent size-6" />
            <p className="col-start-3 text-justify uppercase">
              Crafting, Championing and Impacting
            </p>
          </div>
          <Link
            href="/#about"
            className="mx-auto flex aspect-square w-20 self-center rounded-full border border-design-primary-text"
          >
            <Arrow className="m-auto h-9 w-9 rotate-45 stroke-[0.4]" />
          </Link>
        </header>
      </div>
      <main className="container">
        <section id="about" className="about">
          <div className="flex text-sm uppercase">
            <h2>
              Think about a word that begins with{" "}
              <span className="text-design-accent">W</span>
            </h2>
            <Link
              className="ml-auto flex items-center gap-2 text-design-accent"
              href="/about"
            >
              <span>Learn More</span>
              <Arrow />
            </Link>
          </div>

          <hr />

          <div className="mb-24 grid grid-cols-3 gap-x-14">
            <div className="text-design-accent">
              <Star />
            </div>
            <div className="col-span-2">
              <p className="mb-9 font-display text-3xl">
                W.Land is a boutique communications & marketing consultant for
                mission driven organizations with a strong commitment to
                maximising the social impact of changemakers across regions and
                development agendas.
              </p>

              <p className="mb-10">
                We are integrated by high-skilled Caribbean professionals living
                in the diaspora, and we want to continue amplifying the creative
                voices of those who are not widely represented in Western
                creative industries. <br />
                <br /> Our biggest strength is a multi-disciplinary team that
                combines expert skills in communications & marketing with a deep
                understanding of the intersectional crises that our world faces
                today, based on both academic and nonprofit experience.
              </p>

              <h2 className="mb-10 text-sm uppercase text-design-accent">
                Some of our clients
              </h2>
              <div className="grid grid-cols-3 gap-10">
                {clients.map((client) => {
                  return (
                    <div
                      key={client}
                      className="aspect-[3/1] rounded-2xl bg-design-background-secondary"
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="flex text-sm uppercase">
            <h2>
              Crafting, Championing and Impacting:{" "}
              <span className="text-design-accent">What we do</span>
            </h2>
            <Link
              className="ml-auto flex items-center gap-2 text-design-accent"
              href="/services"
            >
              <span>Learn More</span>
              <Arrow />
            </Link>
          </div>

          <hr />

          <div className="mb-24 grid grid-cols-3 gap-x-14">
            <Star className="text-design-accent" />

            <p className="col-span-2 mb-16 font-display text-3xl">
              At W.Land, we specialize in crafting powerful identities,
              championing inclusive narratives, and creating impactful
              experiences. We collaborate closely with mission driven
              organizations to amplify their social change, using innovative,
              tailored strategies that resonate with diverse audiences and
              deliver measurable impact.
            </p>

            <div className="col-span-3 grid grid-cols-3 gap-14">
              {services.map(({ content, uuid }) => {
                return (
                  <Link
                    href={`/services/#${content.tag}`}
                    key={uuid}
                    className="grid grid-cols-[1fr_auto] rounded-2xl bg-design-primary-text p-8 pr-6 transition-colors hover:bg-design-accent [&:hover>div]:bg-design-background-primary [&:hover>div]:text-design-primary-text"
                  >
                    <h3 className="max-w-[12ch] text-4xl tracking-tight text-design-background-primary">
                      {content.title}
                    </h3>
                    <div className="flex aspect-square w-11 self-end rounded-full bg-design-accent text-design-background-primary transition-colors">
                      <Arrow className="m-auto h-5 w-5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <ProjectsSection />
        <LetsConnectBanner />
      </main>
    </>
  );
}
