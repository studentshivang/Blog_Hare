import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light " style={{"backgroundColor":"#e3f2fd"}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-2" to='/'>
            Bloghare
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/'>
                  Feed
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/postBlog'>
                  Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" to='/' >
                <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Coming soon!">
                  Favourites - [Coming Soon!]
                  </span>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link disabled"
                  to='/'
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
