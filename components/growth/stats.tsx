"use client"

import { useState } from "react"
import { Beaker, Droplet, Thermometer, Flame } from "lucide-react"
import FilterButtons from "./filter-buttons"

// Données des statistiques
const statsData = {
  semaine: [
    { id: 1, name: "PH mesure", value: "12", icon: Beaker, color: "bg-blue-100 text-blue-600", updatedDays: 3 },
    { id: 2, name: "Humidité", value: "7", icon: Droplet, color: "bg-blue-100 text-blue-600", updatedDays: 6 },
    { id: 3, name: "Température", value: "50", icon: Thermometer, color: "bg-red-100 text-red-600", updatedDays: 1 },
    { id: 4, name: "Engrais", value: "2 kg", icon: Flame, color: "bg-orange-100 text-orange-600", updatedDays: 3 },
  ],
  mois: [
    { id: 1, name: "PH mesure", value: "14", icon: Beaker, color: "bg-blue-100 text-blue-600", updatedDays: 10 },
    { id: 2, name: "Humidité", value: "8", icon: Droplet, color: "bg-blue-100 text-blue-600", updatedDays: 15 },
    { id: 3, name: "Température", value: "45", icon: Thermometer, color: "bg-red-100 text-red-600", updatedDays: 8 },
    { id: 4, name: "Engrais", value: "5 kg", icon: Flame, color: "bg-orange-100 text-orange-600", updatedDays: 12 },
  ],
  "aujourd'hui": [
    { id: 1, name: "PH mesure", value: "11", icon: Beaker, color: "bg-blue-100 text-blue-600", updatedDays: 0 },
    { id: 2, name: "Humidité", value: "6", icon: Droplet, color: "bg-blue-100 text-blue-600", updatedDays: 0 },
    { id: 3, name: "Température", value: "48", icon: Thermometer, color: "bg-red-100 text-red-600", updatedDays: 0 },
    { id: 4, name: "Engrais", value: "1 kg", icon: Flame, color: "bg-orange-100 text-orange-600", updatedDays: 0 },
  ],
}

export default function Stats() {
  const [activeFilter, setActiveFilter] = useState("semaine")

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Stats</h2>
          <FilterButtons onFilterChange={handleFilterChange} defaultFilter="semaine" />
        </div>

        <div className="space-y-1">
          {statsData[activeFilter as keyof typeof statsData].map((stat) => (
            <div key={stat.id} className="flex items-center py-3 border-b border-gray-100">
              <div className={`p-2 rounded-md mr-3 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="font-medium">{stat.name}</span>
              </div>
              <div className="text-right">
                <div className="font-bold">{stat.value}</div>
                <div className="text-xs text-gray-500">
                  {stat.updatedDays === 0
                    ? "aujourd'hui"
                    : stat.updatedDays === 1
                      ? "il y a 1 jour"
                      : `il y a ${stat.updatedDays} jours`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
