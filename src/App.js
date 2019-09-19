import React, { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { Route, Switch, withRouter } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
// import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";


class App extends React.Component {
  
   componentDidMount(){
       this.props.getCurrentUser()

   }

   render(){
     const { loggedIn } = this.props
     return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/dashboard" render={(props) => loggedIn ? <dashboard {...props}/>: null}/>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" render={({history})=><Signup history={history}/>}/> />

        </Switch>;
    
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
