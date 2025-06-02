import Header from "@/components/advice/header"
import CategoryTabs from "@/components/advice/category-tabs"
import AdviceList from "@/components/advice/advice-list"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function AdvicePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <Header />

      <main className="flex-1 px-4 py-4 space-y-4 max-w-5xl mx-auto w-full">
        <CategoryTabs />
        <AdviceList />
      </main>

      <BottomNavigation activeItem="advice" />
    </div>
  )
}
