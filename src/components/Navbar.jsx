import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onQuoteClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.jpg" alt="Swanix Brand Development" className="navbar-logo-img" />
        </Link>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/swanix-connects" className={location.pathname === '/swanix-connects' ? 'active' : ''}>Swanix Connects</Link>
          <div className="dropdown">
            <span>Business Solutions ▾</span>
            <div className="dropdown-menu">
              <Link to="/services">Software Development</Link>
              <Link to="/services">AI & Automation</Link>
              <Link to="/services">Digital Marketing</Link>
              <Link to="/services">Cloud & Security</Link>
              <Link to="/services">Emerging Technologies</Link>
            </div>
          </div>
          <Link to="/contact" onClick={(e) => { e.preventDefault(); window.open('https://wa.me/919502961708', '_blank'); }}>Contact Us</Link>
          <button className="btn-nav-cta" onClick={onQuoteClick}>Get Free Quote</button>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
