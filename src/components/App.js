/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Nav from './Nav';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={ Nav } />
        <Switch>
        <Route path='/' exact render={() => <Redirect to='/about' /> } />
        <Route path='/about' exact component={ About } />
        {/*
          <Route path='/advertise' exact component={ Advertise } />
          <Route path='/contact' exact component={ Advertise } />
          <Route path='/podcast' exact component={ Advertise } />
          */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
