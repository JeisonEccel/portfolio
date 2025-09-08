import { CSSProperties } from "react"
import { Paragraph } from "./paragraph"
import { Gallery } from "./gallery"

export type ImageExperience = {
  file: string
  alt: string
}

export function Image({
  src,
  alt,
  className,
  style,
}: {
  src: string
  alt: string
  className?: string
  style?: CSSProperties | undefined
}) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={className} style={style} />
    </>
  )
}

export function LogoImage({ logo, alt }: { logo: string; alt: string }) {
  return (
    <Image
      src={`logos/${logo}`}
      alt={alt}
      className="w-36 h-16 border border-black/20 rounded-md p-2"
      style={{ objectFit: "scale-down", background: "#FFF" }}
    />
  )
}

export function LogoLink({
  logo,
  alt,
  link,
}: {
  logo: string
  alt: string
  link?: string
}) {
  if (!logo) {
    return <></>
  }

  if (!link) {
    return <LogoImage logo={logo} alt={alt} />
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <LogoImage logo={logo} alt={alt} />
    </a>
  )
}

export function Images({
  images,
  path = "/",
}: {
  images?: ImageExperience[]
  path?: string
}) {
  if (!images) return <></>

  return (
    <div className="p-2 bg-white/50 border border-black/20 rounded-md">
      <Paragraph className="font-bold">Gallery:</Paragraph>
      <Gallery images={images} path={path} />
    </div>
  )
}
