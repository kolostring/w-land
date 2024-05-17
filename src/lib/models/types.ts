import { BImage } from "./responseTypes"

export type Project = {
  imageURL: BImage,
  title: string,
  slug: string,
  description: string,
  servicesUUID: string[],
  sections: {
    header: string,
    text: string,
    imageCollection: BImage[]
  }[]
}

export type Member = {
  fullName: string,
  role: string
}

export type Service = {
  uuid: string,
  title: string,
  tag: string,
  descriptionList: string[]
}