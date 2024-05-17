import { Member } from "./types"

export type BStory = {
  name: string,
  lang: string,
  id: number,
  uuid: string,
  slug: string,
  full_slug: string
}

export type BImage = {
  id: number,
  alt: string,
  name: string,
  filename: string,
}

export type ProjectResponse = BStory & {
  content: {
    image: BImage,
    projectTitle: string,
    services: string[],
    sections: {}[],
    description: string,
  }
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

export type SkillSetResponse = BStory & {
  content: {
    skillset: {
      name: string
    }[],
  }
}