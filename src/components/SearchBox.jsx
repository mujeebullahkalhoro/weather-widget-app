import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error , setError]=useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "bc20513c6146a10b1b0cb25d0c9df1d4";

    const getWeatherInfo = async () => {
        let result = {};
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData);

            result = {
                city: city,
                temp: jsonData.main.temp,
                tempMin: jsonData.main.temp_min,
                tempMax: jsonData.main.temp_max,
                humidity: jsonData.main.humidity,
                feelsLike: jsonData.main.feels_like,
                weather: jsonData.weather[0].description
            }
            console.log(result);
        } catch (error) {
           throw error;
        }
        return result;
    }

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = async (e) => {

        try{
            e.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch{
            setError(true)
        }
        
    }

    return (
        <div className='SearchBox'>
            <h3>Search For Weather</h3>
            <form className='SearchBox' onSubmit={handleSubmit}>
                <TextField label="City Name" variant="outlined" id="city" required value={city} onChange={handleChange}  className='customTextField'/>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p>No such place in our API</p>}
            </form>
        </div>
    )
}
