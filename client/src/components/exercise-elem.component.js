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
        console.log('should be add here ')
        const listIds = localStorage.getItem('id_list');
        if(listIds === "" || listIds === null){
                const newIDlist = JSON.stringify(this.props.exercise._id)
                localStorage.setItem('id_list', newIDlist)
        }
        else{
                const newIDlist = listIds + ',' + JSON.stringify(this.props.exercise._id)
                localStorage.setItem('id_list', newIDlist)
        }
    }

    del(e){
        e.preventDefault();

        const listIds = localStorage.getItem('id_list');
        if(listIds !== null && listIds !== "" && this.props.exercise !== null && this.props.exercise !==""){
            if(listIds.includes(JSON.stringify(this.props.exercise._id)+',')){
                const newIDlist  = listIds.replace((JSON.stringify(this.props.exercise._id)+','),'')
                localStorage.setItem('id_list', newIDlist)
                this.handlerhere()
            }
            else if(listIds.includes(','+JSON.stringify(this.props.exercise._id))){
                const newIDlist  = listIds.replace((','+JSON.stringify(this.props.exercise._id)),'')
                localStorage.setItem('id_list', newIDlist)
                this.handlerhere()
            }
            else if(listIds.includes(JSON.stringify(this.props.exercise._id))){
                const newIDlist  = listIds.replace((JSON.stringify(this.props.exercise._id)),'')
                localStorage.setItem('id_list', newIDlist)
                this.handlerhere()
            }
        }else{
            console.log("error : list ID empty")
        }
    }

    handlerhere(){
        this.props.handler()     
    }

   render() {

    let button;
    if (this.props.val === "Add") {
      console.log("there should be an add!!!!!")
      button = <td><button onClick={this.add} className="btn btn-outline-dark add" >Add</button></td>
    } 
    if(this.props.val === "Delete"){
        console.log("this is the deete button")
        console.log(this.props.exercise.name)
        const listIds = localStorage.getItem('id_list');
        if(this.props.exercise.name !== "" && listIds !== ""){
            button = <td><button onClick={this.del} className="btn btn-outline-dark" >Del</button></td>
        }else{
            button = <td></td>
        }
    }

    let seemore;
    if(this.props.exercise.reference != null){
        seemore = <td><a href={this.props.exercise.reference}>See more</a></td>
    }else{
        seemore = <td></td>
    }

    let group;
    if(this.props.exercise.group === 'All'){
        group = <td>Group, Private</td>
    }else{
        group = <td>{this.props.exercise.group}</td>
    }

    let age;
    if(this.props.exercise.age === 'Any'){
        age = <td>Adult, Children</td>
    }else{
        age = <td>{this.props.exercise.age}</td>
    }

    return (
    <tr key = {this.props.exercise._id}>        
        <td>{this.props.exercise.name}</td>
        <td>{this.props.exercise.description}</td>
        {group}
        <td>{this.props.exercise.skill}</td>
        {age}
        {seemore}
        {button}
    </tr> 
    )
  }
}