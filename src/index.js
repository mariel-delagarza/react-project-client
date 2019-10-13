//Import from packages
import React from 'react';
import ReactDOM from 'react-dom';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import store from './store.js';

//Import from app files
import App from './App';

//Update DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
