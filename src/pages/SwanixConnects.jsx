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
      </div>
    </section>
  );
};

export default SwanixConnects;
