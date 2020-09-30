import React, { Component } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {test: "Ford"};

      }

    componentDidMount(){
        
    console.log('Component Did Mount: WORKING');
    
    this.setState({test : this.props.location.state.exercise.name} )
    }

  render() {
    return (
      <div>
        <h3>{this.state.test}</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Description</th>
              <th>Group</th>
              <th>Skill</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}