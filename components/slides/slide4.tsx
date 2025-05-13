export default function Slide4() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          Teknoloji Yığını
        </h2>
        <p className="text-gray-400 mt-2">Projenin geliştirilmesinde kullanılacak teknolojiler</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-red-500">Backend</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Go</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Rust</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Kritik hızlar ve düşük gecikme süresi için performans odaklı diller tercih edilmiştir.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-amber-500">Veri İşleme ve Analiz</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">C++</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Python</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Veri işleme ve analiz için hem hız hem de zengin kütüphane desteği sağlayan diller seçilmiştir.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Frontend</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">React</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Tailwind CSS</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">JavaScript</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Kullanıcı arayüzü için modern ve reaktif teknolojiler kullanılmıştır.
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-green-500">Veritabanı ve İletişim</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">NoSQL</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">WebSocket</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">SSE</span>
              <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Hızlı veri erişimi ve gerçek zamanlı iletişim için optimize edilmiş teknolojiler.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
