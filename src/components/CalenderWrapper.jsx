"use client"
import { useSelector } from "react-redux"
import CalendarPreviewToggle from "./CalendarPreviewToggle"
import CalendarView from "./CalendarView"

export default function CalendarWrapper() {
  const calenderpreview = useSelector(state => state.states.calenderpreview)

  return (
    <div className=" mx-auto my-4">
      <CalendarPreviewToggle />
      {calenderpreview && <CalendarView />}
    </div>
  )
}
