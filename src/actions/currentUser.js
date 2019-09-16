

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}


export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(resp => {
            if(resp.error) {
              alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                history.push('/')

            }
        })
        .catch(console.log)
    }
}