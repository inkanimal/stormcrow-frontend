import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchForm';
import { fetchSearchWeatherData } from '../actions/searchWeatherData';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Search.css';

const Search = ({searchFormData, updateSearchForm, fetchSearchWeatherData, history }) => {
 
    const handleChange = e => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...searchFormData,
            [name]: value
        }
        updateSearchForm(updatedFormInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetchSearchWeatherData(searchFormData, history)
    }

return (
    <div className="search">
    <form onSubmit={handleSubmit} >
        <FormGroup controlId="search" bsSize="large">
            
            <FormControl 
            autoFocus
            name="city"
            type="text"
            placeholder="Enter City"
            value={searchFormData.city} 
            onChange={handleChange}/>
        </FormGroup>

        <Button className="search-button"
              block
              bsSize="large"
              type="submit"
              value="Search" >
            SEARCH
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
        searchFormData: state.searchFormData
    }
}

export default connect(mapStateToProps, { updateSearchForm, fetchSearchWeatherData } )(Search)