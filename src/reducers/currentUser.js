export default (state = null, aciton) => {
    switch (aciton.type) {
        case "SET_CURRENT_USER":
            return aciton.user
        default:
            return state
    }
}