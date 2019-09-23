import React from 'react'
import moment from 'moment'

const ForecastDaily = ({ forecastData }) => {
  const renderForecast = forecastData.map((forecast, index) => {
    const {precipProbability, humidity, summary, temperatureMax, temperatureMin, time, dewPoint, sunriseTime, sunsetTime, pressure, visibility, cloudCover, windBearing, windSpeed, windGust } = forecast
    return (
      <div key={index} style={{ border: 'solid 1px black', padding: '12px', margin: '10px' }}>
        <div className="date">
            {moment.unix(time).format('dddd, MMMM DD').toUpperCase()}
        </div>
        <h3> {summary}</h3>
        <h4>HI: {Math.round(temperatureMax)}°</h4>
        <h4>LOW: {Math.round(temperatureMin)}°</h4>
       
        <h4>Chance of Rain: {Math.round(precipProbability * 100)}%</h4>
        <h4>Humidity: {Math.round(humidity * 100)}%</h4>
        <h4>Dew Point: {Math.round(dewPoint)}°</h4>
      <p>Sunrise: {moment.unix(sunriseTime).format('HH:mm')}</p>
      <p>Sunrise: {moment.unix(sunsetTime).format('HH:mm')}</p>
      <p>Wind: {degToCompass(windBearing)} @ {Math.round(windSpeed)} mph | Gusting to: {Math.round(windGust)} mph</p>
      <p>Pressure: {(pressure * 0.0295301).toFixed(2)} inHg</p>
      <p>Visibility: {(visibility).toFixed(2)} Miles</p>
      <p>Cloud Cover: {(cloudCover * 100)}%</p>
      </div>
    )
  })

  return (
    <div>
      <h2>Daily Weather</h2>
      {renderForecast}
    </div>
  )
}
  
function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}
 
export default ForecastDaily;