const initialState = {
    username: "",
    password: ""
}

export default (state = initialState, aciton) => {
    switch (aciton.type) {
        case "UPDATE_LOGIN_FORM":
            return aciton.user
        default:
            return state
    }
}