import React from 'react';

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