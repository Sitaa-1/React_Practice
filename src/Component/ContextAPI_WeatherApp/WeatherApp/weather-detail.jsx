import axios from "axios";
import { useEffect, useState } from "react"

export function WeatherDetails(){
    const[weatherObj,setWeatherObj] = useState({weather:[], main:{temp:0}, name:null});

    function LoadWeatherDetail(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=788204f6a2e3dc0d86d9c0ad91e14855&units=metric`)
        .then(response=>{
            setWeatherObj(response.data);
        })
    }
    useEffect(()=>{
        LoadWeatherDetail();
    },[])

    return(
        <div className="bg-light shadow shadow-lg p-3">
            <h3>{weatherObj.name}</h3>
            <div className="fs-1 fw-bold">
                {weatherObj.main.temp}&deg;C
            </div>
            {/* <div>
                {weatherObj.weather[0].description}
            </div> */}
        </div>
    )
}
//788204f6a2e3dc0d86d9c0ad91e14855 
// 
