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
    
      <Nav className="navbar-user" navbar>
        <NavItem className="navbar-text">
          {currentUser.attributes.username}
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/logout">Logout</NavLink>
        </NavItem>
      </Nav> :
         <Nav className="navbar-log" navbar>
         <NavItem>
           <NavLink tag={Link} to="/login">Log in</NavLink>
         </NavItem>
         <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="city search">Search</Button>
    </Form>
       </Nav>
       
   

   
};
   
 

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(Navbar)