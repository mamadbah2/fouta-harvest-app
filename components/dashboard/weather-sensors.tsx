import { Target, Cloud, Sun } from "lucide-react"

interface WeatherSensorsProps {
  activeSensors: number
  temperature: number
  weatherCondition: string
}

export default function WeatherSensors({ activeSensors, temperature, weatherCondition }: WeatherSensorsProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <Target className="h-12 w-12 mr-3" />
          <div>
            <div className="text-3xl font-bold">{activeSensors}</div>
            <div className="text-gray-700">Capteurs Actifs</div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative h-12 w-12 mr-3">
            <Sun className="h-8 w-8 text-yellow-400 absolute top-0 left-0" />
            <Cloud className="h-8 w-8 text-gray-300 absolute bottom-0 right-0" />
          </div>
          <div>
            <div className="text-3xl font-bold">{temperature}°</div>
            <div className="text-gray-700">{weatherCondition}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
