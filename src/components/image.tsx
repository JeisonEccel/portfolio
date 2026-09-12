import { CSSProperties } from "react"
import { Gallery } from "./gallery"
import { ImageExperience } from "@/types/resources"

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
      className="w-24 md:w-36 h-12 md:h-24 rounded-sm p-2 shadow-md shadow-gray-300"
      style={{ objectFit: "scale-down", background: "#FFF" }}
    />
  )
}

export function LogoLink({
  logo,
  alt,
  href,
}: {
  logo: string
  alt: string
  href?: string
}) {
  if (!logo) {
    return <></>
  }

  if (!href) {
    return <LogoImage logo={logo} alt={alt} />
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
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
    <div className="border-t-1 border-light py-4">
      <p className="font-bold">Gallery:</p>
      <Gallery images={images} path={path} />
    </div>
  )
}
