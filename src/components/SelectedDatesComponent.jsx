"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Calendar, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AllDatesModal from "./AllDatesModal";

dayjs.extend(relativeTime);

const SelectedDatesComponent = () => {
  const { calculatedDates } = useSelector((state) => state.stats);
  const [showAllDatesModal, setShowAllDatesModal] = useState(false);

  const formatDate = (dateStr) => {
    return dayjs(dateStr).format('MMM DD');
  };

  const formatFullDate = (dateStr) => {
    return dayjs(dateStr).format('MMM DD, YYYY');
  };

  if (calculatedDates.length === 0) {
    return (
      <div className="mt-6 border border-gray-200 rounded-2xl p-6 text-center">
        <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-gray-800 mb-2">No Dates Selected</h3>
        <p className="text-gray-500 text-sm">
          Please select your preferred intervals to see recurring dates
        </p>
      </div>
    );
  }

  const displayDates = calculatedDates.slice(0, 10);
  const leftDates = displayDates.slice(0, 5);
  const rightDates = displayDates.slice(5, 10);
  const remainingCount = calculatedDates.length - 10;

  return (
    <>
      <div className="mt-6 border border-gray-200  rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Dates</h3>
          </div>
          <div className="text-sm text-gray-600">
            Total: <span className="font-semibold text-purple-600">{calculatedDates.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Left Column */}
          <div className="space-y-2">
            {leftDates.map((date, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium text-sm">
                    {formatDate(date)}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {dayjs(date).format('ddd')}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {rightDates.map((date, index) => (
              <div
                key={index + 5}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 6}
                  </div>
                  <span className="text-gray-800 font-medium text-sm">
                    {formatDate(date)}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {dayjs(date).format('ddd')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {remainingCount > 0 && (
          <button
            onClick={() => setShowAllDatesModal(true)}
            className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-blue-50 rounded-lg border border-gray-200 hover:border-purple-200 transition-all group"
          >
            <span className="text-gray-700 font-medium text-sm group-hover:text-purple-700">
              ({remainingCount}) more dates...
            </span>
            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors" />
          </button>
        )}

        {calculatedDates.length <= 10 && calculatedDates.length > 0 && (
          <button
            onClick={() => setShowAllDatesModal(true)}
            className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg border border-blue-200 hover:border-purple-300 transition-all group mt-2"
          >
            <span className="text-gray-700 font-medium text-sm group-hover:text-purple-700">
              View all dates
            </span>
            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors" />
          </button>
        )}
      </div>

      <AllDatesModal 
        isOpen={showAllDatesModal}
        onClose={() => setShowAllDatesModal(false)}
      />
    </>
  );
};

export default SelectedDatesComponent;