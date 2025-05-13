import { Code, Database, Lock, Server, Share } from "lucide-react"

export default function Slide8() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          API ve Entegrasyon
        </h2>
        <p className="text-gray-400 mt-2">Dış sistemlerle entegrasyon ve geliştirici araçları</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-red-500/20 mr-4">
              <Code className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">API Özellikleri</h3>
          </div>

          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">REST API</h4>
              <p className="text-gray-400 text-sm">
                Standart HTTP metodları ile erişilebilen, JSON formatında veri döndüren RESTful API. Sayfalama,
                filtreleme ve sıralama özellikleri.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">WebSocket API</h4>
              <p className="text-gray-400 text-sm">
                Gerçek zamanlı veri akışı için WebSocket bağlantıları. Deprem verileri anlık olarak istemcilere
                iletilebilir.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Server-Sent Events (SSE)</h4>
              <p className="text-gray-400 text-sm">
                Tek yönlü gerçek zamanlı veri akışı için SSE desteği. WebSocket'e alternatif olarak daha basit
                entegrasyonlar için.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Webhook Bildirimleri</h4>
              <p className="text-gray-400 text-sm">
                Belirli olaylar gerçekleştiğinde (yeni deprem, tsunami uyarısı vb.) önceden tanımlanmış URL'lere HTTP
                POST istekleri gönderme.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-amber-500/20 mr-4">
              <Database className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold">Veri Formatları</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">JSON</h4>
              <div className="bg-black/50 p-3 rounded text-xs md:text-sm font-mono text-gray-300 overflow-x-auto">
                {`{
  "id": "eq2024052301",
  "time": "2024-05-23T14:32:18Z",
  "magnitude": 4.7,
  "depth": 12.5,
  "location": {
    "lat": 38.4217,
    "lon": 27.1356,
    "name": "İzmir, Türkiye"
  },
  "source": "AFAD",
  "felt": true,
  "tsunami": false
}`}
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">GeoJSON</h4>
              <div className="bg-black/50 p-3 rounded text-xs md:text-sm font-mono text-gray-300 overflow-x-auto">
                {`{
  "type": "Feature",
  "properties": {
    "id": "eq2024052301",
    "time": "2024-05-23T14:32:18Z",
    "magnitude": 4.7,
    "depth": 12.5,
    "source": "AFAD"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [27.1356, 38.4217]
  }
}`}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-blue-500/20 mr-4">
              <Lock className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Güvenlik ve Erişim Kontrolü</h3>
          </div>

          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">API Anahtarları</h4>
              <p className="text-gray-400 text-sm">
                Geliştirici portalı üzerinden alınabilen API anahtarları ile kimlik doğrulama. Farklı erişim
                seviyelerine göre anahtar tipleri.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Rate Limiting</h4>
              <p className="text-gray-400 text-sm">
                API kullanımını sınırlandırma ve adil kullanım politikası. Anahtar tipine göre farklı limit seviyeleri.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">CORS Politikası</h4>
              <p className="text-gray-400 text-sm">
                Cross-Origin Resource Sharing politikası ile web uygulamalarının API'ye güvenli erişimi.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-green-500/20 mr-4">
              <Share className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Entegrasyon Örnekleri</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">JavaScript</h4>
              <div className="bg-black/50 p-3 rounded text-xs md:text-sm font-mono text-gray-300 overflow-x-auto">
                {`// Fetch son depremleri alma
fetch('https://api.tdis.org/v1/earthquakes/recent', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Python</h4>
              <div className="bg-black/50 p-3 rounded text-xs md:text-sm font-mono text-gray-300 overflow-x-auto">
                {`import requests

# Belirli bir bölgedeki depremleri alma
url = "https://api.tdis.org/v1/earthquakes"
params = {
    "min_magnitude": 4.0,
    "lat": 39.925533,
    "lon": 32.866287,
    "radius": 100,
    "start_time": "2024-01-01T00:00:00Z"
}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(data)`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500/20 to-amber-500/20 p-6 rounded-lg border border-gray-700 mt-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-gray-900 mr-4">
            <Server className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Geliştirici Portalı</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Geliştiriciler için kapsamlı bir portal sunarak API kullanımını kolaylaştırıyoruz. Portal üzerinden API
          anahtarı alabilir, dokümantasyona erişebilir ve API kullanımınızı izleyebilirsiniz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">API Dokümantasyonu</h4>
            <p className="text-gray-400 text-sm">Swagger/OpenAPI ile interaktif dokümantasyon</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Kullanım İstatistikleri</h4>
            <p className="text-gray-400 text-sm">API çağrılarınızı ve kullanım limitlerini izleme</p>
          </div>
          <div className="bg-gray-900/70 p-3 rounded-md">
            <h4 className="font-medium text-white mb-1">Örnek Kodlar</h4>
            <p className="text-gray-400 text-sm">Farklı dillerde entegrasyon örnekleri</p>
          </div>
        </div>
      </div>
    </div>
  )
}
