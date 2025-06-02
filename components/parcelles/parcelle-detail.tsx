"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Wheat,
  Calendar,
  Cpu,
  Thermometer,
  Droplet,
  Sprout,
  FlaskRoundIcon as Flask,
  Edit,
  Trash2,
  History,
} from "lucide-react"

// Données mockées pour les détails des parcelles
const parcellesDetailData = {
  1: {
    id: 1,
    nom: "Champ Riz Nord",
    emplacement: "Matam, Sénégal",
    typeCulture: "Riz",
    dateDebut: "15/03/2023",
    capteurs: { nombre: 8, types: ["Température", "Humidité", "PH", "Croissance"] },
    donnees: {
      temperature: 35,
      humidite: 80,
      croissance: 65,
      ph: 6.8,
    },
  },
  2: {
    id: 2,
    nom: "Champ Mil Est",
    emplacement: "Podor, Sénégal",
    typeCulture: "Mil",
    dateDebut: "02/04/2023",
    capteurs: { nombre: 6, types: ["Température", "Humidité", "PH"] },
    donnees: {
      temperature: 42,
      humidite: 40,
      croissance: 45,
      ph: 7.2,
    },
  },
  3: {
    id: 3,
    nom: "Champ Maïs Ouest",
    emplacement: "Bakel, Sénégal",
    typeCulture: "Maïs",
    dateDebut: "10/02/2023",
    capteurs: { nombre: 10, types: ["Température", "Humidité", "PH", "Croissance", "Luminosité"] },
    donnees: {
      temperature: 32,
      humidite: 65,
      croissance: 80,
      ph: 6.5,
    },
  },
}

export default function ParcelleDetail() {
  const [selectedParcelleId, setSelectedParcelleId] = useState<number>(1)
  const [parcelleDetail, setParcelleDetail] = useState(parcellesDetailData[1])

  useEffect(() => {
    const handleParcelleSelected = (event: Event) => {
      const customEvent = event as CustomEvent
      const id = customEvent.detail.id
      setSelectedParcelleId(id)
      setParcelleDetail(parcellesDetailData[id as keyof typeof parcellesDetailData])
    }

    window.addEventListener("parcelle-selected", handleParcelleSelected)

    return () => {
      window.removeEventListener("parcelle-selected", handleParcelleSelected)
    }
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Détails de la parcelle</CardTitle>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="border-[#114c3a] text-[#114c3a]">
            <Edit className="h-4 w-4 mr-1" />
            Modifier
          </Button>
          <Button size="sm" variant="destructive">
            <Trash2 className="h-4 w-4 mr-1" />
            Supprimer
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{parcelleDetail.nom}</h2>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{parcelleDetail.emplacement}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Wheat className="h-5 w-5 text-[#114c3a] mr-2" />
              <div>
                <p className="text-sm text-gray-500">Type de culture</p>
                <p className="font-medium">{parcelleDetail.typeCulture}</p>
              </div>
            </div>

            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-[#114c3a] mr-2" />
              <div>
                <p className="text-sm text-gray-500">Date de début</p>
                <p className="font-medium">{parcelleDetail.dateDebut}</p>
              </div>
            </div>

            <div className="flex items-center">
              <Cpu className="h-5 w-5 text-[#114c3a] mr-2" />
              <div>
                <p className="text-sm text-gray-500">Capteurs</p>
                <p className="font-medium">{parcelleDetail.capteurs.nombre} capteurs</p>
                <p className="text-xs text-gray-500">{parcelleDetail.capteurs.types.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Dernières données</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f0f9f5] p-3 rounded-lg flex items-center">
                <Thermometer className="h-8 w-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Température</p>
                  <p className="text-xl font-bold">{parcelleDetail.donnees.temperature}°C</p>
                </div>
              </div>

              <div className="bg-[#f0f9f5] p-3 rounded-lg flex items-center">
                <Droplet className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Humidité</p>
                  <p className="text-xl font-bold">{parcelleDetail.donnees.humidite}%</p>
                </div>
              </div>

              <div className="bg-[#f0f9f5] p-3 rounded-lg flex items-center">
                <Sprout className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Croissance</p>
                  <p className="text-xl font-bold">{parcelleDetail.donnees.croissance}%</p>
                </div>
              </div>

              <div className="bg-[#f0f9f5] p-3 rounded-lg flex items-center">
                <Flask className="h-8 w-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">PH du sol</p>
                  <p className="text-xl font-bold">{parcelleDetail.donnees.ph}</p>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full bg-[#114c3a] hover:bg-[#0d3c2d]">
            <History className="h-4 w-4 mr-2" />
            Voir historique complet
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
