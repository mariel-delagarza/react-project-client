import React from 'react';
//import { Link } from 'react-router-dom';

const AnswerCard = ({answer}) => {
  console.log('10')
  return (
    answer ?

    <div> 
      <h3>Question: {answer.attributes.question}</h3>
      <p>Topic: {answer.attributes.topic}</p>
      <p>Source: {answer.attributes.source_link}</p>
      <p>Answer: {answer.attributes.answer_param}</p>
      {/*<Link to={`/answers/${answer.id}/edit`}>Edit this Answer</Link>*/}
    </div> :
    null
    
  )
}

export default AnswerCard