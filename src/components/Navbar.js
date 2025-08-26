import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
    setIsAboutOpen(false);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsProjectsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-content">
            <img src="/images-2-removebg-preview.png" alt="Johns Hopkins University Seal" className="jhu-seal" />
            <div className="logo-text-container">
              <span className="logo-text">Astrojays</span>
              <span className="logo-subtitle">Rocket Team</span>
            </div>
          </div>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${location.pathname.startsWith('/about') ? 'active' : ''}`}
              onClick={toggleAbout}
            >
              About
            </button>
            <div className={`dropdown-menu ${isAboutOpen ? 'show' : ''}`}>
              <Link 
                to="/about" 
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  setIsAboutOpen(false);
                }}
              >
                Members
              </Link>
              <Link 
                to="/faq" 
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  setIsAboutOpen(false);
                }}
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
              onClick={toggleProjects}
            >
              Projects
            </button>
            <div className={`dropdown-menu ${isProjectsOpen ? 'show' : ''}`}>
              <Link 
                to="/projects" 
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  setIsProjectsOpen(false);
                }}
              >
                Rockets
              </Link>
              <Link 
                to="/motors" 
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  setIsProjectsOpen(false);
                }}
              >
                Motors
              </Link>
            </div>
          </div>
          <Link 
            to="/support" 
            className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 