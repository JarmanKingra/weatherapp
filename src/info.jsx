import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./searchbox.css"


export default function Infobox ({data, city}) {
  const Cold_img = "https://images.unsplash.com/photo-1528191710846-99b8717a2830?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rainy_img = "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=1024x1024&w=is&k=20&c=6D4nOCZt39KSqx0-nDyxSj6n8JFrSI5cSCDUUt4o17w=";
    const hot_img = "https://media.istockphoto.com/id/533903266/photo/sunny-berlin-street-life-defocused-image.jpg?s=1024x1024&w=is&k=20&c=dvVCiryv4UDH5aCUE_KBekxFhqPFGqPIHJQU3BOwdVA=";

    return (
        <div>
            <div className='MainWeatherpage'>
        <h1>Weather Info</h1>
        
        <Card className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image={data.humidity > 80 ? Rainy_img : data.temp > 15 ? hot_img : Cold_img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{city.toUpperCase()}</b> {data.humidity > 80 ? <ThunderstormIcon/> : data.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Temperature : {data.temp} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Min-temp : {data.temp_min}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Max-temp : {data.temp_max}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Humidity : {data.humidity}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        FeelsLike : {data.feelsLike}
        </Typography>
        
        </CardContent>
    </Card>
        </div>
        </div>
    )
}