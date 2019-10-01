import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Signup.css";

const Signup = ({signupFormData, updateSignupForm, signup, history }) => {
 
    const handleUserInfoInputChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signup(signupFormData, history)
    }


    return (
        <div className="signup">
        <form onSubmit={handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
                {/* <ControlLabel>Username</ControlLabel> */}
                <FormControl
                autoFocus
                name="username"
                type="text"
                placeholder="Username"
                value={signupFormData.username} 
                onChange={handleUserInfoInputChange}/>
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
                {/* <ControlLabel>Email</ControlLabel> */}
                <FormControl
                autoFocus
                name="email"
                type="text"
                placeholder="Email"
                value={signupFormData.email} 
                onChange={handleUserInfoInputChange}/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
                {/* <ControlLabel>Password</ControlLabel> */}
                <FormControl
                autoFocus
                name="password"
                type="text"
                placeholder="Password"
                value={signupFormData.password} 
                onChange={handleUserInfoInputChange}/>
            </FormGroup>
            <Button
              block
              bsSize="large"
              type="submit"
              value="Signup" >
            Sign Up
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
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)