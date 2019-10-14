const initialState ={
  question: "",
  topic: "",
  source_link: "",
  answer: ""
}


export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_ANSWER_FORM":
      return action.formData
    case "RESET_NEW_ANSWER_FORM":
      return initialState
    default:
      return state
  }
}

