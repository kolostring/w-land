import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc";

export type BStory = {
  name: string,
  lang: string,
  id: number,
  uuid: string,
  slug: string,
  full_slug: string
}

export default async function fetchData(slug: string){
  storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin]
  })
  
  const response = await (getStoryblokApi()).get('cdn/stories/', {
    by_slugs: slug,
  });

  return await response.data["stories"];
}