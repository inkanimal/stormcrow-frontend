import React from 'react'
import moment from 'moment'

const Forecast = ({ forecast: { apparentTemperature, precipProbability, humidity, summary, temperature, time } }) =>
  <div>
    <h2>Current Weather</h2>
    <div style={{  padding: '12px', margin: '10px' }}>
      <h3>Status: {summary}</h3>
      <h4>{moment.unix(time).format('dddd, MMMM DD, hh:mm ')}</h4>
      <h4>Temperature: {temperature}</h4>
      <h4>Feels Like: {apparentTemperature}</h4>
      <h4>Chance of Rain: {precipProbability}%</h4>
      <h4>Humidity: {humidity}%</h4>
    </div>
  </div>;

export default Forecast