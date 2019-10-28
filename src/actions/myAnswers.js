import { resetNewAnswerForm } from './newAnswerForm.js';

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
  console.log('6')
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

export const createAnswer = (answerData, history) => {
  console.log('2')
  return dispatch => {
    const sendableAnswerData = {
      question: answerData.question,
      topic: answerData.topic,
      source_link: answerData.source_link,
      answer_param: answerData.answer_param,
      user_id: answerData.user_id
    }

    return fetch("http://localhost:3001/api/v1/answers", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableAnswerData)
    })
      .then(r => r.json())
      .then(resp => {
        console.log('4')
        if (resp.error) {
          alert(resp.error)
        } else {
          console.log('5')
          dispatch(addAnswer(resp.data))
          //debugger
          console.log('7')
          dispatch(resetNewAnswerForm())
          history.push(`/answers/${resp.data.id}`)
        }
      })
      .catch(console.log)
      console.log('3')
  }
}