import {
	apiPlugin,
	getStoryblokApi,
	storyblokInit,
} from "@storyblok/react/rsc";

export default async function fetchDataList(slug: string) {
	storyblokInit({
		accessToken: process.env.STORYBLOK_API_TOKEN,
		use: [apiPlugin],
	});

	const response = await getStoryblokApi().get("cdn/stories/", {
		by_slugs: slug,
	});

	return await response.data["stories"];
}
