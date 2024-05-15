import { Member, Project } from "../models/types";

const placeholderProject :Project = {
  id: "123",
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

export async function fetchProjects(): Promise<Project[]>{
  const arr = [];
  for(let i = 0; i < 9; i++){
    arr.push({...placeholderProject ,id: ""+Math.random()})
  }
  
  return arr;
}

export async function fetchServicesTags(): Promise<string[]>{
  return ["illustration", "branding", "campaign", "social media", "website", "animation"];
}