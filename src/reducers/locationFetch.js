export default (state = true, action) => {
    switch(action.type) {
        case "STOP_FETCHING_LOCATION":
            return false;
        case "START_FETCHING_LOCATION":
            return true;
            default:
                return state;

    }
};