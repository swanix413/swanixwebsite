import { useState } from 'react';
import { motion } from 'framer-motion';

const SwanixConnects = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="connects-page">
      <div className="container">
        <div className="connects-grid">
          {/* Registration Form */}
          <motion.div className="connects-form-wrapper glass-card"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="connects-form-header">
              <div className="connects-form-icon">🎓</div>
              <h2>Swanix Connects</h2>
              <p>Register to stay updated with internships, workshops, certifications, and career opportunities.</p>
            </div>
            {submitted ? (
              <div className="success-msg">
                <span>✅</span>
                <h3>Registration Successful!</h3>
                <p>We'll get back to you with opportunities soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Contact Number *</label>
                  <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Query / Message</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your interests or any questions..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary-full">Submit Registration</button>
              </form>
            )}
          </motion.div>

          {/* Instagram Promotion Card */}
          <motion.div className="connects-instagram-card"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="instagram-card-content">
              <div className="instagram-icon-large">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3>🚀 Follow Swanix Connects</h3>
              <p className="instagram-subtitle">Stay updated with the latest opportunities</p>
              
              <ul className="instagram-features">
                <li>🎯 Internship Opportunities</li>
                <li>💼 Job Opportunities</li>
                <li>📚 Workshops</li>
                <li>🎓 Training Programs</li>
                <li>📜 Certifications</li>
                <li>🏢 Campus Drives</li>
                <li>📈 Skill Development Programs</li>
                <li>🧭 Career Guidance</li>
              </ul>

              <p className="instagram-cta-text">Follow us on Instagram for daily opportunities.</p>
              
              <a href="https://www.instagram.com/swanix_connects/" target="_blank" rel="noopener noreferrer" className="btn-instagram-gradient">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow Swanix Connects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SwanixConnects;
