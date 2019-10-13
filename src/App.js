import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import myAnswers from './components/MyAnswers.js';
//import MainContainer from './components/MainContainer.js';
import Signup from './components/Signup.js';
import MyAnswers from './components/MyAnswers.js';
import Home from './components/Home.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        <Logout />
        <NavBar />
        {/*<MainContainer />*/}
        <Route exact path='/' render={() => loggedIn ? <MyAnswers /> : <Home />} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        {/*<Route exact path='/logout' component={Logout} /> */}
        <Route exact path='/my-answers' component={myAnswers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
