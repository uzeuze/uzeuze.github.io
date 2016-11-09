import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs App__navbar">
          <li className="nav__item"><Link to="/" className="nav__link" activeClassName="nav__link--active" onlyActiveOnIndex={true}>Home</Link></li>
          <li className="nav__item"><Link to="/articles" className="nav__link" activeClassName="nav__link--active">Articles</Link></li>
          <li className="nav__item"><Link to="/contact" className="nav__link" activeClassName="nav__link--active">Contact</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
