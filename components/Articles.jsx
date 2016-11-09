import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Articles extends Component {
  render() {
    return (
      <div>
        <h1>Articles</h1>
        <ul>
          <li>
            <Link to="/articles/to-do-list-tutorial">To Do List Tutorial</Link>
          </li>
          <li>
            <Link to="/articles/hangman-game-tutorial">Hangman Game Tutorial</Link>
          </li>
          <li>
            <Link to="/articles/library-app-tutorial">Library App Tutorial</Link>
          </li>
        </ul>
      </div>
    );
  }
}
