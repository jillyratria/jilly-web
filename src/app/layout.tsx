import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Roboto_Mono, Dosis } from "next/font/google"
import "./globals.css"

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-dosis",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jilly Ratria - Software Engineer (Front-end)",
  description: "Portfolio of Jilly Ratria - Software Engineer (Front-end)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dosis.variable} ${openSans.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased bg-[#F2F5F8]">{children}</body>
    </html>
  )
}
