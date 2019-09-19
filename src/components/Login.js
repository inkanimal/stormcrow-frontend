import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

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
        <div className="Login">
        <form onSubmit={handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                autoFocus
                name="username"
                type="text"
                value={loginFormData.username} 
                onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                autoFocus
                name="password"
                type="text"
                value={loginFormData.password} 
                onChange={handleInputChange}/>
            </FormGroup>
            <Button
              block
              bsSize="large"
              type="submit"
              value="Login" >
            Log In
          </Button>
            
        </form>
        </div>
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