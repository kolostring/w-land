import { Project } from "../models/types";

const placeholderProject :Project = {
  id: "123",
  title: "Matria",
  description: "With nearly a decade of experience in communication, journalism, politics, development, and visual storytelling, our previous experiences include working in academia, the United Nations, media outlets, NGOs and philanthropic organizations. As a team, we have also sought further education, with master's degrees and an ongoing Ph.D. in our respective fields.",
  services: ["branding", "newsletter"],
};

export async function fetchProjects(){
  const arr = [];
  for(let i = 0; i < 9; i++){
    arr.push({...placeholderProject ,id: ""+Math.random()})
  }
  
  return arr;
}

export async function fetchServicesTags(){
  return ["illustration", "branding", "campaign", "social media", "website", "animation"];
}