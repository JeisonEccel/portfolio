import "./globals.css"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Jeison Eccel",
  description: "Portfolio of projects from Jeison Eccel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-lightest dark:bg-darkest text-darkest dark:text-lightest">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
