import { MembersCollectionResponse } from "../models/responseTypes";
import fetchDataList from "./storyblokAPI"

export async function fetchMembersRest(slug: "team" | "collaborators"): Promise<MembersCollectionResponse>{
  return (await fetchDataList(slug))[0];
}