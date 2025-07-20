import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selecteddays:[],
    monthlyOptionType: "day", // "day", "nth", or "last"
    monthlyDayNumber: 1,
    monthlyNthWeek: "1st",
    monthlyWeekday: "Sunday",
}

const statsSlice=createSlice({
    name:'stats',
    initialState,
    reducers:{
        setselecteddays:(state,action)=>{
            const day = action.payload;
            if (state.selecteddays.includes(day)) {
                state.selecteddays = state.selecteddays.filter(d => d !== day); 
              } else {
                state.selecteddays.push(day); 
              }
            },
            setMonthlyOptionType: (state, action) => {
              state.monthlyOptionType = action.payload;
            },
            setMonthlyDayNumber: (state, action) => {
              state.monthlyDayNumber = action.payload;
            },
            setMonthlyNthWeek: (state, action) => {
              state.monthlyNthWeek = action.payload;
            },
            setMonthlyWeekday: (state, action) => {
              state.monthlyWeekday = action.payload;
            },    
        },
})

export const {setselecteddays, setMonthlyOptionType,setMonthlyDayNumber,setMonthlyNthWeek,setMonthlyWeekday,}=statsSlice.actions;
export default statsSlice.reducer;