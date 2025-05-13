import { Database, Globe, Server, Users } from "lucide-react"

export default function Slide14() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Veri Kaynakları ve Entegrasyonlar
        </h2>
        <p className="text-gray-400 mt-2">TDIS'in veri toplama stratejisi ve entegrasyon planları</p>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-red-500">Veri Toplama Stratejisi</h3>
        <p className="text-gray-300 mb-4">
          TDIS, çeşitli resmi ve güvenilir kaynaklardan deprem verilerini toplayarak, bu verileri doğrular,
          standartlaştırır ve kullanıcılara sunar. Farklı kaynaklardan gelen verilerin karşılaştırılması, sistemin
          doğruluk ve güvenilirliğini artırır.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-md">
            <h4 className="font-medium text-white mb-2">Veri Toplama Yöntemleri</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>API entegrasyonları</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Web scraping (gerektiğinde)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>RSS feed takibi</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>WebSocket bağlantıları</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-md">
            <h4 className="font-medium text-white mb-2">Veri İşleme Adımları</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Ham veri toplama</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Veri doğrulama ve temizleme</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Format standartlaştırma</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Veri zenginleştirme ve analiz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-red-500/20 mr-4">
              <Database className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">Resmi Veri Kaynakları</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Türkiye Kaynakları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">AFAD:</span> Afet ve Acil Durum Yönetimi Başkanlığı deprem verileri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Kandilli Rasathanesi:</span> Boğaziçi Üniversitesi Kandilli
                    Rasathanesi ve Deprem Araştırma Enstitüsü verileri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">MTA:</span> Maden Tetkik ve Arama Genel Müdürlüğü fay hatları verileri
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Uluslararası Kaynaklar</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">USGS:</span> ABD Jeolojik Araştırmalar Kurumu
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">EMSC:</span> Avrupa-Akdeniz Sismoloji Merkezi
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">GFZ:</span> Alman Araştırma Merkezi için Yerbilimleri
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-amber-500/20 mr-4">
              <Server className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold">Entegrasyon Planları</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">API Entegrasyonları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">AFAD API:</span> Resmi AFAD API'si ile entegrasyon
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">USGS API:</span> USGS Earthquake API ile entegrasyon
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">EMSC API:</span> EMSC API ile entegrasyon
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Diğer Veri Kaynakları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Sosyal Medya:</span> Twitter, Facebook gibi platformlardan deprem
                    bildirimleri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Kullanıcı Raporları:</span> Kullanıcılardan gelen deprem hissetme
                    raporları
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">IoT Sensörleri:</span> Gelecekte IoT tabanlı sismik sensörlerle
                    entegrasyon
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-500/20 mr-4">
              <Globe className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Coğrafi Veri Entegrasyonu</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Harita Servisleri</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">OpenStreetMap:</span> Açık kaynaklı harita verileri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">MapBox:</span> Özelleştirilebilir harita görselleştirme
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Google Maps:</span> Geniş kapsamlı harita ve uydu görüntüleri
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Coğrafi Veri Katmanları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Fay Hatları:</span> Aktif fay hatları katmanı
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Nüfus Yoğunluğu:</span> Bölgesel nüfus yoğunluğu verileri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Zemin Yapısı:</span> Bölgesel zemin yapısı ve sıvılaşma riski
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-green-500/20 mr-4">
              <Users className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Topluluk Katkıları</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Kullanıcı Raporları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Deprem Hissetme:</span> Kullanıcıların deprem şiddeti bildirimleri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Hasar Bildirimleri:</span> Bölgesel hasar durumu raporları
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Doğrulama:</span> Resmi verilerin topluluk tarafından doğrulanması
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Açık Kaynak Katkıları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Kod Katkıları:</span> Açık kaynak geliştiricilerinden kod katkıları
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Veri Analizi:</span> Veri bilimcilerden analiz algoritmaları
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Çeviriler:</span> Çoklu dil desteği için topluluk çevirileri
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500/20 to-amber-500/20 p-6 rounded-lg border border-red-500/30 mt-6">
        <h3 className="text-xl font-semibold mb-3 text-center">Veri Güvenilirliği ve Doğruluk</h3>
        <p className="text-gray-300 text-center mb-4">
          TDIS, farklı kaynaklardan gelen verileri karşılaştırarak en doğru ve güncel deprem bilgilerini sunmayı
          hedefler. Veri doğrulama algoritmaları ve topluluk geri bildirimleri, sistemin güvenilirliğini artırır.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Çoklu Kaynak Doğrulama</h4>
            <p className="text-gray-400 text-sm">En az 2 kaynaktan doğrulama</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Anomali Tespiti</h4>
            <p className="text-gray-400 text-sm">Anormal veri tespiti ve filtreleme</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Topluluk Doğrulaması</h4>
            <p className="text-gray-400 text-sm">Kullanıcı geri bildirimleri ile doğrulama</p>
          </div>
        </div>
      </div>
    </div>
  )
}
