"use client"
import { useSelector, useDispatch } from "react-redux"
import { setcalenderPreview } from "@/store/States/slice"

export default function CalendarPreviewToggle() {
  const dispatch = useDispatch()
  const { calenderpreview } = useSelector((state) => state.states)
  
  return (
    <div className="p-4 bg-blue-50 rounded-2xl flex justify-between items-center shadow-md">
      <div>
        <p className="text-sm font-semibold text-blue-800 flex items-center gap-2">
          <span role="img" aria-label="calendar">🗓️</span> Calendar Preview
        </p>
        <p className="text-xs text-gray-600">Visualize your recurring dates</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={calenderpreview}
          onChange={(e) => dispatch(setcalenderPreview(e.target.checked))}
        />
        <div className="relative w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all duration-300 ease-in-out">
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out peer-checked:translate-x-[24px]" />
        </div>
      </label>
    </div>
  )
}