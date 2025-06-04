"use client"

import Image from "next/image"
import { MapPin, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useEffect, useState } from "react"

interface UserIdentityProps {
  name?: string
  location?: string
  role?: string
  photoUrl?: string
}

export default function UserIdentity({ name, location, role, photoUrl }: UserIdentityProps) {
  const { user } = useAuth()
  const [displayName, setDisplayName] = useState(name || "")
  const [displayRole, setDisplayRole] = useState(role || "")
  const [displayLocation] = useState(location || "Dakar, Sénégal")
  const [displayPhoto] = useState(photoUrl || "/placeholder.svg")
  
  useEffect(() => {
    if (user) {
      setDisplayName(user.fullName)
      setDisplayRole(user.role)
    }
  }, [user])
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row items-center gap-4">
      <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100">
        <Image src={user?.avatar || displayPhoto} alt={displayName} fill className="object-cover" />
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold">{displayName}</h2>
        <div className="flex items-center justify-center sm:justify-start text-gray-600 mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{displayLocation}</span>
        </div>
        <div className="flex items-center justify-center sm:justify-start text-[#114c3a] mt-2">
          <User className="h-4 w-4 mr-1" />
          <span className="font-medium">{displayRole}</span>
        </div>
      </div>
    </div>
  )
}
