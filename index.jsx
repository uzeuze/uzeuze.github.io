import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Articles from './components/Articles';
import Contact from './components/Contact';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/articles" component={Articles} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
