import React from 'react';
import { connect } from 'react-redux';

import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <NavBar />
    );
  }
}

export default connect(null, { getCurrentUser })(App);
