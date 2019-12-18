import React from 'react';
import { 
  HashRouter as Router,
  NavLink
} from 'react-router-dom';


const Nav = (props) => {
  return(

    <nav className="main-nav">
      <Router>

        <ul>
          <li><NavLink to={"/search/otters"} onClick={() => props.performSearch("otters")}>Otters</NavLink></li>
          <li><NavLink to={"/search/naruto"} onClick={() => props.performSearch("naruto")}>Naruto</NavLink></li>
          <li><NavLink to={"/search/miniature+pigs"} onClick={() => props.performSearch("miniature pigs")}>Mini Pigs</NavLink></li>
        </ul>   
      </Router>

    </nav>
  );
}

export default Nav;