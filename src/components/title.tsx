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
        "text-3xl md:text-5xl font-bold font-bitter leading-relaxed",
        className,
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
