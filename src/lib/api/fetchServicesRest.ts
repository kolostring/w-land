import { ServicesResponse } from "../models/responseTypes";
import { Service } from "../models/types";
import fetchDataList from "./storyblokAPI"

export default async function fetchServicesRest(): Promise<Service[]>{
  const responseArr =(await fetchDataList("services/*")) as ServicesResponse[];
  
  return responseArr.map((resp)=>{
    return {
      uuid: resp.uuid,
      tag: resp.content.tag,
      title: resp.content.title,
      descriptionList: resp.content.description.split("- ").filter((str)=>str.length > 0),
    }
  })
}