"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, Droplet, Leaf, Plus, ChevronRight } from "lucide-react"

// Données mockées pour les parcelles
const parcellesData = [
  {
    id: 1,
    nom: "Champ Riz Nord",
    surface: "3.2 ha",
    statut: "En croissance",
    temperature: 35,
    humidite: 80,
    sante: 76,
  },
  {
    id: 2,
    nom: "Champ Mil Est",
    surface: "2.7 ha",
    statut: "Irrigation requise",
    temperature: 42,
    humidite: 40,
    sante: 62,
  },
  {
    id: 3,
    nom: "Champ Maïs Ouest",
    surface: "4.5 ha",
    statut: "Récolte prochaine",
    temperature: 32,
    humidite: 65,
    sante: 88,
  },
]

export default function ParcellesList() {
  const [selectedParcelleId, setSelectedParcelleId] = useState<number | null>(1)

  const handleSelectParcelle = (id: number) => {
    setSelectedParcelleId(id)
    // Dans une application réelle, on pourrait émettre un événement ou utiliser un état global
    // pour informer les autres composants de la sélection
    window.dispatchEvent(new CustomEvent("parcelle-selected", { detail: { id } }))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Mes Parcelles</CardTitle>
        <Button size="sm" className="bg-[#114c3a] hover:bg-[#0d3c2d]">
          <Plus className="h-4 w-4 mr-1" />
          Ajouter
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {parcellesData.map((parcelle) => (
            <div
              key={parcelle.id}
              className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                selectedParcelleId === parcelle.id
                  ? "border-[#114c3a] bg-[#f0f9f5]"
                  : "border-gray-200 hover:border-[#114c3a] hover:bg-[#f9fdfb]"
              }`}
              onClick={() => handleSelectParcelle(parcelle.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{parcelle.nom}</h3>
                  <p className="text-sm text-gray-500">{parcelle.surface}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    parcelle.statut === "En croissance"
                      ? "bg-green-100 text-green-800"
                      : parcelle.statut === "Irrigation requise"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {parcelle.statut}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="flex items-center">
                  <Thermometer className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm">{parcelle.temperature}°C</span>
                </div>
                <div className="flex items-center">
                  <Droplet className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm">{parcelle.humidite}%</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm">{parcelle.sante}%</span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-between text-[#114c3a] hover:bg-[#f0f9f5] hover:text-[#114c3a]"
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelectParcelle(parcelle.id)
                }}
              >
                <span>Voir détail</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
