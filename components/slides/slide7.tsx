import { Smartphone, Shield, Zap, Share2 } from "lucide-react"

export default function Slide7() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Mobil Uygulama Özellikleri
        </h2>
        <p className="text-gray-400 mt-2">TDIS mobil uygulamasının temel özellikleri ve işlevleri</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-red-500/20 mr-4">
              <Smartphone className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">Temel Özellikler</h3>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Gerçek Zamanlı Bildirimler</h4>
              <p className="text-gray-400 text-sm">
                Kullanıcının konumuna göre özelleştirilmiş deprem ve tsunami bildirimleri. Kullanıcı tercihlerine göre
                bildirim eşikleri ayarlanabilir.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Harita Görünümü</h4>
              <p className="text-gray-400 text-sm">
                Son depremlerin interaktif harita üzerinde gösterimi. Büyüklük, derinlik ve zaman filtrelemeleri
                yapılabilir.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Deprem Bilgileri</h4>
              <p className="text-gray-400 text-sm">
                Deprem büyüklüğü, derinliği, konumu ve hissedilme şiddeti gibi detaylı bilgiler. Resmi kurumlardan
                alınan ek bilgiler.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-amber-500/20 mr-4">
              <Zap className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold">Gelişmiş Özellikler</h3>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">P Dalgası Tespiti</h4>
              <p className="text-gray-400 text-sm">
                Cihazın ivmeölçer sensörünü kullanarak P dalgalarını tespit etme ve erken uyarı sağlama. Minimum kaynak
                tüketen arkaplan servisi.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Afet Hazırlık Bilgileri</h4>
              <p className="text-gray-400 text-sm">
                Deprem çantası içerikleri, acil durum planları ve tahliye noktaları hakkında bilgiler. Kullanıcının
                konumuna göre özelleştirilmiş tahliye rotaları.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Tsunami Uyarıları</h4>
              <p className="text-gray-400 text-sm">
                Tsunamiden etkilenebilecek bölgelerde yaşayan kullanıcılar için özel uyarılar ve tahliye talimatları.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-500/20 mr-4">
              <Share2 className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">P2P ve Mesh Network</h3>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Veri Paylaşımı</h4>
              <p className="text-gray-400 text-sm">
                Verilerin yakındaki cihazlardan alınması ve gönderilmesi. İnternet erişimi olmadığında bile kritik
                bilgilerin yayılmasını sağlar.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Mesh Ağ Oluşturma</h4>
              <p className="text-gray-400 text-sm">
                İnternetin kesildiği durumlarda cihazlar arasında P2P ağ oluşturarak iletişimin devam etmesini sağlama.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Kesinti Uyarısı</h4>
              <p className="text-gray-400 text-sm">
                İnternet erişim kesintisi durumunda kullanıcıyı uyarma ve alternatif iletişim yöntemlerini
                etkinleştirme.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-green-500/20 mr-4">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Güvenlik ve Performans</h3>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Minimum Veri Kullanımı</h4>
              <p className="text-gray-400 text-sm">
                Düşük bant genişliği gerektiren veri formatları ve önbellekleme ile minimum veri kullanımı sağlama.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Düşük Pil Tüketimi</h4>
              <p className="text-gray-400 text-sm">
                Optimize edilmiş arkaplan servisleri ve akıllı uyku modları ile pil tüketimini minimize etme.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Veri Güvenliği</h4>
              <p className="text-gray-400 text-sm">
                Kullanıcı verilerinin minimum düzeyde toplanması ve yerel cihazda şifrelenerek saklanması. Konum
                bilgilerinin anonimleştirilmesi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500/20 to-amber-500/20 p-6 rounded-lg border border-gray-700 mt-6">
        <h3 className="text-xl font-semibold mb-3 text-center">Mobil Uygulama Platformları</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-900/70 px-4 py-2 rounded-full text-white">Android</div>
          <div className="bg-gray-900/70 px-4 py-2 rounded-full text-white">iOS</div>
          <div className="bg-gray-900/70 px-4 py-2 rounded-full text-white">Huawei AppGallery</div>
          <div className="bg-gray-900/70 px-4 py-2 rounded-full text-white">Progressive Web App</div>
        </div>
      </div>
    </div>
  )
}
