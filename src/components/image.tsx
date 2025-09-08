import { CSSProperties } from "react"
import { Paragraph } from "./paragraph"

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
