import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const activeStyle = {
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <nav>
      <NavLink to="/" style={location.pathname === '/' ? activeStyle : {}}>
        Products
      </NavLink>
      <NavLink to="/form" style={location.pathname === '/form' ? activeStyle : {}}>
        Form
      </NavLink>
    </nav>
  );
};

export default Nav;
