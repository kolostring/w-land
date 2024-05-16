import { getStoryblokApi } from "@storyblok/react/rsc";

export type BStory = {
  name: string,
  lang: string,
  id: number,
  uuid: string,
  slug: string,
  full_slug: string
}

export default async function fetchData(slug: string){
  const response = await getStoryblokApi().get('cdn/stories/', {
    by_slugs: slug,
  });

  return await response.data["stories"];
}