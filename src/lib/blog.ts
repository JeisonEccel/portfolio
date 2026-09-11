import { list } from "@vercel/blob"
import matter from "gray-matter"
import { Post, PostMetadata } from "@/types/posts"

const POST_FILENAME = "post.md"

async function fetchMarkdown(url: string) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Unable to retrieve post: ${url}`)
  }

  return response.text()
}

export async function getPosts(): Promise<PostMetadata[]> {
  const blobs = await getPostsBlobs()

  const posts = await Promise.all(
    blobs.map(async (blob) => {
      const markdown = await fetchMarkdown(blob.url)
      const { data } = matter(markdown)

      return data as PostMetadata
    }),
  )

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const blobs = await getPostsBlobs()

  for (const blob of blobs) {
    const markdown = await fetchMarkdown(blob.url)
    const { data, content } = matter(markdown)

    const metadata = data as PostMetadata

    if (
      metadata.slug === slug &&
      metadata.published &&
      blob.pathname === `${metadata.path}/${POST_FILENAME}`
    ) {
      return {
        ...metadata,
        content,
        assetBaseUrl: blob.url.slice(0, blob.url.lastIndexOf("/") + 1),
      }
    }
  }

  return undefined
}

async function getPostsBlobs() {
  const { blobs } = await list()

  return blobs.filter((blob) => blob.pathname.endsWith(`/${POST_FILENAME}`))
}
