"use client"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import dayjs from "dayjs"
import { setselecteddays } from "@/store/Stats/slice"

export default function CalendarView() {
  const dispatch = useDispatch()
  const selecteddays = useSelector(state => state.stats.selecteddays)
  const today = dayjs() 

  const [currentMonth, setCurrentMonth] = useState(today.startOf("month"))

  const daysInMonth = currentMonth.daysInMonth()
  const startDay = currentMonth.startOf("month").day()

  const calendarDays = []
  for (let i = 0; i < startDay; i++) calendarDays.push(null)
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d)

  const handleDateClick = (day) => {
    if (!day) return
    dispatch(setselecteddays(day))
  }

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

          const isSelected = selecteddays.includes(day)

          return (
            <div
              key={idx}
              className={`h-8 w-8 flex items-center justify-center rounded-md cursor-pointer transition
              ${isToday ? "bg-orange-100 border border-orange-500 text-orange-700 font-semibold" : ""}
              ${isSelected ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100"}
              `}
              onClick={() => handleDateClick(day)}
            >
              {day || ""}
            </div>
          )
        })}
      </div>

      {/* Footer Legend */}
      <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
        <span className="flex items-center gap-1">🔵 Selected dates</span>
        <span className="flex items-center gap-1">🟠 Today</span>
        <span className="text-blue-600 font-semibold">{selecteddays.length} dates</span>
      </div>
    </div>
  )
}
