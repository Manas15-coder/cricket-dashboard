import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg bg-body-transparent fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://img.pikbest.com/png-images/20210412/cricket-logo-icon-vector-template_5837503.png!w700wp"
              height="100px"
              alt="Cricket Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
