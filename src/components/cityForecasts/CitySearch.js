import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchForm';
import { citySearch } from '../actions/';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const CitySearch = ({searchFormData, updateSearchForm, citySearch, history }) => {
 
    const handleUserInfoInputChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSearchForm(updatedFormInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()
        citySearch(searchFormData, history)
    }

return (
    <div className="search">
    <form onSubmit={handleSubmit}>
        <FormGroup controlId="search" bsSize="large">
            
            <FormControl
            autoFocus
            name=""
            type="text"
            value={signupFormData.username} 
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
        searchFormData: state.searchForm
    }
}

export default connect(mapStateToProps, { updateSearchForm, citySearch } )(CitySearch)