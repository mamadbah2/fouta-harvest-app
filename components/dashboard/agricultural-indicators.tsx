import { Droplet, Thermometer, Leaf, Eye } from "lucide-react"

interface AgriculturalIndicatorsProps {
  soilHumidity: number
  soilTemperature: number
  plantHealth: number
}

export default function AgriculturalIndicators({
  soilHumidity,
  soilTemperature,
  plantHealth,
}: AgriculturalIndicatorsProps) {
  return (
    <div className="bg-[#114c3a] rounded-xl p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="border border-white/30 rounded-lg p-3 relative">
            <div className="text-xs mb-1">Humidité du sol</div>
            <div className="flex items-center">
              <Droplet className="h-10 w-10 mr-2 text-blue-300" />
              <span className="text-5xl font-bold">{soilHumidity}</span>
              <span className="text-2xl">%</span>
            </div>
            <Eye className="absolute top-3 right-3 h-5 w-5 opacity-70" />
          </div>

          <div className="border border-white/30 rounded-lg p-3 relative">
            <div className="text-xs mb-1">Température du sol</div>
            <div className="flex items-center">
              <Thermometer className="h-10 w-10 mr-2 text-red-300" />
              <span className="text-5xl font-bold">{soilTemperature}</span>
              <span className="text-2xl">°</span>
            </div>
            <Eye className="absolute top-3 right-3 h-5 w-5 opacity-70" />
          </div>
        </div>

        <div className="bg-white text-black rounded-lg p-4 flex flex-col justify-between">
          <div className="flex items-center">
            <Eye className="h-5 w-5 mr-2" />
            <span className="font-medium">Santé des Plantes</span>
          </div>

          <div className="flex items-center justify-center flex-1">
            <Leaf className="h-16 w-16 text-green-600 mr-3" />
            <div>
              <span className="text-6xl font-bold">{plantHealth}</span>
              <span className="text-2xl">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
