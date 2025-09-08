import "./globals.css"
import { ThemeProvider } from "next-themes"
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-lightest dark:bg-darkest text-darkest dark:text-lightest">
            <Navigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
