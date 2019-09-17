export default (state = null, aciton) => {
    switch (aciton.type) {
        case "SET_CURRENT_USER":
            return aciton.user
        case "CLEAR_CURRENT_USER":
            return null
        default:
            return state
    }
}