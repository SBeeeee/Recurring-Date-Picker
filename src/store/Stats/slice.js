import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selecteddays:[],
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
        },
})

export const {setselecteddays}=statsSlice.actions;
export default statsSlice.reducer;