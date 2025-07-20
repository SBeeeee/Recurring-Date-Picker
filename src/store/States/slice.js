import { createSlice } from "@reduxjs/toolkit";

const initialState={
    openmainmodal:false,
    repeatpattern:"",
    frequency:1,
    endDateEnabled: false,    
    calenderpreview:true,
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
         setcalenderPreview:(state,action)=>{
            state.calenderpreview=action.payload;
         }
    }
})

export const {setmainModal,setpattern,setfrequency,setEndDateEnabled,setcalenderPreview}=stateSlice.actions;
export default stateSlice.reducer;