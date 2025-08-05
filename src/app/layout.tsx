import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans, Roboto_Mono } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" className={`${poppins.variable} ${openSans.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased bg-gray-bg">{children}</body>
    </html>
  )
}
