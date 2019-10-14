import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import AnswerCard from './AnswerCard.js';

const MyAnswers = (props) => {
  //debugger
  const answerCards = props.answers.length > 0 ? 
    props.answers.map(a => (<><Link key={a.id} to={`/answers/${a.id}`} >{a.attributes.question}</Link><br/></>)) : 
                            <p>Your answers will go here. Create an answer at New Answers in the Navigation Bar.</p>
  return (
   answerCards
  )
}

// Use mapStateToProps when *this* component
// needs some info from the Redux store.
// Not the parent, not anything else, just
// *this* componenet.
const mapStateToProps = state => {
  return {
    answers: state.myAnswers
  }
}

//mapDispatchToProps says "This is the functionality I need"

export default connect(mapStateToProps)(MyAnswers)