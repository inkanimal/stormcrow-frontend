import React from 'react'
import moment from 'moment'
import './Forecast.css'
// import ForecastDaily from './components/forecasts/ForecastDaily'
import ForecastHourly from './ForecastHourly'
// import ForecastNavbar from './components/forecasts/ForecastNavbar'
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";


const Forecast = ({ weatherData: { currently: {
    apparentTemperature, 
    precipProbability, 
    humidity,
    summary, 
    temperature, 
    time,
    windSpeed,
    windGust,
    windBearing,
    cloudCover,
    pressure,
    nearestStormBearing,
    nearestStormDistance,
    visibility,
    uvIndex 
       }, daily: { data }
  } 
}) =>
  <span className="block-today border">
  <div className="today" >
    <div className="container">
    <div className="date">
    {moment.unix(time).format('dddd, MMMM DD').toUpperCase()}
    </div>
         <div className="currentTemp">
           {Math.round(temperature)}°
           </div>
           <div className="hilo">
            {Math.round(data[0].temperatureMax)}°/ {Math.round(data[0].temperatureMin)}°
            </div>
            <div className="feels-con">
             <div className="feels">Feels Like</div>  <div className="feels-temp">{Math.round(apparentTemperature)}°</div>
         </div> 
    
    
       <div className="cc">
         {summary}
      </div>
      <div className="summary">
        Today - {data[0].summary}
      </div>
      </div>
      
      <div className="container-two">
      <h4>Chance of Rain: {Math.round(precipProbability * 100)}%</h4>
      <h4>Humidity: {Math.round(humidity * 100)}%</h4>
      <h4>Dew Point: {Math.round(data[0].dewPoint)}°</h4>
      <p>Sunrise: {moment.unix(data[0].sunriseTime).format('HH:mm')}</p>
      <p>Sunset: {moment.unix(data[0].sunsetTime).format('HH:mm')}</p>
      <p>Wind: {degToCompass(windBearing)} @ {Math.round(windSpeed)} mph | Gusting to: {Math.round(windGust)} mph</p>
      <p>Pressure: {(pressure * 0.0295301).toFixed(2)} inHg</p>
      <p>Visibility: {(visibility).toFixed(2)} Miles</p>
      <p>Cloud Cover: {Math.round(cloudCover * 100)}%</p>
      </div>
       
       <div>
         <Link to={"/forecasthourly"}>Hourly</Link>
       </div>
      <Route path={"/forecast/forecasthourly"} exact component={ForecastHourly}/>
    </div>
    </span>


function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

export default Forecast


