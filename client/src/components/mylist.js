import React, { Component } from 'react';

import axios from 'axios';
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import ExerciseList from './exercise-list.component.js'

export default class MyList extends Component {
        
        constructor(props) {
          super(props);
          console.log(this.props)
          this.state = {
            newItem: "",
            list: [], 
            testy: "testtest",
            exercises: [
              {name : "Malcom", description: "Reynolds", group: "Reynolds", age: "Reynolds", skill: "Reynolds", _id:0}
            ]
          };
        }
      
        componentDidUpdate(){
          console.log(this.state)
          //axios.get('https://frozen-stream-11960.herokuapp.com/exercises/',{params : {group:this.state.group, age:this.state.age, skill:this.state.skill, num:this.state.num}})
          axios.get('http://localhost:5000/exercises/list',{params : {id:this.state.key}})
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
    return (
      <div className="App">

        <header>{localStorage.getItem('testing')}</header>
        <ExerciseList exercises = {this.state.exercises} key={this.state.exercises._id}/>

      </div>
    );
  }
}

