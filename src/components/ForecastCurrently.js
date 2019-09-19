import React from 'react'

const ForecastCurrently = ({ forecast: { apparentTemperature, precipProbability, humidity, summary, temperature } }) =>
  <div>
    <h2>Current Weather</h2>
    <div style={{ border: 'solid 1px black', padding: '12px', margin: '10px' }}>
      <h3>Status: {summary}</h3>
      <h4>Temperature: {temperature}</h4>
      <h4>Feels Like: {apparentTemperature}</h4>
      <h4>Chance of Rain: {precipProbability}%</h4>
      <h4>Humidity: {humidity}%</h4>
    </div>
  </div>;

export default ForecastCurrently