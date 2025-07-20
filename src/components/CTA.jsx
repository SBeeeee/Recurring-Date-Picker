"use client";
import { CalendarDays, Sparkles } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import MainModal from './MainModal';
import { setmainModal } from '@/store/States/slice';

const CTA = () => {
  const dispatch = useDispatch();
  const { openmainmodal } = useSelector((state) => state.states);
  const finaldates = useSelector((state) => state.stats.finaldates);

  const handleClick = () => {
    console.log("Button clicked — opening modal");
    dispatch(setmainModal(true));
  };

  const hasFinalDates = finaldates.length > 0;
  const buttonTitle = hasFinalDates ? "Modify Schedule" : "Recurring Dates";
  const subtitle = hasFinalDates ? "Edit your selected dates" : "Set up your schedule";

  return (
    <div className="bg-white rounded-3xl px-6 mt-6 pt-6 pb-8 shadow-xl max-w-5xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
        Configure Your Schedule
      </h2>
      <button
        onClick={handleClick}
        className="flex items-center z-50 hover:cursor-pointer gap-3 px-5 py-3 text-white font-semibold rounded-xl text-sm bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:scale-[1.02] transition-transform mx-auto"
      >
        <CalendarDays className="w-5 h-5" />
        <div className="text-left leading-tight">
          <div className="flex items-center gap-1">
            {buttonTitle}
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs font-normal text-white/80">{subtitle}</p>
        </div>
      </button>
      {openmainmodal && <MainModal />}
    </div>
  );
};

export default CTA;
