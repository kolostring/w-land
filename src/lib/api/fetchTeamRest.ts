import { Member } from "../models/types";
import fetchData, { BStory } from "./storyblokAPI"

type TeamResponse = BStory & {
  content: {
    members: Member[]
  }
}

export default async function fetchTeamRest(): Promise<Member[]>{
  const responseArr = (await fetchData("team")) as TeamResponse[];
  
  return responseArr[0].content.members.map(({fullName, role})=>{
    return {
      fullName: fullName,
      role: role
    }
  });
}