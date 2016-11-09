import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Articles extends Component {
  render() {
    return (
      <div>
        <h1>Articles</h1>
        <ul>
          <li>
            <Link to="/articles/to-do-list">To Do List Tutorial</Link>
          </li>
        </ul>
      </div>
    );
  }
}
