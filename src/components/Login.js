import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';

const Login = (username, password, updateLoginForm) => {
 
    const handleInputChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }


    return (
        <form onSubmit=()>
           <input placeholder="username" value={username} name="username" type="text" onChange={}/>
           <input placeholder="password" value={password} name="password" type="text" onChange={}/>
           <input type="submit" value="Login"/>
           
        </form>
    )
}
// this gives an argument to this component
// username: "some username"
// password: "some password"

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}

export default connect(mapStateToProps, { updateLogForm } )(Login)