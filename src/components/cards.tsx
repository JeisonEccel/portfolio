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
        "bg-lightest text-darkest rounded-md items-center p-2 shadow-md shadow-gray-500",
        className,
      )}
    >
      {children}
    </div>
  )
}
