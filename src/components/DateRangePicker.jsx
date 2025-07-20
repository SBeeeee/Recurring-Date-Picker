"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  setStartDate,
  setEndDate,
} from "@/store/Stats/slice";
import { setEndDateEnabled } from "@/store/States/slice";

export default function DateRangePicker() {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(
    (state) => state.stats
  );
  const { endDateEnabled } = useSelector((state) => state.states);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleStartDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch(setStartDate(selectedDate));
    
    // If end date is enabled and end date is before the new start date, clear end date
    if (endDateEnabled && endDate && endDate <= selectedDate) {
      dispatch(setEndDate(""));
    }
  };

  const handleEndDateChange = (e) => {
    const selectedDate = e.target.value;
    // Only set end date if it's after start date
    if (selectedDate > startDate) {
      dispatch(setEndDate(selectedDate));
    }
  };

  return (
    <div className="mt-6 border border-gray-300 rounded-xl p-4 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Start date</label>
        <input
          type="date"
          value={startDate}
          min={today} // Prevent selecting dates before today
          onChange={handleStartDateChange}
          className="w-full border px-3 py-2 rounded-md text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 hover:cursor-pointer"
        />
      </div>

      <div className="flex items-center gap-2 hover:cursor-pointer">
        <input
          type="checkbox"
          checked={endDateEnabled}
          onChange={(e) => dispatch(setEndDateEnabled(e.target.checked))}
        />
        <label className="text-sm text-gray-700 hover:cursor-pointer">Set end date</label>
      </div>

      {endDateEnabled && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">End date</label>
          <input
            type="date"
            value={endDate}
            min={startDate ? new Date(new Date(startDate).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] : today} // Minimum is day after start date
            onChange={handleEndDateChange}
            className="w-full hover:cursor-pointer border px-3 py-2 rounded-md text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {endDate && endDate <= startDate && (
            <p className="text-sm text-red-500">End date must be after start date</p>
          )}
        </div>
      )}
    </div>
  );
}