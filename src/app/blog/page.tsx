import Link from "next/link"
import { getPosts } from "@/lib/blog"
import { Card } from "@/components/cards"
import { Title } from "@/components/title"
import { BookText } from "lucide-react"

export const revalidate = 86400

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="md:px-4">
      <Title>Blog</Title>
      <p className="mt-2 text-muted-foreground">
        Posts about software architecture, development, infrastructure, and
        projects.
      </p>

      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card
              key={post.slug}
              className="p-4 hover:bg-lighter transition-shadow space-y-2"
            >
              <h2 className="text-xl font-bold border-b border-dark">
                {post.title}
              </h2>
              <p className="text-sm">{post.description}</p>
              <time className="text-xs text-medium">
                {new Date(post.date).toLocaleDateString()}
              </time>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
