import Header from "@/components/profile/header"
import UserIdentity from "@/components/profile/user-identity"
import PersonalInfo from "@/components/profile/personal-info"
import Preferences from "@/components/profile/preferences"
import Security from "@/components/profile/security"
import AccountManagement from "@/components/profile/account-management"
import BottomNavigation from "@/components/dashboard/bottom-navigation"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />

      <main className="flex-1 px-4 py-4 space-y-4 max-w-5xl mx-auto w-full">
        <UserIdentity
          name="Bobo Bah"
          location="Dakar, Sénégal"
          role="Agriculteur"
          photoUrl="/placeholder.svg?height=100&width=100"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalInfo email="bobo.bah@example.com" phone="+221 77 123 45 67" registrationDate="15/03/2023" />
          <Preferences />
          <Security />
          <AccountManagement />
        </div>
      </main>

      <BottomNavigation activeItem="profile" />
    </div>
  )
}
