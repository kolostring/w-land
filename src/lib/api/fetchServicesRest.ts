import { ServiceResponse } from "../models/responseTypes";
import fetchDataList from "./storyblokAPI";

export default async function fetchServicesRest() {
	return (await fetchDataList("services/*")) as ServiceResponse[];
}
