import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Fuelify Logo" />
        <h1>Fuelify</h1>
      </div>

      <div className="navbar-toggle" onClick={toggleNavbar}>
        &#9776;
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/user" onClick={() => setIsOpen(false)}>User</Link></li>
        <li><Link to="/manager" onClick={() => setIsOpen(false)}>Manager</Link></li>
        <li><Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
