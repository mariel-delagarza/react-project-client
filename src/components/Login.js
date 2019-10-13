import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';


// Argument could also be "props"
// and values could be props.username 
// and props.password.
// Note updateLoginForm is *not* the same action creator imported
// but is the "beefed up" redux version that can be used as a callback
const Login = ({ username, password, updateLoginForm}) => {
  
  // handleInputChange fires off the event,
  // grabbing the named value,
  // updating the object,
  // and passing that object along
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      name, 
      value
    }
    updateLoginForm(updatedFormInfo)
  }

  return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={password} name="password" type="text" onChange={handleInputChange} />
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


// importing {updateLoginForm} action creator makes it available to pass to connect
// can import by building mapDispatchToProps function or can pass in object directly
// key is whatever you want to call the object inside the component, e.g. updateLoginForm
// the value is whatever the value of this thing needs to be pointing to, usually an action creator, e.g. updateLoginForm
// because this gives the syntax where the key and value are the same, you can use the simplified
// syntax of just passing { updateLoginForm }
export default connect(mapStateToProps, { updateLoginForm })(Login) 