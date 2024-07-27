import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import './WeatherApp.css';
export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo]=useState({
        city:"Karachi",
        temp:25.05, 
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        feelsLike:24.05,
        weather:"haze",


    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div className="WeatherApp">
           
           <h1> Weather App </h1>
            <SearchBox updateInfo ={updateInfo } />
            <InfoBox  info={weatherInfo}/>
            

        </div>
    ) 


}