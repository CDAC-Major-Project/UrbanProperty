import {  configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import propertiesReducer from "../slices/PropertiesSlice"

const store = configureStore({
    reducer:{
        auth: authReducer,
        property: propertiesReducer,
    }
})

export default store;