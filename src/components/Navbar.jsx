import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🎓</span>
        <h1>Course Finder</h1>
      </div>
      <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle Dark Mode">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
