import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Results extends Component {

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
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