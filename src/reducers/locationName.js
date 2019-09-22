export default (state = {}, action) => {
    switch(action.type) {
        case "RECEIVED_LOCATION_NAME":
            return action.locationName;
           default:
             return state;
    }
};