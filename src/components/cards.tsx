import { cn } from "@/lib/utils"

export function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "bg-lightest dark:bg-dark rounded-sm items-center p-2",
        className
      )}
    >
      {children}
    </div>
  )
}
