"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de connexion à implémenter
    console.log("Tentative de connexion avec:", { username, password })
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Email ou Nom Utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#114c3a] focus:border-transparent"
          />
        </div>

        <div>
          <Input
            type="password"
            placeholder="Mot de Passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#114c3a] focus:border-transparent"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#114c3a] hover:bg-[#0d3c2d] text-white font-medium py-3 rounded-md transition-colors"
        >
          Se Connecter
        </Button>
      </form>
    </div>
  )
}
