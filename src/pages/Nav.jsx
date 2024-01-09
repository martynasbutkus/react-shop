import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className="active">
        Products
      </NavLink>
      <NavLink to="/form" className="active">
        Form
      </NavLink>
    </nav>
  );
};

export default Nav;
