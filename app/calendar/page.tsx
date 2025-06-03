import Header from "@/components/calendar/header"
import CalendarView from "@/components/calendar/calendar-view"
import UpcomingActivities from "@/components/calendar/upcoming-activities"
import CultivationPeriods from "@/components/calendar/cultivation-periods"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />

      <main className="flex-1 px-4 py-4 space-y-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <CalendarView />
            <div className="mt-6">
              <CultivationPeriods />
            </div>
          </div>
          <div className="lg:col-span-4">
            <UpcomingActivities />
          </div>
        </div>
      </main>

      <BottomNavigation activeItem="home" />
    </div>
  )
}