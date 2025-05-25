import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">👔 MenStyle</h2>
      <div>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/fit" className="nav-link">Fit Predictor</Link>
      </div>
    </nav>
  );
};

export default Navbar;
