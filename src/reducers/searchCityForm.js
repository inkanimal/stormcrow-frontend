const initialState = {
    city: ""
}

export default (state = initialState, aciton) => {
    switch (aciton.type) {
        case "UPDATE_SEARCH_CITY_FORM":
            return aciton.formData
        case "RESET_SEARCH_CITY_FORM":
            return initialState
        default:
            return state
    }
}