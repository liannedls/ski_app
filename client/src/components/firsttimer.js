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
            <li>Are they properly dressed and comfortable?</li>
            <li>Are they familiar with their equipment?</li>
            <li>Do they have any previous injuries?</li>
          </ul>
        <h2>First Steps</h2>        
          <ul className="a">
            <li>Walking in boots</li>
            <li>Carrying skis</li>
            <li>Putting on skis</li>
            <li>Walking with skis on</li>
          </ul>
          <br />
          <a href='https://www.youtube.com/watch?v=AR7C5qWvuUc'>See More</a>       
        <h2>Slidding</h2>
          <p>Find flat terrain and use poles to slide forward. This will help your student experience sliding in a relaxed environment and learn to enjoy the feeling.
          <a href='https://www.youtube.com/watch?v=_2zESNSSckA'> See More</a>    
          </p>
        <h2>Learning to Snowplough</h2>
          <p>Find a small incline to learn how to snowplough. Explain the snowplough, or wedge, shape and how it can control speed.
            Practice this until the student feels in control of their stopping. The game red light green light can be very useful for developing control.
          <a href='https://www.youtube.com/watch?v=tXUbCPuc4nw'> See More</a>  
          </p> 
        <h2>Learning to Turn</h2>
          <p>Now that your student is comfortable stopping, they are ready to learn how to turn. 
          Starting in the snowplough position with your body facing down the slope and your shins pushing into the front of your boots, begin sliding down the fall line. 
          Gradually apply pressure into the inside edge of the left ski to start to turn the skis to the right
            The exercises Airplane can help students to make a turn.
          <a href='https://www.youtube.com/watch?v=bEBIAfZ0iW4'> See More</a>  
          </p>  
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

