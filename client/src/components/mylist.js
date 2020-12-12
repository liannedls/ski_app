import React, { Component } from 'react';
import axios from 'axios';
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import ExerciseList from './exercise-list.component.js'

export default class MyList extends Component {
        
        constructor(props) {
          super(props);
          this.handler = this.handler.bind(this)
            this.state = {
              newItem: "",
            list: [], 
            data: [],
            testy: "testtest",
              exercises: [
                {_id:"fake",name : "Malcom", description: "Reynolds", group: "Reynolds", age: "Reynolds", skill: "Reynolds"}
              ]
           }
        }
      
        handler() {
          this.setState({
            someVar: 'some value'
          })
          console.log("rerender dammit!")
          this.componentDidMount();
        }

        componentDidMount(){
          const listIds = localStorage.getItem('id_list').split(',')
          let data = []
          if(listIds.length >=2 ){
          for(const id of listIds){
            const idclean = id.replace('\"','').replace('\"','')
            console.log(idclean)
            axios.get('http://localhost:5000/exercises/mylist',{params : {id : id.replace('\"','').replace('\"','')}})
              .then(response => {
                console.log(response.data)
                this.setState({exercises:[...this.state.exercises, response.data]}) 
                console.log(this.state.exercises)
              })
              .catch((error) => {
                console.log(error);
              })
            
            }
            this.setState({exercises : data})
          }
        }

  render() {
    return (
      <div className="Mylist">
        <ExerciseList exercises = {this.state.exercises} key={this.state.exercises._id} val={"del"} handler = {this.handler}/>

      </div>
    );
  }
}

