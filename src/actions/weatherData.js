import { stopFetchingData } from './weatherFetch';
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp';

const weatherAPI = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

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
      
      fetchJsonp(`${weatherAPI}${latitude},${longitude}`)
        .then(response => response.json())
        .then(weatherData => {
            console.log(weatherData)
          dispatch(receivedWeatherData(weatherData))
          dispatch(stopFetchingData())
        })
    });
  }
  
}