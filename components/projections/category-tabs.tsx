"use client"
import Link from "next/link"

export default function CategoryTabs() {
  return (
    <div className="bg-[#e8f5e9] rounded-lg overflow-hidden">
      <div className="grid grid-cols-2">
        <Link href="/advice" className="py-3 px-4 text-center transition-colors bg-[#e8f5e9] text-[#114c3a]">
          Recommandations
        </Link>
        <Link href="/projections" className="py-3 px-4 text-center transition-colors bg-[#114c3a] text-white">
          Projection Future
        </Link>
      </div>
    </div>
  )
}
