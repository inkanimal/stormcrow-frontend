
import { stopFetchingLocationData } from './locationFetch';
// import axios from 'axios'
// import fetchJsonp from 'fetch-jsonp';
import Geocode from "react-geocode";

Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);

const receivedLocationData = locationData => {
  
    return {
      type: 'RECEIVED_LOCATION_DATA',
      locationData
    }
  }

  
  

export const fetchLocationData = () => {
  return dispatch => {
    return navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      Geocode.fromLatLng(`${latitude}`, `${longitude}`)
        // .then(response => response.json())
        .then(response => {
          const locationData = response.results[5]
          console.log(locationData)
          dispatch(receivedLocationData(locationData))
          dispatch(stopFetchingLocationData())     
        // },
        // error => {
        //   console.error(error);
        })
    });
  }
}

