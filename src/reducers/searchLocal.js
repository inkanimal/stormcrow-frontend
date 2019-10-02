export default (state = {}, action) => {
    
    switch(action.type) {
        case "RECEIVED_SEARCH_LOCATION_DATA":
            return action.searchLocationData;
           default:
             return state;
            
    }
};