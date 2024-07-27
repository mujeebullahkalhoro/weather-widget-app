import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1720760950804-729e3043a1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://media.istockphoto.com/id/1453742573/photo/vertical-shot-of-people-walking-with-a-lot-of-snow-on-a-winter-day.jpg?s=2048x2048&w=is&k=20&c=TalUZcO4jZFfOyNKzAj4gof2DEUKzzNUGqInUs-MZEY=";

  return (
    <div className="InfoBox">
      
      
      <div className="CardContainner">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} { info.humidity > 80 ? <ThunderstormIcon />: info.temp > 15 ? <WbSunnyIcon /> :  <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div> Temperature = {info.temp}&deg;C</div>
            <div> Min Temp = {info.tempMin}&deg;C</div>
            <div> Max Temp = {info.tempMax}&deg;C</div>
            <div> humidity = {info.humidity}&deg;C</div>
            <div>
              {" "}
              The wheather can be described as <i> {info.weather}</i> and feels
              like {info.feelsLike} &deg;C{" "}
            </div>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
