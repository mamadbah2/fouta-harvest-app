"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, SlidersHorizontal, FileDown } from "lucide-react"

export default function DataFilters() {
  const [season, setSeason] = useState("all")
  const [culture, setCulture] = useState("all")
  const [year, setYear] = useState("2024")
  const [sort, setSort] = useState("newest")

  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-[#114c3a]" />
              <span className="text-sm font-medium">Filtres:</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Select value={season} onValueChange={setSeason}>
                <SelectTrigger className="w-[140px] h-9 text-sm">
                  <SelectValue placeholder="Saison" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les saisons</SelectItem>
                  <SelectItem value="rainy">Saison des pluies</SelectItem>
                  <SelectItem value="dry">Saison sèche</SelectItem>
                  <SelectItem value="cool">Contre-saison</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={culture} onValueChange={setCulture}>
                <SelectTrigger className="w-[140px] h-9 text-sm">
                  <SelectValue placeholder="Culture" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les cultures</SelectItem>
                  <SelectItem value="rice">Riz</SelectItem>
                  <SelectItem value="maize">Maïs</SelectItem>
                  <SelectItem value="millet">Mil</SelectItem>
                  <SelectItem value="sorghum">Sorgho</SelectItem>
                  <SelectItem value="vegetables">Légumes</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-[140px] h-9 text-sm">
                  <SelectValue placeholder="Année" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les années</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[140px] h-9 text-sm">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Plus récent</SelectItem>
                  <SelectItem value="oldest">Plus ancien</SelectItem>
                  <SelectItem value="yield_high">Rendement ↑</SelectItem>
                  <SelectItem value="yield_low">Rendement ↓</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button variant="outline" className="h-9 shrink-0 border-[#114c3a] text-[#114c3a] hover:bg-[#f0f8f4]">
            <FileDown className="h-4 w-4 mr-2" />
            Exporter
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}