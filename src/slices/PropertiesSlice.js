import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedBuyerProperties : []
}

export const propertiesSlice = createSlice({
    name:"properties",
    initialState:initialState,
    reducers:{
        setSavedBuyerProperties(state, value){
            state.savedBuyerProperties = value.payload;
        }
    }
})

export const {setSavedBuyerProperties} = propertiesSlice.actions;
export default propertiesSlice.reducer;