import React from 'react';
import { connect } from 'react-redux';
import Login from "./Login";
import Logout from "./Logout";
import { getCurrentUser } from "./actions/currentUser";


const Navbar = ({ currentUser }) => {
 
    return (
       <div>
          props.currentUser ? <Logout/> : <Login/>
       </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps)(Navbar)