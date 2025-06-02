import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "tigube - Tierbetreuung startet bald!",
  description:
    "Die vertrauensvolle Plattform für professionelle Tierbetreuung in Deutschland. Seien Sie unter den Ersten, die davon erfahren!",
  generator: "tigube - Tierbetreuung startet bald!",
  keywords: ["Tierbetreuung", "Hundebetreuung", "Katzenbetreuung", "Tiersitter", "Deutschland"],
  authors: [{ name: "tigube" }],
  openGraph: {
    title: "tigube - Tierbetreuung startet bald!",
    description: "Die vertrauensvolle Plattform für professionelle Tierbetreuung in Deutschland.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "tigube - Tierbetreuung startet bald!",
    description: "Die vertrauensvolle Plattform für professionelle Tierbetreuung in Deutschland.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
