import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser, loggedIn }) => {
  
  return (
    <div className="ui secondary pointing menu">
      <NavLink exact activeClassName="active" to="/answers">My Answers | </NavLink>
      <NavLink exact activeClassName="active" to="/answers/new">New Answers | </NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
      {/*{ loggedIn ? <Logout /> : null }*/}
      {/*{currentUser ? <p>Welcome, {currentUser.attributes.name}</p> : ""} */}
      {/* <div className="right menu">
        {currentUser ? <Logout /> : <Login />} 
      </div> */}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar) 