import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js';

// Argument could also be "props"
// and values could be props.username 
// and props.password.
// Note updateLoginForm is *not* the same action creator imported
// but is the "beefed up" redux version that can be used as a callback

// update: props.loginForm is destructured as loginForm
const Logout = ({ logout}) => {
  
  return (
    <form class="ui form" onSubmit={logout}>
      <input class="ui button" type="submit" value="Log Out" />
    </form>
  )
}

export default connect(null, { logout })(Logout) 