export type Project = {
  id: string,
  title: string,
  description: string,
  servicesTags: string[],
}

export type Member = {
  fullName: string,
  role: string
}

export type Service = {
  title: string,
  descriptionList: string[]
}