import { resetSignupForm } from './signupForm'
import { resetLoginForm } from './loginForm'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}

export const clearCurrentUser = user => {
    return {
        type: "CLEAR_CURRENT_USER"
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
                dispatch(resetLoginForm())
                history.push('/forecast')

            }
        })
        .catch(console.log)
      }
  }

  export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(resp => {
            if(resp.error) {
              alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(resetSignupForm())
                history.push('/forecast')

            }
        })
        .catch(console.log)
      }
  }

  export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE"     
        })
     }
  }

    export const getCurrentUser = () => {
        return dispatch => {
            return fetch("http://localhost:3001/api/v1/get_current_user", {
                credentials: "include",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(setCurrentUser(resp.data))
                }
            })
            .catch(console.log)
        }
    }
