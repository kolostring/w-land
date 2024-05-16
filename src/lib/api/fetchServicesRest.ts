import { Service } from "../models/types";
import fetchData, { BStory } from "./storyblokAPI"

type ServicesResponse = BStory & {
  content: {
    tag: string,
    title: string,
    description: string,
  }
}

export default async function fetchServicesRest(): Promise<Service[]>{
  const responseArr =(await fetchData("services/*")) as ServicesResponse[];
  
  return responseArr.map((resp)=>{
    return {
      tag: resp.content.tag,
      title: resp.content.title,
      descriptionList: resp.content.description.split("- ").filter((str)=>str.length > 0),
    }
  })
}