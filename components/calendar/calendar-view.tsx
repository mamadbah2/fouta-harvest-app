"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { addMonths, format, subMonths } from "date-fns"
import { fr } from "date-fns/locale"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Types pour les événements du calendrier
type CalendarEvent = {
  id: number
  date: Date
  title: string
  type: "planting" | "fertilizer" | "harvest" | "irrigation" | "treatment"
  description: string
  parcelle: string
}

// Données simulées pour les événements du calendrier
const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    date: new Date(2025, 5, 15), // 15 juin 2025
    title: "Semis de Riz",
    type: "planting",
    description: "Semis de la variété Nerica L-19 sur la parcelle Sud",
    parcelle: "Parcelle Sud"
  },
  {
    id: 2,
    date: new Date(2025, 5, 10), // 10 juin 2025
    title: "Semis de Maïs",
    type: "planting",
    description: "Semis de la variété Obatampa sur la parcelle Est",
    parcelle: "Parcelle Est"
  },
  {
    id: 3,
    date: new Date(2025, 5, 20), // 20 juin 2025
    title: "Fertilisation NPK",
    type: "fertilizer",
    description: "Application d'engrais NPK sur toutes les parcelles",
    parcelle: "Toutes les parcelles"
  },
  {
    id: 4,
    date: new Date(2025, 6, 5), // 5 juillet 2025
    title: "Traitement phytosanitaire",
    type: "treatment",
    description: "Application de pesticides sur la parcelle Sud (Riz)",
    parcelle: "Parcelle Sud"
  },
  {
    id: 5,
    date: new Date(2025, 6, 15), // 15 juillet 2025
    title: "Irrigation",
    type: "irrigation",
    description: "Irrigation de la parcelle Est (Maïs)",
    parcelle: "Parcelle Est"
  },
  {
    id: 6,
    date: new Date(2025, 8, 20), // 20 septembre 2025
    title: "Récolte de Riz",
    type: "harvest",
    description: "Récolte de la variété Nerica L-19 sur la parcelle Sud",
    parcelle: "Parcelle Sud"
  },
  {
    id: 7,
    date: new Date(2025, 8, 15), // 15 septembre 2025
    title: "Récolte de Maïs",
    type: "harvest",
    description: "Récolte de la variété Obatampa sur la parcelle Est",
    parcelle: "Parcelle Est"
  }
]

export default function CalendarView() {
  const [date, setDate] = useState<Date>(new Date())
  const [month, setMonth] = useState<Date>(new Date())
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  // Helper pour obtenir les événements d'une date spécifique
  const getEventsForDate = (date: Date) => {
    return calendarEvents.filter(
      (event) => 
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    )
  }
  
  // Fonction de rendu pour afficher les points pour les événements
  const renderEventMarkers = (day: Date) => {
    const events = getEventsForDate(day)
    
    if (events.length === 0) return null
    
    return (
      <div className="flex justify-center mt-1 gap-0.5">
        {events.slice(0, 3).map((event, i) => (
          <div 
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${getEventColor(event.type)}`}
          />
        ))}
        {events.length > 3 && (
          <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
        )}
      </div>
    )
  }
  
  // Helper pour obtenir la couleur en fonction du type d'événement
  const getEventColor = (type: string) => {
    switch (type) {
      case "planting":
        return "bg-green-500"
      case "harvest":
        return "bg-amber-500"
      case "treatment":
        return "bg-blue-500"
      case "fertilizer":
        return "bg-purple-500"
      case "irrigation":
        return "bg-cyan-500"
      default:
        return "bg-gray-500"
    }
  }
  
  // Helper pour obtenir la classe de badge en fonction du type d'événement
  const getEventBadgeClass = (type: string) => {
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
  
  // Helper pour obtenir le libellé du type d'événement
  const getEventTypeLabel = (type: string) => {
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
  
  const handleDayClick = (day: Date) => {
    const events = getEventsForDate(day)
    if (events.length === 1) {
      setSelectedEvent(events[0])
      setIsDialogOpen(true)
    } else if (events.length > 1) {
      // Afficher tous les événements pour cette date dans la boîte de dialogue
      setSelectedEvent(events[0])
      setIsDialogOpen(true)
    }
  }
  
  const nextMonth = () => {
    setMonth(addMonths(month, 1))
  }
  
  const prevMonth = () => {
    setMonth(subMonths(month, 1))
  }
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-[#114c3a]" />
            Calendrier de Cultures
          </CardTitle>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="font-medium">
              {format(month, 'MMMM yyyy', { locale: fr })}
            </div>
            <Button variant="outline" size="sm" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            if (newDate) {
              setDate(newDate)
              handleDayClick(newDate)
            }
          }}
          month={month}
          onMonthChange={setMonth}
          className="rounded-md border"
          // n
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-xs">Semis</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="text-xs">Récolte</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-purple-500" />
            <span className="text-xs">Fertilisation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-xs">Traitement</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-cyan-500" />
            <span className="text-xs">Irrigation</span>
          </div>
        </div>
      </CardContent>

      {/* Dialogue pour afficher les détails de l'événement */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedEvent.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-2 pt-2">
                  <Badge className={getEventBadgeClass(selectedEvent.type)} variant="outline">
                    {getEventTypeLabel(selectedEvent.type)}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {format(selectedEvent.date, 'dd MMMM yyyy', { locale: fr })}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-sm font-medium">Description</h4>
                  <p className="text-sm text-gray-600">{selectedEvent.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Parcelle</h4>
                  <p className="text-sm text-gray-600">{selectedEvent.parcelle}</p>
                </div>
                
                {/* Événements multiples sur la même date */}
                {getEventsForDate(selectedEvent.date).length > 1 && (
                  <div>
                    <h4 className="text-sm font-medium mt-4">Autres événements ce jour</h4>
                    <ul className="mt-2 space-y-2">
                      {getEventsForDate(selectedEvent.date)
                        .filter(e => e.id !== selectedEvent.id)
                        .map(event => (
                          <li key={event.id} className="flex items-center gap-2">
                            <Badge className={getEventBadgeClass(event.type)} variant="outline">
                              {getEventTypeLabel(event.type)}
                            </Badge>
                            <span className="text-sm">{event.title}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-end mt-4">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Fermer
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}