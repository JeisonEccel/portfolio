"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"
import Link from "next/link"
import { sections } from "@/constants/sections"

function NavigationButton({
  navBar,
  setNavBar,
}: {
  navBar: boolean
  setNavBar: (a: boolean) => void
}) {
  const size = 36
  return (
    <div className="lg:hidden">
      <button onClick={() => setNavBar(!navBar)}>
        {navBar ? <X size={size} /> : <Menu size={size} />}
      </button>
    </div>
  )
}

function NavItem({
  id,
  name,
  setNavbar,
}: {
  id: string
  name: string
  setNavbar: (a: boolean) => void
}) {
  return (
    <li className="border-b-2 lg:border-b-0 border-dark text-left py-5 lg:p-0">
      <Link href={`#${id}`} onClick={() => setNavbar(false)}>
        {name}
      </Link>
    </li>
  )
}

function NavigationList({ setNavBar }: { setNavBar: (a: boolean) => void }) {
  return (
    <ul className="h-screen lg:h-auto lg:flex lg:space-x-10 items-center text-white">
      {sections.map((section) => (
        <NavItem key={section.id} setNavbar={setNavBar} {...section} />
      ))}
    </ul>
  )
}

export function Navigation() {
  const [navBar, setNavBar] = useState(false)
  return (
    <nav className="w-full bg-darkest text-white z-10">
      <div className="h-full mx-auto max-w-5xl lg:flex lg:justify-between lg:items-center p-10">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bitter">Jeison Eccel</p>
          <NavigationButton navBar={navBar} setNavBar={setNavBar} />
        </div>
        <div className={`${navBar ? "block" : "hidden"} lg:block`}>
          <NavigationList setNavBar={setNavBar} />
        </div>
      </div>
    </nav>
  )
}
