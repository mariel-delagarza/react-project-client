import React from 'react';
import { connect } from 'react-redux';

//import Login from './Login.js';
//import Logout from './Logout.js';

const NavBar = ({ currentUser }) => {
  
  return (
    <div className="ui secondary pointing menu">
      {currentUser ? <p>Welcome, {currentUser.attributes.name}</p> : ""}
      <div className="right menu">
        {/*{currentUser ? <Logout /> : <Login />} */}
        <button className="ui button">Log in</button>
        <button className="ui button">Sign up</button>
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