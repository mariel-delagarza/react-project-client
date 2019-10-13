import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import usersReducer from './reducers/users.js';

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

export default store