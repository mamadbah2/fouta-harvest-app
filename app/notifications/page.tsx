import Header from "@/components/notifications/header"
import NotificationFilters from "@/components/notifications/notification-filters"
import NotificationList from "@/components/notifications/notification-list"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <Header />

      <main className="flex-1 px-4 py-4 space-y-4 max-w-3xl mx-auto w-full">
        <NotificationFilters />
        <NotificationList />
      </main>

      <BottomNavigation activeItem="notifications" />
    </div>
  )
}
