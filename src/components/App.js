/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Podcast from './Podcast';

const App = () => {
  return (
    <Router>
      <div id="wrapper">
        <Route path='/' component={ Nav } />
        <Switch>
        <Route path='/' exact render={() => <Redirect to='/about' /> } />
        <Route path='/about' exact component={ About } />
        <Route path='/podcast' exact component={ Podcast } />
        {/*
          <Route path='/advertise' exact component={ Advertise } />
          <Route path='/contact' exact component={ Contact } />
          */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
