import { ExternalLink } from "lucide-react"
import { Paragraph } from "./paragraph"
import { DiscItem, DiscList } from "./disc-list"

export type LinkExperience = {
  href: string
  title: string
}

export function LinkItem({ link }: { link: LinkExperience }) {
  const { href, title } = link

  return (
    <a
      href={href}
      className="flex items-center space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>{`[${title}]`}</p>
      <ExternalLink size={15} />
    </a>
  )
}

export function Links({ links }: { links?: LinkExperience[] }) {
  if (!links) return <></>

  return (
    <div className="border-t-1 border-light py-4">
      <Paragraph className="font-bold">Links:</Paragraph>
      <DiscList>
        {links.map((link, index) => (
          <DiscItem key={index}>
            <LinkItem link={link} />
          </DiscItem>
        ))}
      </DiscList>
    </div>
  )
}
