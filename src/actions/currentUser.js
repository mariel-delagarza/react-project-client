import { resetLoginForm } from './loginForm.js';
import { resetSignupForm } from './signupForm.js';
import { getMyAnswers, clearAnswers } from './myAnswers.js';

//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


//asynchronous action creators
export const login = (credentials, history) => {
  console.log("crendetials are", credentials )
  return dispatch => {
    //hit the api endpoint and sent information from form
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    //take the response from the api and make it json
    .then(r => r.json())
    //the user will be returned from the api
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(getMyAnswers())
        dispatch(resetLoginForm())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  console.log("crendetials are", credentials )
  return dispatch => {
    const userInfo = {
      user: credentials
    }

    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    //take the response from the api and make it json
    .then(r => r.json())
    //the user will be returned from the api
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(getMyAnswers())
        dispatch(resetSignupForm())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearAnswers())
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getMyAnswers())
        }
      })
      .catch(console.log)
    }
  }
  
