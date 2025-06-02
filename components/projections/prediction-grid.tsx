import { Wheat, Sun, Droplet, Bug, Calendar, FlaskRoundIcon as Flask, Sprout, BarChart3 } from "lucide-react"

// Données mockées pour les prédictions
const predictionData = [
  {
    id: 1,
    title: "Rendement estimé",
    content: "18 tonnes/ha estimées",
    icon: Wheat,
    color: "bg-[#114c3a]",
    textColor: "text-white",
    size: "col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "Vague de chaleur prévue",
    content: "Du 15 au 20 juillet, 35°C",
    icon: Sun,
    color: "bg-[#8bae9f]",
    textColor: "text-gray-800",
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Besoin en irrigation",
    content: "2500L/ha dans 3 jours",
    icon: Droplet,
    color: "bg-[#114c3a]",
    textColor: "text-white",
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Risque de parasites",
    content: "Pucerons, risque modéré, dans 2 semaines",
    icon: Bug,
    color: "bg-[#114c3a]",
    textColor: "text-white",
    size: "col-span-1 row-span-2",
  },
  {
    id: 5,
    title: "Prochaine action suggérée",
    content: "Fertilisation azotée, 10 juillet",
    icon: Calendar,
    color: "bg-[#8bae9f]",
    textColor: "text-gray-800",
    size: "col-span-2 row-span-1",
  },
  {
    id: 6,
    title: "Analyse nutritionnelle",
    content: "Azote: Bon, Phosphore: Faible, Potassium: Moyen",
    icon: Flask,
    color: "bg-[#8bae9f]",
    textColor: "text-gray-800",
    size: "col-span-2 row-span-1",
  },
  {
    id: 7,
    title: "Stade de croissance",
    content: "Floraison dans 8 jours",
    icon: Sprout,
    color: "bg-[#114c3a]",
    textColor: "text-white",
    size: "col-span-1 row-span-1",
  },
  {
    id: 8,
    title: "Synthèse météo",
    content: "Semaine prochaine: Ensoleillé, 28°C en moyenne",
    icon: BarChart3,
    color: "bg-[#8bae9f]",
    textColor: "text-gray-800",
    size: "col-span-1 row-span-1",
  },
  {
    id: 9,
    title: "Prévision récolte",
    content: "Date optimale: 15 septembre",
    icon: Calendar,
    color: "bg-[#114c3a]",
    textColor: "text-white",
    size: "col-span-1 row-span-2",
  },
]

export default function PredictionGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-auto">
      {predictionData.map((prediction) => (
        <div
          key={prediction.id}
          className={`${prediction.color} ${prediction.textColor} rounded-lg p-4 shadow-sm ${prediction.size}`}
        >
          <div className="flex items-center mb-2">
            <prediction.icon className="h-5 w-5 mr-2" />
            <h3 className="font-medium text-sm">{prediction.title}</h3>
          </div>
          <p className="text-sm md:text-base">{prediction.content}</p>
        </div>
      ))}
    </div>
  )
}
