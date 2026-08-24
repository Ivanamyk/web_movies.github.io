import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../../../../assets/img/appLogo.jpg";
import "./navBar.css";

const NavBar: FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src={logo} className="logo" alt="Web Movies" />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="80" height="10"></rect>
                <rect y="25" width="80" height="10"></rect>
                <rect y="50" width="80" height="10"></rect>
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-movies/1">
                  New Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular/1">
                  Most Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export { NavBar };
