// synchronous actions
export const setAnswers = answers => {
  return {
    type: "SET_ANSWERS",
    answers
  }
}


// asynchronous actions
export const getAnswers = () => {
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
          dispatch(setAnswers(response.data))
        }
      })
      .catch(console.log)
  }
}