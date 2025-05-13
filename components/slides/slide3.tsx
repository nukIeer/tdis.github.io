export default function Slide3() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Sistem Mimarisi
        </h2>
        <p className="text-gray-400 mt-2">Sistemin ana bileşenleri - Geniş kapsamlı ve bağımsız yapılar</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-red-500">Veri Toplama Servisi</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Veri Çekme
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Veri doğrulama ve standartlaştırma
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Ham veri depolama
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Veri formatı dönüştürme
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Kaynak bağlantı yönetimi
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-amber-500">Veri İşleme Servisi</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              Ham veri analizi
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              Şiddet hesaplamaları
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              Lokasyon analizi
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              İşlenmiş veri depolama
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Bildirim Servisi</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Bildirim Oluşturma
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Bildirim Önceliklendirme
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Bildirim dağıtımı
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Bildirim takibi
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-green-500">Harita Görselleştirme Servisi</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              İnteraktif harita (MapBox)
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Deprem noktası görselleştirme
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Harita katmanları yönetimi
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Görselleştirme önbelleği
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Kullanıcı Yönetim Servisi</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              Konum bilgisi yönetimi
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              Konum bazlı filtreleme
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              Mesafe hesaplamaları
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              Coğrafi veri depolama
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-pink-500">Gerçek Zamanlı İletişim Servisi</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              WebSocket/SSE yönetimi
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              Anlık mesaj dağıtımı
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              Connection pooling
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              Connection optimizasyonu
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
