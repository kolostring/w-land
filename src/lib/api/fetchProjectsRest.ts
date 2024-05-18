import { ProjectResponse } from "../models/responseTypes";
import fetchDataList from "./storyblokAPI";

export default async function fetchProjectsRest() {
	return (await fetchDataList("projects/*")) as ProjectResponse[];
}
