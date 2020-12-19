import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import CreateExercise from "./components/create-exercise.component";
import FirstTimer from "./components/firsttimer";
import MyList from "./components/mylist";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_list: "",
      title:"My Lesson Plan #1"
    };
  }
  componentDidMount(){
    localStorage.setItem('id_list', this.state.id_list)
  }

  render(){
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={CreateExercise} />
      <Route path="/mylist" exact component={(props) => (<MyList {...props}/>)} />
      <Route path="/firsttimer" exact component={FirstTimer} />
      </div>
    </Router>
  );
  }
}

