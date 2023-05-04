import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    city: "",
    country: ""
}

export const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        changeCity: (state, action) => {
            const { city, country } = action.payload
            state.city = city
            state.country = country
        },
        resetCity: (state) => {
            state.city = ""
            state.country = ""
        }
    }   
})

    

export const { changeCity, resetCity } = citySlice.actions



export default citySlice.reducer
