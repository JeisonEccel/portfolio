export type PostMetadata = {
  title: string
  slug: string
  path: string
  description: string
  date: string
  published: boolean
  tags?: string[]
  assetBaseUrl?: string
}

export type Post = PostMetadata & {
  content: string
}
