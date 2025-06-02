import Header from "@/components/advice/header"
import CategoryTabs from "@/components/projections/category-tabs"
import TimeRemaining from "@/components/projections/time-remaining"
import PredictionGrid from "@/components/projections/prediction-grid"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function ProjectionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <Header />

      <main className="flex-1 px-4 py-4 space-y-4 max-w-6xl mx-auto w-full">
        <CategoryTabs />
        <TimeRemaining months={2} days={5} hours={12} />
        <PredictionGrid />
      </main>

      <BottomNavigation activeItem="advice" />
    </div>
  )
}
