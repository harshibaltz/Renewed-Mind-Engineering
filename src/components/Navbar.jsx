import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My React Site</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/profile">Profile Card</Link>
        <Link to="/interactive">Interactive</Link>
      </div>
    </nav>
  );
}

export default Navbar;