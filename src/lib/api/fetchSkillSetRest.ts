import { SkillSetResponse } from "../models/responseTypes";
import fetchDataList from "./storyblokAPI";

export default async function fetchSkillSetRest(){
  const responseArr = (await fetchDataList("skillset")) as SkillSetResponse[];
  
  return responseArr[0].content.skillset.map(({name}) => name);
}