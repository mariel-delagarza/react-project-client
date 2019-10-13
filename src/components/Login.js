import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';

// Argument could also be "props"
// and values could be props.username 
// and props.password.
// Note updateLoginForm is *not* the same action creator imported
// but is the "beefed up" redux version that can be used as a callback

// update: props.loginForm is destructured as loginForm
const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  
  // handleInputChange fires off the event,
  // grabbing the named value,
  // updating the object,
  // and passing that object along
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(loginFormData, history)
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      {/*using loginForm means we need to go a level deep to get username/password
        but this will allow making changes to the form by building an object and updating
        username or password or both; spreading out loginForm keeps whichever other of 
        those properties in place */}
      <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input className="ui button" type="submit" value="Log In" />
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

// update later: grab the entire loginForm as an object, instead of individual pieces
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}


// importing {updateLoginForm} action creator makes it available to pass to connect
// can import by building mapDispatchToProps function or can pass in object directly
// key is whatever you want to call the object inside the component, e.g. updateLoginForm
// the value is whatever the value of this thing needs to be pointing to, usually an action creator, e.g. updateLoginForm
// because this gives the syntax where the key and value are the same, you can use the simplified
// syntax of just passing { updateLoginForm }
export default connect(mapStateToProps, { updateLoginForm, login })(Login) 