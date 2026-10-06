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
    <section
      id={id}
      className={cn("mx-auto max-w-6xl md:pb-24 py-10 px-4", className)}
    >
      {children}
    </section>
  )
}

export function SectionDivider({ className }: { className?: string }) {
  return <Divider className={cn("max-w-5xl mx-auto", className)} />
}
