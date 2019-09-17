import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { Route, Switch, withRouter } from 'react-router-dom';
import Signup from './components/Signup'
import Navbar from './components/Navbar'

class App extends React.Component {
  
   componentDidMount(){
       this.props.getCurrentUser()

   }

   render(){
     const { loggedIn } = this.props
     return (
        <div className="App">
          <Navbar/>
         
         <Signup/>
       </div>
     );
   }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default connect(mapStateToProps, { getCurrentUser })(App);
