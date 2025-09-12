import { cn } from "@/lib/utils"

export function Title({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={cn(
        "text-xl md:text-4xl font-bitter leading-relaxed pb-4",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function SubTitle({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={cn("text-sm md:text-xl font-bitter leading-relaxe", className)}
    >
      {children}
    </h1>
  )
}
