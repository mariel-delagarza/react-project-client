// synchronous actions
export const updateNewAnswerForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_ANSWER_FORM",
    formData
  }
}

export const resetNewAnswerForm = () => {
  console.log('9')
  return {
    type: "RESET_NEW_ANSWER_FORM"
  }
}