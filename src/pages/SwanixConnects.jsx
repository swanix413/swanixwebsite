import { useState } from 'react';
import { Link } from 'react-router-dom';

const SwanixConnects = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', college: '', branch: '', year: '', city: '', linkedin: '',
    interests: [], careerGoals: ''
  });

  const opportunities = [
    'Internships', 'Workshops', 'Certifications', 'Hackathons', 'Scholarships',
    'Freshers Jobs', 'Campus Ambassador Programs', 'Competitions', 'Industry Events',
    'Career Guidance', 'Resume Tips', 'Interview Preparation'
  ];

  const interestOptions = [
    'Internships', 'Workshops', 'Certifications', 'Hackathons', 'Scholarships',
    'Campus Ambassador Programs', 'Freshers Jobs', 'Resume Review', 'Interview Guidance', 'Skill Development'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/student-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Swanix Connects</div>
          <h2>Connecting Students With Opportunities</h2>
          <p>Swanix Connects is an initiative by Swanix Brand Development that helps students stay informed about career-building opportunities.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>We regularly share:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {opportunities.map((opp, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px', background: 'white', border: '1px solid var(--border)',
                  borderRadius: '10px', fontSize: '0.9rem'
                }}>
                  <span style={{ color: 'var(--accent)' }}>✦</span> {opp}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎓</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px', color: 'var(--heading)' }}>Every Student Deserves Access</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>To opportunities that help them grow. Register now to stay updated.</p>
              <Link to="/student-register" className="btn btn-primary">Register Now →</Link>
            </div>
          </div>
        </div>

        <div className="form-container" id="student-form">
          <h1>Student Registration</h1>
          <p className="subtitle">Join Swanix Connects. Stay updated with valuable opportunities and career resources.</p>
          {submitted ? (
            <div className="success-message">
              <p>✅ Successfully registered! Welcome to Swanix Connects.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                  <label>College Name *</label>
                  <input type="text" name="college" value={form.college} onChange={handleChange} required placeholder="Enter your college name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Branch *</label>
                  <input type="text" name="branch" value={form.branch} onChange={handleChange} required placeholder="e.g., Computer Science" />
                </div>
                <div className="form-group">
                  <label>Year of Study *</label>
                  <select name="year" value={form.year} onChange={handleChange} required>
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="pg">Post Graduate</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" name="city" value={form.city} onChange={handleChange} required placeholder="Enter your city" />
                </div>
                <div className="form-group">
                  <label>LinkedIn Profile (Optional)</label>
                  <input type="url" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn profile URL" />
                </div>
              </div>
              <div className="form-group">
                <label>Opportunities You're Interested In</label>
                <div className="checkbox-group">
                  {interestOptions.map((opt, i) => (
                    <label key={i} className="checkbox-label">
                      <input type="checkbox" checked={form.interests.includes(opt)} onChange={() => handleCheckbox(opt)} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Career Goals</label>
                <textarea name="careerGoals" value={form.careerGoals} onChange={handleChange} placeholder="Describe your interests, skills, and the type of opportunities you're looking for." rows={4}></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">Join Swanix Connects →</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SwanixConnects;
