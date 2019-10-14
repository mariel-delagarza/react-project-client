import React from 'react';
import { Link } from 'react-router-dom';

//import Login from './Login';
//import Logout from './Logout.js';
//import Signup from './Signup.js';

const Home = () => (
  <div>
    <h2>Welcome, please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link>.</h2>
  </div>
);

export default Home;