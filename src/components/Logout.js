import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import { withRouter } from 'react-router-dom'

const Logout = ({ logout, history }) => {
 
    return (
        <form  onSubmit={(e) => {
            e.preventDefault()
            logout()
            history.push('/')
        }
    }>
        <input className="logout" type="submit" value="Log Out"/>
    </form>
    )
}

export default connect(null, { logout} )(withRouter(Logout))