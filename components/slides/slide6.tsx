import { Calendar, XCircle } from "lucide-react"

export default function Slide6() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Proje Zaman Çizelgesi
        </h2>
        <p className="text-gray-400 mt-2">Geliştirme ve yayınlama takvimi</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:translate-x-0 translate-x-4"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="relative flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-10 md:text-right mb-4 md:mb-0 pl-10 md:pl-0">
              <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-red-500 mb-2">Faz 1: Araştırma ve Planlama</h3>
                <p className="text-gray-300 mb-2">
                  Mevcut deprem izleme sistemlerinin analizi, veri kaynaklarının belirlenmesi ve proje kapsamının
                  netleştirilmesi.
                </p>
                <div className="flex items-center justify-end text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Ocak 2025</span>
                </div>
                <div className="flex items-center justify-end text-gray-400 text-sm mt-2">
                  <XCircle className="h-4 w-4 mr-1" />
                  <span>Henüz Başlanmadı</span>
                </div>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-red-500 border-4 border-gray-900 transform md:translate-x-0 translate-x-0"></div>
            </div>
            <div className="md:w-1/2 md:pl-10 pl-10">
              <div className="text-gray-400 mb-1">
                <Calendar className="h-4 w-4 inline mr-1" />
                <span>Ocak 2025</span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-10 md:text-right mb-4 md:mb-0 pl-10 md:pl-0">
              <div className="text-gray-400 mb-1 md:text-right">
                <Calendar className="h-4 w-4 inline mr-1" />
                <span>Şubat 2025</span>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-amber-500 border-4 border-gray-900 transform md:translate-x-0 translate-x-0"></div>
            </div>
            <div className="md:w-1/2 md:pl-10 pl-10">
              <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-amber-500 mb-2">Faz 2: MVP Geliştirme (Tam 3 Hafta)</h3>
                <p className="text-gray-300 mb-2">
                  Minimum Uygulanabilir Ürün (MVP) geliştirmesi. Temel veri toplama servisi, basit API altyapısı ve
                  kullanıcı arayüzünün oluşturulması. Tam olarak 3 haftalık yoğun geliştirme süreci.
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>1-21 Şubat 2025</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <XCircle className="h-4 w-4 mr-1" />
                  <span>Henüz Başlanmadı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-10 md:text-right mb-4 md:mb-0 pl-10 md:pl-0">
              <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-blue-500 mb-2">Faz 3: Web Arayüzü ve Bildirim Sistemi</h3>
                <p className="text-gray-300 mb-2">
                  Kullanıcı arayüzü, harita görselleştirme ve bildirim sisteminin geliştirilmesi. Beta sürümün sınırlı
                  kullanıcı grubuna açılması.
                </p>
                <div className="flex items-center justify-end text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Mart - Nisan 2025</span>
                </div>
                <div className="flex items-center justify-end text-gray-400 text-sm mt-2">
                  <XCircle className="h-4 w-4 mr-1" />
                  <span>Planlandı</span>
                </div>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-gray-900 transform md:translate-x-0 translate-x-0"></div>
            </div>
            <div className="md:w-1/2 md:pl-10 pl-10">
              <div className="text-gray-400 mb-1">
                <Calendar className="h-4 w-4 inline mr-1" />
                <span>Mart - Nisan 2025</span>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-10 md:text-right mb-4 md:mb-0 pl-10 md:pl-0">
              <div className="text-gray-400 mb-1 md:text-right">
                <Calendar className="h-4 w-4 inline mr-1" />
                <span>Mayıs - Temmuz 2025</span>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-gray-900 transform md:translate-x-0 translate-x-0"></div>
            </div>
            <div className="md:w-1/2 md:pl-10 pl-10">
              <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-green-500 mb-2">Faz 4: Mobil Uygulama ve Halka Açılış</h3>
                <p className="text-gray-300 mb-2">
                  Mobil uygulamanın geliştirilmesi, test edilmesi ve yayınlanması. Sistemin halka açık olarak kullanıma
                  sunulması.
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Mayıs - Temmuz 2025</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <XCircle className="h-4 w-4 mr-1" />
                  <span>Planlandı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="relative flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-10 md:text-right mb-4 md:mb-0 pl-10 md:pl-0">
              <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-500 mb-2">Faz 5: Gelişmiş Özellikler</h3>
                <p className="text-gray-300 mb-2">
                  Mesh network, P2P veri paylaşımı, afet sonrası plan bildirimi gibi gelişmiş özelliklerin eklenmesi ve
                  sistemin sürekli iyileştirilmesi.
                </p>
                <div className="flex items-center justify-end text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Ağustos 2025 ve Sonrası</span>
                </div>
                <div className="flex items-center justify-end text-gray-400 text-sm mt-2">
                  <XCircle className="h-4 w-4 mr-1" />
                  <span>Planlandı</span>
                </div>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-purple-500 border-4 border-gray-900 transform md:translate-x-0 translate-x-0"></div>
            </div>
            <div className="md:w-1/2 md:pl-10 pl-10">
              <div className="text-gray-400 mb-1">
                <Calendar className="h-4 w-4 inline mr-1" />
                <span>Ağustos 2025 ve Sonrası</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
