"use client";
import { X, Calendar } from "lucide-react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const AllDatesModal = ({ isOpen, onClose }) => {
  const { calculatedDates } = useSelector((state) => state.stats);

  if (!isOpen) return null;

  const formatDate = (dateStr) => {
    return dayjs(dateStr).format('MMM DD, YYYY (ddd)');
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-xl shadow-lg p-6 w-[500px] max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between mb-4 pb-4 border-b">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">All Recurring Dates</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          Total: <span className="font-semibold text-purple-600">{calculatedDates.length} dates</span>
        </div>

        <div className="overflow-y-auto max-h-[60vh] space-y-2">
          {calculatedDates.map((date, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100 hover:from-purple-100 hover:to-blue-100 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
                <span className="text-gray-800 font-medium">
                  {formatDate(date)}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {dayjs(date).fromNow()}
              </div>
            </div>
          ))}
        </div>

        {calculatedDates.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No dates calculated yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDatesModal;