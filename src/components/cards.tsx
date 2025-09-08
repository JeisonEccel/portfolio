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
        "bg-lighter dark:bg-darker border-medium-light dark:border-medium-dark border rounded-md items-center p-2 drop-shadow-md",
        className
      )}
    >
      {children}
    </div>
  )
}
