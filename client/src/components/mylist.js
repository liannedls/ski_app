import React, { Component } from 'react';

import axios from 'axios';
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import ExerciseList from './exercise-list.component.js'

export default class MyList extends Component {
        
        constructor(props) {
          super(props);
          this.state = {
            newItem: "",
            list: [], 
            testy: "testtest",
            exercises: [
              {name : "Malcom", description: "Reynolds", group: "Reynolds", age: "Reynolds", skill: "Reynolds", id: "First Timer"}
            ]
          };
        }
      
        componentDidMount(){
          console.log("hello")
          
          console.log("these are the props")
          console.log(this.props)
          //console.log(this.state.testy)
          //axios.get('https://frozen-stream-11960.herokuapp.com/exercises/',{params : {group:this.state.group, age:this.state.age, skill:this.state.skill, num:this.state.num}})
          axios.get('http://localhost:5000/exercises/mylist',{params : {id : "testinggggg"}})
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

        <ExerciseList exercises = {this.state.exercises} key={this.state.exercises._id} idsStored = {this.props.idsStored}/>

      </div>
    );
  }
}

