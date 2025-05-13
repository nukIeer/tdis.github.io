"use client"

import { AlertTriangle, Clock, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Slide1() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Proje Hedefleri
        </h2>
        <p className="text-gray-400 mt-2">Türkiye Deprem İzleme Sistemi ne yapacak?</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg text-gray-300 mb-8"
      >
        Türkiye ve çevre bölgelerdeki sismik aktiviteleri izleyen, analiz eden ve kullanıcılara gerçek zamanlı olarak
        ileten bir platformdur. Proje, depremlerin tespitinden kullanıcıya bildirimine kadar geçen süreyi minimize
        ederek, afet durumlarında hayat kurtarıcı bilgilerin hızla yayılmasını amaçlar.
      </motion.p>

      <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={item}
          className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-red-500/30 transition-all duration-300 flex group"
        >
          <div className="mr-4 mt-1">
            <div className="relative">
              <Zap className="h-8 w-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Hızlı Veri İletimi</h3>
            <p className="text-gray-300">
              Deprem verilerini mevcut kaynaklardan çekerek, bu verileri standart kaynaklardan daha hızlı bir şekilde
              kullanıcılara iletmek.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex group"
        >
          <div className="mr-4 mt-1">
            <div className="relative">
              <AlertTriangle className="h-8 w-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Doğru ve Güvenilir Erken Uyarı</h3>
            <p className="text-gray-300">
              Farklı kaynaklardan alınan verilerin doğruluğunu karşılaştırarak, en güvenilir deprem ve tsunami
              bilgisini, en hızlı şekilde sunmak.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex group"
        >
          <div className="mr-4 mt-1">
            <div className="relative">
              <Globe className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Kullanıcı Konumuna Özel Bilgilendirme</h3>
            <p className="text-gray-300">
              Kullanıcının konumuna göre özelleştirilmiş deprem ve tsunami bildirimleri ve etki analizi sağlamak.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-green-500/30 transition-all duration-300 flex group"
        >
          <div className="mr-4 mt-1">
            <div className="relative">
              <Clock className="h-8 w-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-green-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Gerçek Zamanlı İzleme</h3>
            <p className="text-gray-300">
              Türkiye ve çevresindeki deprem aktivitelerini 7/24 izleyerek, P öncül dalgaları ile yeni depremler tespit
              edildiğinde önceden sistemde iletmek.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
