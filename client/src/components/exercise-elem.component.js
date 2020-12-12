import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";

export default class ExerciseElem extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.del = this.del.bind(this);
        this.state = {
        count : 1,
        pointless : 1
        }
    }

    add(e){
    e.preventDefault();
        console.log(localStorage.getItem('id_list'))
        console.log(JSON.stringify(this.props.exercise._id))
        const listIds = localStorage.getItem('id_list');
        if(listIds.includes(JSON.stringify(this.props.exercise._id))){
        }
        else{
        const newIDlist  = listIds + ',' + JSON.stringify(this.props.exercise._id)
        localStorage.setItem('id_list', newIDlist)
        }
    }

    del(e){
        e.preventDefault();
            console.log(localStorage.getItem('id_list'))
            console.log(JSON.stringify(this.props.exercise._id))
            const listIds = localStorage.getItem('id_list');
            if(listIds.includes(JSON.stringify(this.props.exercise._id))){
                console.log("yes")
                const newIDlist  = listIds.replace(JSON.stringify(this.props.exercise._id)+',','')
                console.log(newIDlist)
                localStorage.setItem('id_list', newIDlist)
                this.setState({newItem : "change"})
               this.handlerhere()
            }
        }
    handlerhere(){
        console.log("hello")
        this.props.handler()
        
    }

   render() {

    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (this.props.val === "Add") {
      button = <td><button onClick={this.add} >Add</button></td>
    } 
    if(this.props.val === "del"){
      button = <td><button onClick={this.del} >Del</button></td>
    }

    return (
    <tr key = {this.props.exercise._id}>        
        <td>{this.props.exercise.name}</td>
        <td>{this.props.exercise.description}</td>
        <td>{this.props.exercise.group}</td>
        <td>{this.props.exercise.skill}</td>
        <td>{this.props.exercise.age}</td>
        <td><a href={this.props.exercise.reference}>See More</a></td>
        {button}
    </tr> 
    )
  }
}