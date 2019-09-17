const initialState = {
    username: "",
    email: "",
    password: ""
}

export default (state = initialState, aciton) => {
    switch (aciton.type) {
        case "UPDATE_SIGNUP_FORM":
            return aciton.formData
        case "RESET_SIGNUP_FORM":
            return initialState
        default:
            return state
    }
}