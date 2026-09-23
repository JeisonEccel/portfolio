"use client"

import { Image } from "@/components/image"
import { Section } from "@/components/section"
import { Title } from "@/components/title"
import Link from "next/link"

const links = [
  {
    name: "LinkedIn",
    icon: "linkedin.svg",
    href: "https://www.linkedin.com/in/jeisoneccel",
  },
  {
    name: "GitHub",
    icon: "github.svg",
    href: "https://github.com/JeisonEccel",
  },
]

export default function ContactSection() {
  return (
    <Section id="contact">
      <Title>Let&apos;s Connect</Title>

      <p>
        I&apos;m always happy to connect with people working on interesting
        products, technical challenges, or new ideas. Whether you&apos;d like to
        discuss software, product development, one of my projects, or a
        potential opportunity, feel free to reach out.
      </p>

      <p>
        Email:{" "}
        <Link href="mailto:jeisoneccel@gmail.com" className="font-bold">
          jeisoneccel@gmail.com
        </Link>
      </p>

      <div className="flex gap-4 py-4">
        {links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/icons/${link.icon}`}
                alt={link.name}
                className="w-8 h-8 invert"
              />
            </a>
          )
        })}
      </div>
    </Section>
  )
}
