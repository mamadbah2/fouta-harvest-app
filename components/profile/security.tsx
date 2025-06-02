"use client"

import { Lock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export default function Security() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Lock className="h-5 w-5 text-[#114c3a] mr-2" />
        <h3 className="text-lg font-semibold">Sécurité</h3>
      </div>

      <div className="space-y-6">
        <Button variant="outline" className="w-full border-[#114c3a] text-[#114c3a] hover:bg-[#f0f9f5]">
          Changer le mot de passe
        </Button>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Authentification à deux facteurs</p>
            <p className="text-sm text-gray-500">Sécurité renforcée pour votre compte</p>
          </div>
          <Switch
            checked={twoFactorEnabled}
            onCheckedChange={setTwoFactorEnabled}
            className="data-[state=checked]:bg-[#114c3a]"
          />
        </div>

        {twoFactorEnabled && (
          <div className="bg-[#f0f9f5] p-3 rounded-md flex items-start">
            <ShieldCheck className="h-5 w-5 text-[#114c3a] mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              L'authentification à deux facteurs est activée. Vous recevrez un code par SMS à chaque connexion.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
