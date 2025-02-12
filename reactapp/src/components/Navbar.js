import React from "react";
import { Link } from "react-router-dom";
  
const Navbar = ({ setIsLoggedIn }) => {
  return (
    <header className="bg-light py-4 shadow-sm">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="logo-link" to="/">
        <h1 className="h2 mb-2 logo-link">One-Click Services</h1>
      </Link>
  
      <nav>
        <Link to="/get$10" className="me-3 button-50" role="button">Get $10</Link>
        <Link to="/services" className="me-3 button-50" role="button">Book a Task</Link>
        <a href="#my-tasks" className="me-3 button-50" role="button">My Tasks</a>
        <Link to="/user-account" className="me-2 button-50" role="button">Account</Link>
        <Link to="/" className="me-1 button-50" role="button">Logout</Link>
  
      </nav>
    </div>
  </header>
  );
};

export default Navbar;
