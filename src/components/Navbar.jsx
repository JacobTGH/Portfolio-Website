import React from 'react';
import './Navbar.css'; // Importing the Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
