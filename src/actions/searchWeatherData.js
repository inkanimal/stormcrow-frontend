import { stopFetchingSearchData } from './searchWeatherFetch';
// import axios from 'axios'
import fetchJsonp from 'fetch-jsonp';
import Geocode from "react-geocode";

const weatherAPI = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

const receivedSearchWeatherData = searchWeatherData => {
  return {
    type: 'RECEIVED_SEARCH_WEATHER_DATA',
    searchWeatherData
  }
}

export const fetchSearchWeatherData = () => {
  return dispatch => {
    return Geocode.fromAddress("minneapolis").then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
      
      fetchJsonp(`${weatherAPI}${lat},${lng}`)
        .then(response => response.json())
        .then(searchWeatherData => {
            console.log(searchWeatherData)
          dispatch(receivedSearchWeatherData(searchWeatherData))
          dispatch(stopFetchingSearchData())
        })
    });
  }
  
}

