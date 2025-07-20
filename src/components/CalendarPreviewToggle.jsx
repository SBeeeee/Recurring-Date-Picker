"use client"
import { useSelector, useDispatch } from "react-redux"
import { setcalenderPreview } from "@/store/States/slice"

export default function CalendarPreviewToggle() {
  const dispatch = useDispatch()
  const {calenderpreview} = useSelector(state => state.states)

  return (
    <div className="p-4 bg-blue-50 rounded-xl flex justify-between items-center shadow-md">
      <div>
        <p className="text-sm font-medium text-blue-900 flex items-center gap-2">
          <span>📅</span> Calendar Preview
        </p>
        <p className="text-xs text-gray-500">Visualize your recurring dates</p>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={calenderpreview}
          onChange={(e) => dispatch(setcalenderPreview(e.target.checked))}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative transition">
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </div>
      </label>
    </div>
  )
}
