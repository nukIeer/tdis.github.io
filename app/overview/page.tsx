import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OverviewPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ana Sayfaya Dön
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">TDIS - Türkiye Deprem İzleme Sistemi</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Türkiye Deprem İzleme Sistemi (TDIS), Türkiye ve çevre bölgelerdeki sismik aktiviteleri izleyen, analiz eden
            ve kullanıcılara gerçek zamanlı olarak ileten bir platformdur. Proje, depremlerin tespitinden kullanıcıya
            bildirimine kadar geçen süreyi minimize ederek, afet durumlarında hayat kurtarıcı bilgilerin hızla
            yayılmasını amaçlar.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-red-500">Proje Hedefleri</h2>
          <ul className="space-y-2 mb-8">
            <li>Hızlı Veri İletimi ve Kullanıcıya Bildirimi</li>
            <li>Doğru ve Güvenilir Erken Uyarı Bildirimi</li>
            <li>Kullanıcı Konumuna Özel Bilgilendirme</li>
            <li>Gerçek Zamanlı İzleme</li>
            <li>Deprem ve Tsunami görselleştirme</li>
            <li>Topluluk Odaklı Geliştirme ve Dış Sistemlere Entegre Edilebilirlik</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-amber-500">Proje Kapsamı</h2>
          <p className="mb-4">
            Proje, Türkiye ve komşu ülkeleri (Yunanistan, Bulgaristan, Gürcistan, Azerbaycan, İran, Irak, Suriye) ve
            Türkiye'yi etkileyebilecek deniz içi depremleri (Akdeniz, Ege Denizi, Karadeniz) kapsamaktadır.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Teknoloji Yığını</h2>
          <ul className="space-y-2 mb-8">
            <li>
              <strong>Backend:</strong> Go, Rust
            </li>
            <li>
              <strong>Veri İşleme ve Analiz:</strong> C++, Python
            </li>
            <li>
              <strong>Frontend:</strong> React, JavaScript, Tailwind CSS
            </li>
            <li>
              <strong>Veritabanı:</strong> NoSQL
            </li>
            <li>
              <strong>Gerçek zamanlı iletişim:</strong> WebSocket, SSE, UDP
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-green-500">Sistem Mimarisi</h2>
          <p className="mb-4">Sistem, birbirinden bağımsız çalışabilen ve ölçeklenebilir servislerden oluşmaktadır:</p>
          <ul className="space-y-2 mb-8">
            <li>Veri Toplama Servisi</li>
            <li>Veri İşleme Servisi</li>
            <li>Bildirim Servisi</li>
            <li>Harita Görselleştirme Servisi</li>
            <li>Kullanıcı Yönetim Servisi</li>
            <li>Gerçek Zamanlı İletişim Servisi</li>
          </ul>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/slides/1">Detaylı Sunuma Geç</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
