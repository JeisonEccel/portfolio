"use client"

import { useState } from "react"
import { X, Menu, LucideIcon } from "lucide-react"
import Link from "next/link"
import { pages } from "@/constants/pages"
import { cn } from "@/lib/utils"

function NavItem({
  path,
  name,
  icon,
  setNavbar,
}: {
  path: string
  name: string
  icon?: LucideIcon
  setNavbar: (a: boolean) => void
}) {
  const ItemIcon = icon
  return (
    <li className="border-b-1 md:border-b-0 border-gray-400 text-left md:p-0 text-sm md:w-24">
      <Link
        href={path}
        onClick={() => setNavbar(false)}
        className="flex flex-row md:flex-col md:justify-center items-center hover:text-black gap-4 md:gap-0 
        p-2 py-5 md:py-2 hover:bg-blue-100 md:rounded-lg"
      >
        {ItemIcon && <ItemIcon className="h-5 w-5" />}
        {name}
      </Link>
    </li>
  )
}

function NavigationList({ setNavBar }: { setNavBar: (a: boolean) => void }) {
  return (
    <ul className="md:flex md:gap-2 items-center">
      {pages.map((page) => (
        <NavItem key={page.id} setNavbar={setNavBar} {...page} />
      ))}
    </ul>
  )
}

export function Navigation({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="fixed md:hidden bg-white text-gray-700 top-0 left-0 right-0 z-60">
        <div className="flex justify-between items-center h-20 p-4">
          <p className="text-2xl font-bitter">Jeison Eccel</p>
          <div className="md:hidden">
            <button onClick={() => setShow(!show)}>
              {show ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {show && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden mt-20"
          onClick={() => setShow(false)}
        />
      )}

      <nav
        className={cn(
          "fixed md:static z-50",
          "md:inset-y-0 left-0 right-0 md:left-auto md:right-auto md:w-auto",
          "top-20 md:top-auto",
          "flex flex-col md:flex-row bg-white text-gray-700",
          "transition-transform duration-200 md:duration-0 md:transition-none",
          show
            ? "translate-y-0 md:translate-y-0"
            : "-translate-y-full md:translate-y-0",
        )}
      >
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="hidden md:flex items-center">
            <p className="text-2xl font-bitter">Jeison Eccel</p>
          </div>

          <div className="flex-1 md:flex-none">
            <NavigationList setNavBar={setShow} />
          </div>
        </div>
      </nav>

      <div className="flex-1 h-screen overflow-auto">{children}</div>
    </>
  )
}
