"use client"

import { useState } from "react"

type SeverityType = "urgent" | "important" | "preventive" | "all"

interface NotificationFiltersProps {
  onFilterChange?: (filter: SeverityType) => void
}

export default function NotificationFilters({ onFilterChange }: NotificationFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<SeverityType>("all")

  const handleFilterChange = (filter: SeverityType) => {
    setActiveFilter(filter)
    if (onFilterChange) {
      onFilterChange(filter)
    }
  }

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-medium">Filtres</h2>
      <div className="flex space-x-2">
        <button
          onClick={() => handleFilterChange("urgent")}
          className={`px-4 py-1.5 rounded-md text-white bg-[#D32F2F] ${
            activeFilter === "urgent" ? "ring-2 ring-offset-2 ring-[#D32F2F]" : ""
          }`}
        >
          Urgent
        </button>
        <button
          onClick={() => handleFilterChange("important")}
          className={`px-4 py-1.5 rounded-md text-white bg-[#F57C00] ${
            activeFilter === "important" ? "ring-2 ring-offset-2 ring-[#F57C00]" : ""
          }`}
        >
          Important
        </button>
        <button
          onClick={() => handleFilterChange("preventive")}
          className={`px-4 py-1.5 rounded-md text-white bg-[#388E3C] ${
            activeFilter === "preventive" ? "ring-2 ring-offset-2 ring-[#388E3C]" : ""
          }`}
        >
          Préventif
        </button>
      </div>
    </div>
  )
}
