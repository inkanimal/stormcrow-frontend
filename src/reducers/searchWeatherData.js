export default (state = {}, action) => {
    switch(action.type) {
        case "RECEIVED_SEARCH_WEATHER_DATA":
            return action.searchWeatherData;
           default:
             return state;
    }
};