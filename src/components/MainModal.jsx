"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setmainModal } from "@/store/States/slice";
import { X } from "lucide-react";
import RepeatPatternOptions from "./RepeatPatternOptions";


export default function MainModal() {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 backdrop-blur-sm  bg-opacity-40 flex items-center justify-center  z-50">
      <div className="relative bg-white rounded-xl shadow-lg p-8 w-[600px] text-left">
    
        <button
          onClick={() => dispatch(setmainModal(false))}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X className="w-6 h-6 text-red-800" />
        </button>

 
        <h2 className="text-2xl font-semibold mb-1">Recurring Schedule</h2>
        <p className="text-gray-500 mb-6">Configure your repeating dates</p>

   <RepeatPatternOptions/>
      </div>
    </div>
  );
}
