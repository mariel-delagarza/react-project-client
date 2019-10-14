// synchronous actions
export const updateAnswerForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_ANSWER_FORM",
    formData
  }
}

export const resetAnswerForm = () => {
  return {
    type: "RESET_NEW_ANSWER_FORM"
  }
}