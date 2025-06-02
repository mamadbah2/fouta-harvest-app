"use client"

import { useState } from "react"

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("recommendations")

  return (
    <div className="bg-[#e8f5e9] rounded-lg overflow-hidden">
      <div className="grid grid-cols-2">
        <button
          className={`py-3 px-4 text-center transition-colors ${
            activeTab === "recommendations" ? "bg-[#114c3a] text-white" : "bg-[#e8f5e9] text-[#114c3a]"
          }`}
          onClick={() => setActiveTab("recommendations")}
        >
          Recommandations
        </button>
        <button
          className={`py-3 px-4 text-center transition-colors ${
            activeTab === "projection" ? "bg-[#114c3a] text-white" : "bg-[#e8f5e9] text-[#114c3a]"
          }`}
          onClick={() => setActiveTab("projection")}
        >
          Projection Future
        </button>
      </div>
    </div>
  )
}
