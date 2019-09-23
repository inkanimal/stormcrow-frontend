import React from 'react'

const ForecastNavbar = ({ changeWeatherRoute }) => 
  <div className="fnav">
    {/* <button className="fnav-button" onClick={() => changeWeatherRoute('currently')}>Current</button> */}
    <button className="fnav-button" onClick={() => changeWeatherRoute('hourly')}>Hourly</button>
    <button className="fnav-button" onClick={() => changeWeatherRoute('daily')}>Daily </button>
  </div>

export default ForecastNavbar;