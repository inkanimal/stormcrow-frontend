import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Link, withRouter } from "react-router-dom";
import {  Nav, NavItem, Form, FormControl, Button} from "react-bootstrap";
import "./Navbar.css";




const Navbar = ({ currentUser, loggedIn }) => {
 
    return  loggedIn ? 
  
      <Nav className="navbar-user" >
        <Form inline className="city-search">
          <FormControl type="text" placeholder="Enter City" className="search-form" />
            <Button className="button" variant="city search">Search</Button>
       </Form>
        <NavItem className="navbar-text">
          {currentUser.attributes.username}
        </NavItem>
        <NavItem className="nav-log">
          <Link  to="/logout">Logout</Link>
        </NavItem>
      </Nav> :
         <Nav className="navbar-log" navbar>
         <NavItem>
           <Link to="/login">Log in</Link>
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