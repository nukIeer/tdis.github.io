import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TDIS - Türkiye Deprem İzleme Sistemi",
  description: "Türkiye Deprem İzleme Sistemi Proje Sunumu",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black -z-10"></div>
          <Navigation />
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
