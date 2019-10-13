import React from 'react';
import { connect } from 'react-redux';

import Login from './components/Login.js';
import { getCurrentUser } from './actions/currentUser.js';

class App extends React.Component {

  componentDidMount() {
    getCurrentUser()
  }

  render() {
    return (
      <Login />
    );
  }
}

export default connect(null, { getCurrentUser })(App);
