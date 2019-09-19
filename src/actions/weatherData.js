import { stopFetchingData } from './weatherFetch';
import axios from 'axios'

const WeatherAPI = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/`

const receivedWeatherData = weatherData => {
  return {
    type: 'RECEIVED_WEATHER_DATA',
    weatherData
  }
}

export const fetchWeatherData = () => {
  return dispatch => {
    return navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      
      axios(`${weatherAPI}${latitude},${longitude}`)
        .then(response => response.json())
        .then(weatherData => {
          dispatch(receivedWeatherData(weatherData))
          dispatch(stopFetchingData())
        })
    });
  }
  
}