import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Articles from './components/Articles';
import Contact from './components/Contact';
import ToDoList from './components/articles/ToDoList';
import HangmanGame from './components/articles/HangmanGame';
import LibraryApp from './components/articles/LibraryApp';
import RomanConverterAPI from './components/articles/RomanConverterAPI';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/articles" component={Articles}/>
    <Route path="/articles/to-do-list-tutorial" component={ToDoList} />
    <Route path="/articles/hangman-game-tutorial" component={HangmanGame} />
    <Route path="/articles/library-app-tutorial" component={LibraryApp} />
    <Route path="/articles/api-roman-numeral-converter-tutorial" component={RomanConverterAPI} />
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
