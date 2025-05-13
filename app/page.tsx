"use client"

import Link from "next/link"
import { ChevronRight, Presentation, LayoutDashboard, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl relative z-10"
        >
          <div className="relative">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent"
            >
              TDIS
            </motion.h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full opacity-20 blur-xl -z-10"></div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mt-4"
          >
            Türkiye Deprem İzleme Sistemi
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            Türkiye ve çevre bölgelerdeki sismik aktiviteleri izleyen, analiz eden ve kullanıcılara gerçek zamanlı
            olarak ileten modern bir platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-0"
            >
              <Link href="/slides/1">
                <Presentation className="mr-2 h-5 w-5" /> Sunuma Başla
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10"
            >
              <Link
                href="https://kzmisfe6ry2xp6re3mf9.lite.vusercontent.net/canli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LayoutDashboard className="mr-2 h-5 w-5" /> Canlı Demo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10"
            >
              <Link href="/overview">
                <ChevronRight className="mr-2 h-5 w-5" /> Proje Özeti
              </Link>
            </Button>
          </motion.div>

          {/* External Links - Prominent Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 p-6 bg-gradient-to-r from-green-900/30 to-green-600/30 rounded-xl border border-green-500/30 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-300">Proje Bağlantıları</h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white w-full h-auto py-3 px-4">
                <Link href="https://sonyasociety.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Sonya Community</span>
                </Link>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white w-full h-auto py-3 px-4">
                <Link href="https://teamcards.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Team Cards</span>
                </Link>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white w-full h-auto py-3 px-4">
                <Link href="https://github.com/Sonya-Foundation/tdis" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">GitHub Repo</span>
                </Link>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white w-full h-auto py-3 px-4">
                <Link href="https://t.me/sonyafoundation" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Projeye Katılım</span>
                </Link>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white w-full h-auto py-3 px-4">
                <Link
                  href="https://kzmisfe6ry2xp6re3mf9.lite.vusercontent.net/canli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Canlı Demo</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <ArrowRight className="h-6 w-6 rotate-90 text-white/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent"
          >
            Neden TDIS?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hızlı Veri İletimi",
                description:
                  "Deprem verilerini mevcut kaynaklardan çekerek, bu verileri standart kaynaklardan daha hızlı bir şekilde kullanıcılara iletir.",
                delay: 0,
              },
              {
                title: "Doğru ve Güvenilir",
                description:
                  "Farklı kaynaklardan alınan verilerin doğruluğunu karşılaştırarak, en güvenilir deprem ve tsunami bilgisini sunar.",
                delay: 0.2,
              },
              {
                title: "Kişiselleştirilmiş Bildirimler",
                description:
                  "Kullanıcının konumuna göre özelleştirilmiş deprem ve tsunami bildirimleri ve etki analizi sağlar.",
                delay: 0.4,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-0"
            >
              <Link href="/slides/1">
                Detaylı Sunumu Görüntüle <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
