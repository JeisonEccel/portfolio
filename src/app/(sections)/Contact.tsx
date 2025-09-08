"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Image } from "@/components/image"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { Title } from "@/components/title"
import Link from "next/link"

const links = [
  {
    name: "LinkedIn",
    icon: "linkedin.svg",
    href: "https://www.linkedin.com/in/jeisonreccel",
  },
  {
    name: "Github",
    icon: "github.svg",
    href: "https://github.com/JeisonEccel",
  },
]

export default function Contact() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Section id="contact">
      <Title>Let&apos;s Chat!</Title>
      <Paragraph>
        I&apos;d love to connect! Whether you&apos;re interested in
        collaborating on new opportunities, discussing my startup journey, or
        exploring how my skills can support your team, feel free to reach out.
      </Paragraph>
      <Paragraph>
        Email:{" "}
        <Link href="mailto:projetojeison@hotmail.com" className="font-bold">
          projetojeison@hotmail.com
        </Link>
      </Paragraph>
      <div className="flex gap-4">
        {links.map((link, index) => {
          const currentTheme = mounted ? resolvedTheme : "light"
          const iconSrc =
            currentTheme === "dark"
              ? `/icons/dark/${link.icon}`
              : `/icons/light/${link.icon}`

          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={iconSrc} alt={link.name} className="w-8 h-8" />
            </a>
          )
        })}
      </div>
    </Section>
  )
}
