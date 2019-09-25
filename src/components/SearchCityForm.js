import React from 'react';


handleChange = (e) => {
  if (e.target.name === "city") {       // sets city as a string
    this.setState({ [e.target.name]: e.target.value })
  }
}

const SearchCityForm = (props) => {
    return (
      <div className="search-city-form" >
        <form onSubmit={ props.getCoordinates }>
          <div className="form-row">
            <div className="city-input">
              <input className='form-control' placeholder="Enter City" type="text" name="city" value={ props.city } onChange={ props.handleChange }/>
            </div>

            <Button className="search-button" variant="city search" type="submit">Search</Button>
        </div>
      </form>
    </div>
  )
}

export default SearchCityForm;