import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from '@material-ui/core/Checkbox';

export default class ExerciseElem extends Component {
    constructor(props) {
        super(props);
        this.addto = this.addto.bind(this);
        this.state = {
        count : 1
    }
    }

    addto(e){
    e.preventDefault();
        console.log(localStorage.getItem('id_list'))
        console.log(JSON.stringify(this.props.exercise._id))
        const listIds = localStorage.getItem('id_list');
        if(listIds.includes(JSON.stringify(this.props.exercise._id))){

        }
        else{
        localStorage.setItem('id_list', listIds + "," + JSON.stringify(this.props.exercise._id))
        }
    }

   render() {
       
    return (
    <tr key = {this.props.exercise._id}>        
        <td>{this.props.exercise.name}</td>
        <td>{this.props.exercise.description}</td>
        <td>{this.props.exercise.group}</td>
        <td>{this.props.exercise.skill}</td>
        <td>{this.props.exercise.age}</td>
        <td><a href={this.props.exercise.reference}>See More</a></td>
        <td><button onClick={this.addto} >Add!!</button></td>
    </tr> 
    )
  }
}