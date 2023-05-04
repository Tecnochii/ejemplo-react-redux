import "./styles/citiesPage.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"
import { changeCity, resetCity } from "../../redux/slices/city/citySlice"



export default function Cities() {


    const [cityInputValue, setCityInputValue] = useState()
    const [countryInputValue, setCountryInputValue] = useState()

    const dispatch = useDispatch()

    const city = useSelector((store)=> store.city)

    const payload = {
        city: cityInputValue,
        country: countryInputValue
    }

    let navigate = useNavigate()

    return (
        <>

            <h1>Cities </h1>
            <div className="input-container">

                <label>
                    City
                    <input type="text" onChange={(e) => { setCityInputValue(e.target.value) }} />

                </label>
                <label>
                    Country
                    <input type="text" onChange={(e) => { setCountryInputValue(e.target.value) }} />

                </label>
            </div>

            <button onClick={() => navigate(-1)}>Volver</button>



            <button onClick={() => { dispatch(changeCity(payload)) }}>Create City</button>
            <button onClick={() => { dispatch(resetCity()) }}>Reset</button>


            <div >
                <p>{city.city}</p>
                <p>{city.country}</p>
            </div>

        </>

    )
}