import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', business: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); setForm({ name: '', email: '', business: '', service: '' }); }, 2500);
  };

  const services = ['Brand Strategy', 'Logo Design', 'Website Development', 'Mobile App Development', 'AI & Automation', 'Digital Marketing', 'Social Media Marketing', 'Software Development', 'Cloud Solutions', 'Other'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="modal-content glass-card" initial={{ opacity: 0, scale: 0.8, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 50 }} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>✕</button>
            {submitted ? (
              <div className="modal-success">
                <span className="modal-success-icon">✅</span>
                <h3>Thank You!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h3>Get Free Quote</h3>
                  <p>Tell us about your project and we'll get back to you.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" value={form.business} onChange={e => setForm({...form, business: e.target.value})} placeholder="Your business name" />
                  </div>
                  <div className="form-group">
                    <label>Select Service *</label>
                    <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                      <option value="">Choose a service</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary-full">Submit Request</button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
