"use client";
import { useDispatch, useSelector } from "react-redux";
import { setselecteddays } from "@/store/Stats/slice";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DaySelector() {
  const dispatch = useDispatch();
  const {selecteddays} = useSelector((state) => state.stats);
  const {repeatpattern} = useSelector((state) => state.states);

  const handleDayClick = (day) => {
    dispatch(setselecteddays(day));
  };

  if (!repeatpattern || repeatpattern === "monthly" || repeatpattern === "yearly") {
    return null;
  }

  const headingText =
    repeatpattern === "daily"
      ? "Specific Days"
      : repeatpattern === "weekly"
      ? "Days of Week"
      : "";

  return (
    <div className="mt-6 border border-gray-200 py-4 px-4 rounded-2xl">
      <p className="text-sm font-medium text-gray-800 flex items-center gap-2 mb-4">
        <span className="text-purple-600 text-base">🗓️</span>
        {headingText}
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {days.map((day) => {
          const isSelected = selecteddays.includes(day);
          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`w-16 h-16 flex items-center justify-center rounded-full font-semibold transition-all duration-200
                ${
                  isSelected
                    ? "bg-gradient-to-br from-blue-400 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
