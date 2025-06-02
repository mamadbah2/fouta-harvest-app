import Image from "next/image"
import { MapPin, User } from "lucide-react"

interface UserIdentityProps {
  name: string
  location: string
  role: string
  photoUrl: string
}

export default function UserIdentity({ name, location, role, photoUrl }: UserIdentityProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row items-center gap-4">
      <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100">
        <Image src={photoUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex items-center justify-center sm:justify-start text-gray-600 mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-center sm:justify-start text-[#114c3a] mt-2">
          <User className="h-4 w-4 mr-1" />
          <span className="font-medium">{role}</span>
        </div>
      </div>
    </div>
  )
}
