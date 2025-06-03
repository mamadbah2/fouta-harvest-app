"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardList } from "lucide-react"

// Données simulées pour la timeline
const timelineData = [
  {
    id: 1,
    date: "20 Sept 2024",
    title: "Récolte Riz Nerica",
    description: "Récolte de la parcelle Sud terminée avec succès",
    type: "harvest",
  },
  {
    id: 2,
    date: "15 Sept 2024",
    title: "Récolte Maïs",
    description: "Récolte de la variété Obatampa sur la parcelle Est",
    type: "harvest",
  },
  {
    id: 3,
    date: "25 Août 2024",
    title: "Récolte Mil",
    description: "Récolte de la variété Souna 3 sur la parcelle Ouest",
    type: "harvest",
  },
  {
    id: 4,
    date: "05 Juil 2024",
    title: "Traitement phytosanitaire",
    description: "Application de pesticides sur la parcelle Sud (Riz)",
    type: "treatment",
  },
  {
    id: 5,
    date: "20 Juin 2024",
    title: "Fertilisation",
    description: "Application d'engrais NPK sur toutes les parcelles",
    type: "fertilizer",
  },
  {
    id: 6,
    date: "10 Juin 2024",
    title: "Semis de Maïs",
    description: "Semis de la variété Obatampa sur la parcelle Est",
    type: "planting",
  },
  {
    id: 7,
    date: "15 Mai 2024",
    title: "Semis de Riz",
    description: "Semis de la variété Nerica L-19 sur la parcelle Sud",
    type: "planting",
  },
  {
    id: 8,
    date: "05 Mai 2024",
    title: "Semis de Mil",
    description: "Semis de la variété Souna 3 sur la parcelle Ouest",
    type: "planting",
  },
];

export default function HistoryTimeline() {
  const getEventColor = (type: string) => {
    switch (type) {
      case "planting":
        return "bg-green-100 text-green-800"
      case "harvest":
        return "bg-amber-100 text-amber-800"
      case "treatment":
        return "bg-blue-100 text-blue-800"
      case "fertilizer":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEventType = (type: string) => {
    switch (type) {
      case "planting":
        return "Semis"
      case "harvest":
        return "Récolte"
      case "treatment":
        return "Traitement"
      case "fertilizer":
        return "Fertilisation"
      default:
        return type
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-[#114c3a]" />
          Chronologie des activités
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6 border-l border-gray-200">
          {timelineData.map((event, index) => (
            <div key={event.id} className={`mb-8 ${index === timelineData.length - 1 ? "" : ""}`}>
              <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-white bg-[#114c3a]"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500">{event.date}</time>
              <h3 className="text-base font-semibold text-gray-900 mt-2 flex items-center gap-2">
                {event.title}
                <Badge className={getEventColor(event.type)} variant="outline">
                  {getEventType(event.type)}
                </Badge>
              </h3>
              <p className="mb-4 text-sm text-gray-600 mt-1">{event.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}