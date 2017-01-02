import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
