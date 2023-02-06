import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
    <div className="container">
    <a className="navbar-brand bg-dark text-white" >React crud</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/" >Home</Link>
          </li>
        </ul>
    
      </div>
      <Link className="btn btn-outline-light w-25" to="/add">Add Users</Link>
    </div>
  </nav>
  );
}

export default Navbar;
