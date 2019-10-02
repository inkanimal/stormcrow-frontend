import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import weatherData from './reducers/weatherData';
import weatherFetch from './reducers/weatherFetch';
import weatherRoute from './reducers/weatherRoute';
import locationData from './reducers/locationData';
import locationFetch from './reducers/locationFetch';
import searchLocationData from './reducers/searchLocal';
import fetchLocal from './reducers/fetchLocal';
import searchWeatherData from './reducers/searchWeatherData';
import searchWeatherFetch from './reducers/searchWeatherFetch';
import searchFormData from './reducers/searchForm'

const reducer = combineReducers({
   currentUser,
   loginForm,
   signupForm,
   weatherData,
   weatherFetch,
   weatherRoute,
   locationData,
   locationFetch,
   searchWeatherData,
   searchWeatherFetch,
   searchFormData,
   searchLocationData,
   fetchLocal
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store