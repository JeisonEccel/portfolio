import { revalidatePath } from "next/cache"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const authorization = request.headers.get("authorization")

  if (authorization !== `Bearer ${process.env.REVALIDATION_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { slug } = await request.json()

  revalidatePath("/blog")

  if (slug) {
    revalidatePath(`/blog/${slug}`)
  }

  return Response.json({
    revalidated: true,
    slug,
    timestamp: new Date().toISOString(),
  })
}
