"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setfrequency } from "@/store/States/slice";
import { Hash } from "lucide-react";

export default function FrequencyInput() {
  const dispatch = useDispatch();
  const {frequency} = useSelector((state) => state.states);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      dispatch(setfrequency(value));
    }
  };

  return (
    <div className=" border border-gray-200 rounded-2xl mt-4 p-4 mb-4">
      <p className="text-sm font-medium text-gray-800 flex items-center gap-2 mb-3">
        <Hash className="w-4 h-4 text-purple-600" />
        Frequency
      </p>

      <div className="flex items-center gap-2">
        <span className="text-gray-700 text-sm">Every</span>

        <input
          type="number"
          min="1"
          value={frequency}
          onChange={handleChange}
          className="w-20 px-3 py-2 border-2 border-purple-300 focus:outline-none focus:border-purple-500 rounded-lg text-center text-sm font-medium"
        />

        <span className="bg-gray-100 text-gray-700 px-3 py-2 text-sm rounded-lg">
          day(s)
        </span>
      </div>
    </div>
  );
}
