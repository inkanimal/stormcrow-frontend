import React from 'react'
import moment from 'moment'
import './Forecast.css'


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

  <div className="Today">
    <div style={{  padding: '12px', margin: '10px' }}>
    <div className="date">
    {moment.unix(time).format('dddd, MMMM DD').toUpperCase()}
    </div>
         <div className="currentTemp">
           {Math.round(temperature)}°
           </div>
           <div className="hilo">
           {Math.round(data[0].temperatureMax)}°/{Math.round(data[0].temperatureMin)}°
         </div> 
    
    
       <div className="summary">
      {summary}
      </div>
      
      
      <h4>Feels Like: {Math.round(apparentTemperature)}°</h4>
      <h4>Chance of Rain: {Math.round(precipProbability * 100)}%</h4>
      <h4>Humidity: {Math.round(humidity * 100)}%</h4>
      <h4>Dew Point: {Math.round(data[0].dewPoint)}°</h4>
      <p>Sunrise: {moment.unix(data[0].sunriseTime).format('HH:mm')}</p>
      <p>Sunrise: {moment.unix(data[0].sunsetTime).format('HH:mm')}</p>
      <p>Wind: {degToCompass(windBearing)} @ {Math.round(windSpeed)} mph | Gusting to: {Math.round(windGust)} mph</p>
      <p>Pressure: {(pressure * 0.0295301).toFixed(2)} inHg</p>
      <p>Visibility: {(visibility).toFixed(2)} Miles</p>
      <p>Cloud Cover: {(cloudCover * 100)}%</p>
    </div>
  </div>


function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

export default Forecast


