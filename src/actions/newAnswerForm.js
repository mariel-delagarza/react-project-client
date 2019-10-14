// synchronous actions
export const updateNewAnswerForm = (name, value) => {
  return {
    type: "UPDATE_NEW_ANSWER_FORM",
    formData: { name, value }
  }
}