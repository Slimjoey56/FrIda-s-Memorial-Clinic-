import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Close navbar when route changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  // Toggle navbar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close navbar on nav link click (mobile only)
  const handleNavLinkClick = () => {
    if (window.innerWidth < 992) {
      setIsNavOpen(false);
    }
  };

  // Close navbar when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target) && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <nav 
      className="navbar navbar-expand-lg bg-white shadow-sm"
      style={{
        position: 'fixed',
        top: '48px',
        left: '0',
        right: '0',
        width: '100%',
        zIndex: 1020,
        borderBottom: '1px solid #e9ecef'
      }}
    >
      <div className="container-fluid px-3 px-md-4">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="/logo.svg" width="26" height="26" alt="Hospital logo"/>
          <span className="fw-bold text-primary d-none d-sm-inline">Frida Memorial Clinic</span>
          <span className="fw-bold text-primary d-inline d-sm-none">Frida Memorial</span>
        </Link>
        
        <button
          className={`navbar-toggler border-0 p-1 ${!isNavOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleNav}
          aria-controls="nav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          style={{ fontSize: '1.1rem' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="nav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded-2 ${isActive ? 'text-primary fw-semibold' : ''}`
                } 
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded-2 ${isActive ? 'text-primary fw-semibold' : ''}`
                } 
                to="/services"
                onClick={handleNavLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded-2 ${isActive ? 'text-primary fw-semibold' : ''}`
                } 
                to="/about"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded-2 ${isActive ? 'text-primary fw-semibold' : ''}`
                } 
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="ms-lg-3 mt-2 mt-lg-0">
            <a 
              href="#book" 
              className="btn btn-primary btn-sm w-100 w-lg-auto"
              style={{ minWidth: '140px' }}
              onClick={handleNavLinkClick}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}