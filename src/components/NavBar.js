import React from 'react';
import { connect } from 'react-redux';

import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser }) => {
  
  return (
    <div className="ui secondary pointing menu">
      {currentUser ? <p>Welcome, {currentUser.name}</p> : ""}
      <div class="right menu">
      {currentUser ? <Logout /> : <Login />}
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar) 