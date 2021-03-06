import React from 'react';
import { connect } from 'react-redux';
// import Logout from "./Logout";
// import { NavLink } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import {  Nav, NavItem, Form, FormControl, Button} from "react-bootstrap";
import "./Navbar.css";




const Navbar = ({ currentUser, loggedIn }) => {
 
    return  loggedIn ? 
     
      <Nav className="navbar-user" >
        {/* <Form inline className="city-search" >
          <FormControl className="search-form" type="text" placeholder="Enter City" value=""  />
            <Button className="button" variant="city search">SEARCH</Button>
       </Form> */}
       <NavItem className="search">
         <Link to="/search">SEARCH</Link>
       </NavItem>
       <NavItem className="current">
         <Link to="/forecast">CURRENT WEATHER</Link>
       </NavItem>
       
        <NavItem className="navbar-text">
          {currentUser.attributes.username}
        </NavItem>
        <NavItem className="nav-log">
          <Link  to="/logout">LOG OUT</Link>
        </NavItem>
      </Nav> :
         <Nav className="navbar-log" navbar>
            <NavItem>
           <Link to="/signup">SIGN UP</Link>
         </NavItem>
         <NavItem>
           <Link to="/">HOME</Link>
         </NavItem>
         <NavItem>
           <Link to="/login">LOG IN</Link>
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