import React from 'react'


const Location = ({ locationData: { results } }) => 
  <div className="location">
    { results[5].address_components[0].long_name }
  </div>
  

export default Location