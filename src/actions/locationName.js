
import { stopFetchingLocation } from './locationFetch';
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp';



const receivedLocationName = locationName => {
    return {
      type: 'RECEIVED_LOCATION_NAME',
      locationName
    }
  }

//   export const fetchLocationName = () => {
//     return dispatch => {
//       return navigator.geolocation.getCurrentPosition(position => {
//         const { latitude, longitude } = position.coords
        
//         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`)
//           .then(response => response.json())
//           .then(locationName => {
//               console.log(locationName)
//             dispatch(receivedLocationName(locationName))
//             dispatch(stopFetchingLocation())
//           })
//       });
//     }
    
//   }