import { ProjectResponse } from "../models/responseTypes";
import { Project } from "../models/types";
import fetchDataList from "./storyblokAPI";

export default async function fetchProjectsRest():Promise<Project[]>{
  const responseArr = (await fetchDataList("projects/*")) as ProjectResponse[];
  return responseArr.map((response) => ({
    servicesUUID: response.content.services,
    description: response.content.description,
    slug: response.slug,
    title: response.content.projectTitle,
    imageURL: response.content.image,
    sections: []
  }))
}