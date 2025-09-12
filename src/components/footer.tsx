import { sections } from "@/constants/sections"
import Link from "next/link"
import { Paragraph } from "./paragraph"

function NavItem({ id, name }: { id: string; name: string }) {
  return (
    <li className="text-left">
      <Link href={`#${id}`}>{name}</Link>
    </li>
  )
}

function NavigationList() {
  return (
    <div>
      <Paragraph className="border-b-1 border-white uppercase font-bold">
        Links
      </Paragraph>
      <ul className="space-y-1 py-4">
        {sections.map((section) => (
          <NavItem key={section.id} {...section} />
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-darkest text-white text-sm font-light pb-10">
      <div className="flex justify-between max-w-5xl mx-auto p-4 md:p-10">
        <NavigationList />
        <p>&copy; 2025 Jeison Eccel</p>
      </div>
    </footer>
  )
}
