import { MapPin, Database, Users, Code } from "lucide-react"

export default function Slide2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Proje Kapsamı
        </h2>
        <p className="text-gray-400 mt-2">TDIS'in kapsadığı alanlar ve hedef kitlesi</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-red-500 mr-3" />
            <h3 className="text-xl font-semibold">Coğrafi Kapsam</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              Türkiye ve komşu ülkeler (Yunanistan, Bulgaristan, Gürcistan, Azerbaycan, İran, Irak, Suriye)
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              Türkiye'yi etkileyebilecek deniz içi depremler (Akdeniz, Ege Denizi, Karadeniz)
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <Database className="h-6 w-6 text-amber-500 mr-3" />
            <h3 className="text-xl font-semibold">Veri Kapsamı</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Deprem büyüklüğü (Richter ölçeği)
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Deprem lokasyonu (Enlem, boylam ve siyasi sınırlar)
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Deprem derinliği
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              P-dalgasıyla depremin kaç saniye sonra hissedileceği
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Tsunami riski değerlendirmesi
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-blue-500 mr-3" />
            <h3 className="text-xl font-semibold">Kullanıcı Kapsamı</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Genel halk kullanımı
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Acil durum servisleri, yerel yönetimler
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Bilgilendirme platformları ve medya kuruluşları
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Araştırmacılar ve akademisyenler
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-green-500 mr-3" />
            <h3 className="text-xl font-semibold">Teknoloji Kapsamı</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Backend: Kritik hızlar için Go veya Rust
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Veri İşleme ve Analiz: C++ Python
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Frontend: React, JavaScript, Tailwind CSS
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Veritabanı: NoSQL (kritik hızlar için)
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Gerçek zamanlı iletişim: WebSocket, SSE, gerekli olduğunda UDP
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
