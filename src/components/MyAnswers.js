import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import AnswerCard from './AnswerCard.js';

const MyAnswers = (props) => {
  console.log(props)

  let unsortedAanswerLinks = props.answers
    .map(a => (<><Link key={a.id} to={`/answers/${a.id}`}> {a.attributes.question}</Link><br/></>))

  
  let sortedAnswerLinks = 
    props.answers
    .sort(function(a,b){
      // Use toUpperCase() to ignore character casing
      var questionA = a.attributes.question.toUpperCase();
      var questionB = b.attributes.question.toUpperCase();
      if (questionA > questionB) {return 1}
      if (questionA < questionB) {return-1}
    })
    .map(a => (<><Link key={a.id} to={`/answers/${a.id}`}> {a.attributes.question}</Link><br/></>))

  let answersPresent = (props.answers.length > 0)
  let noAnswers = <p>Your answers will go here. Create an answer at New Answers in the Navigation Bar.</p>
  let checkbox = props.checkbox

  if (answersPresent && checkbox == false) {return(sortedAnswerLinks)}
  else if (answersPresent && checkbox) {return(unsortedAanswerLinks)} 
  else {return(noAnswers)}
  
}

// Use mapStateToProps when *this* component
// needs some info from the Redux store.
// Not the parent, not anything else, just
// *this* componenet.
// sort((a, b) => a.attributes.question[0] > b.attributes.question[0])
const mapStateToProps = state => {
  return {
    answers: state.myAnswers
  }
}

//mapDispatchToProps says "This is the functionality I need"

export default connect(mapStateToProps)(MyAnswers)