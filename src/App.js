import React from 'react';
import { connect } from 'react-redux';

import Login from './components/Login.js';
import Logout from './components/Logout.js';
import { getCurrentUser } from './actions/currentUser.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      this.props.currentUser ? <Logout /> : <Login />
    );
  }
}

// You can deconstruct because you know the incoming
// argument is an object, state, coming from redux
// and you know it has a property called currentUser
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
