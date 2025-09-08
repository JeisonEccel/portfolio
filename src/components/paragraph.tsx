import { cn } from "@/lib/utils"

export function Paragraph({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn("font-light leading-relaxed text-justify pb-2", className)}
    >
      {children}
    </p>
  )
}
