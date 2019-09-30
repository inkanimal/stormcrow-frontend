export default (state = {}, action) => {
    
    switch(action.type) {
        case "RECEIVED_LOCATION_DATA":
            return action.locationData;
           default:
             return state;
            
    }
};