import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div >
      <Router>
        <span>
          <a><Link to = '/'>Home</Link></a>
          <a><Link to = '/portfolio'>Portfolio</Link></a>
          <a><Link to = '/about'>About</Link></a>
        </span>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path = '/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path = '/about'>
            <About />
          </Route>
        </Switch>
        <span>
          <a><Link to = '/'>Home</Link></a>
          <a><Link to = '/portfolio'>Portfolio</Link></a>
          <a><Link to = '/about'>About</Link></a>
        </span>
      </Router>
    </div>
  );
}

export default App;
