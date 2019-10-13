import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
//import Logout from './components/Logout.js';
import myAnswers from './components/MyAnswers.js';
//import MainContainer from './components/MainContainer.js';
import Signup from './components/Signup.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {/*<MainContainer />*/}
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        {/*<Route exact path='/logout' component={Logout} /> */}
        <Route exact path='/my-answers' component={myAnswers} />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
