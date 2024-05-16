import { Member } from "./types"

export type BStory = {
  name: string,
  lang: string,
  id: number,
  uuid: string,
  slug: string,
  full_slug: string
}

export type ServicesResponse = BStory & {
  content: {
    tag: string,
    title: string,
    description: string,
  }
}

export type MemberResponse = BStory & {
  content: {
    members: Member[]
  }
}