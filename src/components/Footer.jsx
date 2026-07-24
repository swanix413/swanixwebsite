import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>SWANIX BRAND DEVELOPMENT</h3>
            <p>Building Brands, AI & Digital Solutions That Grow Your Business. We help businesses build memorable brands through strategic branding, custom websites, AI-powered automation, software development and digital marketing.</p>
            <p className="tagline">Building Brands. Creating Opportunities.</p>
            <div className="footer-social">
              <a href="https://wa.me/919502961708" target="_blank" rel="noopener noreferrer">💬</a>
              <a href="mailto:swanixbranddevelopment@gmail.com">📧</a>
              <a href="tel:+919502961708">📞</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/partner">Partner With Swanix</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Branding & Creative</Link></li>
              <li><Link to="/services">Software Development</Link></li>
              <li><Link to="/services">AI & Automation</Link></li>
              <li><Link to="/services">Marketing</Link></li>
              <li><Link to="/services">Cloud & Security</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Industries</h4>
            <ul>
              <li><Link to="/industries">Healthcare</Link></li>
              <li><Link to="/industries">Education</Link></li>
              <li><Link to="/industries">IT Companies</Link></li>
              <li><Link to="/industries">Real Estate</Link></li>
              <li><Link to="/industries">Startups</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919502961708">📞 +91 9502961708</a></li>
              <li><a href="mailto:swanixbranddevelopment@gmail.com">📧 swanixbranddevelopment@gmail.com</a></li>
              <li><span>📍 Tirupati, Andhra Pradesh</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Swanix Brand Development. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
