//File for each reducer and then export that reducer 
//This reducer is for the login form so is named loginForm.js

const initialState = {
  username: "",
  password: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData
    case "RESET_LOGIN_FORM":
      return initialState
    default: 
      return state
  }
}