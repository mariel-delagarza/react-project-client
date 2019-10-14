import React from 'react';
//import { Link } from 'react-router-dom';

const AnswerCard = ({answer}) => {
  return (
    answer ?

    <div>
      <h3>{answer.attributes.question}</h3>
      <p>{answer.attributes.topic}</p>
      <p>{answer.attributes.source_link}</p>
      <p>{answer.attributes.answer_param}</p>
      {/*<Link to={`/answers/${answer.id}/edit`}>Edit this Answer</Link>*/}
    </div> :
    null
    
  )
}

export default AnswerCard