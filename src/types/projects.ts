import { ImageExperience, LinkExperience, VideoExperience } from "./resources"

export type Project = {
  name: string
  type: string
  cover?: string
  description?: string[]
  images?: ImageExperience[]
  videos?: VideoExperience[]
  links?: LinkExperience[]
}
