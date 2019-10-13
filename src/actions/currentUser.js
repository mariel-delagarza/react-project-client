import { arrayExpression } from "@babel/types"

//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  }
}


//asynchronous action creators
export const login = credentials => {
  console.log("crendetials are", credentials )
  return dispatch => {
    //hit the api endpoint and sent information from form
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    //take the response from the api and make it json
    .then(response => response.json())
    //the user will be returned from the api
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        //do the set_current_user action
        //with the payload of user
        dispatch({type: "SET_CURRENT_USER", user: user})
      }
    })
    .catch()
  }
}