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
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
  }
}