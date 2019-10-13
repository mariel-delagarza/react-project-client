import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';


// Argument could also be "props"
// and values could be props.username 
// and props.password
const Login = ({ username, password}) => {
  return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={username} name="username" type="text" onChange={undefined} />
      <input placeholder="password" value={password} name="password" type="text" onChange={undefined} />
      <input type="submit" value="Log In" />
    </form>
  )
}

// Take state from redux, say I need these chunks of state from the store
// This is read-only; pulling from the store
// Gives us access to these chunks of state from the store _as props_
// Props get passed into functional component as an argument&&object
// This gives me an argument coming to this component that looks like this:
// {
//  username: "Sarah1",
//  password: "password"
// }
// Which means I can destructure it out as an argument
const mapStateToProps = state => {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password
  }
}


// importing {updateLoginForm} makes it available to pass to connect
export default connect(mapStateToProps)(Login) 