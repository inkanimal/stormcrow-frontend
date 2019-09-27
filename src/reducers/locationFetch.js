export default (state = true, action) => {
    switch(action.type) {
        case "STOP_FETCHING_LOCATION_DATA":
            return false;
        case "START_FETCHING_LOCATION_DATA":
            return true;
            default:
                return state;

    }
};