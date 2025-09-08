import { cn } from "@/lib/utils"

export function DiscList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <ul
      className={cn("list-disc list-outside pl-6 leading-relaxed", className)}
    >
      {children}
    </ul>
  )
}

export function DiscItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <li className={className}>{children}</li>
}
