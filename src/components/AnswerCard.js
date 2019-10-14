import React from 'react';

const AnswerCard = ({answer}) => {
  return (
    answer ?

    <div>
      <h3>{answer.attributes.question}</h3>
      <p>{answer.attributes.topic}</p>
      <p>{answer.attributes.source_link}</p>
      <p>{answer.attributes.answer_param}</p>
    </div> :
    null
    
  )
}

export default AnswerCard