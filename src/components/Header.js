import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookling</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create a loan</NavLink>
    <NavLink to="/library" activeClassName="is-active">Library</NavLink>
  </header>
);

export default Header;