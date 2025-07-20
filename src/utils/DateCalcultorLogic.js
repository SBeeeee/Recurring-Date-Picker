"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCalculatedDates } from "@/store/Stats/slice";
import dayjs from "dayjs";

const DateCalculatorLogic = () => {
  const dispatch = useDispatch();
  const { 
    selecteddays, 
    monthlyOptionType, 
    monthlyDayNumber, 
    monthlyNthWeek, 
    monthlyWeekday,
    startDate, 
    endDate 
  } = useSelector((state) => state.stats);
  
  const { 
    repeatpattern, 
    frequency, 
    endDateEnabled 
  } = useSelector((state) => state.states);

  const calculateRecurringDates = () => {
    if (!repeatpattern || !startDate) return [];

    const start = dayjs(startDate);
    const end = endDateEnabled && endDate ? dayjs(endDate) : dayjs().add(2, 'year');
    const dates = [];
    const maxDates = 365; // Safety limit

    let current = start;

    switch (repeatpattern) {
      case 'daily':
        if (selecteddays.length === 0) {
          // Every N days
          while (current.isBefore(end) && dates.length < maxDates) {
            dates.push(current.format('YYYY-MM-DD'));
            current = current.add(frequency, 'day');
          }
        } else {
          // Specific days of week
          const dayMapping = {
            'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 
            'Thu': 4, 'Fri': 5, 'Sat': 6
          };
          
          while (current.isBefore(end) && dates.length < maxDates) {
            for (let i = 0; i < 7; i++) {
              const checkDate = current.add(i, 'day');
              const dayName = checkDate.format('ddd');
              
              if (selecteddays.includes(dayName) && checkDate.isAfter(start.subtract(1, 'day')) && checkDate.isBefore(end)) {
                dates.push(checkDate.format('YYYY-MM-DD'));
              }
            }
            current = current.add(frequency, 'day');
          }
        }
        break;

      case 'weekly':
        if (selecteddays.length === 0) break;
        
        const weekDayMapping = {
          'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 
          'Thu': 4, 'Fri': 5, 'Sat': 6
        };

        while (current.isBefore(end) && dates.length < maxDates) {
          selecteddays.forEach(dayName => {
            const targetDay = weekDayMapping[dayName];
            let weekDate = current.startOf('week').add(targetDay, 'day');
            
            if (weekDate.isAfter(start.subtract(1, 'day')) && weekDate.isBefore(end)) {
              dates.push(weekDate.format('YYYY-MM-DD'));
            }
          });
          current = current.add(frequency, 'week');
        }
        break;

      case 'monthly':
        while (current.isBefore(end) && dates.length < maxDates) {
          let monthDate;
          
          if (monthlyOptionType === 'day') {
            monthDate = current.date(monthlyDayNumber);
            if (monthDate.date() !== monthlyDayNumber) {
              monthDate = current.endOf('month');
            }
          } else if (monthlyOptionType === 'nth') {
            const nthWeekNumber = parseInt(monthlyNthWeek.charAt(0));
            const weekdayNumber = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(monthlyWeekday);
            
            monthDate = current.startOf('month');
            let count = 0;
            while (count < nthWeekNumber && monthDate.month() === current.month()) {
              if (monthDate.day() === weekdayNumber) {
                count++;
                if (count === nthWeekNumber) break;
              }
              monthDate = monthDate.add(1, 'day');
            }
          } else if (monthlyOptionType === 'last') {
            const weekdayNumber = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(monthlyWeekday);
            monthDate = current.endOf('month');
            while (monthDate.day() !== weekdayNumber && monthDate.month() === current.month()) {
              monthDate = monthDate.subtract(1, 'day');
            }
          }

          if (monthDate && monthDate.isAfter(start.subtract(1, 'day')) && monthDate.isBefore(end)) {
            dates.push(monthDate.format('YYYY-MM-DD'));
          }
          
          current = current.add(frequency, 'month');
        }
        break;

      case 'yearly':
        while (current.isBefore(end) && dates.length < maxDates) {
          if (current.isAfter(start.subtract(1, 'day'))) {
            dates.push(current.format('YYYY-MM-DD'));
          }
          current = current.add(frequency, 'year');
        }
        break;
    }

    return dates.sort();
  };

  useEffect(() => {
    const calculatedDates = calculateRecurringDates();
    dispatch(setCalculatedDates(calculatedDates));
  }, [
    repeatpattern, 
    frequency, 
    selecteddays, 
    monthlyOptionType, 
    monthlyDayNumber, 
    monthlyNthWeek, 
    monthlyWeekday,
    startDate, 
    endDate, 
    endDateEnabled,
    dispatch
  ]);

  return null; 
};

export default DateCalculatorLogic;