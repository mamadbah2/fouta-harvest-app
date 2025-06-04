"use client"

import { Mail, Calendar, Edit, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { useEffect, useState } from "react"

interface PersonalInfoProps {
  email?: string
  phone?: string
  registrationDate?: string
}

export default function PersonalInfo({ email, phone, registrationDate }: PersonalInfoProps) {
  const { user } = useAuth()
  const [displayEmail, setDisplayEmail] = useState(email || "")
  const [displayPhone, setDisplayPhone] = useState(phone || "+221 77 000 00 00")
  const [displayDate, setDisplayDate] = useState(registrationDate || "01/01/2023")

  useEffect(() => {
    if (user) {
      setDisplayEmail(`${user.username}@foutaharvest.com`)
    }
  }, [user])

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Mail className="h-5 w-5 text-[#114c3a] mr-2" />
        <h3 className="text-lg font-semibold">Informations personnelles</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Adresse email</p>
          <p className="font-medium">{displayEmail}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Numéro de téléphone</p>
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-gray-500 mr-1" />
            <p className="font-medium">{displayPhone}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Date d'inscription</p>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-500 mr-1" />
            <p className="font-medium">{displayDate}</p>
          </div>
        </div>

        <Button className="w-full bg-[#114c3a] hover:bg-[#0d3c2d]">
          <Edit className="h-4 w-4 mr-2" />
          Modifier mes informations
        </Button>
      </div>
    </div>
  )
}
