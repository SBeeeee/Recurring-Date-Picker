"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setmainModal } from "@/store/States/slice";
import { setFinalDates } from "@/store/Stats/slice";

export default function ApplyScheduleButtons() {
  const dispatch = useDispatch();

  const calculatedDates = useSelector((state) => state.stats.calculatedDates);
  const isDisabled = calculatedDates.length === 0;

  const handleApply = () => {
    if (!isDisabled) {
      dispatch(setFinalDates(calculatedDates));
      dispatch(setmainModal(false));
    }
  };

  const handleCancel = () => {
    dispatch(setmainModal(false));
  };

  return (
    <div className="flex justify-end items-center gap-4 p-4 border-t">
      <button
        onClick={handleCancel}
        className="text-gray-600 text-sm hover:underline"
      >
        Cancel
      </button>
      <button
        onClick={handleApply}
        disabled={isDisabled}
        className={`text-white text-sm px-4 py-2 rounded-full transition 
          ${
            isDisabled
              ? "bg-gradient-to-r from-blue-200 to-purple-200 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
          }`}
      >
        Apply Schedule ({calculatedDates.length})
      </button>
    </div>
  );
}
