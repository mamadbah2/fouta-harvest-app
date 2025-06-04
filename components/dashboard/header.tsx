"use client"

import { useAuth } from "@/contexts/auth-context"
import { useEffect, useState } from "react"

interface HeaderProps {
  username?: string
  location?: string
}

export default function Header({ username, location }: HeaderProps) {
  const { user } = useAuth()
  const [displayName, setDisplayName] = useState<string>(username || "")
  const [displayLocation, setDisplayLocation] = useState<string>(location || "Dakar, Sénégal")

  // Utiliser les données de l'utilisateur connecté si elles existent
  useEffect(() => {
    if (user) {
      setDisplayName(user.fullName)
    }
  }, [user])

  return (
    <header className="bg-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#114c3a] flex items-center justify-center text-white text-xs">
          <span>Fouta</span>
        </div>
        <div>
          <h1 className="font-bold text-lg">{displayName}</h1>
          <div className="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {displayLocation}
          </div>
        </div>
      </div>
    </header>
  )
}
