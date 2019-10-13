import React from 'react';
import { connect } from 'react-redux';

const Answers = () => {
  return (

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

export default connect(mapStateToProps)(Answers)