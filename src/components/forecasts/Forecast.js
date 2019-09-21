import React from 'react'
import moment from 'moment'

const Forecast = ({ forecast: { 
    apparentTemperature, 
    precipProbability, 
    humidity,
    summary, 
    temperature, 
    time, 
    temperatureMax, 
    temperatureMin

  } 
}) =>

  <div className="current">
    <div className="date">
      <h4>{moment.unix(time).format('dddd, MMMM DD').toUpperCase}</h4>
         <div className="temp">
           <h1>{Math.round(temperature)}°</h1>
           <h4>{Math.round(temperatureMax)}°/{Math.round(temperatureMin)}°</h4>
         </div> 
    </div>
    
    <div style={{  padding: '12px', margin: '10px' }}>
      <h3>{summary}</h3>
      
    
      <h4>Feels Like: {apparentTemperature}</h4>
      <h4>Chance of Rain: {precipProbability}%</h4>
      <h4>Humidity: {humidity}%</h4>
    </div>
  </div>

export default Forecast