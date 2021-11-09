import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import IMG_0391 from './images/logo/IMG_0391.png';
import facebook from './images/socials/facebook.png';
import instagram from './images/socials/instagram.png';
import tiktok from './images/socials/tiktok.png';
import './App.css';

const App = () => {
  return (
    <div >
      <Router>
        <div class = 'header'>
          <img class = 'header-image' width = '100px' height = '100px' src = {IMG_0391} alt = 'Hair By Sid Logo' />
          <input type = 'text' id = 'search' onkeyup = 'searchBar()' placeholder = 'Search...' />
          <nav>
            <a><Link to = '/'>Home</Link></a>
            <a><Link to = '/portfolio'>Portfolio</Link></a>
            <a><Link to = '/about'>About</Link></a>
          </nav>
        </div>
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
        <div class = 'footer'>
          <span class = 'handles'>
            <h3>Follow Me On:</h3>
            <a href = 'https://www.facebook.com/profile.php?id=100073238490084'><img class = 'facebook-png' width = '20px' height = '20px' src = {facebook} alt = 'facebook logo' /></a>
            <a href = 'https://www.instagram.com/beauty.sidneyw'><img class = 'twitter-png' width = '20px' height = '20px' src = {instagram} alt = 'instagram logo' /></a>
            <a href = 'https://www.tiktok.com/'><img class = 'twitter-png' width = '20px' height = '20px' src = {tiktok} alt = 'tiktok logo' /></a>
          </span>
          <nav>
            <a><Link to = '/'>Home</Link></a>
            <a><Link to = '/portfolio'>Portfolio</Link></a>
            <a><Link to = '/about'>About</Link></a>
          </nav>
        </div>
      </Router>
    </div>
  );
}

export default App;