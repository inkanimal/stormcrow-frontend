import React, { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { Route, Switch, withRouter } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
// import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import axios from 'axios';
import ForecastCurrently from './components/forecasts/ForecastCurrently'
import ForecastDaily from './components/forecasts/ForecastDaily'
import ForecastHourly from './components/forecasts/ForecastHourly'
import ForecastNavbar from './components/forecasts/ForecastNavbar'

const weatherAPI = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}`

class App extends React.Component {

  handleRouteChange = routeName => this.props.changeRoute({ routeName: routeName })
  
   componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
      return axios(`${weatherAPI}${position.coords.latitude},${position.coords.longitude}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        weatherFetch: false,
        weatherData: data,
        weatherRoute: 'currently'
      }))
    }) 
       this.props.getCurrentUser()

   }

   render(){
     const { loggedIn } = this.props
     return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/dashboard" render={(props) => loggedIn ? <dashboard {...props}/>: null}/>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" render={({history})=><Signup history={history}/>}/> />
          {weatherFetch ?
          <p>Loading...</p>
          :
          <div>
            <ForecastNavbar changeForecast={this.handleRouteChange} />
            {weatherRoute === 'currently' &&
              <ForecastCurrently forecast={forecast} />
            }
            {weatherRoute === 'hourly' &&
              <ForecastHourly forecastData={forecast.data} />
            }
            {weatherRoute === 'daily' &&
              <ForecastDaily forecastData={forecast.data} />
            }
          </div>
        }
        </Switch>;
    
    </div>
     );
   }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default connect(mapStateToProps, { getCurrentUser })(App);
