
import { stopFetchingLocalData } from './fetchLocal';
// import axios from 'axios'
// import fetchJsonp from 'fetch-jsonp';
import Geocode from "react-geocode";
import { resetSearchForm } from './searchForm'

Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);

const receivedSearchLocationData = searchLocationData => {
  
    return {
      type: 'RECEIVED_SEARCH_LOCATION_DATA',
      searchLocationData
    }
  }



export const fetchSearchLocal = (searchFormData) => {
    return async dispatch => {
        const response = await Geocode.fromAddress(searchFormData.city);
        const { lat, lng } = response.results[0].geometry.location;
  
        Geocode.fromLatLng(`${lat}`, `${lng}`)
          // .then(response => response.json())
          .then(response => {
            const searchLocationData = response
            console.log(searchLocationData)
            dispatch(receivedSearchLocationData(searchLocationData))
            dispatch(stopFetchingLocalData())     
          // },
          // error => {
          //   console.error(error);
          })
      };
    }
  