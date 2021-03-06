import { stopFetchingSearchData } from './searchWeatherFetch';
// import axios from 'axios'
import fetchJsonp from 'fetch-jsonp';
import Geocode from "react-geocode";
import { resetSearchForm } from './searchForm'

const weatherAPI = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);

const receivedSearchWeatherData = searchWeatherData => {
    // debugger
  return {
    type: 'RECEIVED_SEARCH_WEATHER_DATA',
    searchWeatherData
  }
}



export const fetchSearchWeatherData = (searchFormData, history) => {
  return async dispatch => {
    const response = await Geocode.fromAddress(searchFormData.city);
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      fetchJsonp(`${weatherAPI}${lat},${lng}`)
          .then(response_1 => response_1.json())
          .then(searchWeatherData => {
              console.log(searchWeatherData);
              dispatch(receivedSearchWeatherData(searchWeatherData));
              dispatch(stopFetchingSearchData())
              dispatch(resetSearchForm())
              history.push('/cityforecast');
          });
  }

  
  
}

