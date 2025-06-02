import { Home, BarChart2, BookOpen, Bell, User } from "lucide-react"
import Link from "next/link"

interface BottomNavigationProps {
  activeItem: string
}

export default function BottomNavigation({ activeItem }: BottomNavigationProps) {
  const navItems = [
    { id: "home", label: "Accueil", icon: Home, href: "/parcelles" },
    { id: "dashboard", label: "Tableau de bord", icon: BarChart2, href: "/growth" },
    { id: "advice", label: "Conseils", icon: BookOpen, href: "/advice" },
    { id: "notifications", label: "Notification", icon: Bell, href: "/notifications" },
    { id: "profile", label: "Profil", icon: User, href: "/profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#114c3a] text-white">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = activeItem === item.id
          const Icon = item.icon

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center py-2 px-2 ${isActive ? "text-white" : "text-white/70"}`}
            >
              {isActive && item.id === "home" && (
                <div className="absolute -top-5 bg-white rounded-full p-3">
                  <Icon className="h-5 w-5 text-[#114c3a]" />
                </div>
              )}
              {(!isActive || item.id !== "home") && <Icon className="h-5 w-5" />}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
