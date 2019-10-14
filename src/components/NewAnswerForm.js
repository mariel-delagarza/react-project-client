import React from 'react';
import { connect } from 'react-redux';

import { updateNewAnswerForm } from '../actions/newAnswerForm.js';

const NewAnswerForm = () => {

  const handleInputChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    updateNewAnswerForm(name, value)
  }

  return(
    <form className="ui form">
      <input placeholder={"question"} name="question" type="text" onChange={handleInputChange} value={name} />
      <input placeholder={"topic"} name="topic" type="text" onChange={handleInputChange} value={name} />
      <input placeholder={"source link"} name="source_link" type="text" onChange={handleInputChange} value={name} />
      <input placeholder={"answer"} name="answer" type="text" onChange={handleInputChange} value={name} />

      <input className="ui button" type="submit" value="Create" />
    </form>
  );
}

const mapStateToProps = (state) => {
  const { question, topic, source_link, answer } = state.newAnswerForm
  return {
    question,
    topic,
    source_link,
    answer
  }
}

export default connect(mapStateToProps, { updateNewAnswerForm })(NewAnswerForm)

/*
Below are what is available for creating an Answer:
t.string "question"
t.string "topic"
t.string "source_link"
t.text "answer"
t.integer "user_id" */