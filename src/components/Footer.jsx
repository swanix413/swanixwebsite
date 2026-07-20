import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>SWANIX BRAND DEVELOPMENT</h3>
            <p>Building Brands. Creating Opportunities. Helping businesses build memorable brands while connecting students with meaningful opportunities through Swanix Connects.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ebooks">Brand Strategy eBooks</Link></li>
              <li><Link to="/swanix-connects">Swanix Connects</Link></li>
              <li><Link to="/partner">Partner With Swanix</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:swanixbranddevelopment@gmail.com">swanixbranddevelopment@gmail.com</a></li>
              <li><a href="tel:+919502961708">+91 9502961708</a></li>
              <li>Tirupati, Andhra Pradesh, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Swanix Brand Development. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
