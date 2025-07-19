import { createSlice } from "@reduxjs/toolkit";

const initialState={
    openmainmodal:false,
    repeatpattern:"",
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
        }
    }
})

export const {setmainModal,setpattern}=stateSlice.actions;
export default stateSlice.reducer;