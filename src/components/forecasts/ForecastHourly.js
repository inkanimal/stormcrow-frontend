import React from 'react'
import moment from 'moment'
import './ForecastHourly.css'

const ForecastHourly = ({ forecastData }) => {
  const renderForecast = forecastData.map((forecast, index) => {
    const { apparentTemperature, precipProbability, humidity, summary, temperature, time } = forecast
    return (
      <div key={index} style={{ border: 'solid 1px black', padding: '12px', margin: '10px' }}>
        <div className="time">
        <h3>{moment.unix(time).format('HH:mm')}</h3>
        </div>
        <div className="temp">
           {Math.round(temperature)}°
        </div>
        <div className="feelslike" id="feelslike">
             
        <p className="feels">Feels Like: {Math.round(apparentTemperature)}° </p>
       </div>
        <h3>{summary}</h3>
        
        <h4>Feels Like: {Math.round(apparentTemperature)}°</h4>
        <h4>Chance of Precipitation: {precipProbability * 100}%</h4>
        <h4>Humidity: {humidity * 100}%</h4>
      </div>
    )
  })

  return (
    <div>
      <h2>Hourly Weather</h2>
      {renderForecast}
    </div>
  )
}
  
 
export default ForecastHourly;