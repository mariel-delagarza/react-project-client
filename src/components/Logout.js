import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/currentUser.js';

// Argument could also be "props"
// and values could be props.username 
// and props.password.
// Note updateLoginForm is *not* the same action creator imported
// but is the "beefed up" redux version that can be used as a callback

// update: props.loginForm is destructured as loginForm
const Logout = ({ logout, history }) => {
  
  return (
    <form className="ui form" onSubmit={(event) => {
      event.preventDefault()
      logout()
      history.push('/')}
    }>
      <input className="ui button" type="submit" value="Log Out" />
    </form>
  )
}

export default withRouter(connect(null, { logout })(Logout))