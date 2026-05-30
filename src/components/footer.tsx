import { pages } from "@/constants/pages"
import Link from "next/link"

function NavItem({ name, path }: { name: string; path: string }) {
  return (
    <li className="text-left">
      <Link href={`/${path}`}>{name}</Link>
    </li>
  )
}

function NavigationList() {
  return (
    <div>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-10">
        {pages.map((page) => (
          <NavItem key={page.id} {...page} />
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-black text-white text-sm font-light pb-10 md:pb-0">
      <div className="flex flex-row-reverse justify-between max-w-6xl mx-auto p-4 pb-10 md:py-14">
        <p>&copy; {new Date().getFullYear()} Jeison Eccel</p>
        <NavigationList />
      </div>
    </footer>
  )
}
