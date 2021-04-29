import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {

  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/orioles'>Orioles</NavLink></li>
        <li><NavLink to='/kingfishers'>Kingfishers</NavLink></li>
        <li><NavLink to='/magpies'>Magpies</NavLink></li>
      </ul>
    </nav>
  )

}

export default Nav;