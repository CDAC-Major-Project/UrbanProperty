import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "",
    userDetails: localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")) : {}
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state, value){
            state.token = value.payload;
        },
        setUserDetails(state, value){
            state.userDetails = value.payload;
        }
    }
})

export const {setToken, setUserDetails} = authSlice.actions;
export default authSlice.reducer;