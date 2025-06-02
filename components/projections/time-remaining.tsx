interface TimeRemainingProps {
  months: number
  days: number
  hours: number
}

export default function TimeRemaining({ months, days, hours }: TimeRemainingProps) {
  return (
    <div className="w-full">
      <div className="text-center text-sm font-medium mb-1">Temps Restant Estimé</div>
      <div className="bg-[#114c3a] text-white rounded-lg p-6 text-center">
        <div className="text-4xl font-bold">
          {months}m {days}j {hours}h
        </div>
      </div>
    </div>
  )
}
