interface NotificationCardProps {
  title: string
  message: string
  timestamp: string
  severity: "urgent" | "important" | "preventive"
}

export default function NotificationCard({ title, message, timestamp, severity }: NotificationCardProps) {
  const severityColors = {
    urgent: "bg-[#D32F2F]",
    important: "bg-[#F57C00]",
    preventive: "bg-[#388E3C]",
  }

  return (
    <div className="border-b border-gray-200">
      <div className="flex py-4">
        <div className={`w-1 ${severityColors[severity]} mr-3 flex-shrink-0`}></div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-gray-700 text-sm">{message}</p>
          <p className="text-gray-500 text-xs mt-1">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}
