import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark row">
      <Link className="navbar-brand" to="/">
      <img alt="Jennifer Genes" src="192logo.png" className="col"/>
      </Link>
      <div className="col">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
