"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import FilterButtons from "./filter-buttons"

// Données de croissance des plantes
const growthData = {
  semaine: [
    { name: "1", growth: 10 },
    { name: "2", growth: 25 },
    { name: "3", growth: 40 },
    { name: "3", growth: 55 },
    { name: "4", growth: 95 },
  ],
  mois: [
    { name: "Jan", growth: 20 },
    { name: "Fév", growth: 35 },
    { name: "Mar", growth: 50 },
    { name: "Avr", growth: 65 },
    { name: "Mai", growth: 80 },
  ],
  "aujourd'hui": [
    { name: "8h", growth: 5 },
    { name: "10h", growth: 10 },
    { name: "12h", growth: 15 },
    { name: "14h", growth: 20 },
    { name: "16h", growth: 25 },
  ],
}

export default function PlantGrowth() {
  const [activeFilter, setActiveFilter] = useState("semaine")

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Croissance des Plantes</h2>
          <FilterButtons onFilterChange={handleFilterChange} defaultFilter="semaine" />
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={growthData[activeFilter as keyof typeof growthData]}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                label={{
                  value: activeFilter === "semaine" ? "Semaines" : activeFilter === "mois" ? "Mois" : "Heures",
                  position: "insideBottom",
                  offset: -5,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                label={{ value: "Croissance (%)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="#114c3a"
                strokeWidth={2}
                dot={{ r: 4, fill: "#114c3a" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
