import { Users, UserCircle, Briefcase, GraduationCap, Building } from "lucide-react"

export default function Slide9() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Proje Ekibi ve Sorumluluklar
        </h2>
        <p className="text-gray-400 mt-2">TDIS projesini geliştiren ekip ve görev dağılımı</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-red-500/20 mr-4">
              <Users className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">Ekip Yapısı</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-700 mr-3 mt-1">
                <UserCircle className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Proje Yönetimi</h4>
                <p className="text-gray-400 text-sm">
                  Proje planlaması, kaynak yönetimi, zaman çizelgesi takibi ve paydaş iletişimi.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-700 mr-3 mt-1">
                <UserCircle className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Backend Geliştirme</h4>
                <p className="text-gray-400 text-sm">
                  Veri toplama, işleme ve API servislerinin geliştirilmesi. Performans optimizasyonu ve
                  ölçeklenebilirlik.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-700 mr-3 mt-1">
                <UserCircle className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Frontend Geliştirme</h4>
                <p className="text-gray-400 text-sm">
                  Web arayüzü, harita görselleştirme ve kullanıcı deneyimi tasarımı.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-700 mr-3 mt-1">
                <UserCircle className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Mobil Uygulama Geliştirme</h4>
                <p className="text-gray-400 text-sm">
                  Android ve iOS uygulamalarının geliştirilmesi, sensör entegrasyonları ve P2P iletişim.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-700 mr-3 mt-1">
                <UserCircle className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Veri Bilimi ve Analiz</h4>
                <p className="text-gray-400 text-sm">
                  Deprem verilerinin analizi, algoritma geliştirme ve makine öğrenimi modelleri.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-700 mr-3 mt-1">
                <UserCircle className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Kalite Kontrol ve Test</h4>
                <p className="text-gray-400 text-sm">
                  Yazılım testleri, kalite güvencesi ve performans değerlendirmesi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-amber-500/20 mr-4">
              <Briefcase className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold">Sorumluluk Matrisi</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Ekip
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Planlama
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Geliştirme
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Test
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Dağıtım
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-white">Proje Yönetimi</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-green-500">Birincil</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-green-500">Birincil</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-white">Backend</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-green-500">Birincil</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-white">Frontend</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-green-500">Birincil</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-white">Mobil</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-green-500">Birincil</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-white">Veri Bilimi</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-green-500">Birincil</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">-</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-white">Kalite Kontrol</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-green-500">Birincil</td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-400">Destek</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-blue-500/20 mr-4">
              <GraduationCap className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Akademik Danışmanlar</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-1">Sismoloji Uzmanları</h4>
              <p className="text-gray-400 text-sm">
                Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü'nden sismoloji uzmanları projeye bilimsel danışmanlık
                sağlamaktadır.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-1">Veri Bilimi Uzmanları</h4>
              <p className="text-gray-400 text-sm">
                Çeşitli üniversitelerden veri bilimi ve yapay zeka uzmanları, deprem verilerinin analizi ve tahmin
                modelleri konusunda destek vermektedir.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-1">Afet Yönetimi Uzmanları</h4>
              <p className="text-gray-400 text-sm">
                Afet ve acil durum yönetimi alanında uzmanlaşmış akademisyenler, projenin afet yönetimi boyutunda
                danışmanlık yapmaktadır.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-green-500/20 mr-4">
              <Building className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Kurumsal İş Birlikleri</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-1">Resmi Kurumlar</h4>
              <p className="text-gray-400 text-sm">
                AFAD, Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü, Meteoroloji Genel Müdürlüğü gibi resmi
                kurumlarla veri paylaşımı ve iş birliği yapılmaktadır.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-1">Uluslararası Kuruluşlar</h4>
              <p className="text-gray-400 text-sm">
                USGS, EMSC gibi uluslararası deprem izleme kuruluşlarıyla veri entegrasyonu ve bilgi paylaşımı
                sağlanmaktadır.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-1">Teknoloji Şirketleri</h4>
              <p className="text-gray-400 text-sm">
                Bulut altyapısı, harita servisleri ve mobil teknolojiler konusunda önde gelen teknoloji şirketleriyle
                stratejik ortaklıklar kurulmuştur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
