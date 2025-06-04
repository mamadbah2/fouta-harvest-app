export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-[#114c3a]">Mes Parcelles</h1>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#114c3a] flex items-center justify-center text-white text-[8px]">
          <span>Fouta</span>
        </div>
      </div>
    </header>
  )
}
