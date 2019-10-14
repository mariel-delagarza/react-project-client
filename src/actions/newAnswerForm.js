// synchronous actions
export const updateNewAnswerForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_ANSWER_FORM",
    formData
  }
}