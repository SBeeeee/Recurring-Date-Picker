"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  setStartDate,
  setEndDate,
} from "@/store/Stats/slice";
import { setEndDateEnabled } from "@/store/States/slice";

export default function DateRangePicker() {
  const dispatch = useDispatch();
  const { startDate,  endDate } = useSelector(
    (state) => state.stats
  );
  const {endDateEnabled}=useSelector((state) => state.states)

  return (
    <div className="mt-6 border border-gray-300 rounded-xl p-4 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Start date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => dispatch(setStartDate(e.target.value))}
          className="w-full border px-3 py-2 rounded-md text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={endDateEnabled}
          onChange={(e) => dispatch(setEndDateEnabled(e.target.checked))}
        />
        <label className="text-sm text-gray-700">Set end date</label>
      </div>

      {endDateEnabled && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">End date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => dispatch(setEndDate(e.target.value))}
            className="w-full border px-3 py-2 rounded-md text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )}
    </div>
  );
}
