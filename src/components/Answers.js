import React from 'react';
import { connect } from 'react-redux';

import AnswerCard from './AnswerCard.js';

const Answers = (props) => {
  const answerCards = props.answers.map(a => <AnswerCard answer={a} key={a.id}/>)
  return (
    { answerCards }
  )
}

// Use mapStateToProps when *this* component
// needs some info from the Redux store.
// Not the parent, not anything else, just
// *this* componenet.
const mapStateToProps = ({ answers }) => {
  return (
    answers
  )
}

//mapDispatchToProps says "This is the functionality I need"

export default connect(mapStateToProps)(Answers)