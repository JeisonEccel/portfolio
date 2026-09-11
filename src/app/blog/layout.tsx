import Link from "next/link"
import { getPosts } from "@/lib/blog"
import { Section } from "@/components/section"
import { SubTitle } from "@/components/title"

export const revalidate = 86400

async function BlogNavBar() {
  const posts = await getPosts()
  return (
    <nav className="space-y-3 pr-2">
      <Link href="/blog">
        <SubTitle className="font-bold border-b border-lighter py-2">
          Posts
        </SubTitle>
      </Link>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block text-sm hover:underline py-2"
        >
          {post.title}
        </Link>
      ))}
    </nav>
  )
}

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-[250px_1fr] md:pt-8">
      <aside className="hidden md:block border-r border-lighter">
        <BlogNavBar />
      </aside>
      {children}
    </Section>
  )
}
