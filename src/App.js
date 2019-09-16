import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from "./components/Login";
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";

class App extends React.Component {
  
   componentDidMount(){
       getCurrentUser()

   }

  render(){
  return (
    <div className="App">
      Hello 
    </div>
  );
}
}

export default coonnect(null, { getCurrentUser })(App);
