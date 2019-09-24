import React, { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser, logout } from "./actions/currentUser";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
// import Logout from './components/Logout'
import Navbar from './components/Navbar'

import Home from "./containers/Home";

import Forecast from './components/forecasts/Forecast'
import ForecastDaily from './components/forecasts/ForecastDaily'
import ForecastHourly from './components/forecasts/ForecastHourly'
import ForecastNavbar from './components/forecasts/ForecastNavbar'
import { changeWeatherRoute } from './actions/weatherRoute';
import { stopFetchingData } from './actions/weatherFetch';
import { fetchWeatherData } from './actions/weatherData';
import { stopFetchingLocation } from './actions/locationFetch';
// import { fetchLocationName } from './actions/locationName';
import logo from './logo.svg';



class App extends React.Component {

  // componentWillMount() {
  //   window.history.pushState('', {}, 'currently')
  // } 
  
   componentDidMount(){
       this.props.fetchWeatherData()
       this.props.getCurrentUser()
      //  this.props.fetchLocationName()

   }

   handleRouteChange = routeName => this.props.changeWeatherRoute({ routeName: routeName })

   render(){
     const { loggedIn } = this.props
     const { weatherData, weatherFetch, routeName, locationName, locationFetch} = this.props
     const forecast = weatherData[routeName]
    //  const pathName = window.location.pathname.split("/")[1];

     return (
      <div className="App" id="app">
        <div className="App-header">
          <h1>S T O R M C R O W</h1>
        </div>
        
        <div>
          <Navbar bg="dark" expand="lg"/>
       </div>
          <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/login" exact component={Login} />
           <Route path="/signup" render={({history})=><Signup history={history}/>}/> /> 
           <Route path="/logout" render={props => {
              this.props.logout()
               return <Redirect to = '/' />
              }} />

           <div className="forecast">
             <Route path="/forecast" render={(props) => weatherFetch ?  <img src={logo} className="App-logo" alt="logo" />
                  :
                  <div>
                    <Forecast weatherData={weatherData}/>
                      <ForecastNavbar bg="dark" expand="lg" changeWeatherRoute={this.handleRouteChange} />
                        {routeName === 'hourly' && <ForecastHourly forecastData={forecast.data}/>}
                        {routeName === 'daily' && <ForecastDaily forecastData={forecast.data} />}
                  </div>
                }/>
              </div>
          </Switch>
        
    </div>
     );
   }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    weatherFetch: state.weatherFetch,
    routeName: state.weatherRoute.routeName,
    weatherData: state.weatherData,
    locationName: state.locationName,
    locationFetch: state.locationFetch
  })
}


export default connect(mapStateToProps, { getCurrentUser, changeWeatherRoute, stopFetchingData, fetchWeatherData, logout, stopFetchingLocation })(App);
