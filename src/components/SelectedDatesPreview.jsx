"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function SelectedDatesPreview() {
  const finaldates = useSelector((state) => state.stats.finaldates);

  if (finaldates.length === 0) return null;

  return (
    <div className="px-20 py-10">
      <h2 className="text-lg font-semibold mb-4">
        Selected Dates ({finaldates.length})
      </h2>
      <div className="grid grid-cols-3 gap-4 max-h-[300px] overflow-y-auto pr-2">
        {finaldates.map((date, idx) => (
          <div
            key={idx}
            className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-md border border-blue-200"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}
