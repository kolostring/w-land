import { fetchMembersRest } from "@/lib/api/fetchMemberRest";
import fetchSkillSetRest from "@/lib/api/fetchSkillSetRest";
import Star from "@/lib/assets/star-31x31.svg";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import ProjectsSection from "@/lib/components/ProjectsSection";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";

const clients = [1, 2, 3];

export default async function AboutUs() {
  const skillSet = await fetchSkillSetRest();
  const team = await fetchMembersRest("team");
  const collaborators = await fetchMembersRest("collaborators");

  return (
    <>
      <div className="container">
        <header className="hero pt-44">
          <h1 className="mb-5 font-display text-[120px] leading-none tracking-tighter">
            About Us
          </h1>

          <div className="mb-24 grid grid-cols-3 gap-x-14">
            <Star className="text-design-accent" />
            <div className="col-span-2 max-w-[79ch]">
              <p className="mb-8 font-display text-3xl">
                We leverage strategy, design and technology, to amplify the
                creative voices of mission-driven organisations
              </p>

              <dl className="[&_dt]:text-3xl [&_dt]:text-design-accent [&_dt]:font-display [&_dt]:mb-2 [&_dd]:mb-10">
                <dt>What we do</dt>
                <dd>
                  W.Land is a boutique communications & marketing consultant for
                  mission-driven organisations. From strategy to creative
                  production to engaging virtual platforms, we support
                  change-makers across regions and development agendas. We are
                  analysts, web developers, graphic designers, journalists,
                  problem-solvers and forward-thinkers.
                </dd>

                <dt>Our Mission</dt>
                <dd>
                  We believe in the change that happens when mission-driven
                  organisations communicate with added value. We want to support
                  those organisations to mobilise communities and drive social
                  change through innovative storytelling.
                </dd>

                <dt>Our Story</dt>
                <dd>
                  We are integrated by high-skilled Caribbean professionals
                  living in the diaspora, and we want to continue amplifying the
                  creative voices of those who are not widely represented in
                  Western creative industries.
                </dd>

                <dt className="text-4xl !mb-5 text-design-accent">
                  Our skills, tools & platforms
                </dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-3">
                  {skillSet.map((skill) => {
                    return (
                      <div
                        key={skill}
                        className="rounded-full border border-design-secondary-text px-4 py-2 font-medium uppercase "
                      >
                        {skill}
                      </div>
                    );
                  })}
                </dd>
              </dl>
            </div>
          </div>
        </header>
      </div>

      <main className="container">
        <section className="mb-24">
          <div className="flex text-sm uppercase">
            <h2>Our Team</h2>
            <Link
              className="ml-auto flex items-center gap-2 text-design-accent"
              href="/about"
            >
              <span>Our linkedin</span>
              <Arrow />
            </Link>
          </div>

          <hr />

          <div className="grid w-full grid-cols-3 items-end gap-14">
            {team.content.members.map(({ fullName, role, image }) => {
              return (
                <div
                  key={fullName}
                  className="flex aspect-[36/18] items-center gap-6 rounded-2xl bg-design-background-secondary px-8"
                >
                  <div className="relative aspect-square h-[104px] overflow-hidden rounded-full bg-design-secondary-text">
                    <Image
                      src={image.filename + "/m/0x130" ?? ""}
                      alt={image.alt ?? ""}
                      width={0}
                      height={0}
                      unoptimized
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="max-w-[6ch] self-end text-3xl font-display mb-1">
                      {fullName}
                    </h3>
                    <p className="max-w-[17ch] text-xs uppercase">{role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <ProjectsSection />
        <LetsConnectBanner />
      </main>
    </>
  );
}
