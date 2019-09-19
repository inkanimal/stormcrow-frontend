import React from 'react'

const ForecastNavbar = ({ changeWeatherRoute }) => 
  <div>
    <button className="fnav-button" onClick={() => changeWeatherRoute('currently')}>Current</button>
    <button className="fnav-button" onClick={() => changeWeatherRoute('hourly')}>By Hour</button>
    <button className="fnav-button" onClick={() => changeWeatherRoute('daily')}>By Day</button>
  </div>;

export default ForecastNavbar;