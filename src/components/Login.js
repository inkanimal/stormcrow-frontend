import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const Login = ({loginFormData, updateLoginForm, login, history }) => {
 
    const handleInputChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginFormData, history)
    }


    return (
        <form onSubmit={handleSubmit}>
           <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange}/>
           <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange}/>
           <input type="submit" value="Login"/>
           
        </form>
    )
}
// this gives an argument to this component
// username: "some username"
// password: "some password"

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)