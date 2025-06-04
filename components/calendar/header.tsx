import { BurgerToggle } from "@/components/ui/burger-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { X, Plus, Filter, FileDown, History, Calendar as CalendarIcon } from "lucide-react"

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <BurgerToggle variant="outline" size="sm" />
          </SheetTrigger>
          <SheetContent side="top" className="h-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg">Actions du calendrier</h3>
              <SheetTrigger asChild>
                <button className="rounded-full p-2 hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </button>
              </SheetTrigger>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="flex flex-col items-center h-auto py-4 gap-2">
                <Plus className="h-5 w-5 text-[#114c3a]" />
                <span className="text-xs">Ajouter activité</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center h-auto py-4 gap-2">
                <Filter className="h-5 w-5 text-[#114c3a]" />
                <span className="text-xs">Filtrer</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center h-auto py-4 gap-2">
                <FileDown className="h-5 w-5 text-[#114c3a]" />
                <span className="text-xs">Exporter</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center h-auto py-4 gap-2">
                <History className="h-5 w-5 text-[#114c3a]" />
                <span className="text-xs">Historique</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center h-auto py-4 gap-2">
                <CalendarIcon className="h-5 w-5 text-[#114c3a]" />
                <span className="text-xs">Vue annuelle</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-2xl font-bold text-[#114c3a]">Calendrier de Culture</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#114c3a] flex items-center justify-center text-white text-[8px]">
          <span>Fouta</span>
        </div>
      </div>
    </header>
  )
}