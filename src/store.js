import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import weatherData from './reducers/weatherData';
import weatherFetch from './reducers/weatherFetch';
import weatherRoute from './reducers/weatherRoute';


const reducer = combineReducers({
   currentUser,
   loginForm,
   signupForm,
   weatherData,
   weatherFetch,
   weatherRoute
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store