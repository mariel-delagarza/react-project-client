export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_ANSWERS":
      return action.answers 
    default: 
      return state
  }
}
