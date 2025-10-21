import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          E-commerce
        </Link>

        {/* Toggle button (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left side links */}
          <ul className="navbar-nav ms-auto  me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Right side buttons */}
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-light" to="/login">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Link>
            <Link className="btn btn-outline-light" to="/register">
              <i className="bi bi-person-plus"></i> Register
            </Link>
            <Link className="btn btn-warning" to="/cart">
              <i className="bi bi-cart3"></i> Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
