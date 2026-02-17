import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faisal Ejaz - Full-stack Developer & UI/UX Designer",
  description:
    "Computer Science graduate specializing in full-stack development, UI/UX design, and building scalable web applications. Open to Frontend, Full-stack, UI/UX, Business Development, IT Support, and Management roles.",
  generator: "v0.app",
  keywords: [
    "Full-stack Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "React",
    "Node.js",
    "Business Development",
    "IT Support",
  ],
  authors: [{ name: "Faisal Ejaz" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
