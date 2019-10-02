import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchForm';
import { fetchSearchWeatherData } from '../actions/searchWeatherData';
import { fetchSearchLocal } from '../actions/searchLocal';
import { Button, FormGroup, FormControl, Row, Col, Form} from "react-bootstrap";
import './Search.css';

const Search = ({searchFormData, updateSearchForm, fetchSearchWeatherData, history, fetchSearchLocal }) => {
 
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
        fetchSearchLocal(searchFormData)
    }

return (
    <div className="search">
    <Form inLine onSubmit={handleSubmit} >
        
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
          
        </Form>
      
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

export default connect(mapStateToProps, { updateSearchForm, fetchSearchWeatherData, fetchSearchLocal  } )(Search)