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

import Forecast from './components/forecasts/Forecast'
import ForecastDaily from './components/forecasts/ForecastDaily'
import ForecastHourly from './components/forecasts/ForecastHourly'
import ForecastNavbar from './components/forecasts/ForecastNavbar'
import { changeWeatherRoute } from './actions/weatherRoute';
import { stopFetchingData } from './actions/weatherFetch';
import { fetchWeatherData } from './actions/weatherData';
import logo from './logo.svg';



class App extends React.Component {

  // componentWillMount() {
  //   window.history.pushState('', {}, 'currently')
  // } 
  
   componentDidMount(){
       this.props.fetchWeatherData()
       this.props.getCurrentUser()

   }

   handleRouteChange = routeName => this.props.changeWeatherRoute({ routeName: routeName })

   render(){
     const { loggedIn } = this.props
     const { weatherData, weatherFetch, routeName} = this.props
     const forecast = weatherData[routeName]
     const pathName = window.location.pathname.split("/")[1];

     return (
      <div className="App">
        <Navbar/>
        <div className="App-weather"> 
          {
            weatherFetch ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <div>
              <ForecastNavbar changeWeatherRoute={this.handleRouteChange} />
              {routeName === 'currently' && 
                <div>
                  
                  <Forecast forecast={forecast} />
                </div>
              }
              
              {routeName === 'hourly' && 
                <div>
                  <h2>Hourly Forecast</h2>
                  {forecast.data.map((forecast, index) => <Forecast key={index} forecast={forecast} />)}
                </div>
              }
              {routeName === 'daily' && <ForecastDaily forecastData={forecast.data} />}
            </div>
          }
        </div>
        <Switch>
          <Route path="/dashboard" render={(props) => loggedIn ? <dashboard {...props}/>: null}/>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" render={({history})=><Signup history={history}/>}/> /> 
         
        </Switch>;
    
    </div>
     );
   }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    weatherFetch: state.weatherFetch,
    routeName: state.weatherRoute.routeName,
    weatherData: state.weatherData
  })
}


export default connect(mapStateToProps, { getCurrentUser, changeWeatherRoute, stopFetchingData, fetchWeatherData })(App);
