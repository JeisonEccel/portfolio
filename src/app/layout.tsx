import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Jeison Eccel",
  description: "Portfolio of projects from Jeison Eccel",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-darker text-white font-light">
            <Navigation>{children}</Navigation>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
