import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { resetSearchCityForm } from './searchCityForm'



handleChange = (e) => {
    if (e.target.name === "city") {       // sets city as a string
      this.setState({ [e.target.name]: e.target.value })
    }
}

// getCoordinates= (e) => { 
//     e.preventDefault();
//     axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.city}.json?&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`)
//       .then(resp => {
//         this.setState({
//           longitude: resp.data.features[0].geometry.coordinates[0],
//           latitude: resp.data.features[0].geometry.coordinates[1]
//         })
//        
//         this.props.fetchweatherData(this.state.latitude, this.state.longitude)
//       })
//   }

  export default SearchCity