"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Download } from "lucide-react"

// Données mockées pour les graphiques
const historiqueData = {
  1: {
    jour: [
      { heure: "00:00", temperature: 28, humidite: 75, croissance: 64.5, sante: 75 },
      { heure: "04:00", temperature: 26, humidite: 78, croissance: 64.7, sante: 75 },
      { heure: "08:00", temperature: 30, humidite: 70, croissance: 64.9, sante: 76 },
      { heure: "12:00", temperature: 35, humidite: 65, croissance: 65.0, sante: 76 },
      { heure: "16:00", temperature: 33, humidite: 68, croissance: 65.2, sante: 76 },
      { heure: "20:00", temperature: 30, humidite: 72, croissance: 65.3, sante: 76 },
    ],
    semaine: [
      { jour: "Lun", temperature: 32, humidite: 70, croissance: 62, sante: 74 },
      { jour: "Mar", temperature: 33, humidite: 72, croissance: 63, sante: 74 },
      { jour: "Mer", temperature: 34, humidite: 75, croissance: 64, sante: 75 },
      { jour: "Jeu", temperature: 35, humidite: 78, croissance: 65, sante: 76 },
      { jour: "Ven", temperature: 33, humidite: 80, croissance: 66, sante: 76 },
      { jour: "Sam", temperature: 32, humidite: 82, croissance: 67, sante: 76 },
      { jour: "Dim", temperature: 31, humidite: 80, croissance: 68, sante: 76 },
    ],
    mois: [
      { semaine: "S1", temperature: 30, humidite: 65, croissance: 50, sante: 70 },
      { semaine: "S2", temperature: 32, humidite: 70, croissance: 55, sante: 72 },
      { semaine: "S3", temperature: 34, humidite: 75, croissance: 60, sante: 74 },
      { semaine: "S4", temperature: 35, humidite: 80, croissance: 65, sante: 76 },
    ],
  },
  2: {
    jour: [
      { heure: "00:00", temperature: 38, humidite: 35, croissance: 44.5, sante: 61 },
      { heure: "04:00", temperature: 36, humidite: 38, croissance: 44.7, sante: 61 },
      { heure: "08:00", temperature: 40, humidite: 30, croissance: 44.9, sante: 62 },
      { heure: "12:00", temperature: 45, humidite: 25, croissance: 45.0, sante: 62 },
      { heure: "16:00", temperature: 43, humidite: 28, croissance: 45.2, sante: 62 },
      { heure: "20:00", temperature: 40, humidite: 32, croissance: 45.3, sante: 62 },
    ],
    semaine: [
      { jour: "Lun", temperature: 42, humidite: 30, croissance: 42, sante: 60 },
      { jour: "Mar", temperature: 43, humidite: 32, croissance: 43, sante: 60 },
      { jour: "Mer", temperature: 44, humidite: 35, croissance: 44, sante: 61 },
      { jour: "Jeu", temperature: 45, humidite: 38, croissance: 45, sante: 62 },
      { jour: "Ven", temperature: 43, humidite: 40, croissance: 46, sante: 62 },
      { jour: "Sam", temperature: 42, humidite: 42, croissance: 47, sante: 62 },
      { jour: "Dim", temperature: 41, humidite: 40, croissance: 48, sante: 62 },
    ],
    mois: [
      { semaine: "S1", temperature: 40, humidite: 25, croissance: 30, sante: 56 },
      { semaine: "S2", temperature: 42, humidite: 30, croissance: 35, sante: 58 },
      { semaine: "S3", temperature: 44, humidite: 35, croissance: 40, sante: 60 },
      { semaine: "S4", temperature: 45, humidite: 40, croissance: 45, sante: 62 },
    ],
  },
  3: {
    jour: [
      { heure: "00:00", temperature: 25, humidite: 60, croissance: 79.5, sante: 87 },
      { heure: "04:00", temperature: 23, humidite: 63, croissance: 79.7, sante: 87 },
      { heure: "08:00", temperature: 27, humidite: 55, croissance: 79.9, sante: 88 },
      { heure: "12:00", temperature: 32, humidite: 50, croissance: 80.0, sante: 88 },
      { heure: "16:00", temperature: 30, humidite: 53, croissance: 80.2, sante: 88 },
      { heure: "20:00", temperature: 27, humidite: 57, croissance: 80.3, sante: 88 },
    ],
    semaine: [
      { jour: "Lun", temperature: 29, humidite: 55, croissance: 77, sante: 86 },
      { jour: "Mar", temperature: 30, humidite: 57, croissance: 78, sante: 86 },
      { jour: "Mer", temperature: 31, humidite: 60, croissance: 79, sante: 87 },
      { jour: "Jeu", temperature: 32, humidite: 63, croissance: 80, sante: 88 },
      { jour: "Ven", temperature: 30, humidite: 65, croissance: 81, sante: 88 },
      { jour: "Sam", temperature: 29, humidite: 67, croissance: 82, sante: 88 },
      { jour: "Dim", temperature: 28, humidite: 65, croissance: 83, sante: 88 },
    ],
    mois: [
      { semaine: "S1", temperature: 27, humidite: 50, croissance: 65, sante: 82 },
      { semaine: "S2", temperature: 29, humidite: 55, croissance: 70, sante: 84 },
      { semaine: "S3", temperature: 31, humidite: 60, croissance: 75, sante: 86 },
      { semaine: "S4", temperature: 32, humidite: 65, croissance: 80, sante: 88 },
    ],
  },
}

export default function HistoriqueData() {
  const [selectedParcelleId, setSelectedParcelleId] = useState<number>(1)
  const [activeTab, setActiveTab] = useState("jour")
  const [chartData, setChartData] = useState(historiqueData[1].jour)

  useEffect(() => {
    const handleParcelleSelected = (event: Event) => {
      const customEvent = event as CustomEvent
      const id = customEvent.detail.id
      setSelectedParcelleId(id)
      setChartData(historiqueData[id as keyof typeof historiqueData][activeTab as keyof (typeof historiqueData)[1]])
    }

    window.addEventListener("parcelle-selected", handleParcelleSelected)

    return () => {
      window.removeEventListener("parcelle-selected", handleParcelleSelected)
    }
  }, [activeTab])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setChartData(
      historiqueData[selectedParcelleId as keyof typeof historiqueData][value as keyof (typeof historiqueData)[1]],
    )
  }

  const handleExport = () => {
    // Logique d'exportation à implémenter
    console.log("Exporter les données")
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Historique des Données</CardTitle>
        <Button size="sm" variant="outline" className="border-[#114c3a] text-[#114c3a]" onClick={handleExport}>
          <Download className="h-4 w-4 mr-1" />
          Exporter
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="jour" value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="jour">Aujourd'hui</TabsTrigger>
            <TabsTrigger value="semaine">Semaine</TabsTrigger>
            <TabsTrigger value="mois">Mois</TabsTrigger>
          </TabsList>

          <TabsContent value="jour" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="heure" label={{ value: "Heure", position: "insideBottomRight", offset: -10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#ef4444"
                    name="Température (°C)"
                    strokeWidth={2}
                  />
                  <Line type="monotone" dataKey="humidite" stroke="#3b82f6" name="Humidité (%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="croissance" stroke="#22c55e" name="Croissance (%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="sante" stroke="#8b5cf6" name="Santé (%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="semaine" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="jour" label={{ value: "Jour", position: "insideBottomRight", offset: -10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#ef4444"
                    name="Température (°C)"
                    strokeWidth={2}
                  />
                  <Line type="monotone" dataKey="humidite" stroke="#3b82f6" name="Humidité (%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="croissance" stroke="#22c55e" name="Croissance (%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="sante" stroke="#8b5cf6" name="Santé (%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="mois" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semaine" label={{ value: "Semaine", position: "insideBottomRight", offset: -10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#ef4444"
                    name="Température (°C)"
                    strokeWidth={2}
                  />
                  <Line type="monotone" dataKey="humidite" stroke="#3b82f6" name="Humidité (%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="croissance" stroke="#22c55e" name="Croissance (%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="sante" stroke="#8b5cf6" name="Santé (%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
