import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPost } from "@/lib/blog"
import { Image } from "@/components/image"
import { Card } from "@/components/cards"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const revalidate = 86400

function PostImage({
  src,
  alt,
  assetBaseUrl,
}: {
  src?: string | Blob
  alt?: string
  assetBaseUrl?: string
}) {
  if (typeof src !== "string") {
    return <></>
  }

  const imageUrl = src.startsWith("http") ? src : `${assetBaseUrl}${src}`

  return (
    <span className="my-4 flex justify-center">
      <Image
        src={imageUrl}
        alt={alt ?? ""}
        className="h-auto w-full rounded-sm md:max-w-2/3"
      />
    </span>
  )
}

function ReturnLink() {
  return (
    <div className="flex py-4">
      <Link
        href="/blog"
        className="flex hover:text-blue-500 items-center space-x-1"
      >
        <ArrowLeft size={12} />
        <p>Return</p>
      </Link>
    </div>
  )
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params

  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <Card className="md:mx-4">
      <article className=" text-black shadow-md shadow-white md:mx-4">
        <header className="mb-4 border-b border-zinc-700 pb-4">
          <h1 className="text-lg md:text-4xl font-bold">{post.title}</h1>
          <time className="text-xs italic text-gray-600" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
        </header>

        <div className="prose prose-zinc text-black max-w-none text-justify text-sm font-normal">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => (
                <PostImage
                  src={src}
                  alt={alt}
                  assetBaseUrl={post.assetBaseUrl}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        <ReturnLink />
      </article>
    </Card>
  )
}
