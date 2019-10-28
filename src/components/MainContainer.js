import React from 'react';
import MyAnswers from './MyAnswers.js';

class MainContainer extends React.Component {

  state = {
    checkbox: false
  }

  handleChange = () => {
    this.setState({checkbox: !this.state.checkbox})
    console.log(this.state)
  }

  render() {
    return (
      <div className="MainContainer">
        {/* Create a checkbox here that if checked, puts your answers in alphabetical order. The checkbox should change state in this component */}
        {/* Pass the state down to the MyAnswers component and in there, sort your answers based on that props */}
        <label>Sort</label>
        <input type="checkbox" onChange={this.handleChange}></input>
        <br/>

        <MyAnswers checkbox={this.state}/>
      </div>
    );
  }
}

export default MainContainer