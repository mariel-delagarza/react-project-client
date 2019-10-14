import React from 'react';

const AnswerCard = ({answer}) => {
  return (
    <div>
      <p>{answer.attributes.question}</p>
      <p>{answer.attributes.topic}</p>
      <p>{answer.attributes.source_link}</p>
      <p>{answer.attributes.answer_param}</p>
    </div>
    
  )
}

export default AnswerCard