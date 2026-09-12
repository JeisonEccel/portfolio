"use client"

import { Image } from "@/components/image"
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

export default function ContactSection() {
  return (
    <Section id="contact">
      <Title>Let&apos;s Chat!</Title>
      <p>
        I&apos;d love to connect! Whether you&apos;re interested in
        collaborating on new opportunities, discussing my startup journey, or
        exploring how my skills can support your team, feel free to reach out.
      </p>
      <p>
        Email:{" "}
        <Link href="mailto:projetojeison@hotmail.com" className="font-bold">
          projetojeison@hotmail.com
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
