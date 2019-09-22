import React from 'react'
import moment from 'moment'

const ForecastDaily = ({ forecastData }) => {
  const renderForecast = forecastData.map((forecast, index) => {
    const { apparentTemperatureMax, apparentTemperatureMin, precipProbability, humidity, summary, temperatureMax, temperatureMin, time } = forecast
    return (
      <div key={index} style={{ border: 'solid 1px black', padding: '12px', margin: '10px' }}>
        <div className="date">
            {moment.unix(time).format('dddd, MMMM DD').toUpperCase()}
        </div>
        <h3>Status: {summary}</h3>
        <h4>HI: {Math.round(temperatureMax)}°</h4>
        <h4>LOW: {Math.round(temperatureMin)}°</h4>
       
        <h4>Chance of Rain: {Math.round(precipProbability * 100)}%</h4>
        <h4>Humidity: {Math.round(humidity * 100)}%</h4>
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
  
 
export default ForecastDaily;