import React from 'react';
import { updateNewAnswerForm } from '../actions/newAnswerForm.js';

const NewAnswerForm = () => {

  const handleInputChange = (event) => {
    const { name, value } = event.target
    updateNewAnswerForm(name, value)
  }

  return(
    <form className="ui form">
      <input placeholder={"question"} value={""} name="question" type="text" onChange={handleInputChange} />
      <input placeholder={"topic"} value={""} name="topic" type="text" onChange={handleInputChange} />
      <input placeholder={"source link"} value={""} name="source_link" type="text" onChange={handleInputChange} />
      <input placeholder={"answer"} value={""} name="answer" type="text" onChange={handleInputChange} />

      <input className="ui button" type="submit" value="Create" />
    </form>
  );
}

export default NewAnswerForm

/*
Below are what is available for creating an Answer:
t.string "question"
t.string "topic"
t.string "source_link"
t.text "answer"
t.integer "user_id" */