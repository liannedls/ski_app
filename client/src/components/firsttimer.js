import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class FirstTimer extends Component {
  
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      
    <div className = "firsttimer">
      <h1>First Timer Lesson Plan</h1>
        <h2>Meeting Your Students</h2>
        <ul className="a">
          <li>Are they properly dressed?</li>
          <li>Are they familiar with their equipment?</li>
        </ul>
        <h2>First Steps</h2>
          <h3>Walking in boots</h3>
          <h3>Carrying Skis</h3>
          <h3>Putting on Skis</h3>
          <h3>Walking in Skis</h3>

        <h2>Slidding</h2>
          <h3>Experience Slidding</h3>

        <h2>Snowplough</h2>
          <h3>Learn the Snowplough</h3>

          
        <h2>Ending the Lesson</h2>
        <ul className="a">
          <li>Provide feedback</li>
          <li>Did you enjoy the lesson?</li>
          <li>Do you want to book another lesson?</li>
          <li>Wish them the best!</li>
        </ul>
    </div>
    )
  }
}

