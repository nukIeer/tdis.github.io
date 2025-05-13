import { Code, Database, Server, Shield } from "lucide-react"

export default function Slide11() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          MVP Geliştirme Planı
        </h2>
        <p className="text-gray-400 mt-2">3 Haftalık MVP Geliştirme Süreci Detayları</p>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-amber-500">MVP Kapsamı</h3>
        <p className="text-gray-300 mb-4">
          Minimum Uygulanabilir Ürün (MVP), TDIS'in temel işlevselliğini gösterecek ve ilk kullanıcı geri bildirimlerini
          toplamak için yeterli özelliklere sahip olacaktır. MVP, tam olarak 3 haftalık bir sürede geliştirilecek ve
          aşağıdaki temel bileşenleri içerecektir:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-amber-400 mr-2">•</span>
            <span>Temel veri toplama servisi (AFAD, Kandilli, USGS kaynaklarından)</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2">•</span>
            <span>Basit web arayüzü ve harita görselleştirme</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2">•</span>
            <span>Temel bildirim sistemi (web bildirimleri)</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2">•</span>
            <span>Basit API endpointleri</span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-red-500/20 mr-4">
              <Code className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">Hafta 1: Altyapı ve Veri Toplama</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 1-2:</span> Proje yapısının oluşturulması, temel mimari kararların
                alınması, geliştirme ortamının kurulması
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 3-4:</span> Veri kaynaklarına (AFAD, Kandilli, USGS) bağlantı
                servislerinin geliştirilmesi
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 5:</span> Veri doğrulama ve standartlaştırma işlemlerinin
                geliştirilmesi
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 6-7:</span> Veritabanı şemasının oluşturulması ve veri depolama
                servisinin geliştirilmesi
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-amber-500/20 mr-4">
              <Server className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold">Hafta 2: API ve Backend</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 8-9:</span> Temel API endpointlerinin geliştirilmesi (son depremler,
                coğrafi alan filtreleme)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 10-11:</span> WebSocket/SSE altyapısının kurulması ve gerçek zamanlı
                veri akışının sağlanması
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 12:</span> Temel bildirim sisteminin geliştirilmesi
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 13-14:</span> Performans optimizasyonu ve ölçeklenebilirlik
                çalışmaları
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-500/20 mr-4">
              <Database className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Hafta 3: Frontend ve Lansman</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 15-16:</span> Web arayüzünün geliştirilmesi ve harita
                görselleştirmesinin tamamlanması
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 17-18:</span> Web bildirim sisteminin entegrasyonu ve kullanıcı
                tercihlerinin uygulanması
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 19-20:</span> Kapsamlı test ve hata düzeltmeleri
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <div>
                <span className="font-medium">Gün 21:</span> MVP lansmanı ve ilk kullanıcı grubuna erişim sağlanması
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-green-500/20 mr-4">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Kritik Başarı Faktörleri</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <div>
                <span className="font-medium">Veri Doğruluğu:</span> Farklı kaynaklardan gelen verilerin doğru şekilde
                birleştirilmesi ve doğrulanması
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <div>
                <span className="font-medium">Performans:</span> Düşük gecikme süresi ve yüksek ölçeklenebilirlik
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <div>
                <span className="font-medium">Kullanılabilirlik:</span> Basit ve sezgisel kullanıcı arayüzü
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <div>
                <span className="font-medium">Güvenilirlik:</span> Sistem kararlılığı ve kesintisiz hizmet
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-500/20 to-amber-700/20 p-6 rounded-lg border border-amber-500/30 mt-6">
        <h3 className="text-xl font-semibold mb-3 text-center">MVP Sonrası Değerlendirme</h3>
        <p className="text-gray-300 text-center mb-4">
          MVP lansmanından sonra, kullanıcı geri bildirimleri toplanacak ve sistem performansı değerlendirilecektir. Bu
          değerlendirme, sonraki geliştirme aşamaları için yol haritasını belirleyecektir.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Kullanıcı Geri Bildirimleri</h4>
            <p className="text-gray-400 text-sm">Kullanıcı deneyimi ve özellik talepleri</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Performans Metrikleri</h4>
            <p className="text-gray-400 text-sm">Sistem yanıt süreleri ve ölçeklenebilirlik</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Veri Doğruluğu</h4>
            <p className="text-gray-400 text-sm">Farklı kaynaklardan gelen verilerin tutarlılığı</p>
          </div>
        </div>
      </div>
    </div>
  )
}
