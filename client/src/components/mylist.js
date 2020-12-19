import React, { Component } from 'react';
import axios from 'axios';
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import ExerciseList from './exercise-list.component.js';
import jsPDF from 'jspdf';
import {Container, Row, Col } from 'react-bootstrap';

export default class MyList extends Component {
        
        constructor(props) {
          super(props);
          this.handler = this.handler.bind(this)
          this.clearthis = this.clearthis.bind(this)
          this.generatePDF = this.generatePDF.bind(this)
          this.changeTitle = this.changeTitle.bind(this)
          this.saveTitle = this.saveTitle.bind(this)
          this.state = {
            id_list: "",
            title: localStorage.getItem('title'),
            newTitle:"test",
            exercises: [
                {_id:"",name : "", description: "", group: "", age: "", skill: ""}
            ]
          }
        }

        saveTitle(){
          localStorage.setItem('title', this.state.title)
        };

        changeTitle = event => {
          this.setState({ title: event.target.value });
        };

        clearthis(){
          localStorage.setItem('id_list', "")
          this.componentDidMount();
        }
      
        handler() {
          this.setState({
            someVar: 'some value'
          })
          this.componentDidMount();
        }

        generatePDF(){
          var doc = new jsPDF('p', 'pt');
          
          doc.text(20, 20, 'My Lesson Plan')

          var i
          for(i = 0; i < this.state.exercises.length; i++){
            doc.setFont('helvetica')
            doc.text(20,20,Object.values(this.state.exercises[i]).splice(1,5))
          }
          
          doc.save('demo.pdf')
        } 

        componentDidMount(){
          const listIds = localStorage.getItem('id_list').split(',')
          let data = []
          if(listIds.length >=1 ){
          for(const id of listIds){
            //axios.get('http://localhost:5000/exercises/mylist',{params : {id : id.replace('\"','').replace('\"','')}})
            axios.get('https://frozen-stream-11960.herokuapp.com/exercises/mylist',{params : {id : id.replace('\"','').replace('\"','')}})
              .then(response => {
                this.setState({exercises:[...this.state.exercises, response.data]}) 
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
        <Container className = 'justify-center'>   
          <Col>
          <Row  className = 'justify-center'>
            <h1>{this.state.title}</h1>
          </Row>
          <Row  className = 'justify-center'>
          <Col className = 'justify-right'>
            <input onChange={this.changeTitle} placeholder="  Enter name" />
            <button onClick={this.saveTitle} className="btn btn-dark">Save Title</button>
            <button onClick= {this.clearthis} className="btn btn-dark">Clear List</button>
            <button onClick={this.generatePDF} type="primary" className="btn btn-dark">Generate PDF</button>
          </Col>
          </Row>
          </Col>
        </Container>
        <ExerciseList exercises = {this.state.exercises} key={this.state.exercises._id} val={"del"} handler = {this.handler}/>
      </div>
    );
  }
}

