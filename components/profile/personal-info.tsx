"use client"

import { Mail, Calendar, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PersonalInfoProps {
  email: string
  phone: string
  registrationDate: string
}

export default function PersonalInfo({ email, phone, registrationDate }: PersonalInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Mail className="h-5 w-5 text-[#114c3a] mr-2" />
        <h3 className="text-lg font-semibold">Informations personnelles</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Adresse email</p>
          <p className="font-medium">{email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Numéro de téléphone</p>
          <p className="font-medium">{phone}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Date d'inscription</p>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-500 mr-1" />
            <p className="font-medium">{registrationDate}</p>
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
