import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col } from 'reactstrap';
import ExerciseList from './exercise-list.component.js'

export default class CreateExercise extends Component {
  
  constructor(props) {
    super(props);
    
    this.onChangeGroup = this.onChangeGroup.bind(this);
    this.onChangeSkill = this.onChangeSkill.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeExercisenum = this.onChangeExercisenum.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadAll = this.loadAll.bind(this);

    this.state = {
      groups: ['Group', 'All'],
      skills: ['Beginner', 'Intermediate', 'Advanced', 'First Timer'],
      ages: ['Any', 'Children'],
      exercisenums: [1,2,3,4,5],
      exercises: [
        {name : "Malcom", description: "Reynolds", group: "Reynolds", age: "Reynolds", skill: "Reynolds"}
      ],
      group: "All",
      skill: "Beginner",
      age: "Any",
      num: 5
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
      num: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    //axios.get('https://frozen-stream-11960.herokuapp.com/exercises/',{params : {group:this.state.group, age:this.state.age, skill:this.state.skill, num:this.state.num}})
    axios.get('http://localhost:5000/exercises/',{params : {group:this.state.group, age:this.state.age, skill:this.state.skill, num:this.state.num}})
      .then(response => {
        console.log(response.data)
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
      this.setState({loadExercises:true})
      //this.forceUpdate(e);
  }

  loadAll(e) {
    e.preventDefault();

    //axios.get('https://frozen-stream-11960.herokuapp.com/exercises/',{params : {group:this.state.group, age:this.state.age, skill:this.state.skill, num:this.state.num}})
    axios.get('http://localhost:5000/exercises/all')
      .then(response => {
        console.log(response.data)
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
      this.setState({loadExercises:true})
      //this.forceUpdate(e);
  }

  render() {
    const loadExercises= this.state.loadExercises;
    return (
    <div>
      <h3>Create a Ski Lesson Plan</h3>
      <Container>
        
      <form onSubmit={this.onSubmit} className="">
      <Row> 
        <Col>
        <div className="form-group"> 
          <label>Group Size </label>
          <select ref="groupInput"
              className="form-control"
              value={this.state.group}
              onChange={this.onChangeGroup}>
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
        </Col>
        <Col>
          <label>Skier Skill Level</label>
          <select ref="skillInput"
              type="text" 
              className="form-control"
              value={this.state.skill}
              onChange={this.onChangeSkill}>
                                              {
                this.state.skills.map(function(skill) {
                  return <option 
                    key={skill}
                    value={skill}>{skill}
                    </option>;
                })
              }
          </select>
        </Col>
        <Col className="">
        <div className="form-groups"> 
        
          <label>Age </label>
          <select ref="userInput"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}>
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
        </Col>
        <Col>
          <label>Number of Exercises</label>
          <select ref="exercisenumsInput"
              type="int" 
              className="form-control"
              value={this.state.num}
              onChange={this.onChangeExercisenum}>
                                              {
                this.state.exercisenums.map(function(exercisenum) {
                  return <option 
                    key={exercisenum}
                    value={exercisenum}>{exercisenum}
                    </option>;
                })
              }
          </select>
        </Col>

        </Row>
        <Row>
        <button onClick={this.loadAll}>
          See All
        </button>
          <Col className = "justify-content-center">
        <div className="form-group ">
          <input type="submit" value="Create Ski Lesson Plan" className="btn btn-dark" />
        </div>
        </Col>
      </Row>
      </form>
      
      </Container>
      {loadExercises ?
      <ExerciseList exercises = {this.state.exercises} />
      : null}
      </div>
    )
  }
}

