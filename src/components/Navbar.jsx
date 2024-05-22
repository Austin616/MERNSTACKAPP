import "./Navbar.css";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // Get the current location using useLocation hook from React Router
  const location = useLocation();

  return (
    <div className="nav">
      <div>
        <Link to="/" className="nav-logo">Catalytic Services Co</Link>
        <div className="phone-number">(281) 656-5777</div>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
        </li>
        <li className='nav-contact'>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
