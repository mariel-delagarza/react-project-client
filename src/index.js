//Import from packages
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import usersReducer from './reducers/users.js';

//Import from app files
import App from './App';

//Basic Reducer for initial app creation
const reducer = combineReducers({
  user: usersReducer
})

//Install redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create store to use Redux
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

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
