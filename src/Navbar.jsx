// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-center space-x-8">
      <Link to="/" className="text-white text-lg hover:underline">Home</Link>
      <Link to="/login" className="text-white text-lg hover:underline">Login</Link>
      <Link to="/signup" className="text-white text-lg hover:underline">Signup</Link>
    </nav>
  );
}

export default Navbar;
