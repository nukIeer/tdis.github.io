"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Download, Maximize, Minimize, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const routes = [
  { path: "/", label: "Ana Sayfa", icon: Home },
  { path: "/slides/1", label: "Proje Hedefleri" },
  { path: "/slides/2", label: "Proje Kapsamı" },
  { path: "/slides/3", label: "Sistem Mimarisi" },
  { path: "/slides/4", label: "Teknoloji Yığını" },
  { path: "/slides/5", label: "Özellikler" },
  { path: "/slides/6", label: "Zaman Çizelgesi" },
  { path: "/slides/7", label: "Mobil Uygulama" },
  { path: "/slides/8", label: "API ve Entegrasyon" },
  { path: "/slides/9", label: "Proje Ekibi" },
  { path: "/slides/10", label: "Sonuç" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const pathname = usePathname()
  const isSlide = pathname.includes("/slides/")

  // Tam ekran modunu kontrol etme
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Tam ekran hatası: ${e.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  // PDF indirme fonksiyonu (örnek)
  const downloadPDF = () => {
    // Gerçek uygulamada burada PDF oluşturma ve indirme işlemi olacak
    alert("PDF indirme özelliği tam sürümde kullanılabilir olacaktır.")
  }

  // Fullscreen API değişikliklerini dinleme
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mr-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-10 h-10 flex items-center justify-center"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1742611454408.jpg-vwZPsSOcXMiG1qa3BGEAuHChtou4MW.jpeg"
              alt="TDIS Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="sr-only">THIS IS NEW LOGO</span>
          </motion.div>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 mr-4"
          >
            TDIS
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {routes.map((route, index) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                pathname === route.path
                  ? "text-white bg-white/10 font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5",
              )}
            >
              {index === 0 && <route.icon className="h-4 w-4 inline mr-1" />}
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Sunum Kontrolleri */}
        <div className="hidden md:flex items-center space-x-2">
          {isSlide && (
            <>
              <Button variant="ghost" size="icon" onClick={downloadPDF} title="PDF İndir">
                <Download className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen} title="Tam Ekran">
                {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-gray-900/95 border-b border-gray-800"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  pathname === route.path
                    ? "text-white bg-white/10 font-medium"
                    : "text-gray-400 hover:text-white hover:bg-white/5",
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            {isSlide && (
              <div className="border-t border-gray-800 pt-4 mt-2 flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start" onClick={downloadPDF}>
                  <Download className="h-5 w-5 mr-2" /> PDF İndir
                </Button>
                <Button variant="ghost" className="justify-start" onClick={toggleFullscreen}>
                  {isFullscreen ? (
                    <>
                      <Minimize className="h-5 w-5 mr-2" /> Tam Ekrandan Çık
                    </>
                  ) : (
                    <>
                      <Maximize className="h-5 w-5 mr-2" /> Tam Ekran
                    </>
                  )}
                </Button>
              </div>
            )}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
