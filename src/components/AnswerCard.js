import React from 'react';

const AnswerCard = ({answer}) => {
  return (
    <p>{answer.attributes.question}</p>
  )
}

export default AnswerCard