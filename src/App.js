import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from './components/Signup.js'


class App extends React.Component {
  
   componentDidMount(){
       this.props.getCurrentUser()

   }

   render(){
     return (
        <div className="App">
         props.currentUser ? <Logout/> : <Login/>
         <Signup/>
       </div>
     );
   }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps, { getCurrentUser })(App);
