import Header from "@/components/growth/header"
import PlantGrowth from "@/components/growth/plant-growth"
import Stats from "@/components/growth/stats"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function GrowthDashboard() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <Header />

      <main className="flex-1 px-4 py-4 space-y-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PlantGrowth />
          <Stats />
        </div>
      </main>

      <BottomNavigation activeItem="dashboard" />
    </div>
  )
}
