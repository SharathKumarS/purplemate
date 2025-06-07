import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PurpleMate - Find Your Perfect Study or Work Buddy",
  description:
    "PurpleMate helps students and remote workers find nearby people to study or co-work with. Focus together, stay accountable, and get more done.",
  keywords: "study buddy, co-working, productivity, remote work, students, focus sessions",
  authors: [{ name: "PurpleMate Team" }],
  openGraph: {
    title: "PurpleMate - Find Your Perfect Study or Work Buddy",
    description: "Connect with like-minded people for productive study and work sessions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
