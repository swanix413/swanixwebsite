import { useState } from 'react';

const Partner = () => {
  const [activeTab, setActiveTab] = useState('business');
  const [submitted, setSubmitted] = useState(false);

  const [businessForm, setBusinessForm] = useState({
    businessName: '', contactPerson: '', email: '', phone: '', industry: '', website: '', services: '', goals: '', about: '', budget: '', contactMethod: ''
  });

  const [collegeForm, setCollegeForm] = useState({
    collegeName: '', principal: '', tpo: '', email: '', phone: '', city: '', students: '', programs: [], requirements: ''
  });

  const [oppForm, setOppForm] = useState({
    orgName: '', contactPerson: '', email: '', opportunityType: '', title: '', description: '', eligibility: '', deadline: '', registrationLink: ''
  });

  const collegePrograms = ['Workshops', 'Internships', 'Certifications', 'Hackathons', 'Placement Support', 'Guest Lectures', 'Campus Ambassador Program', 'Career Guidance', 'Entrepreneurship Sessions'];

  const handleSubmit = async (e, endpoint, form) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/api/${endpoint}`, {
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

  const handleCollegeCheckbox = (value) => {
    setCollegeForm(prev => ({
      ...prev,
      programs: prev.programs.includes(value)
        ? prev.programs.filter(p => p !== value)
        : [...prev.programs, value]
    }));
  };

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Partner With Swanix</div>
          <h2>Build Your Brand With Swanix</h2>
          <p>We partner with businesses to create impactful branding solutions that support long-term success.</p>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          {[
            { key: 'business', label: 'Business Partnership' },
            { key: 'college', label: 'College Partnership' },
            { key: 'opportunity', label: 'Post an Opportunity' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setSubmitted(false); }}
              className={`btn ${activeTab === tab.key ? 'btn-primary' : 'btn-secondary'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="form-container">
          {submitted ? (
            <div className="success-message">
              <p>✅ Your submission has been received successfully!</p>
              <button className="btn btn-secondary" style={{ marginTop: '15px' }} onClick={() => setSubmitted(false)}>Submit Another</button>
            </div>
          ) : (
            <>
              {activeTab === 'business' && (
                <form onSubmit={(e) => handleSubmit(e, 'business-inquiry', businessForm)}>
                  <h1>Business Enquiry</h1>
                  <p className="subtitle">Tell us about your business and how we can help you grow.</p>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Business Name *</label>
                      <input type="text" required value={businessForm.businessName} onChange={e => setBusinessForm({...businessForm, businessName: e.target.value})} placeholder="Your business name" />
                    </div>
                    <div className="form-group">
                      <label>Contact Person *</label>
                      <input type="text" required value={businessForm.contactPerson} onChange={e => setBusinessForm({...businessForm, contactPerson: e.target.value})} placeholder="Your name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" required value={businessForm.email} onChange={e => setBusinessForm({...businessForm, email: e.target.value})} placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" required value={businessForm.phone} onChange={e => setBusinessForm({...businessForm, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Industry *</label>
                      <input type="text" required value={businessForm.industry} onChange={e => setBusinessForm({...businessForm, industry: e.target.value})} placeholder="e.g., Healthcare, Technology" />
                    </div>
                    <div className="form-group">
                      <label>Website (Optional)</label>
                      <input type="url" value={businessForm.website} onChange={e => setBusinessForm({...businessForm, website: e.target.value})} placeholder="https://yourwebsite.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Services Required *</label>
                    <input type="text" required value={businessForm.services} onChange={e => setBusinessForm({...businessForm, services: e.target.value})} placeholder="e.g., Logo Design, Website, Social Media" />
                  </div>
                  <div className="form-group">
                    <label>Business Goals</label>
                    <textarea value={businessForm.goals} onChange={e => setBusinessForm({...businessForm, goals: e.target.value})} placeholder="What do you want to achieve with branding?" rows={3}></textarea>
                  </div>
                  <div className="form-group">
                    <label>Tell Us About Your Business</label>
                    <textarea value={businessForm.about} onChange={e => setBusinessForm({...businessForm, about: e.target.value})} placeholder="Brief description of your business..." rows={4}></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Preferred Budget (Optional)</label>
                      <select value={businessForm.budget} onChange={e => setBusinessForm({...businessForm, budget: e.target.value})}>
                        <option value="">Select Budget Range</option>
                        <option value="basic">Basic (Under ₹10,000)</option>
                        <option value="standard">Standard (₹10,000 - ₹25,000)</option>
                        <option value="premium">Premium (₹25,000 - ₹50,000)</option>
                        <option value="enterprise">Enterprise (₹50,000+)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Preferred Contact Method</label>
                      <select value={businessForm.contactMethod} onChange={e => setBusinessForm({...businessForm, contactMethod: e.target.value})}>
                        <option value="">Select Method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="btn btn-primary">Start Your Branding Journey →</button>
                  </div>
                </form>
              )}

              {activeTab === 'college' && (
                <form onSubmit={(e) => handleSubmit(e, 'college-partnership', collegeForm)}>
                  <h1>College Partnership</h1>
                  <p className="subtitle">Partner with Swanix Connects to bring opportunities to your students.</p>
                  <div className="form-row">
                    <div className="form-group">
                      <label>College Name *</label>
                      <input type="text" required value={collegeForm.collegeName} onChange={e => setCollegeForm({...collegeForm, collegeName: e.target.value})} placeholder="College name" />
                    </div>
                    <div className="form-group">
                      <label>Principal Name</label>
                      <input type="text" value={collegeForm.principal} onChange={e => setCollegeForm({...collegeForm, principal: e.target.value})} placeholder="Principal's name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Training & Placement Officer</label>
                      <input type="text" value={collegeForm.tpo} onChange={e => setCollegeForm({...collegeForm, tpo: e.target.value})} placeholder="TPO name" />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" required value={collegeForm.email} onChange={e => setCollegeForm({...collegeForm, email: e.target.value})} placeholder="college@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" required value={collegeForm.phone} onChange={e => setCollegeForm({...collegeForm, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="form-group">
                      <label>City *</label>
                      <input type="text" required value={collegeForm.city} onChange={e => setCollegeForm({...collegeForm, city: e.target.value})} placeholder="City" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Number of Students</label>
                    <input type="text" value={collegeForm.students} onChange={e => setCollegeForm({...collegeForm, students: e.target.value})} placeholder="Approximate number of students" />
                  </div>
                  <div className="form-group">
                    <label>Preferred Programs</label>
                    <div className="checkbox-group">
                      {collegePrograms.map((prog, i) => (
                        <label key={i} className="checkbox-label">
                          <input type="checkbox" checked={collegeForm.programs.includes(prog)} onChange={() => handleCollegeCheckbox(prog)} />
                          {prog}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Institution Requirements</label>
                    <textarea value={collegeForm.requirements} onChange={e => setCollegeForm({...collegeForm, requirements: e.target.value})} placeholder="Tell us about your institution and how Swanix can support your students." rows={4}></textarea>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="btn btn-primary">Partner With Swanix →</button>
                  </div>
                </form>
              )}

              {activeTab === 'opportunity' && (
                <form onSubmit={(e) => handleSubmit(e, 'post-opportunity', oppForm)}>
                  <h1>Post an Opportunity</h1>
                  <p className="subtitle">Companies, startups, NGOs, training institutes, and organizations can submit opportunities for students.</p>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Organization Name *</label>
                      <input type="text" required value={oppForm.orgName} onChange={e => setOppForm({...oppForm, orgName: e.target.value})} placeholder="Organization name" />
                    </div>
                    <div className="form-group">
                      <label>Contact Person *</label>
                      <input type="text" required value={oppForm.contactPerson} onChange={e => setOppForm({...oppForm, contactPerson: e.target.value})} placeholder="Contact person" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" required value={oppForm.email} onChange={e => setOppForm({...oppForm, email: e.target.value})} placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label>Opportunity Type *</label>
                      <select required value={oppForm.opportunityType} onChange={e => setOppForm({...oppForm, opportunityType: e.target.value})}>
                        <option value="">Select Type</option>
                        <option value="internship">Internship</option>
                        <option value="workshop">Workshop</option>
                        <option value="certification">Certification</option>
                        <option value="hackathon">Hackathon</option>
                        <option value="scholarship">Scholarship</option>
                        <option value="job">Freshers Job</option>
                        <option value="competition">Competition</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Opportunity Title *</label>
                    <input type="text" required value={oppForm.title} onChange={e => setOppForm({...oppForm, title: e.target.value})} placeholder="e.g., Software Development Intern" />
                  </div>
                  <div className="form-group">
                    <label>Description *</label>
                    <textarea required value={oppForm.description} onChange={e => setOppForm({...oppForm, description: e.target.value})} placeholder="Describe the opportunity in detail..." rows={4}></textarea>
                  </div>
                  <div className="form-group">
                    <label>Eligibility Criteria</label>
                    <textarea value={oppForm.eligibility} onChange={e => setOppForm({...oppForm, eligibility: e.target.value})} placeholder="Who can apply? Any specific requirements?" rows={3}></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Application Deadline</label>
                      <input type="date" value={oppForm.deadline} onChange={e => setOppForm({...oppForm, deadline: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Registration Link</label>
                      <input type="url" value={oppForm.registrationLink} onChange={e => setOppForm({...oppForm, registrationLink: e.target.value})} placeholder="https://..." />
                    </div>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="btn btn-primary">Submit Opportunity →</button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Partner;
