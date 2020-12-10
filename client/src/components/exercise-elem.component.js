import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from '@material-ui/core/Checkbox';

export default class ExerciseElem extends Component {
    constructor(props) {
        super(props);
        this.addto = this.addto.bind(this);
        this.state = {
        count : 1,
        checked : true,
        data: "test data"
    }
    }

    addto(e){
    e.preventDefault();
    console.log("test" + this.state.checked + this.state.count);
    this.setState({count : this.state.count+1,
        checked: !e.target.checked}
    )
    if(this.state.checked === true){
            console.log("yes")
            localStorage.setItem('added2list', this.props.exercise._id)
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
        on touchtouchtap needs to be used but change to something different
        <td><button onClick={this.addto} value={this.state.checked}>Add!!</button></td>
    </tr> 
    )
  }
}