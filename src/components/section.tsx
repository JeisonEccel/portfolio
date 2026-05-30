import { cn } from "@/lib/utils"
import { Divider } from "./divider"

export function Section({
  id,
  children,
  className,
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id}>
      <div
        className={cn(
          "h-full mx-auto max-w-6xl pt-24 md:pb-24 md:pt-10 px-4",
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function SectionDivider({ className }: { className?: string }) {
  return <Divider className={cn("max-w-5xl mx-auto", className)} />
}
