import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
          <div className="flex flex-col min-h-screen bg-darker text-white font-light">
            <Navigation>{children}</Navigation>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
