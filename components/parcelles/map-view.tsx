"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// Données mockées pour les marqueurs de la carte
const mapMarkers = {
  1: { top: "30%", left: "40%", label: "Champ Riz Nord" },
  2: { top: "50%", left: "70%", label: "Champ Mil Est" },
  3: { top: "65%", left: "25%", label: "Champ Maïs Ouest" },
}

export default function MapView() {
  const [selectedParcelleId, setSelectedParcelleId] = useState<number>(1)
  const [activeMarker, setActiveMarker] = useState(mapMarkers[1])

  useEffect(() => {
    const handleParcelleSelected = (event: Event) => {
      const customEvent = event as CustomEvent
      const id = customEvent.detail.id
      setSelectedParcelleId(id)
      setActiveMarker(mapMarkers[id as keyof typeof mapMarkers])
    }

    window.addEventListener("parcelle-selected", handleParcelleSelected)

    return () => {
      window.removeEventListener("parcelle-selected", handleParcelleSelected)
    }
  }, [])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Carte des parcelles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
          {/* Image de carte simulée */}
          <div className="absolute inset-0 bg-[#e8f5e9]">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="w-full h-full relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Carte des parcelles"
                  fill
                  className="object-cover"
                />

                {/* Marqueurs de parcelles */}
                {Object.entries(mapMarkers).map(([id, marker]) => (
                  <div
                    key={id}
                    className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                      Number.parseInt(id) === selectedParcelleId ? "z-10" : ""
                    }`}
                    style={{ top: marker.top, left: marker.left }}
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("parcelle-selected", { detail: { id: Number.parseInt(id) } }),
                      )
                    }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        Number.parseInt(id) === selectedParcelleId
                          ? "bg-[#114c3a] text-white"
                          : "bg-white border-2 border-[#114c3a] text-[#114c3a]"
                      }`}
                    >
                      {id}
                    </div>
                    {Number.parseInt(id) === selectedParcelleId && (
                      <div className="absolute top-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                        {marker.label}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Cliquez sur un marqueur pour voir les détails de la parcelle
        </p>
      </CardContent>
    </Card>
  )
}
