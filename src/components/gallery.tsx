"use client"

import { createPortal } from "react-dom"
import { useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Image, ImageExperience as ImageDetails } from "./image"
import { cn } from "@/lib/utils"

function GalleryGrid({
  images,
  path,
  setActiveIndex,
}: {
  images?: ImageDetails[]
  path: string
  setActiveIndex: (i: number) => void
}) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
      {images?.map(({ file, alt }, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className="focus:outline-none cursor-zoom-in"
        >
          <Image
            src={`${path}/${file}`}
            alt={alt}
            className="rounded-md hover:opacity-80 transition max-h-36"
          />
        </button>
      ))}
    </div>
  )
}

function ControlButton({
  onClick,
  children,
  className,
}: {
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute text-white bg-black/50 rounded-full p-2 hover:bg-black/80 cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  )
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <ControlButton onClick={onClick} className="top-4 right-4">
      <X size={24} />
    </ControlButton>
  )
}

function PreviousButton({ onClick }: { onClick: () => void }) {
  return (
    <ControlButton
      onClick={onClick}
      className="left-4 top-1/2 -translate-y-1/2"
    >
      <ChevronLeft size={28} />
    </ControlButton>
  )
}

function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <ControlButton
      onClick={onClick}
      className="right-4 top-1/2 -translate-y-1/2 "
    >
      <ChevronRight size={28} />
    </ControlButton>
  )
}

function ImageDisplay({
  images,
  path,
  activeIndex,
  setActiveIndex,
}: {
  images: ImageDetails[]
  path: string
  activeIndex: number
  setActiveIndex: (i: number | null) => void
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (typeof window === "undefined") return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={() => setActiveIndex(null)}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={() => setActiveIndex(null)} />
        <PreviousButton
          onClick={() =>
            setActiveIndex((activeIndex - 1 + images.length) % images.length)
          }
        />

        <NextButton
          onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
        />

        <Image
          src={`${path}/${images[activeIndex].file}`}
          alt={images[activeIndex].alt}
          className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg"
        />
      </div>
    </div>,
    document.body,
  )
}

export function Gallery({
  images,
  path = "",
}: {
  images: ImageDetails[]
  path?: string
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIndex === null) return

      if (e.key === "Escape") {
        setActiveIndex(null)
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev !== null ? (prev + 1) % (images?.length || 1) : prev,
        )
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev !== null
            ? (prev - 1 + (images?.length || 1)) % (images?.length || 1)
            : prev,
        )
      }
    },
    [activeIndex, images],
  )

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKeyDown)
    } else {
      window.removeEventListener("keydown", handleKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, handleKeyDown])

  return (
    <>
      <GalleryGrid
        images={images}
        path={path}
        setActiveIndex={setActiveIndex}
      />

      {activeIndex !== null && images && (
        <ImageDisplay
          images={images}
          path={path}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </>
  )
}
