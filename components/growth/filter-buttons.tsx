"use client"

import { useState } from "react"

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void
  defaultFilter?: string
}

export default function FilterButtons({ onFilterChange, defaultFilter = "semaine" }: FilterButtonsProps) {
  const [activeFilter, setActiveFilter] = useState(defaultFilter)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="inline-flex rounded-md border border-gray-200 overflow-hidden">
      <button
        className={`px-4 py-1 text-sm ${activeFilter === "mois" ? "bg-white" : "bg-white text-gray-700"}`}
        onClick={() => handleFilterChange("mois")}
      >
        Mois
      </button>
      <button
        className={`px-4 py-1 text-sm ${
          activeFilter === "semaine" ? "bg-[#114c3a] text-white" : "bg-white text-gray-700"
        }`}
        onClick={() => handleFilterChange("semaine")}
      >
        Semaine
      </button>
      <button
        className={`px-4 py-1 text-sm ${activeFilter === "aujourd'hui" ? "bg-white" : "bg-white text-gray-700"}`}
        onClick={() => handleFilterChange("aujourd'hui")}
      >
        Aujourd'hui
      </button>
    </div>
  )
}
