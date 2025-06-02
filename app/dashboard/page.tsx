import Header from "@/components/dashboard/header"
import WeatherSensors from "@/components/dashboard/weather-sensors"
import AgriculturalIndicators from "@/components/dashboard/agricultural-indicators"
import FieldView from "@/components/dashboard/field-view"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-16">
      <Header username="Bobo Bah" location="Dakar" />

      <main className="flex-1 px-4 py-4 space-y-4 max-w-5xl mx-auto w-full">
        <WeatherSensors activeSensors={12} temperature={37} weatherCondition="Partiellement nuageux" />
        <AgriculturalIndicators soilHumidity={80} soilTemperature={50} plantHealth={75} />
        <FieldView />
      </main>

      <BottomNavigation activeItem="dashboard" />
    </div>
  )
}
