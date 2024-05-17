import { BImage } from "./responseTypes"

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