import { Member, Project, Service } from "../models/types";

const placeholderProject :Project = {
  slug: "123",
  title: "Matria",
  description: "With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master's degrees and an ongoing Ph.D. in our respective fields.",
  servicesTags: ["branding", "newsletter"],
};

export async function fetchToolsAndSkills(): Promise<string[]>{
  return ["Adobe Suite", "Canva", "Mailchip", "Figma", "Figma", "Adobe Suite", "Adobe Suite", "Canva", "Mailchip", "Figma", "Figma"];
}

export async function fetchMembers(): Promise<Member[]>{
  return [
    {
      fullName: "Yery Menéndez",
      role: "Communication for Development"
    },
    {
      fullName: "Anays Almenares",
      role: "Journalist and researcher"
    },
    {
      fullName: "Rocio Baró",
      role: "Communication for Development"
    },
    {
      fullName: "Janet Aguilar",
      role: "graphic Designer & developer"
    },
    {
      fullName: "Wendy Valladares",
      role: "Graphic designer"
    },
  ]
}

export async function fetchCollaborators(): Promise<Member[]>{
  return [
    {
      fullName: "Iván del Toro Hernández",
      role: "Communication for Development"
    },
    {
      fullName: "Willy Pedroso",
      role: "Journalist and researcher"
    },
    {
      fullName: "Alejandro Apellido",
      role: "Communication for Development"
    },
  ]
}

export async function fetchServices(): Promise<Service[]>{
  return [
    {
      title: "Branding design",
      tag: "branding",
      descriptionList: ["Helping organizations create or enhance their brand identities: logos, color palettes, typography, and developing brand guidelines for consistent visual representation."]
    },
    {
      title: "Web design & development",
      tag: "website",
      descriptionList: ["Website design and development services to create visually appealing, user-friendly, and functional websites.", "UI/UX design, responsive layouts, and content organization."]
    },
    {
      title: "Communication solutions",
      tag: "communication",
      descriptionList: ["Research Services. Primary and secondary research, fact-checking, data analysis, and investigative research.", "Knowledge management products. Comprehensive and informative guides, providing in-depth explanations. Thorough research, clear writing, and visuals."]
    },
    {
      title: "Strategic marketing",
      tag: "marketing",
      descriptionList: ["Creation of strategic communication products such as Communication strategies, communications plans, and campaigns.", "Creation of highly interactive newsletters following best practices of email marketing, internal communications, or customer engagement."]
    },
    {
      title: "Motion graphics",
      tag: "motion graphics",
      descriptionList: ["Video explainers, data visuals, documentary, and fact-checking (using the International Fact-checking Network methodology).", "Motion graphics and 3D animations", "Promotional videos."]
    },
    {
      title: "_placeholder",
      tag: "placeholder",
      descriptionList: ["Information Organization. Structuring and categorizing data, content, and knowledge to ensure easy retrieval and efficient management.", "Content Creation, Social Media Management and investigative journalism."]
    },
  ]
}

export async function fetchProjects(): Promise<Project[]>{
  const arr = [];
  for(let i = 0; i < 9; i++){
    arr.push({...placeholderProject ,slug: ""+Math.random()%1000})
  }
  
  return arr;
}

export async function fetchServicesTags(): Promise<string[]>{
  return ["illustration", "branding", "campaign", "social media", "website", "animation"];
}