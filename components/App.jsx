import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  return (
    <div>
      <ul className="nav nav-tabs App__navbar">
        <li className="nav__item"><Link to="/" className="nav__link" activeClassName="nav__link--active" onlyActiveOnIndex={true}>Home</Link></li>
        <li className="nav__item"><Link to="/articles" className="nav__link" activeClassName="nav__link--active">Articles</Link></li>
        <li className="nav__item"><Link to="/contact" className="nav__link" activeClassName="nav__link--active">Contact</Link></li>
      </ul>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
