import React from 'react'
import moment from 'moment'
import '../forecasts/ForecastDaily.css'

const CityForecastDaily = ({ forecastData }) => {
  const renderCityForecast = forecastData.map((cityForecast, index) => {
    const {precipProbability, humidity, summary, temperatureMax, temperatureMin, time, dewPoint, sunriseTime, sunsetTime, pressure, visibility, cloudCover, windBearing, windSpeed, windGust } = cityForecast
    return (
      <span className="block-daily border">
      <div key={index} >
        <div className="date">
            {moment.unix(time).format('dddd, MMMM DD').toUpperCase()}
        </div>
        <div className="hilo-daily">
        {Math.round(temperatureMax)}°/ {Math.round(temperatureMin)}°
        </div>
        <div className="summary-daily">
           {summary}
        </div>
       <div className="daily-data">
        Chance of Precipitation: {Math.round(precipProbability * 100)}% <br></br>
        Humidity: {Math.round(humidity * 100)}% <br></br>
        Dew Point: {Math.round(dewPoint)}° <br></br>
       Sunrise: {moment.unix(sunriseTime).format('HH:mm')} |
       Sunset: {moment.unix(sunsetTime).format('HH:mm')} <br></br>
       Wind: {degToCompass(windBearing)} @ {Math.round(windSpeed)} mph | Gusting to {Math.round(windGust)} mph <br></br>
       Pressure: {(pressure * 0.0295301).toFixed(2)} inHg <br></br>
       Visibility: {(visibility).toFixed(2)} Miles <br></br>
       Cloud Cover: {Math.round(cloudCover * 100)}%
      </div>
      </div>
      </span>
    )
  })

  return (
    <div className="daily-title">
       <h2> Daily Weather</h2>
      <div className="render-daily">{renderCityForecast}</div>
    </div>
  )
}
  
function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}
 
export default CityForecastDaily;