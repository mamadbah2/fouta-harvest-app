import { Droplet, Sun, Leaf, ChevronRight } from "lucide-react"
import Link from "next/link"

const adviceData = [
  {
    id: 1,
    title: "Irrigation intelligente",
    description:
      "Prédiction du rendement en kilogrammes par hectare basé sur l'humidité, température, fertilisation et croissance des plantes.",
    icon: Droplet,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: 2,
    title: "Température idéale",
    description: "Le maïs pousse mieux entre 18°C et 27°C. Évitez les pics de chaleur.",
    icon: Sun,
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Analyse du sol",
    description: "Un sol bien aéré et enrichi en azote favorise une croissance rapide.",
    icon: Leaf,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
]

export default function AdviceList() {
  return (
    <div className="space-y-3">
      {adviceData.map((advice) => (
        <Link href={`/advice/${advice.id}`} key={advice.id}>
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-shadow">
            <div className={`${advice.iconBg} ${advice.iconColor} p-3 rounded-full mr-4 flex-shrink-0`}>
              <advice.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{advice.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{advice.description}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </div>
        </Link>
      ))}
    </div>
  )
}
