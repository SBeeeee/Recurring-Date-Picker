"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setpattern } from "@/store/States/slice";
import { Calendar, Clock } from "lucide-react";

const options = [
  { label: "Daily", value: "daily", icon: <Clock className="w-5 h-5" /> },
  { label: "Weekly", value: "weekly", icon: <Calendar className="w-5 h-5" /> },
  { label: "Monthly", value: "monthly", icon: <Calendar className="w-5 h-5" /> },
  { label: "Yearly", value: "yearly", icon: <Calendar className="w-5 h-5" /> },
];

const gradientMap = {
  daily: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  weekly: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
  monthly: "bg-gradient-to-r from-pink-500 to-rose-500 text-white",
  yearly: "bg-gradient-to-r from-amber-400 to-yellow-500 text-white",
};

export default function RepeatPatternOptions() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.states.repeatpattern);

  return (
    <div className="border border-gray-200 p-4 rounded-2xl">
      <p className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2 ">
        <Calendar className="w-4 h-4 text-blue-600" />
        Repeat Pattern
      </p>

      <div className="grid grid-cols-2 gap-4">
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => dispatch(setpattern(opt.value))}
              className={`flex hover:cursor-pointer flex-col items-center justify-center px-4 py-6 rounded-xl border transition-all
                ${isSelected ? gradientMap[opt.value] : "bg-white text-black border-gray-200 hover:bg-gray-100"}`}
            >
              <div className="mb-2">{opt.icon}</div>
              <div className="font-medium text-sm">{opt.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
