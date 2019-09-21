import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

class SearchWeather extends Component {
    state = {
        latitude: null,
        longitude: null,
        city: ""
    }
}

getCoordinates= (e) => { //takes address input and converts it into coordinates via mapbox api
    e.preventDefault();
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.city}.json?&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`)
      .then(resp => {
        this.setState({
          longitude: resp.data.features[0].geometry.coordinates[0],
          latitude: resp.data.features[0].geometry.coordinates[1]
        })
        //calls fetchHikes to show response
        this.props.fetchweatherData(this.state.latitude, this.state.longitude)
      })
  }

  export default connect(null, { })(SearchWeather)