import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
//import usersReducer from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import myAnswers from './reducers/myAnswers.js';
import signupForm from './reducers/signupForm.js';
import newAnswerForm from './reducers/newAnswerForm.js';

const reducer = combineReducers({
  //user: usersReducer,
  currentUser,
  loginForm,
  myAnswers,
  signupForm,
  newAnswerForm
})

//Install redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create store to use Redux
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store