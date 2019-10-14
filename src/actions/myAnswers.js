// synchronous actions
export const setMyAnswers = answers => {
  return {
    type: "SET_MY_ANSWERS",
    answers
  }
}

export const clearAnswers = () => {
  return {
    type: "CLEAR_ANSWERS"
  }
}

export const addAnswer = answer => {
  return {
    type: "ADD_ANSWER",
    answer
  }
}

// asynchronous actions
export const getMyAnswers = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/answers", {
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
          dispatch(setMyAnswers(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createAnswer = answerData => {
  return dispatch => {
    return fetch("http://localhost:3001/answers", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: answerData
    })
      .then(r => r.json)
      .then(console.log)
  }
}