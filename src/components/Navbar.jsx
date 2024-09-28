import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyApp</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
