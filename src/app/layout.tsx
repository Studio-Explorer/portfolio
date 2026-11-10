import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { site } from "@/data/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: `${site.headline} — portfolio featuring AWS, Docker, Kubernetes, and DevOps projects.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
