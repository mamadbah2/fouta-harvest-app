"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Archive, Clipboard, Leaf, TrendingUp } from "lucide-react"

// Données simulées pour l'historique des cultures
const cultureHistoryData = [
  { 
    id: 1, 
    culture: "Riz", 
    variete: "Nerica L-19", 
    parcelle: "Parcelle Sud", 
    surface: "1.5", 
    dateDebut: "15/05/2024", 
    dateFin: "20/09/2024", 
    rendement: 4.8,
    statut: "terminé",
    yield: [
      { name: "Mai", valeur: 0 },
      { name: "Juin", valeur: 0.5 },
      { name: "Juil", valeur: 1.2 },
      { name: "Août", valeur: 2.5 },
      { name: "Sept", valeur: 4.8 },
    ]
  },
  { 
    id: 2, 
    culture: "Maïs", 
    variete: "Obatampa", 
    parcelle: "Parcelle Est", 
    surface: "0.8", 
    dateDebut: "10/06/2024", 
    dateFin: "15/09/2024", 
    rendement: 3.2,
    statut: "terminé",
    yield: [
      { name: "Juin", valeur: 0 },
      { name: "Juil", valeur: 0.8 },
      { name: "Août", valeur: 2.0 },
      { name: "Sept", valeur: 3.2 },
    ]
  },
  { 
    id: 3, 
    culture: "Mil", 
    variete: "Souna 3", 
    parcelle: "Parcelle Ouest", 
    surface: "1.2", 
    dateDebut: "05/05/2024", 
    dateFin: "25/08/2024", 
    rendement: 2.5,
    statut: "terminé",
    yield: [
      { name: "Mai", valeur: 0 },
      { name: "Juin", valeur: 0.4 },
      { name: "Juil", valeur: 1.5 },
      { name: "Août", valeur: 2.5 },
    ]
  },
  { 
    id: 4, 
    culture: "Oignons", 
    variete: "Violet de Galmi", 
    parcelle: "Parcelle Nord", 
    surface: "0.5", 
    dateDebut: "10/10/2023", 
    dateFin: "20/01/2024", 
    rendement: 15.8,
    statut: "terminé",
    yield: [
      { name: "Oct", valeur: 0 },
      { name: "Nov", valeur: 2.5 },
      { name: "Déc", valeur: 8.0 },
      { name: "Jan", valeur: 15.8 },
    ]
  },
  { 
    id: 5, 
    culture: "Tomates", 
    variete: "Roma VF", 
    parcelle: "Parcelle Centre", 
    surface: "0.3", 
    dateDebut: "15/01/2024", 
    dateFin: "30/04/2024", 
    rendement: 12.7,
    statut: "terminé",
    yield: [
      { name: "Jan", valeur: 0 },
      { name: "Fév", valeur: 3.0 },
      { name: "Mar", valeur: 8.5 },
      { name: "Avr", valeur: 12.7 },
    ]
  },
];

export default function CultureHistory() {
  const [activeTab, setActiveTab] = useState("tableau")
  const [selectedCulture, setSelectedCulture] = useState<number | null>(null)
  
  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "terminé":
        return "bg-green-100 text-green-800"
      case "en_cours":
        return "bg-blue-100 text-blue-800"
      case "planifié":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  
  const renderYieldChart = () => {
    if (selectedCulture === null) {
      // Si aucune culture n'est sélectionnée, afficher toutes les cultures
      return (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={cultureHistoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="culture" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rendement" name="Rendement (t/ha)" fill="#114c3a" />
          </BarChart>
        </ResponsiveContainer>
      )
    } else {
      // Si une culture est sélectionnée, afficher l'évolution de son rendement
      const culture = cultureHistoryData.find(c => c.id === selectedCulture)
      if (!culture) return null
      
      return (
        <div>
          <h3 className="text-lg font-medium mb-4">Évolution du rendement: {culture.culture} ({culture.variete})</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={culture.yield} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valeur" name="Rendement (t/ha)" fill="#114c3a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )
    }
  }
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Archive className="h-5 w-5 text-[#114c3a]" />
            Historique de Cultures
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="tableau">Tableau</TabsTrigger>
            <TabsTrigger value="graphique">Graphique</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tableau" className="m-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Culture</TableHead>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Surface (ha)</TableHead>
                    <TableHead>Début</TableHead>
                    <TableHead>Fin</TableHead>
                    <TableHead>Rendement (t/ha)</TableHead>
                    <TableHead>Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cultureHistoryData.map((row) => (
                    <TableRow 
                      key={row.id} 
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => setSelectedCulture(selectedCulture === row.id ? null : row.id)}
                    >
                      <TableCell className="font-medium">
                        <div>
                          {row.culture}
                          <div className="text-xs text-gray-500">{row.variete}</div>
                        </div>
                      </TableCell>
                      <TableCell>{row.parcelle}</TableCell>
                      <TableCell>{row.surface}</TableCell>
                      <TableCell>{row.dateDebut}</TableCell>
                      <TableCell>{row.dateFin}</TableCell>
                      <TableCell className="font-medium text-right">{row.rendement}</TableCell>
                      <TableCell>
                        <Badge className={getStatutColor(row.statut)} variant="outline">
                          {row.statut}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Cliquez sur une ligne pour voir l'évolution détaillée du rendement
            </p>
          </TabsContent>
          
          <TabsContent value="graphique" className="m-0 space-y-4">
            {renderYieldChart()}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}