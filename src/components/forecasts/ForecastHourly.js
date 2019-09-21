import React from 'react'
import moment from 'moment'

const ForecastHourly = ({ forecastData }) => {
  const renderForecast = forecastData.map((forecast, index) => {
    const { apparentTemperature, precipProbability, humidity, summary, temperature, time } = forecast
    return (
      <div key={index} style={{ border: 'solid 1px black', padding: '12px', margin: '10px' }}>
        <h3>{moment.unix(time).format('HH:mm')}</h3>
        <h3>Status: {summary}</h3>
        <h4>Temperature: {temperature}</h4>
        <h4>Feels Like: {apparentTemperature}</h4>
        <h4>Chance of Rain: {precipProbability}%</h4>
        <h4>Humidity: {humidity}%</h4>
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