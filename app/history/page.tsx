import Header from "@/components/history/header"
import CultureHistory from "@/components/history/culture-history"
import DataFilters from "@/components/history/data-filters"
import HistoryTimeline from "@/components/history/history-timeline"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />

      <main className="flex-1 px-4 py-4 space-y-6 max-w-5xl mx-auto w-full">
        <DataFilters />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <CultureHistory />
          </div>
          <div className="lg:col-span-4">
            <HistoryTimeline />
          </div>
        </div>
      </main>

      <BottomNavigation activeItem="home" />
    </div>
  )
}