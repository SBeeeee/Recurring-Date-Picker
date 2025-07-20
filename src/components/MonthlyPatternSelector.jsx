"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  setMonthlyOptionType,
  setMonthlyDayNumber,
  setMonthlyNthWeek,
  setMonthlyWeekday,
} from "@/store/Stats/slice";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const nthOptions = ["1st", "2nd", "3rd", "4th", "5th"];

export default function MonthlyPatternSelector() {
  const dispatch = useDispatch();
  const {repeatpattern} = useSelector((state) => state.states);
  const {
    monthlyOptionType,
    monthlyDayNumber,
    monthlyNthWeek,
    monthlyWeekday,
  } = useSelector((state) => state.stats);

  if (repeatpattern !== "monthly") return null;

  return (
    <div className="mt-6 border border-gray-300 rounded-xl p-4 space-y-4">
      <p className="text-sm font-medium text-gray-800 mb-2">Monthly pattern</p>
      <label className="flex items-center gap-3">
        <input
          type="radio"
          name="monthly"
          value="day"
          checked={monthlyOptionType === "day"}
          onChange={() => dispatch(setMonthlyOptionType("day"))}
        />
        <span className="text-gray-700">On day</span>
        <input
          type="number"
          min={1}
          max={31}
          className="border px-2 py-1 w-20 rounded-md"
          value={monthlyDayNumber}
          onChange={(e) => dispatch(setMonthlyDayNumber(Number(e.target.value)))}
        />
        <span className="text-gray-700">of the month</span>
      </label>
      <label className="flex items-center gap-3 flex-wrap">
        <input
          type="radio"
          name="monthly"
          value="nth"
          checked={monthlyOptionType === "nth"}
          onChange={() => dispatch(setMonthlyOptionType("nth"))}
        />
        <span className="text-gray-700">On the</span>
        <select
          className="border px-2 py-1 rounded-md"
          value={monthlyNthWeek}
          onChange={(e) => dispatch(setMonthlyNthWeek(e.target.value))}
        >
          {nthOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <select
          className="border px-2 py-1 rounded-md"
          value={monthlyWeekday}
          onChange={(e) => dispatch(setMonthlyWeekday(e.target.value))}
        >
          {weekdays.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </label>
      <label className="flex items-center gap-3 flex-wrap">
        <input
          type="radio"
          name="monthly"
          value="last"
          checked={monthlyOptionType === "last"}
          onChange={() => dispatch(setMonthlyOptionType("last"))}
        />
        <span className="text-gray-700">On the last</span>
        <select
          className="border px-2 py-1 rounded-md"
          value={monthlyWeekday}
          onChange={(e) => dispatch(setMonthlyWeekday(e.target.value))}
        >
          {weekdays.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <span className="text-gray-700">of the month</span>
      </label>
    </div>
  );
}
