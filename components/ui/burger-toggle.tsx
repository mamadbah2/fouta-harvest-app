"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ButtonProps } from "@/components/ui/button"

interface BurgerToggleProps extends ButtonProps {}

export function BurgerToggle({ className, ...props }: BurgerToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={className}
      {...props}
    >
      <Menu className="h-4 w-4" />
    </Button>
  )
}