import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">Dashboard</NavLink>
            </li>
            <li className="navbar-item">
            <NavLink to="/library" activeClassName="is-active" exact={true} className="nav-link">Library</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;