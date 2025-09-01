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
      <body>{children}</body>
    </html>
  )
}
