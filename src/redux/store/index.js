import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../slices/city/citySlice"

export const store = configureStore({
    reducer:{
        city: cityReducer
       
    }
})