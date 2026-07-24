import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>swanix <span>Brand Development</span></h3>
            <p>We deliver innovative software, AI marketing & digital solutions to help businesses grow and succeed in the digital world.</p>
            <p className="tagline">Building Brands. Creating Opportunities.</p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer">f</a>
              <a href="#" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="#" target="_blank" rel="noopener noreferrer">in</a>
              <a href="#" target="_blank" rel="noopener noreferrer">▶</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/industries">Careers</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Business Solutions</h4>
            <ul>
              <li><Link to="/services">Software Development</Link></li>
              <li><Link to="/services">AI & Automation</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Cloud & Security</Link></li>
              <li><Link to="/services">Emerging Technologies</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Swanix Connects</h4>
            <ul>
              <li><Link to="/swanix-connects">For Students</Link></li>
              <li><Link to="/swanix-connects">Internships</Link></li>
              <li><Link to="/swanix-connects">Placements</Link></li>
              <li><Link to="/swanix-connects">Training Programs</Link></li>
              <li><Link to="/swanix-connects">Career Guidance</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
            <h4 style={{ marginTop: '20px' }}>Get in Touch</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>India</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a href="tel:+919502961708">+91 9502961708</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📧</span>
              <a href="mailto:swanixbranddevelopment@gmail.com">info@swanixbranddevelopment.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Swanix Brand Development. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
