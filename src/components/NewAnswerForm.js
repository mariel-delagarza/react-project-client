import React from 'react';
import { connect } from 'react-redux';

import { updateNewAnswerForm } from '../actions/newAnswerForm.js';
import { createAnswer } from '../actions/myAnswers.js';

const NewAnswerForm = ({ formData, history, updateNewAnswerForm, createAnswer, user_id }) => {

  

  const handleInputChange = (event) => {
    //event.preventDefault()
    const { name, value } = event.target
    updateNewAnswerForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    //debugger
    createAnswer({...formData, user_id}, history )
  }

  // This is what the form data looks like:
  // formData: {
  //   question: ""
  //   topic: ""
  //   source_link: ""
  //   answer: ""
  // }

  const { question, topic, source_link, answer_param } = formData

  return(
    <form onSubmit={handleSubmit} className="ui form">
      <input placeholder={"question"} name="question" type="text" onChange={handleInputChange} value={question} />
      <input placeholder={"topic"} name="topic" type="text" onChange={handleInputChange} value={topic} />
      <input placeholder={"source link"} name="source_link" type="text" onChange={handleInputChange} value={source_link} />
      <input placeholder={"answer"} name="answer_param" type="text" onChange={handleInputChange} value={answer_param} />

      <input className="ui button" type="submit" value="Create" />
    </form>
  );
}

const mapStateToProps = (state) => {
  const user_id = state.currentUser ? state.currentUser.id : "" 
  return {
    formData: state.newAnswerForm,
    user_id
  }
}

export default connect(mapStateToProps, { updateNewAnswerForm, createAnswer })(NewAnswerForm)

/*
Below are what is available for creating an Answer:
t.string "question"
t.string "topic"
t.string "source_link"
t.text "answer"
t.integer "user_id" */