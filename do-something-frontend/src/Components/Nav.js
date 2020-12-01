import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <h3>Do Something App</h3>
        <ul className="links">
          <NavLink to='/' exact style={{color: 'white'}} activeStyle={{
            color: 'red'}}>
            <li>Home</li>
          </NavLink>
          <NavLink to='activities' exact style={{color: 'white'}} activeStyle={{
            color: 'red'}}>
            <li>My List</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;