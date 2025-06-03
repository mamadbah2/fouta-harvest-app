"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf } from "lucide-react"
import { useState } from "react"

// Types pour les périodes de culture
type CultivationPeriod = {
  id: number
  culture: string
  variete: string
  periodes: {
    name: string
    months: number[]
    color: string
  }[]
}

// Données simulées pour les périodes de culture
const cultivationData: CultivationPeriod[] = [
  {
    id: 1,
    culture: "Riz",
    variete: "Nerica L-19",
    periodes: [
      { name: "Préparation", months: [4, 5], color: "bg-blue-200" },
      { name: "Semis", months: [5, 6], color: "bg-green-200" },
      { name: "Croissance", months: [6, 7, 8], color: "bg-emerald-200" },
      { name: "Récolte", months: [8, 9], color: "bg-amber-200" }
    ]
  },
  {
    id: 2,
    culture: "Maïs",
    variete: "Obatampa",
    periodes: [
      { name: "Préparation", months: [5], color: "bg-blue-200" },
      { name: "Semis", months: [5, 6], color: "bg-green-200" },
      { name: "Croissance", months: [6, 7, 8], color: "bg-emerald-200" },
      { name: "Récolte", months: [8, 9], color: "bg-amber-200" }
    ]
  },
  {
    id: 3,
    culture: "Mil",
    variete: "Souna 3",
    periodes: [
      { name: "Préparation", months: [4], color: "bg-blue-200" },
      { name: "Semis", months: [5], color: "bg-green-200" },
      { name: "Croissance", months: [5, 6, 7], color: "bg-emerald-200" },
      { name: "Récolte", months: [7, 8], color: "bg-amber-200" }
    ]
  },
  {
    id: 4,
    culture: "Oignons",
    variete: "Violet de Galmi",
    periodes: [
      { name: "Préparation", months: [9], color: "bg-blue-200" },
      { name: "Semis", months: [10], color: "bg-green-200" },
      { name: "Croissance", months: [10, 11, 0], color: "bg-emerald-200" },
      { name: "Récolte", months: [0, 1], color: "bg-amber-200" }
    ]
  },
  {
    id: 5,
    culture: "Tomates",
    variete: "Roma VF",
    periodes: [
      { name: "Préparation", months: [0], color: "bg-blue-200" },
      { name: "Semis", months: [1], color: "bg-green-200" },
      { name: "Croissance", months: [1, 2, 3], color: "bg-emerald-200" },
      { name: "Récolte", months: [3, 4], color: "bg-amber-200" }
    ]
  }
]

export default function CultivationPeriods() {
  const [activeTab, setActiveTab] = useState("riz")
  
  // Liste des mois pour l'affichage
  const monthNames = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"]
  
  const getCulture = (id: string) => {
    switch (id) {
      case "riz":
        return cultivationData[0]
      case "mais":
        return cultivationData[1]
      case "mil":
        return cultivationData[2]
      case "oignons":
        return cultivationData[3]
      case "tomates":
        return cultivationData[4]
      default:
        return cultivationData[0]
    }
  }
  
  const renderPeriodRow = (culture: CultivationPeriod) => {
    // Créer un tableau de 12 cellules (mois) vides
    const cells = Array(12).fill(null)
    
    // Remplir les cellules avec les périodes
    culture.periodes.forEach(period => {
      period.months.forEach(month => {
        cells[month] = period
      })
    })
    
    return (
      <div className="flex w-full border-t">
        {cells.map((cell, index) => (
          <div 
            key={index}
            className={`flex-1 h-8 border-r flex items-center justify-center text-xs ${cell ? cell.color : "bg-white"}`}
          >
            {cell ? cell.name.substring(0, 3) : ""}
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Leaf className="h-5 w-5 text-[#114c3a]" />
            Périodes de Culture
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5">
            <TabsTrigger value="riz">Riz</TabsTrigger>
            <TabsTrigger value="mais">Maïs</TabsTrigger>
            <TabsTrigger value="mil">Mil</TabsTrigger>
            <TabsTrigger value="oignons">Oignons</TabsTrigger>
            <TabsTrigger value="tomates">Tomates</TabsTrigger>
          </TabsList>
          
          {["riz", "mais", "mil", "oignons", "tomates"].map((id) => (
            <TabsContent key={id} value={id} className="mt-4">
              <div className="space-y-6">
                <div className="text-sm">
                  <div className="font-medium">{getCulture(id).culture}</div>
                  <div className="text-gray-500">{getCulture(id).variete}</div>
                </div>
                
                <div className="overflow-x-auto">
                  <div className="min-w-full border rounded-md">
                    {/* En-tête des mois */}
                    <div className="flex w-full bg-gray-50">
                      {monthNames.map((month, index) => (
                        <div key={index} className="flex-1 h-8 border-r flex items-center justify-center text-xs font-medium">
                          {month}
                        </div>
                      ))}
                    </div>
                    
                    {/* Périodes de culture */}
                    {renderPeriodRow(getCulture(id))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  {getCulture(id).periodes.map((period, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-3 h-3 ${period.color} rounded-full`}></div>
                      <span className="text-xs">{period.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}