import { cn } from "@/lib/utils"

export function Divider({
  color = "medium",
  padding = "",
  className = "",
  vertical = false,
}: {
  color?: string
  padding?: string
  className?: string
  vertical?: boolean
}) {
  const size = vertical ? "h-full" : "w-full"
  const baseClass = vertical
    ? `border-l border-${color}`
    : `border-t border-${color}`

  return (
    <div className={cn(size, padding)}>
      <div className={cn(baseClass, size, className)} />
    </div>
  )
}
