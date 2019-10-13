export default (state = [], action) => {
  switch (action.type) {
    case "SET_ANSWERS":
      return action.answers 
    default: 
      return state
  }
}
