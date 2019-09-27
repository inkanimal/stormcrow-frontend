export default (state = {}, action) => {
    switch(action.type) {
        case "RECEIVED_LOCATION_DATA":
            return action.locationDATA;
           default:
             return state;
    }
};