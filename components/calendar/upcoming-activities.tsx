"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Plus } from "lucide-react"

// Types pour les activités à venir
type UpcomingActivity = {
  id: number
  date: string
  title: string
  type: "planting" | "fertilizer" | "harvest" | "irrigation" | "treatment"
  parcelle: string
  priority: "high" | "medium" | "low"
}

// Données simulées pour les activités à venir
const upcomingActivities: UpcomingActivity[] = [
  {
    id: 1,
    date: "10 Juin 2025",
    title: "Semis de Maïs",
    type: "planting",
    parcelle: "Parcelle Est",
    priority: "high"
  },
  {
    id: 2,
    date: "15 Juin 2025",
    title: "Semis de Riz",
    type: "planting",
    parcelle: "Parcelle Sud",
    priority: "high"
  },
  {
    id: 3,
    date: "20 Juin 2025",
    title: "Fertilisation",
    type: "fertilizer",
    parcelle: "Toutes les parcelles",
    priority: "medium"
  },
  {
    id: 4,
    date: "5 Juillet 2025",
    title: "Traitement phytosanitaire",
    type: "treatment",
    parcelle: "Parcelle Sud",
    priority: "medium"
  },
  {
    id: 5,
    date: "15 Juillet 2025",
    title: "Irrigation",
    type: "irrigation",
    parcelle: "Parcelle Est",
    priority: "high"
  }
]

export default function UpcomingActivities() {
  // Helper pour obtenir la classe de badge en fonction du type d'activité
  const getActivityBadgeClass = (type: string) => {
    switch (type) {
      case "planting":
        return "bg-green-100 text-green-800"
      case "harvest":
        return "bg-amber-100 text-amber-800"
      case "treatment":
        return "bg-blue-100 text-blue-800"
      case "fertilizer":
        return "bg-purple-100 text-purple-800"
      case "irrigation":
        return "bg-cyan-100 text-cyan-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  
  // Helper pour obtenir le libellé du type d'activité
  const getActivityTypeLabel = (type: string) => {
    switch (type) {
      case "planting":
        return "Semis"
      case "harvest":
        return "Récolte"
      case "treatment":
        return "Traitement"
      case "fertilizer":
        return "Fertilisation"
      case "irrigation":
        return "Irrigation"
      default:
        return type
    }
  }
  
  // Helper pour obtenir la classe de badge en fonction de la priorité
  const getPriorityBadgeClass = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-amber-100 text-amber-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  
  // Helper pour obtenir le libellé de la priorité
  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Élevée"
      case "medium":
        return "Moyenne"
      case "low":
        return "Basse"
      default:
        return priority
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#114c3a]" />
            Activités à venir
          </CardTitle>
          <Button variant="outline" size="sm" className="h-8">
            <Plus className="h-3.5 w-3.5 mr-1" />
            Ajouter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <Badge className={getActivityBadgeClass(activity.type)} variant="outline">
                  {getActivityTypeLabel(activity.type)}
                </Badge>
                <Badge className={getPriorityBadgeClass(activity.priority)} variant="outline">
                  {getPriorityLabel(activity.priority)}
                </Badge>
              </div>
              <h4 className="font-medium text-gray-900">{activity.title}</h4>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                <div>{activity.parcelle}</div>
                <div>{activity.date}</div>
              </div>
            </div>
          ))}
          
          <div className="pt-2">
            <Button variant="outline" className="w-full text-sm h-9 border-dashed">
              Voir toutes les activités
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}