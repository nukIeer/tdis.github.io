import { Database, Server, Shield, Zap } from "lucide-react"

export default function Slide13() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Teknik Mimari Detayları
        </h2>
        <p className="text-gray-400 mt-2">TDIS sisteminin teknik altyapısı ve bileşenleri</p>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-red-500">Mimari Yaklaşım</h3>
        <p className="text-gray-300 mb-4">
          TDIS, yüksek performans, ölçeklenebilirlik ve dayanıklılık sağlamak için mikroservis mimarisi üzerine
          kurulmuştur. Bu yaklaşım, sistemin farklı bileşenlerinin bağımsız olarak geliştirilmesine, dağıtılmasına ve
          ölçeklendirilmesine olanak tanır.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-md">
            <h4 className="font-medium text-white mb-2">Mikroservis Avantajları</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Bağımsız geliştirme ve dağıtım</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Servis bazlı ölçeklendirme</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Teknoloji çeşitliliği</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Hata izolasyonu</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-md">
            <h4 className="font-medium text-white mb-2">Mimari Prensipler</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Servis bağımsızlığı</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Asenkron iletişim</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Veri tutarlılığı</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Hata toleransı</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-red-500/20 mr-4">
              <Server className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">Backend Servisleri</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Veri Toplama Servisi</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Teknoloji:</span> Go
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Görev:</span> Farklı kaynaklardan deprem verilerini toplama
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Özellikler:</span> Paralel veri çekme, hata yönetimi, veri doğrulama
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Veri İşleme Servisi</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Teknoloji:</span> Rust
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Görev:</span> Ham verileri işleme, analiz etme ve standartlaştırma
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Özellikler:</span> Yüksek performanslı hesaplamalar, veri
                    normalizasyonu
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">API Servisi</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Teknoloji:</span> Go
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Görev:</span> RESTful API ve WebSocket/SSE endpointleri sağlama
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Özellikler:</span> Hızlı yanıt süreleri, ölçeklenebilirlik, API
                    versiyonlama
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-amber-500/20 mr-4">
              <Database className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold">Veri Depolama ve Yönetimi</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Veritabanı Çözümleri</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Ana Veritabanı:</span> MongoDB - Deprem verileri için NoSQL çözümü
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Önbellek:</span> Redis - Hızlı veri erişimi ve geçici depolama
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Zaman Serisi:</span> InfluxDB - Sensör verileri ve metrikler için
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Mesaj Kuyruk Sistemi</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Teknoloji:</span> Apache Kafka
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Görev:</span> Servisler arası asenkron iletişim
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Özellikler:</span> Yüksek verimlilik, dayanıklılık, ölçeklenebilirlik
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Veri Yedekleme ve Arşivleme</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Stratejiler:</span> Otomatik yedekleme, coğrafi replikasyon
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Arşivleme:</span> Soğuk depolama çözümleri ile uzun vadeli saklama
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
              <Zap className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Frontend ve Kullanıcı Arayüzü</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Web Uygulaması</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Teknoloji:</span> React, Next.js, Tailwind CSS
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Harita:</span> MapBox veya Leaflet entegrasyonu
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Gerçek Zamanlı:</span> WebSocket/SSE ile anlık güncellemeler
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Mobil Uygulama (Gelecek Aşama)</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Teknoloji:</span> React Native veya Flutter
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Sensör Entegrasyonu:</span> İvmeölçer ile P dalgası tespiti
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Çevrimdışı Modu:</span> İnternet kesintilerinde çalışabilme
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Bildirim Sistemleri</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Web Push:</span> Service Worker ile tarayıcı bildirimleri
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Mobil Push:</span> Firebase Cloud Messaging entegrasyonu
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-green-500/20 mr-4">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Altyapı ve Güvenlik</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Dağıtım Altyapısı</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Konteynerizasyon:</span> Docker
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Orkestrasyon:</span> Kubernetes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Cloud Sağlayıcı:</span> AWS veya Google Cloud Platform
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Güvenlik Önlemleri</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">API Güvenliği:</span> JWT, rate limiting, CORS politikaları
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Veri Şifreleme:</span> Transport ve rest halinde şifreleme
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">DDoS Koruması:</span> CDN ve WAF entegrasyonu
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">İzleme ve Loglama</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Monitoring:</span> Prometheus ve Grafana
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Loglama:</span> ELK Stack (Elasticsearch, Logstash, Kibana)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <div>
                    <span className="font-medium">Alarm Sistemi:</span> Otomatik uyarılar ve escalation politikaları
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500/20 to-amber-500/20 p-6 rounded-lg border border-red-500/30 mt-6">
        <h3 className="text-xl font-semibold mb-3 text-center">Teknik Hedefler</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Yanıt Süresi</h4>
            <p className="text-gray-400 text-sm">API yanıtları &lt; 100ms</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Uptime</h4>
            <p className="text-gray-400 text-sm">%99.99 erişilebilirlik</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Ölçeklenebilirlik</h4>
            <p className="text-gray-400 text-sm">10.000+ eşzamanlı kullanıcı</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Veri Doğruluğu</h4>
            <p className="text-gray-400 text-sm">%99+ doğruluk oranı</p>
          </div>
        </div>
      </div>
    </div>
  )
}
