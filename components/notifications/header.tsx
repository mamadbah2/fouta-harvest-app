import SidebarMenu from "@/components/layout/sidebar-menu"

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-[#114c3a]">Notifications</h1>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#114c3a] flex items-center justify-center text-white text-[8px]">
          <span>Fouta</span>
        </div>
        <SidebarMenu />
      </div>
    </header>
  )
}
