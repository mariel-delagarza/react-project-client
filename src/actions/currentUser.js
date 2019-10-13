import { arrayExpression } from "@babel/types"

//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
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
    .then(r => r.json())
    //the user will be returned from the api
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
      })
      .catch(console.log)
    }
  }
  