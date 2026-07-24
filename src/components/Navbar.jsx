import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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
          <Link to="/swanix-connects" style={{ position: 'relative' }}>
            Swanix Connects
            <span className="new-badge">New</span>
          </Link>
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
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
          <Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''}>Careers</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          <Link to="/contact" className="btn-nav-cta">Get a Free Quote</Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
