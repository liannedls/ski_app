import React, { Component } from 'react';

//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  
  constructor(props) {
    super(props);
    
    this.onChangeGroup = this.onChangeGroup.bind(this);
    this.onChangeSkill = this.onChangeSkill.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeExercisenum = this.onChangeExercisenum.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      groups: ['Private', 'Group'],
      skills: ['First Timer', 'Beginner', 'Intermediate', 'Advanced'],
      ages: ['Children', 'Adults', 'Both'],
      exercisenums: [1,2,3,4,5]
    }
  }

  onChangeGroup(e) {
    this.setState({
      group: e.target.value
    })
  }

  onChangeSkill(e) {
    this.setState({
      skill: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  onChangeExercisenum(e) {
    this.setState({
      age: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      name : 'test',
      group : this.state.groups,
      skill : this.state.skills,
      ages : this.state.ages,
      exercisenum : this.state.exercisenums
    }

    this.props.history.push({ 
      pathname: '/results',
      state: {exercise: exercise}
    }); 

  }

  render() {
    return (
    <div>
      <h3>Create a Ski Lesson Plan</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Age </label>
          <select ref="userInput"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
              {
                this.state.ages.map(function(age) {
                  return <option 
                    key={age}
                    value={age}>{age}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label>Group Size </label>
          <select ref="groupInput"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}>
                              {
                this.state.groups.map(function(group) {
                  return <option 
                    key={group}
                    value={group}>{group}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label>Skill Level</label>
          <select ref="skillInput"
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}>
                                              {
                this.state.skills.map(function(skill) {
                  return <option 
                    key={skill}
                    value={skill}>{skill}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label>Number of Exercises</label>
          <select ref="exercisenumsInput"
              type="int" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}>
                                              {
                this.state.exercisenums.map(function(exercisenum) {
                  return <option 
                    key={exercisenum}
                    value={exercisenum}>{exercisenum}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Ski Lesson Plan" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}