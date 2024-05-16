export type Project = {
  title: string,
  slug: string,
  description: string,
  servicesTags: string[],
}

export type Member = {
  fullName: string,
  role: string
}

export type Service = {
  title: string,
  tag: string,
  descriptionList: string[]
}