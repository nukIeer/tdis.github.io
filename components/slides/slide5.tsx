export default function Slide5() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Özellikler ve Geliştirme Aşamaları
        </h2>
        <p className="text-gray-400 mt-2">İlk sürüm ve gelecek planları</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-red-500">İlk Sürüm Özellikleri</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Veri Toplama:</span> Ücretli Erken Uyarı Sistemleri, Kullanıcı Cihazları,
                ShakeAlert, Kandilli, AFAD, USGS, EMSC kaynaklarından deprem verisi çekme
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Temel Kullanıcı Arayüzü:</span> Tek sayfalık responsive uygulama, son
                depremlerin haritasız gösterimi
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Basit Bildirim Sistemi:</span> Web, Mobil bildirimleri, WebSocket/SSE ile
                gerçek zamanlı bildirimler
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">API:</span> Salt okunur, halka açık API endpointleri, son depremleri alma,
                coğrafi alan filtrelemesi
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <div>
                <span className="font-medium">Temel Kullanıcı Yönetimleri:</span> Tarayıcıda konum bilgisini
                kriptolayarak bildirim id oluşturma (il/ilçe)
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-amber-500">Gelecek Sürüm Özellikleri</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Mobil Uygulama:</span> Minimum kaynak tüketen arkaplan servisi, P dalga
                tespiti (ivmeölçer), Deprem & Tsunami uyarısı
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Mesh Network:</span> İnternetin kesildiği iletişimin sağlanamadığı
                durumlar için P2P ağ oluşturma
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Afet Öncesi Hazırlık:</span> Deprem çantası içerikleri, Tsunamiden
                etkilenebilecek yerlerde kullanıcıyı uyarma
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">Afet Sonrası Plan Bildirimi:</span> Afet sonrası şehir boşaltma planlarını
                ve konumlarını kullanıcıya bildirme, yiyecek barınak ve diğer ihtiyaç noktalarını sağlama
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <div>
                <span className="font-medium">P2P Veri Paylaşımı:</span> Verilerin yakındaki cihazlardan alınması,
                gönderilmesi, İnternet erişim kesintisi uyarısı
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-8">
        <h3 className="text-xl font-semibold mb-4 text-green-500">Güvenlik ve Performans Hedefleri</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <div>
                  <span className="font-medium">Kullanıcı verileri güvenliği:</span> Minimum veri toplama prensibi
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <div>
                  <span className="font-medium">DDoS & Saldırı koruması:</span> Dağıtık mimari ile yüksek dayanıklılık
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <div>
                  <span className="font-medium">Maximum uptime:</span> %99.99 erişilebilirlik hedefi
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <div>
                  <span className="font-medium">Yanıt süreleri:</span> 100 ms altı yanıt süreleri
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
