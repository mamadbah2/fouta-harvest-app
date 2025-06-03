"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  
  const router = useRouter()

  // Les identifiants qui fonctionnent
  const validCredentials = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
    { username: "demo", password: "demo123" },
    { username: "bobo", password: "bah123" }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    // Simuler une requête d'authentification
    setTimeout(() => {
      const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
      )
      
      if (isValid) {
        // Rediriger vers la page parcelles au lieu du dashboard
        router.push("/parcelles")
      } else {
        setError("Identifiants incorrects. Veuillez réessayer.")
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="w-full max-w-[400px] bg-white rounded-lg shadow-lg p-6 mx-auto">
      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32 rounded-full bg-[#114c3a] flex items-center justify-center overflow-hidden">
          <div className="text-white text-center">
            <div className="font-bold text-xl">Fouta</div>
            <div className="text-sm">Harvest</div>
          </div>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Email ou Nom Utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#114c3a] focus:border-transparent"
            disabled={loading}
          />
        </div>

        <div>
          <Input
            type="password"
            placeholder="Mot de Passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#114c3a] focus:border-transparent"
            disabled={loading}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#114c3a] hover:bg-[#0d3c2d] text-white font-medium py-3 rounded-md transition-colors"
          disabled={loading}
        >
          {loading ? "Connexion en cours..." : "Se Connecter"}
        </Button>
      </form>
      
      <div className="mt-4 text-center text-xs text-gray-500">
        <p>Identifiants de démonstration:</p>
        <p className="font-medium">Nom utilisateur: demo | Mot de passe: demo123</p>
      </div>
    </div>
  )
}
