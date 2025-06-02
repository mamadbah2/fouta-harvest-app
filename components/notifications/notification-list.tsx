"use client"

import { useState } from "react"
import NotificationCard from "./notification-card"

// Données mockées pour les notifications
const notificationsData = [
  {
    id: 1,
    title: "Température du sol trop élevée (42°C).",
    message: "Risque de stress thermique pour vos cultures de maïs.",
    timestamp: "02.04.2025 / 16:08",
    severity: "urgent",
  },
  {
    id: 2,
    title: "Température du sol trop élevée (42°C).",
    message: "Risque de stress thermique pour vos cultures de maïs.",
    timestamp: "02.04.2025 / 16:08",
    severity: "urgent",
  },
  {
    id: 3,
    title: "Température du sol trop élevée (42°C).",
    message: "Risque de stress thermique pour vos cultures de maïs.",
    timestamp: "02.04.2025 / 16:08",
    severity: "preventive",
  },
  {
    id: 4,
    title: "Température du sol trop élevée (42°C).",
    message: "Risque de stress thermique pour vos cultures de maïs.",
    timestamp: "02.04.2025 / 16:08",
    severity: "important",
  },
  {
    id: 5,
    title: "Température du sol trop élevée (42°C).",
    message: "Risque de stress thermique pour vos cultures de maïs.",
    timestamp: "02.04.2025 / 16:08",
    severity: "preventive",
  },
  {
    id: 6,
    title: "Température du sol trop élevée (42°C).",
    message: "Risque de stress thermique pour vos cultures de maïs.",
    timestamp: "02.04.2025 / 16:08",
    severity: "important",
  },
]

export default function NotificationList() {
  const [filter, setFilter] = useState("all")

  const filteredNotifications =
    filter === "all" ? notificationsData : notificationsData.filter((notification) => notification.severity === filter)

  return (
    <div className="space-y-0.5">
      {filteredNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          title={notification.title}
          message={notification.message}
          timestamp={notification.timestamp}
          severity={notification.severity as "urgent" | "important" | "preventive"}
        />
      ))}
    </div>
  )
}
