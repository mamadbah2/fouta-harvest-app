import Image from "next/image"

export default function FieldView() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="text-sm text-gray-700 mb-1 flex items-center">
        <span>Vue du Champ</span>
        <div className="h-px bg-gray-300 flex-1 ml-2"></div>
      </div>
      <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
        <Image src="/field-view.jpg" alt="Vue aérienne du champ" fill className="object-cover" />
      </div>
    </div>
  )
}
