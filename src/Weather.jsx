import SearchBox from './search';
import Infobox from './info';
import { useState } from 'react';
import "./searchbox.css"

export default function Weather() {

  let [Weather, setWeather] = useState({
    temp: 25,
    temp_min: 25,
    temp_max: 30,
    humidity: 50,
    feelsLike: 25,
    weather: "haze"
  });

  let[city, setCity] = useState("");

  let updateWeather = (newInfo, cityName) =>{
    setWeather(newInfo)
    setCity(cityName);
  };

  return (
    <div>
      
      <SearchBox updateWeather={updateWeather}/>
      <Infobox data={Weather} city={city}/>
    </div>
  )
}
