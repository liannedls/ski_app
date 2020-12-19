import React, { Component } from 'react';
import axios from 'axios';
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
    this.loadSearch = this.loadSearch.bind(this);
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
      num: 5, 
      textVal: ""
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

    axios.get('https://frozen-stream-11960.herokuapp.com/exercises/all')
    //axios.get('http://localhost:5000/exercises/all')
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

  loadSearch(e) {
    e.preventDefault();

    axios.get('https://frozen-stream-11960.herokuapp.com/exercises/search')
    //axios.get('http://localhost:5000/exercises/search', {params : {text:this.state.textVal}})
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

  onChangeSearch = event => {
    this.setState({ textVal: event.target.value });
  };

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
          <input onChange={this.onChangeSearch} placeholder="  Enter Search" />
          <button onClick={this.loadSearch} className="btn btn-dark">Search</button>
          <button onClick= {this.loadAll} className="btn btn-dark">See All</button>
          <button onClick={this.onSubmit} type="primary" className="btn btn-dark">Create Ski Lesson Plan</button>
        </Row>
        </form>
      
        </Container>
        {loadExercises ?
        <ExerciseList exercises = {this.state.exercises} key={this.state.exercises._id} val = {"Add"}/>
        : null}
      </div>
    )
  }
}

