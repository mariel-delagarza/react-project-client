// imports from packages
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

// imports from App files
import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
//import Logout from './components/Logout.js';
//import MainContainer from './components/MainContainer.js';
import Signup from './components/Signup.js';
import MyAnswers from './components/MyAnswers.js';
import Home from './components/Home.js';
import NewAnswerForm from './components/NewAnswerForm.js';
import AnswerCard from './components/AnswerCard.js';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, myAnswers } = this.props
    return (
      <div className="App">
        { loggedIn? <NavBar location={this.props.location} /> : null }
        {/*<MainContainer />*/}
        {/*{ loggedIn ? <Logout /> : null } */}
        <Switch>
          <Route exact path='/' render={() => loggedIn ? <MyAnswers /> : <Home />} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          {/*<Route exact path='/logout' component={Logout} /> */}
          <Route exact path='/answers' component={MyAnswers} />
          <Route exact path='/answers/new' component={NewAnswerForm} />
          <Route exact path='/answers/:id' render={props => {
            const answer = myAnswers.find(answer => answer.id === props.match.params.id )
            //console.log(answer)
            return <AnswerCard answer={answer} {...props} />
          }}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    myAnswers: state.myAnswers
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
