import React from 'react'

const Navbar = ({ changeRoute }) => 
  <div>
    <button className="fnav-button" onClick={() => changeRoute('currently')}>Current</button>
    <button className="fnav-button" onClick={() => changeRoute('hourly')}>By Hour</button>
    <button className="fnav-button" onClick={() => changeRoute('daily')}>By Day</button>
  </div>;

export default Navbar;