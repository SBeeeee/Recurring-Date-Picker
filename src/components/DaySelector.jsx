"use client";
import { useDispatch, useSelector } from "react-redux";
import { setselecteddays } from "@/store/Stats/slice";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DaySelector() {
  const dispatch = useDispatch();
  const {selecteddays} = useSelector((state) => state.stats);

  const handleDayClick = (day) => {
    dispatch(setselecteddays(day));
  };

  return (
    <div className="flex justify-center gap-4 mt-6 flex-wrap">
      {days.map((day) => {
        const isSelected = selecteddays.includes(day);

        return (
          <button
            key={day}
            onClick={() => handleDayClick(day)}
            className={`w-16 h-16 flex items-center justify-center rounded-full font-semibold transition-all duration-200
              ${isSelected
                ? "bg-gradient-to-br from-blue-400 to-purple-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
            `}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}
