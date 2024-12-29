import "./searchbox.css"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function SearchBox ({updateWeather}) {

    let[city, setCity] = useState("");
    let[error, SetError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "059c342a84e807054e377e9032453dff";

        let getWeatherInfo = async () => {
        try {
            let Response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JsonResponse = await Response.json();
    
            let result = {
                temp: JsonResponse.main.temp,
                temp_min: JsonResponse.main.temp_min,
                temp_max: JsonResponse.main.temp_max,
                humidity: JsonResponse.main.humidity,
                feelsLike: JsonResponse.main.feels_like,
                weather: JsonResponse.weather[0].description,
            };
            return result;
        }catch (err) {
            throw err;
        }
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateWeather(newInfo, city);
            SetError(false);
        } catch (err) {
            SetError(true);
        }
     
    }

    return (
        <div className='search-box'>
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField 
           id="City" 
           label="City Name" 
           variant="outlined" 
           required 
           value={city} 
           onChange={handleChange}
        />
        <br /><br />
        {error && <p style={{color: "red"}}>No such city found.</p>}
        <Button 
           variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
        </form>
        </div>
    );
}