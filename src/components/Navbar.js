import React from 'react';
import { connect } from 'react-redux';
import Logout from "./Logout";



const Navbar = ({ currentUser }) => {
 
    return (
       <div classname="Navbar">
          { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null }
       </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(Navbar)