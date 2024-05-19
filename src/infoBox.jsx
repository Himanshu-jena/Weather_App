import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
 

    const HOT_URL = "https://max.nwstatic.co.uk/newsimages2016/autumn/1200x700xsunny-autumn-day.jpg,qw=1200.pagespeed.ic.XWc9ncPc1L.jpg";
    const RAIN_URL = "https://w0.peakpx.com/wallpaper/450/88/HD-wallpaper-cold-weather-tree-nature-winter.jpg";
    const COLD_URL = "https://static.vecteezy.com/system/resources/previews/029/772/335/large_2x/epicgraphy-shot-of-rainy-season-background-enjoying-nature-rainfall-and-happy-life-concept-generative-ai-free-photo.jpeg";

    return(
        <div className="InfoBox">
    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <AcUnitIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <ThunderstormIcon /> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;c</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;c</p>
        <p>Max Temp = {info.tempMax}&deg;c</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;c</p>

        </Typography>
      </CardContent>
    
    </Card>
    </div>
    </div>
    );
}