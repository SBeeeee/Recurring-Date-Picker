import { createSlice } from "@reduxjs/toolkit";

const initialState={
    openmainmodal:false,
}

const stateSlice=createSlice({
    name:'states',
    initialState,
    reducers:{
        setmainModal:(state,action)=>{
            state.openmainmodal=action.payload;
        }
    }
})

export const {setmainModal}=stateSlice.actions;
export default stateSlice.reducer;