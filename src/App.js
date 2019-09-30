import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser, logout } from "./actions/currentUser";
import { Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
// import Logout from './components/Logout'
import Navbar from './components/Navbar'

import Home from "./containers/Home";
import Location from './components/forecasts/Location'
import Forecast from './components/forecasts/Forecast'
import ForecastDaily from './components/forecasts/ForecastDaily'
import ForecastHourly from './components/forecasts/ForecastHourly'
import ForecastNavbar from './components/forecasts/ForecastNavbar'
import CityForecast from './components/cityForecasts/CityForecast'
import CityForecastDaily from './components/cityForecasts/CityForecastDaily'
import CityForecastHourly from './components/cityForecasts/CityForecastHourly'
import CityNavbar from './components/cityForecasts/CityNavbar'
import { changeWeatherRoute } from './actions/weatherRoute';
import { stopFetchingData } from './actions/weatherFetch';
import { fetchWeatherData } from './actions/weatherData';
import { stopFetchingSearchData } from './actions/searchWeatherFetch';
import { fetchSearchWeatherData } from './actions/searchWeatherData';
import { stopFetchingLocationData } from './actions/locationFetch';
import { fetchLocationData } from './actions/locationData';
import logo from './logo.svg';



class App extends React.Component {

  // componentWillMount() {
  //   window.history.pushState('', {}, 'currently')
  // } 
  
   componentDidMount(){
       this.props.fetchWeatherData()
       this.props.fetchLocationData()
       this.props.fetchSearchWeatherData()
       this.props.getCurrentUser()
      

   }

   handleRouteChange = routeName => this.props.changeWeatherRoute({ routeName: routeName })

   render(){
     const { loggedIn } = this.props
     const { weatherData, weatherFetch, routeName, locationData, locationFetch, searchWeatherFetch, searchWeatherData} = this.props
     console.log(this.props)
     const forecast = weatherData[routeName]
     const cityForecast = searchWeatherData[routeName]
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
             <Route path="/forecast" render={(props) => weatherFetch ? <img src={logo} className="App-logo" alt="logo" />
                  :
                  <div>
                    <Forecast weatherData={weatherData} locationData={locationData}/>
                      <ForecastNavbar bg="dark" expand="lg" changeWeatherRoute={this.handleRouteChange} />
                        {routeName === 'hourly' && <ForecastHourly forecastData={forecast.data}/>}
                        {routeName === 'daily' && <ForecastDaily forecastData={forecast.data} />}
                  </div>
              }/>
              </div>

              <div className="city-forecast">
             <Route path="/cityforecast" render={(props) => searchWeatherFetch ? <img src={logo} className="App-logo" alt="logo" />
                  :
                  <div>
                    <CityForecast searchWeatherData={searchWeatherData} />
                      <CityNavbar bg="dark" expand="lg" changeWeatherRoute={this.handleRouteChange} />
                        {routeName === 'hourly' && <CityForecastHourly forecastData={cityForecast.data}/>}
                        {routeName === 'daily' && <CityForecastDaily forecastData={cityForecast.data} />}
                  </div>
              }/>
              </div>

              <div className="local-data">
                <Route path="/location" render={(props) => locationFetch ?  <img src={logo} className="App-logo" alt="logo" />
                   :
                  <div>
                    <Location location={locationData}/>
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
    locationFetch: state.locationFetch,
    locationData: state.locationData,
    searchWeatherData: state.searchWeatherData,
    searchWeatherFetch: state.searchWeatherFetch
    
  })
}


export default connect(mapStateToProps, { getCurrentUser, changeWeatherRoute, 
                                          stopFetchingData, fetchWeatherData, logout, 
                                          stopFetchingLocationData, fetchLocationData,
                                          stopFetchingSearchData, fetchSearchWeatherData })(App);
