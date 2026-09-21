import { readFile } from "node:fs/promises"
import path from "node:path"

import { NextRequest } from "next/server"

type Props = {
  params: Promise<{
    path: string[]
  }>
}

const LOCAL_POSTS = process.env.LOCAL_POSTS

export async function GET(_request: NextRequest, { params }: Props) {
  if (!LOCAL_POSTS) {
    return new Response("Local posts are not configured", {
      status: 404,
    })
  }

  const { path: assetPath } = await params

  const filePath = path.resolve(LOCAL_POSTS, ...assetPath)

  const postsDirectory = path.resolve(LOCAL_POSTS)

  if (
    filePath !== postsDirectory &&
    !filePath.startsWith(`${postsDirectory}${path.sep}`)
  ) {
    return new Response("Invalid asset path", {
      status: 400,
    })
  }

  try {
    const file = await readFile(filePath)

    return new Response(new Uint8Array(file), {
      headers: {
        "Content-Type": getContentType(filePath),
        "Cache-Control": "no-store",
      },
    })
  } catch {
    return new Response("Asset not found", {
      status: 404,
    })
  }
}

function getContentType(filePath: string) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".png":
      return "image/png"
    case ".jpg":
    case ".jpeg":
      return "image/jpeg"
    case ".webp":
      return "image/webp"
    case ".gif":
      return "image/gif"
    case ".svg":
      return "image/svg+xml"
    default:
      return "application/octet-stream"
  }
}
