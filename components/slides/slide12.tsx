import { Users, Code, Database, Server } from "lucide-react"

export default function Slide12() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Ekip Yapısı ve Görev Dağılımı
        </h2>
        <p className="text-gray-400 mt-2">TDIS projesinin geliştirme ekibi ve sorumlulukları</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-red-500/20 mr-4">
              <Users className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">Ekip Yapısı</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Çekirdek Geliştirme Ekibi</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">1 Proje Yöneticisi</span> - Genel koordinasyon ve planlama
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">2 Backend Geliştirici</span> - Go/Rust ile backend servisleri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">2 Frontend Geliştirici</span> - React ile web arayüzü
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">1 DevOps Uzmanı</span> - Altyapı ve dağıtım
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">1 Veri Bilimci</span> - Veri analizi ve algoritma geliştirme
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Danışmanlar ve Uzmanlar</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Sismoloji Uzmanı</span> - Deprem verilerinin yorumlanması
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">UX Tasarımcısı</span> - Kullanıcı deneyimi tasarımı
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Güvenlik Uzmanı</span> - Sistem güvenliği ve veri koruma
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Topluluk Katkıcıları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Açık Kaynak Geliştiricileri</span> - Çeşitli alanlarda katkılar
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Beta Test Kullanıcıları</span> - Geri bildirim ve hata raporları
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-amber-500/20 mr-4">
              <Code className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold">Görev Dağılımı</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Proje Yöneticisi</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Proje planlaması ve zaman çizelgesi yönetimi</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Ekip koordinasyonu ve kaynak tahsisi</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Paydaş iletişimi ve raporlama</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Risk yönetimi ve sorun çözümü</div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Backend Geliştiriciler</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Veri toplama servislerinin geliştirilmesi</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>API ve veritabanı tasarımı</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Gerçek zamanlı iletişim altyapısı</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Performans optimizasyonu</div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Frontend Geliştiriciler</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Web arayüzü geliştirme</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Harita görselleştirme entegrasyonu</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Bildirim sistemi arayüzü</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>Responsive tasarım ve erişilebilirlik</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-blue-500/20 mr-4">
              <Database className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Veri Bilimci ve DevOps</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Veri Bilimci</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>Deprem verilerinin analizi ve modellenmesi</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>Veri doğrulama algoritmaları geliştirme</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>Makine öğrenimi modellerinin oluşturulması</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>Veri görselleştirme çözümleri</div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">DevOps Uzmanı</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>CI/CD pipeline kurulumu</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>Altyapı yönetimi ve ölçeklendirme</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>Monitoring ve logging sistemleri</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>Güvenlik ve yedekleme çözümleri</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-green-500/20 mr-4">
              <Server className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">İletişim ve İş Birliği</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">İletişim Araçları</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">GitHub</span> - Kod yönetimi ve versiyon kontrolü
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Slack</span> - Günlük iletişim ve ekip koordinasyonu
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Jira</span> - Görev takibi ve proje yönetimi
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Google Meet</span> - Video konferans ve toplantılar
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Çalışma Metodolojisi</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>Agile/Scrum metodolojisi</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>2 günlük sprint planlaması</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>Günlük stand-up toplantıları</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>Sürekli entegrasyon ve dağıtım</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500/20 to-blue-700/20 p-6 rounded-lg border border-blue-500/30 mt-6">
        <h3 className="text-xl font-semibold mb-3 text-center">Ekip Genişletme Planı</h3>
        <p className="text-gray-300 text-center mb-4">
          MVP sonrası projenin büyümesiyle birlikte ekip genişletilecektir. Özellikle mobil uygulama geliştirme, veri
          bilimi ve altyapı alanlarında yeni üyeler ekibe katılacaktır.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Mobil Geliştiriciler</h4>
            <p className="text-gray-400 text-sm">Android ve iOS platformları için</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Veri Mühendisleri</h4>
            <p className="text-gray-400 text-sm">Büyük veri işleme ve analizi için</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">QA Uzmanları</h4>
            <p className="text-gray-400 text-sm">Kapsamlı test ve kalite güvencesi için</p>
          </div>
        </div>
      </div>
    </div>
  )
}
