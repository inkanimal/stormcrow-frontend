import React from 'react'
import moment from 'moment'
import './ForecastHourly.css'


const ForecastHourly = ({ forecastData }) => {
  const renderForecast = forecastData.map((forecast, index) => {
    const { apparentTemperature, precipProbability, humidity, summary, temperature, time } = forecast
    return (
    
       
      <span className="block border">
      <div key={index} className="hourly">
         
        <div className="time">
        {moment.unix(time).format('HH:mm')}
        </div>

        <div className="day">
        {moment.unix(time).format('dddd').toUpperCase()}
        </div>

        <div className="temp">
           {Math.round(temperature)}°
        </div>

        <div className="feels-con" id="feelslike">     
        <div className="feels">Feels Like</div> <div className='feels-hourly'>{Math.round(apparentTemperature)}° </div>
       </div>

       <div className="summary-hourly">
        {summary}
        </div>
        
        <div className="hourly-data">
        Chance of Precipitation: {precipProbability * 100}%
        Humidity: {Math.round(humidity * 100)}%
        </div>

      </div>
      </span>
      
     
    )
  })

  return (
    <div className="hourly-title">
      <h2>Hourly Weather</h2>
      <div className="render">{renderForecast}</div>
    </div>
  )
}
  
 
export default ForecastHourly;