"use client"
import { useSelector } from "react-redux"
import { useState } from "react"
import dayjs from "dayjs"

export default function CalendarView() {
  const calculatedDates = useSelector(state => state.stats.calculatedDates)
  const today = dayjs() 

  const [currentMonth, setCurrentMonth] = useState(today.startOf("month"))

  const daysInMonth = currentMonth.daysInMonth()
  const startDay = currentMonth.startOf("month").day()

  const calendarDays = []
  for (let i = 0; i < startDay; i++) calendarDays.push(null)
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d)

  // Get calculated dates for current month
  const currentMonthDates = calculatedDates.filter(dateStr => {
    const date = dayjs(dateStr)
    return date.month() === currentMonth.month() && date.year() === currentMonth.year()
  }).map(dateStr => dayjs(dateStr).date())

  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
      
      <div className="flex justify-between mb-3 items-center">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="text-lg">📅</span>
          <span className="font-semibold text-sm">Calendar Preview</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="text-gray-500 hover:text-black"
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          >
            ←
          </button>
          <span className="text-sm font-medium">
            {currentMonth.format("MMMM YYYY")}
          </span>
          <button
            className="text-gray-500 hover:text-black"
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          >
            →
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-7 gap-2 text-xs text-center text-gray-600 mb-2">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
          <div key={d} className="font-semibold">{d}</div>
        ))}

        {calendarDays.map((day, idx) => {
          const isToday =
            day === today.date() &&
            currentMonth.month() === today.month() &&
            currentMonth.year() === today.year()

          const isCalculatedDate = day && currentMonthDates.includes(day)

          return (
            <div
              key={idx}
              className={`h-8 w-8 flex items-center justify-center rounded-md cursor-pointer transition
              ${isToday ? "bg-orange-100 border border-orange-500 text-orange-700 font-semibold" : ""}
              ${isCalculatedDate ? "bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold" : "hover:bg-gray-100"}
              `}
            >
              {day || ""}
            </div>
          )
        })}
      </div>

      {/* Footer Legend */}
      <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
        <span className="flex items-center gap-1">🔵 Recurring dates</span>
        <span className="flex items-center gap-1">🟠 Today</span>
        <span className="text-blue-600 font-semibold">{calculatedDates.length} days </span>
      </div>
    </div>
  )
}