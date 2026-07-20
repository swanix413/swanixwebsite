import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', contact: '', email: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="badge">Contact</div>
            <h2>Let's Build Something Meaningful Together</h2>
            <p>Whether you're a business owner, entrepreneur, professional, student, or educational institution, we're here to help you grow.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Tirupati, Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>swanixbranddevelopment@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9502961708</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-container" style={{ margin: 0 }}>
            {submitted ? (
              <div className="success-message">
                <p>✅ Appointment booked successfully! We'll contact you soon.</p>
              </div>
            ) : (
              <>
                <h1>Book an Appointment</h1>
                <p className="subtitle">Schedule a consultation with our team.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Contact Number *</label>
                    <input type="tel" required value={form.contact} onChange={e => setForm({...form, contact: e.target.value})} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Preferred Date *</label>
                      <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Preferred Time *</label>
                      <input type="time" required value={form.time} onChange={e => setForm({...form, time: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="btn btn-primary">Book Appointment →</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
