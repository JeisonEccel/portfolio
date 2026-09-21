import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3"
import matter from "gray-matter"
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import { Post, PostMetadata } from "@/types/posts"

const POST_FILENAME = "post.md"
const LOCAL_POSTS = process.env.LOCAL_POSTS

const isDevelopment = process.env.NODE_ENV === "development"

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME,
  R2_PUBLIC_URL,
} = process.env

const r2 =
  R2_ACCOUNT_ID && R2_ACCESS_KEY_ID && R2_SECRET_ACCESS_KEY
    ? new S3Client({
        region: "auto",
        endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: R2_ACCESS_KEY_ID,
          secretAccessKey: R2_SECRET_ACCESS_KEY,
        },
      })
    : undefined

function isVisible(post: PostMetadata) {
  if (!post.published) {
    return false
  }

  if (isDevelopment) {
    return true
  }

  return new Date(post.date).getTime() <= Date.now()
}

export async function getPosts(): Promise<PostMetadata[]> {
  const posts = LOCAL_POSTS ? await getLocalPosts() : await getR2Posts()

  return posts
    .filter(isVisible)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return LOCAL_POSTS ? getLocalPost(slug) : getR2Post(slug)
}

// -----------------------------------------------------------------------------
// Local
// -----------------------------------------------------------------------------

async function getLocalPosts(): Promise<PostMetadata[]> {
  if (!LOCAL_POSTS) {
    return []
  }

  const directories = await readdir(LOCAL_POSTS, {
    withFileTypes: true,
  })

  const posts = await Promise.all(
    directories
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const postPath = path.join(LOCAL_POSTS, entry.name, POST_FILENAME)

        const markdown = await readFile(postPath, "utf8")

        const { data } = matter(markdown)

        return data as PostMetadata
      }),
  )

  return posts
}

async function getLocalPost(slug: string): Promise<Post | undefined> {
  if (!LOCAL_POSTS) {
    return undefined
  }

  const posts = await getLocalPosts()

  const metadata = posts.find((post) => post.slug === slug && isVisible(post))

  if (!metadata) {
    return undefined
  }

  const postPath = path.join(LOCAL_POSTS, metadata.path, POST_FILENAME)

  const markdown = await readFile(postPath, "utf8")

  const { content } = matter(markdown)

  return {
    ...metadata,
    content,
    assetBaseUrl: `/api/blog-assets/${metadata.path}/`,
  }
}

// -----------------------------------------------------------------------------
// Cloudflare R2
// -----------------------------------------------------------------------------

function getR2Client() {
  if (!r2) {
    throw new Error("R2 credentials are not configured")
  }

  if (!R2_BUCKET_NAME) {
    throw new Error("R2_BUCKET_NAME is not configured")
  }

  return r2
}

async function getR2Object(key: string): Promise<string> {
  const client = getR2Client()

  const response = await client.send(
    new GetObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
    }),
  )

  if (!response.Body) {
    throw new Error(`Unable to retrieve R2 object: ${key}`)
  }

  return response.Body.transformToString()
}

async function getR2PostKeys(): Promise<string[]> {
  const client = getR2Client()

  const keys: string[] = []
  let continuationToken: string | undefined

  do {
    const response = await client.send(
      new ListObjectsV2Command({
        Bucket: R2_BUCKET_NAME,
        ContinuationToken: continuationToken,
      }),
    )

    for (const object of response.Contents ?? []) {
      if (object.Key?.endsWith(`/${POST_FILENAME}`)) {
        keys.push(object.Key)
      }
    }

    continuationToken = response.IsTruncated
      ? response.NextContinuationToken
      : undefined
  } while (continuationToken)

  return keys
}

async function getR2Posts(): Promise<PostMetadata[]> {
  const keys = await getR2PostKeys()

  return Promise.all(
    keys.map(async (key) => {
      const markdown = await getR2Object(key)

      const { data } = matter(markdown)

      return data as PostMetadata
    }),
  )
}

async function getR2Post(slug: string): Promise<Post | undefined> {
  const keys = await getR2PostKeys()

  for (const key of keys) {
    const markdown = await getR2Object(key)

    const { data, content } = matter(markdown)

    const metadata = data as PostMetadata

    if (
      metadata.slug === slug &&
      isVisible(metadata) &&
      key === `${metadata.path}/${POST_FILENAME}`
    ) {
      if (!R2_PUBLIC_URL) {
        throw new Error("R2_PUBLIC_URL is not configured")
      }

      return {
        ...metadata,
        content,
        assetBaseUrl: `${R2_PUBLIC_URL}/${metadata.path}/`,
      }
    }
  }

  return undefined
}
