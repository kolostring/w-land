import { MemberResponse } from "../models/responseTypes";
import { Member } from "../models/types";
import fetchDataList from "./storyblokAPI"

export async function fetchMembersRest(slug: "team" | "collaborators"): Promise<Member[]>{
  const responseArr = (await fetchDataList(slug)) as MemberResponse[];
  
  return responseArr[0].content.members.map(({fullName, role})=>({fullName, role}));
}