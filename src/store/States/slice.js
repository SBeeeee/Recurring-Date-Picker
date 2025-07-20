import { createSlice } from "@reduxjs/toolkit";

const initialState={
    openmainmodal:false,
    repeatpattern:"",
    frequency:1,
    endDateEnabled: false,    
}

const stateSlice=createSlice({
    name:'states',
    initialState,
    reducers:{
        setmainModal:(state,action)=>{
            state.openmainmodal=action.payload;
        },
        setpattern:(state,action)=>{
            state.repeatpattern=action.payload;
        },
        setfrequency:(state,action)=>{
            state.frequency=action.payload;
        },
        setEndDateEnabled: (state, action) => {
            state.endDateEnabled = action.payload;
         },
    }
})

export const {setmainModal,setpattern,setfrequency,setEndDateEnabled}=stateSlice.actions;
export default stateSlice.reducer;