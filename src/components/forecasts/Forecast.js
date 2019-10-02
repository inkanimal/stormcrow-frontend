import React from 'react'
import moment from 'moment'
import './Forecast.css'
// import ForecastDaily from './components/forecasts/ForecastDaily'
import ForecastHourly from './ForecastHourly'
// import ForecastNavbar from './components/forecasts/ForecastNavbar'
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Location from './Location'


const Forecast = ({ weatherData: { 
                        currently: { apparentTemperature, 
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
                                     uvIndex}, 
                            daily: { data } }, locationData: { results } }) =>
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

         <div className="local">
           { (results[5].address_components[0].long_name).toUpperCase() }
           
         </div>
    
    
       <div className="cc">
         {summary}
      </div>
      <div className="summary">
        Today - {data[0].summary}
      </div>
      </div>
      
      <div className="container-two">
      <h5>Chance of Rain: {Math.round(precipProbability * 100)}%</h5>
      <h5>Humidity: {Math.round(humidity * 100)}%</h5>
      <h5>Dew Point: {Math.round(data[0].dewPoint)}°</h5>
      <h5>Sunrise: {moment.unix(data[0].sunriseTime).format('HH:mm')}</h5>
      <h5>Sunset: {moment.unix(data[0].sunsetTime).format('HH:mm')}</h5>
      <h5>Wind: {degToCompass(windBearing)} @ {Math.round(windSpeed)} mph | Gusting to: {Math.round(windGust)} mph</h5>
      <h5>Pressure: {(pressure * 0.0295301).toFixed(2)} inHg</h5>
      <h5>Visibility: {(visibility).toFixed(2)} Miles</h5>
      <h5>Cloud Cover: {Math.round(cloudCover * 100)}%</h5>
      </div>
       
      </div>
    </span>


function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

export default Forecast


