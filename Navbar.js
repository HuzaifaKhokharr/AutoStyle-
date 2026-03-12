import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // This ensures all your underglow logic is applied

const Navbar = ({ cartCount }) => {
  const location = useLocation();

  return (
    <nav className="navbar px-5 sticky-top">
    
      <Link to="/" className="text-decoration-none">
        <div className="logo">
          AUTO<span className="text-white">STYLE</span>
        </div>
      </Link>

      
      <div className="d-flex align-items-center">
        
      
        <ul className="nav-links mb-0" style={{ gap: '35px' }}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Products</Link>
          </li>
          <li>
            <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
          </li>
          <li>
  <Link to="/prayer" className={location.pathname === "/prayer" ? "active" : ""}>Prayer</Link>
</li>
        </ul>


<div className="ms-5 ps-3 border-start border-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
  <button 
    className="btn p-0 border-0 bg-transparent position-relative d-flex align-items-center"
    data-bs-toggle="modal" 
    data-bs-target="#cartModal"
    style={{ transition: 'transform 0.2s' }}
  >

    <span style={{ fontSize: '1.8rem' }}>🛒</span>
    
    {cartCount > 0 && (
      <span 
        className="position-absolute translate-middle badge rounded-pill bg-danger" 
        style={{ 
          top: '8px',           
          left: '95%', 
          fontSize: '0.8rem',     
          fontWeight: '900',      
          padding: '2px 6px',     
          color: '#fff',          
          minWidth: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #fff', 
          boxShadow: '0 0 15px rgba(255, 0, 0, 0.8)', 
          zIndex: 100
        }}
      >
        {cartCount}
      </span>
    )}
  </button>
</div>

      </div>
    </nav>
  );
};

export default Navbar;