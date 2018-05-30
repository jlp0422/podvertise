/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ About } />
      </Switch>
    </Router>
  )
}

export default App;
