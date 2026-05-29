import { ExternalLink } from "lucide-react"

export type LinkExperience = {
  href: string
  title: string
  icon?: string
}

export function LinkItem({ link }: { link: LinkExperience }) {
  const { href, title } = link

  return (
    <div className="flex">
      <a
        href={href}
        className="flex items-center space-x-2 text-sky-600 hover:text-sky-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{`[${title}]`}</p>
        <ExternalLink size={15} />
      </a>
    </div>
  )
}

export function Links({ links }: { links?: LinkExperience[] }) {
  if (!links) return <></>

  return (
    <div className="flex flex-col border-t-1 border-light py-4 gap-2">
      {links.map((link, index) => (
        <LinkItem key={index} link={link} />
      ))}
    </div>
  )
}
