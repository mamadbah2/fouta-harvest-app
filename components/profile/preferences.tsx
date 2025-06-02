"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Preferences() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [language, setLanguage] = useState("français")
  const [theme, setTheme] = useState("light")

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Bell className="h-5 w-5 text-[#114c3a] mr-2" />
        <h3 className="text-lg font-semibold">Préférences</h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Notifications</p>
            <p className="text-sm text-gray-500">Recevoir des alertes et mises à jour</p>
          </div>
          <Switch
            checked={notificationsEnabled}
            onCheckedChange={setNotificationsEnabled}
            className="data-[state=checked]:bg-[#114c3a]"
          />
        </div>

        <div>
          <p className="font-medium mb-2">Langue préférée</p>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionner une langue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wolof">Wolof</SelectItem>
              <SelectItem value="pulaar">Pulaar</SelectItem>
              <SelectItem value="français">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Thème</p>
            <p className="text-sm text-gray-500">Choisir entre clair et sombre</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${theme === "light" ? "font-medium" : "text-gray-500"}`}>Clair</span>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              className="data-[state=checked]:bg-[#114c3a]"
            />
            <span className={`text-sm ${theme === "dark" ? "font-medium" : "text-gray-500"}`}>Sombre</span>
          </div>
        </div>
      </div>
    </div>
  )
}
