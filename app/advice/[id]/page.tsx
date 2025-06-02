import { ChevronLeft } from "lucide-react"
import Link from "next/link"

// Données détaillées pour chaque conseil
const adviceDetails = {
  "1": {
    title: "Irrigation intelligente",
    description:
      "La prédiction du rendement en kilogrammes par hectare est basée sur plusieurs facteurs clés : l'humidité du sol, la température ambiante, le niveau de fertilisation et le taux de croissance des plantes. Nos capteurs IoT collectent ces données en temps réel pour vous fournir des recommandations précises.",
    recommendations: [
      "Maintenez un niveau d'humidité entre 60% et 80% pour optimiser la croissance",
      "Ajustez l'irrigation en fonction des prévisions météorologiques",
      "Privilégiez l'irrigation goutte-à-goutte pour économiser l'eau",
    ],
  },
  "2": {
    title: "Température idéale",
    description:
      "Le maïs est une culture qui nécessite des conditions de température spécifiques pour une croissance optimale. La plage idéale se situe entre 18°C et 27°C. En dehors de cette plage, la croissance peut être ralentie ou la plante peut subir un stress thermique.",
    recommendations: [
      "Évitez de planter trop tôt au printemps quand les sols sont encore froids",
      "Utilisez des techniques d'ombrage pendant les périodes de chaleur extrême",
      "Surveillez les prévisions de température pour anticiper les mesures de protection",
    ],
  },
  "3": {
    title: "Analyse du sol",
    description:
      "La qualité du sol est fondamentale pour la croissance des plantes. Un sol bien aéré permet aux racines de se développer correctement et d'absorber les nutriments essentiels. L'azote est particulièrement important car il favorise la croissance des feuilles et des tiges.",
    recommendations: [
      "Effectuez un test de sol avant la plantation pour connaître sa composition",
      "Ajoutez du compost ou de la matière organique pour améliorer l'aération",
      "Utilisez des engrais riches en azote pendant la phase de croissance végétative",
    ],
  },
}

export default function AdviceDetail({ params }: { params: { id: string } }) {
  const advice = adviceDetails[params.id as keyof typeof adviceDetails]

  if (!advice) {
    return <div>Conseil non trouvé</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#114c3a] text-white p-4">
        <div className="flex items-center">
          <Link href="/advice" className="mr-2">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold">{advice.title}</h1>
        </div>
      </header>

      <main className="p-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{advice.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-2">Recommandations</h2>
          <ul className="space-y-2">
            {advice.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-[#114c3a] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
