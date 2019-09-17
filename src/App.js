import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { Route, Switch, withRouter } from 'react-router-dom';
import Signup from './components/Signup'
import { Navbar } from './components/Navbar'

class App extends React.Component {
  
   componentDidMount(){
       this.props.getCurrentUser()

   }

   render(){
     return (
        <div className="App">
          <Navbar/>
         
         <Signup/>
       </div>
     );
   }
}


export default connect(mapStateToProps, { getCurrentUser })(App);
