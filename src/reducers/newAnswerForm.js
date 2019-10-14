const initialState ={
  question: "",
  topic: "",
  source_link: "",
  answer_param: ""
}


export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_ANSWER_FORM":
      return {
        ...state, 
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_ANSWER_FORM":
      return initialState
    default:
      return state
  }
}

