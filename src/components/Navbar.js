import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Link, withRouter } from "react-router-dom";
import {  Nav, NavItem} from "react-bootstrap";
import "./Navbar.css";




const Navbar = ({ currentUser, loggedIn }) => {
 
    return  loggedIn ? 
      <Nav className="float-xs-right" navbar>
        <NavItem className="navbar-text">
          {currentUser.attributes.username}
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/logout">Logout</NavLink>
        </NavItem>
      </Nav> :
         <Nav className="float-xs-right" navbar>
         <NavItem>
           <NavLink tag={Link} to="/login">Log in</NavLink>
         </NavItem>
       </Nav>
   

   
};
   
 

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(Navbar)