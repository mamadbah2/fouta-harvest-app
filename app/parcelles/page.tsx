import Header from "@/components/parcelles/header"
import ParcellesList from "@/components/parcelles/parcelles-list"
import ParcelleDetail from "@/components/parcelles/parcelle-detail"
import MapView from "@/components/parcelles/map-view"
import HistoriqueData from "@/components/parcelles/historique-data"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function ParcellesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />

      <main className="flex-1 p-4 space-y-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <ParcellesList />
            <HistoriqueData />
          </div>
          <div className="space-y-4">
            <ParcelleDetail />
            <MapView />
          </div>
        </div>
      </main>

      <BottomNavigation activeItem="home" />
    </div>
  )
}
