import Star from "@/lib/assets/star-31x31.svg"
import LetsConnectBanner from "@/lib/components/LetsConnectBanner"
import ProjectsSection from "@/lib/components/ProjectsSection"

const services = [
  {
    service: "Branding design",
    descriptionList: ["Helping organizations create or enhance their brand identities: logos, color palettes, typography, and developing brand guidelines for consistent visual representation."]
  },
  {
    service: "Web design & development",
    descriptionList: ["Website design and development services to create visually appealing, user-friendly, and functional websites.", "UI/UX design, responsive layouts, and content organization."]
  },
  {
    service: "Communication solutions",
    descriptionList: ["Research Services. Primary and secondary research, fact-checking, data analysis, and investigative research.", "Knowledge management products. Comprehensive and informative guides, providing in-depth explanations. Thorough research, clear writing, and visuals."]
  },
  {
    service: "Strategic marketing",
    descriptionList: ["Creation of strategic communication products such as Communication strategies, communications plans, and campaigns.", "Creation of highly interactive newsletters following best practices of email marketing, internal communications, or customer engagement."]
  },
  {
    service: "Motion graphics",
    descriptionList: ["Video explainers, data visuals, documentary, and fact-checking (using the International Fact-checking Network methodology).", "Motion graphics and 3D animations", "Promotional videos."]
  },
  {
    service: "_placeholder",
    descriptionList: ["Information Organization. Structuring and categorizing data, content, and knowledge to ensure easy retrieval and efficient management.", "Content Creation, Social Media Management and investigative journalism."]
  },
  
]

export default function Services(){
  return <main className="container">
    <section className="hero pt-44">
      <h1 className="mb-5">Our Services</h1>
    
      <div className="grid grid-cols-3 gap-x-14 mb-24">
        <Star className="text-design-accent" />
        <div className="col-span-2 max-w-[79ch]">
          <h3 className="mb-8">We are a dynamic team of four highly skilled professionals originally from Cuba, now based in Spain and France. Fluent in Spanish, English, and French.</h3>
          
          <p>With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master&apos;s degrees and an ongoing Ph.D. in our respective fields. </p>
        </div>
      </div>
    </section>

    <section className="mb-24">
      <h2 className="uppercase text-sm">Services</h2> 
      <hr />

      <div className="grid grid-cols-3 gap-x-14 gap-y-8">
        {services.map(({service, descriptionList})=>{
          return <div key={service}>
            <h3 className="mb-2">{service}</h3>
            <ul className="list-disc list-outside pl-6">
              {descriptionList.map((description, index)=>{
                return <li key={index}>
                  {description}
                </li>
              })}
            </ul>
          </div>
        })}
      </div>
    </section>

    <ProjectsSection maxCount={3} tags={[]} />
    <LetsConnectBanner />
  </main>
}