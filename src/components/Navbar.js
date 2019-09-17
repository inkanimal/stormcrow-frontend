import React from 'react';
import { connect } from 'react-redux';
import Login from "./components/Login";
import Logout from "./components/Logout";
// import { getCurrentUser } from "./actions/currentUser";


const Navbar = ({ logout }) => {
 
    return (
       <div>

       </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(null, { logout} )(Navbar)