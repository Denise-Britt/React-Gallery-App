import React from 'react';
import { 
  HashRouter as Router,
  NavLink
} from 'react-router-dom';


const Nav = (props) => (
  <nav className="main-nav">
    <Router>
    < NavLink to="/">Home</NavLink>
      <ul>
        <li><NavLink to='https://www.flickr.com/search/?text=cats'/>Cats</li>
        <li><NavLink to='{match}/'/>Dogs</li>
        <li><NavLink to='#'/>Computers</li>
      </ul>   
    </Router>

  </nav>
);


export default Nav;