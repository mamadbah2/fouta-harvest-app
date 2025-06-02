"use client"

import type React from "react"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  History,
  Calendar,
  FlaskRoundIcon as Flask,
  Tractor,
  Download,
  Upload,
  Palette,
  Globe,
  Lock,
  HelpCircle,
  Mail,
  Book,
  LogOut,
  MapPin,
  User,
} from "lucide-react"

export default function SidebarMenu() {
  const [theme, setTheme] = useState("light")
  const [language, setLanguage] = useState("français")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-1">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-[#e8f0eb] overflow-y-auto">
        <div className="h-full flex flex-col">
          {/* En-tête utilisateur */}
          <div className="flex items-center space-x-4 py-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#114c3a]">
              <Image src="/placeholder.svg?height=100&width=100" alt="Bobo Bah" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Bobo Bah</h3>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-3 w-3 mr-1" />
                <span>Dakar</span>
              </div>
              <div className="flex items-center text-sm text-[#114c3a]">
                <User className="h-3 w-3 mr-1" />
                <span>Agriculteur</span>
              </div>
            </div>
          </div>

          <Separator className="my-2" />

          {/* Navigation secondaire */}
          <div className="py-2">
            <h4 className="text-sm font-medium text-gray-500 mb-2 px-1">NAVIGATION</h4>
            <nav className="space-y-1">
              <NavItem href="/history" icon={History} label="Historique des cultures" />
              <NavItem href="/calendar" icon={Calendar} label="Calendrier de culture" />
              <NavItem href="/soil-analysis" icon={Flask} label="Analyses du sol" />
              <NavItem href="/equipment" icon={Tractor} label="Équipements connectés" />
              <NavItem href="/import" icon={Download} label="Importer mes données" />
              <NavItem href="/export" icon={Upload} label="Exporter mes données" />
            </nav>
          </div>

          <Separator className="my-2" />

          {/* Paramètres rapides */}
          <div className="py-2">
            <h4 className="text-sm font-medium text-gray-500 mb-2 px-1">PARAMÈTRES</h4>
            <div className="space-y-3 px-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Palette className="h-4 w-4 mr-3 text-[#114c3a]" />
                  <span>Apparence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs ${theme === "light" ? "font-medium" : "text-gray-500"}`}>Clair</span>
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    className="data-[state=checked]:bg-[#114c3a]"
                  />
                  <span className={`text-xs ${theme === "dark" ? "font-medium" : "text-gray-500"}`}>Sombre</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-3 text-[#114c3a]" />
                  <span>Langue</span>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-28 h-8">
                    <SelectValue placeholder="Langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="français">Français</SelectItem>
                    <SelectItem value="wolof">Wolof</SelectItem>
                    <SelectItem value="pulaar">Pulaar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-3 text-[#114c3a]" />
                  <span>Double authentification</span>
                </div>
                <Switch className="data-[state=checked]:bg-[#114c3a]" />
              </div>
            </div>
          </div>

          <Separator className="my-2" />

          {/* Aide & support */}
          <div className="py-2">
            <h4 className="text-sm font-medium text-gray-500 mb-2 px-1">AIDE & SUPPORT</h4>
            <nav className="space-y-1">
              <NavItem href="/faq" icon={HelpCircle} label="FAQ" />
              <NavItem href="/contact" icon={Mail} label="Contacter le support" />
              <NavItem href="/guide" icon={Book} label="Guide d'utilisation" />
            </nav>
          </div>

          <div className="mt-auto pt-4">
            <Separator className="mb-4" />
            <Button
              variant="outline"
              className="w-full border-[#114c3a] text-[#114c3a] hover:bg-[#114c3a] hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Se déconnecter
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
}

function NavItem({ href, icon: Icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center px-1 py-2 text-gray-700 hover:bg-white hover:text-[#114c3a] rounded-md transition-colors"
    >
      <Icon className="h-4 w-4 mr-3 text-[#114c3a]" />
      <span>{label}</span>
    </Link>
  )
}
