"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Slide1 from "@/components/slides/slide1"
import Slide2 from "@/components/slides/slide2"
import Slide3 from "@/components/slides/slide3"
import Slide4 from "@/components/slides/slide4"
import Slide5 from "@/components/slides/slide5"
import Slide6 from "@/components/slides/slide6"
import Slide7 from "@/components/slides/slide7"
import Slide8 from "@/components/slides/slide8"
import Slide9 from "@/components/slides/slide9"
import Slide10 from "@/components/slides/slide10"
import Slide11 from "@/components/slides/slide11"
import Slide12 from "@/components/slides/slide12"
import Slide13 from "@/components/slides/slide13"
import Slide14 from "@/components/slides/slide14"

const slides = [
  { id: "1", component: Slide1, title: "Proje Hedefleri" },
  { id: "2", component: Slide2, title: "Proje Kapsamı" },
  { id: "3", component: Slide3, title: "Sistem Mimarisi" },
  { id: "4", component: Slide4, title: "Teknoloji Yığını" },
  { id: "5", component: Slide5, title: "Özellikler" },
  { id: "6", component: Slide6, title: "Zaman Çizelgesi" },
  { id: "7", component: Slide7, title: "Mobil Uygulama" },
  { id: "8", component: Slide8, title: "API ve Entegrasyon" },
  { id: "9", component: Slide9, title: "Proje Ekibi" },
  { id: "10", component: Slide10, title: "Sonuç" },
  { id: "11", component: Slide11, title: "MVP Geliştirme Planı" },
  { id: "12", component: Slide12, title: "Ekip Yapısı ve Görev Dağılımı" },
  { id: "13", component: Slide13, title: "Teknik Mimari Detayları" },
  { id: "14", component: Slide14, title: "Veri Kaynakları ve Entegrasyonlar" },
]

export default function SlidePage() {
  const router = useRouter()
  const params = useParams()
  const slideId = params.id as string
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [direction, setDirection] = useState(0)
  const [isPresenterMode, setIsPresenterMode] = useState(false)

  const currentIndex = slides.findIndex((slide) => slide.id === slideId)
  const SlideComponent = slides[currentIndex]?.component || Slide1

  const prevSlide = slides[currentIndex - 1]
  const nextSlide = slides[currentIndex + 1]

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

  // Önceki slayda gitme
  const goToPrevSlide = () => {
    if (prevSlide) {
      setDirection(-1)
      router.push(`/slides/${prevSlide.id}`)
    }
  }

  // Sonraki slayda gitme
  const goToNextSlide = () => {
    if (nextSlide) {
      setDirection(1)
      router.push(`/slides/${nextSlide.id}`)
    }
  }

  // Klavye navigasyonu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "n") {
        goToNextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "p") {
        goToPrevSlide()
      } else if (e.key === "f") {
        toggleFullscreen()
      } else if (e.key === "s") {
        setIsPresenterMode(!isPresenterMode)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [prevSlide, nextSlide, router, isPresenterMode])

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
    <div className="flex flex-col min-h-screen pt-16 pb-8 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={slideId}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-6xl"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 md:p-10 rounded-xl shadow-2xl">
              <SlideComponent />
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center max-w-6xl w-full mx-auto mt-8">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            disabled={!prevSlide}
            onClick={goToPrevSlide}
            className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 mr-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            disabled={!nextSlide}
            onClick={goToNextSlide}
            className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex space-x-2">
          {slides.map((slide, index) => (
            <Link key={slide.id} href={`/slides/${slide.id}`}>
              <div
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-red-500 to-amber-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleFullscreen}
            className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Slide Info */}
      <div className="max-w-6xl w-full mx-auto mt-4 flex justify-between items-center text-sm text-gray-400">
        <div>
          Slayt {currentIndex + 1} / {slides.length}
        </div>
        <div>{slides[currentIndex]?.title || "Slayt"}</div>
      </div>

      {/* Presenter Notes (Hidden by default) */}
      {isPresenterMode && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 p-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-sm font-medium mb-2">Konuşmacı Notları:</h3>
            <p className="text-sm text-gray-300">
              Bu slayt için konuşmacı notları. Bu alanda slaytla ilgili detaylı bilgiler ve konuşma ipuçları yer
              alacaktır. Sunum sırasında hatırlanması gereken önemli noktalar burada gösterilir.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
