import { XCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Slide10() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Sonuç ve Gelecek Planları
        </h2>
        <p className="text-gray-400 mt-2">TDIS projesinin hedefleri ve vizyonu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-red-500">Proje Özeti</h3>
          <p className="text-gray-300 mb-4">
            Türkiye Deprem İzleme Sistemi (TDIS), deprem verilerini hızlı ve güvenilir bir şekilde toplayarak
            kullanıcılara iletmeyi amaçlayan kapsamlı bir platformdur. Proje, depremlerin tespitinden kullanıcıya
            bildirimine kadar geçen süreyi minimize ederek, afet durumlarında hayat kurtarıcı bilgilerin hızla
            yayılmasını sağlar.
          </p>
          <p className="text-gray-300">
            Farklı veri kaynaklarından alınan bilgilerin doğrulanması, kullanıcı konumuna göre özelleştirilmiş
            bildirimler ve gerçek zamanlı izleme özellikleriyle TDIS, Türkiye ve çevre bölgelerdeki deprem risklerini
            yönetmek için kritik bir araç olacaktır.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-amber-500">Proje Durumu</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Proje henüz başlamamıştır</span>
            </li>
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Planlama aşaması Ocak 2025'te başlayacaktır</span>
            </li>
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">
                MVP geliştirmesi için tam 3 haftalık süre ayrılmıştır (1-21 Şubat 2025)
              </span>
            </li>
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Ekip oluşturma ve kaynak planlaması devam etmektedir</span>
            </li>
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Geliştirici alımları aktif olarak sürmektedir</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-blue-500">Gelecek Planları ve Vizyon</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-md">
            <h4 className="font-medium text-white mb-2">Kısa Vadeli Hedefler (6 Ay)</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Web arayüzünün tamamlanması ve beta sürümün yayınlanması
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Temel API hizmetlerinin kullanıma açılması
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Bildirim sisteminin test edilmesi ve optimize edilmesi
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-md">
            <h4 className="font-medium text-white mb-2">Orta Vadeli Hedefler (1-2 Yıl)</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Mobil uygulamanın tüm platformlarda yayınlanması
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                P2P ve mesh network özelliklerinin geliştirilmesi
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Makine öğrenimi ile deprem tahmin modellerinin iyileştirilmesi
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Uluslararası entegrasyonların genişletilmesi
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-md">
            <h4 className="font-medium text-white mb-2">Uzun Vadeli Vizyon (3+ Yıl)</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Bölgesel bir deprem erken uyarı ağının oluşturulması
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Yapay zeka destekli hasar tahmin modellerinin geliştirilmesi
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Akıllı şehir sistemleriyle entegrasyon
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Küresel deprem izleme ağlarıyla tam entegrasyon
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 p-8 rounded-lg border border-green-500/30 mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-center">Projeye Katkıda Bulunun</h3>
        <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
          TDIS, açık kaynaklı bir proje olarak topluluk katkılarıyla gelişmeye devam edecektir. Yazılım geliştirme, veri
          analizi, test, dokümantasyon veya kullanıcı geri bildirimleriyle projeye katkıda bulunabilirsiniz.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700">
            GitHub Reposunu Ziyaret Et <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-green-500/50 hover:bg-green-500/20">
            Geliştirici Portalına Kaydol <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-4">Teşekkürler</h3>
        <p className="text-gray-400 mb-8">
          Sunumu izlediğiniz için teşekkür ederiz. Sorularınız veya geri bildirimleriniz için lütfen iletişime geçin.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900"
        >
          <Link href="/">Ana Sayfaya Dön</Link>
        </Button>
      </div>
    </div>
  )
}
