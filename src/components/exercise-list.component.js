import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";

const Exercise = props => (
  <tr>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.group}</td>
    <td>{props.exercise.skill}</td>
    <td>{props.exercise.age}</td>
  </tr>
)

export default class ExerciseList extends Component {

  exerciseList() {
    return this.props.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (

      <div>
        <h3>Exercises</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Group</th>
              <th>Skill</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList()}
          </tbody>
        </table>
      </div>    
    )
  }
}