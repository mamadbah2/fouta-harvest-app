"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

type User = {
  username: string
  fullName: string
  role: string
  avatar?: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

// Identifiants valides pour la démo
const validCredentials = [
  { 
    username: "admin", 
    password: "admin123", 
    fullName: "Admin Fouta",
    role: "Administrateur" 
  },
  { 
    username: "user", 
    password: "user123", 
    fullName: "User Test",
    role: "Agriculteur" 
  },
  { 
    username: "demo", 
    password: "demo123", 
    fullName: "Demo User",
    role: "Agriculteur" 
  },
  { 
    username: "bobo", 
    password: "bah123", 
    fullName: "Bobo Bah",
    role: "Agriculteur" 
  },
]

const COOKIE_NAME = "foutaUser"
const COOKIE_EXPIRY = 7 // jours

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Vérifier s'il y a un utilisateur dans le cookie au chargement
  useEffect(() => {
    const storedUserData = Cookies.get(COOKIE_NAME)
    if (storedUserData) {
      try {
        setUser(JSON.parse(storedUserData))
      } catch (error) {
        console.error("Erreur lors de l'analyse des données utilisateur:", error)
        Cookies.remove(COOKIE_NAME)
      }
    }
    setLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simuler une requête d'authentification
    return new Promise((resolve) => {
      setTimeout(() => {
        const matchedUser = validCredentials.find(
          cred => cred.username === username && cred.password === password
        )
        
        if (matchedUser) {
          const userData: User = {
            username: matchedUser.username,
            fullName: matchedUser.fullName,
            role: matchedUser.role,
          }
          setUser(userData)
          
          // Stocker les données utilisateur dans un cookie
          Cookies.set(COOKIE_NAME, JSON.stringify(userData), { 
            expires: COOKIE_EXPIRY,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
          })
          
          resolve(true)
        } else {
          resolve(false)
        }
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    // Supprimer le cookie
    Cookies.remove(COOKIE_NAME, { path: '/' })
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider")
  }
  return context
}