import Star from "@/lib/assets/star-31x31.svg";
import fetchProjectsRest from "@/lib/api/fetchProjectsRest";
import LetsConnectBanner from "@/lib/components/LetsConnectBanner";
import fetchServicesRest from "@/lib/api/fetchServicesRest";
import Link from "next/link";
import { Fragment } from "react";

export async function generateStaticParams() {
  const projects = await fetchProjectsRest();

  return projects.map((project) => {
    return { slug: project.slug };
  });
}

export default async function ProjectInfo({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const slug = (await params).slug;

  const currentProject = (await fetchProjectsRest()).find(
    (project) => project.slug === slug
  );
  const services = await fetchServicesRest();

  const getServiceTag = (serviceUUID: string) => {
    const res = services.find(({ uuid }) => uuid === serviceUUID);
    return res !== undefined ? res.content.tag : "undefined";
  };

  return (
    <>
      <header className="hero mb-24 pb-5 pt-44 container">
        <div className="mb-24 grid h-full grid-cols-3 gap-x-14">
          <div className="h-fit sticky top-24">
            <Star className="mb-10 text-design-accent" />
            <h1 className="mb-5 text-6xl">
              {currentProject?.content.projectTitle}
            </h1>
            <p className="mb-10">{currentProject?.content.description}</p>

            <section>
              <h2 className="mb-6 uppercase text-design-accent">Services</h2>
              <ul className="flex gap-3">
                {currentProject?.content.services.map((projectServiceUUID) => {
                  return (
                    <li
                      className="rounded-full border border-design-secondary-text px-5 py-2 font-medium uppercase"
                      key={projectServiceUUID}
                    >
                      {getServiceTag(projectServiceUUID)}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          <img
            alt={currentProject?.content.image.alt ?? ""}
            src={currentProject?.content.image.filename ?? "#"}
            className="w-full rounded-2xl col-span-2 h-fit"
          />
        </div>
      </header>
      <main className="container">
        {currentProject?.content.sections.map(
          ({ _uid, header, linkText, linkURL, subSections }) => {
            return (
              <section key={_uid}>
                <div className="flex">
                  <h2 className="uppercase">{header}</h2>
                  <Link
                    href={linkURL}
                    className={`ml-auto uppercase text-design-accent ${
                      linkText === undefined ? "hidden" : ""
                    }`}
                  >
                    {linkText}
                  </Link>
                </div>

                <hr />

                <div className="mb-24 pt-14 grid grid-cols-3 gap-x-14">
                  {subSections.map(({ subHeader, text, images }) => {
                    return (
                      <Fragment key={subHeader}>
                        <div className="sticky top-24 h-fit">
                          <h3 className="mb-5 text-sm uppercase text-design-accent">
                            {subHeader}
                          </h3>
                          <p>{text}</p>
                        </div>
                        <div className="col-span-2 col-start-2 grid gap-10">
                          {images.map(({ filename, id, alt }) => (
                            <div
                              key={id}
                              className="relative flex-1 rounded-2xl bg-design-background-secondary overflow-hidden"
                            >
                              <img
                                src={filename}
                                alt={alt}
                                className="w-full"
                              />
                            </div>
                          ))}
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </section>
            );
          }
        )}
        <LetsConnectBanner />
      </main>
    </>
  );
}
