//File for each reducer and then export that reducer 
//This reducer is for one user so is named currentUser.js
export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    default: 
      return state
  }
}