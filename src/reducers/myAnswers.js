export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_ANSWERS":
      return action.answers 
    case "ADD_ANSWER":
      return state.concat(action.answer)
    case "CLEAR_ANSWERS":
      return []
    default: 
      return state
  }
}
