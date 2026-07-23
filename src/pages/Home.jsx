import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const AnimatedSection = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section ref={ref} id={id} className={className} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
      {children}
    </motion.section>
  );
};

const Home = () => {
  const [ebookForm, setEbookForm] = useState({ name: '', business: '', email: '', phone: '', industry: '', book: '', notes: '' });
  const [ebookSubmitted, setEbookSubmitted] = useState(false);

  const handleEbookSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ebookForm)
      });
    } catch (err) { console.error(err); }
    setEbookSubmitted(true);
  };

  const stats = [
    { num: '20+', label: 'Brand Strategy eBooks Created' },
    { num: '3', label: 'Industries Served' },
    { num: 'India', label: 'Remote Branding Services' },
    { num: 'Students', label: 'Opportunities Shared Regularly' },
  ];

  const serviceCategories = [
    { icon: '🎨', title: 'Branding & Creative', color: 'grad-orange', items: ['Brand Strategy', 'Brand Identity', 'Logo Design', 'Personal Branding', 'Company Profile', 'Brochure Design', 'Social Media Branding', 'Graphic Design'] },
    { icon: '🌐', title: 'Software Development', color: 'grad-blue', items: ['Custom Website Development', 'E-Commerce Development', 'Android Development', 'iOS Development', 'Custom Software', 'SaaS Development', 'ERP & CRM', 'API Development', 'UI/UX Design', 'DevOps', 'QA Testing', 'Maintenance'] },
    { icon: '🤖', title: 'AI & Automation', color: 'grad-purple', items: ['AI Chatbots', 'WhatsApp AI', 'AI Agents', 'Voice Agents', 'AI Receptionists', 'Email Automation', 'SMS Automation', 'Business Automation', 'AI Content', 'AI Analytics'] },
    { icon: '📈', title: 'Marketing', color: 'grad-pink', items: ['SEO', 'Digital Marketing', 'Social Media Marketing', 'Branding', 'Lead Generation', 'Email Marketing', 'WhatsApp Marketing', 'SMS Campaigns'] },
    { icon: '☁️', title: 'Cloud & Security', color: 'grad-teal', items: ['Cloud Infrastructure', 'Migration', 'Cyber Security', 'Backup', 'Business Intelligence', 'Data Analytics'] },
    { icon: '🚀', title: 'Emerging Technologies', color: 'grad-red', items: ['Blockchain', 'IoT', 'GPS Tracking', 'Game Development', 'AR / VR'] },
  ];

  const industries = [
    'Clothing Brands', 'Fashion Brands', 'Doctors', 'Hospitals', 'Clinics', 'Schools', 'Colleges', 'Universities',
    'Government Projects', 'Solar Companies', 'Personal Brands', 'Podcasts', 'Restaurants', 'Hotels', 'Construction',
    'Real Estate', 'IT Companies', 'Manufacturing', 'Retail', 'Startups', 'NGOs', 'Agriculture', 'Finance', 'Beauty',
    'Jewellery', 'Automobile', 'Interior Designers', 'Architects', 'Fitness', 'E-commerce', 'Professional Services'
  ];

  const ebookTopics = ['Brand Strategy', 'Personal Branding', 'Business Growth', 'Social Media Branding', 'Digital Marketing', 'Startup Branding', 'Brand Positioning', 'Customer Experience', 'Business Identity', 'Marketing Planning', 'Website Branding', 'Brand Communication'];

  const connectsItems = ['Internships', 'Workshops', 'Certifications', 'Hackathons', 'Scholarships', 'Jobs', 'Resume Resources', 'Interview Preparation', 'Career Guidance', 'Events'];

  const portfolioItems = [
    { title: 'Brand Identity', icon: '🎨', gradient: 'grad-orange' },
    { title: 'Website Design', icon: '💻', gradient: 'grad-blue' },
    { title: 'Social Media', icon: '📱', gradient: 'grad-purple' },
    { title: 'Marketing', icon: '📈', gradient: 'grad-pink' },
    { title: 'eBooks', icon: '📚', gradient: 'grad-teal' },
    { title: 'Brochures', icon: '📄', gradient: 'grad-red' },
    { title: 'Presentations', icon: '📊', gradient: 'grad-orange' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
          <div className="hero-shape shape-4"></div>
        </div>
        <div className="container hero-container">
          <motion.div className="hero-content" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-badge">Swanix Brand Development</div>
            <h1>Building Brands. <span className="gradient-text">Creating Opportunities.</span></h1>
            <p>Swanix Brand Development helps businesses build memorable brands through branding, websites, AI-powered digital solutions, automation, and strategic marketing while empowering students through Swanix Connects.</p>
            <div className="hero-buttons">
              <Link to="/partner" className="btn btn-orange">🟠 Build My Brand</Link>
              <Link to="/swanix-connects" className="btn btn-purple">🟣 Explore Swanix Connects</Link>
              <Link to="/contact" className="btn btn-green">🟢 Book Free Consultation</Link>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="hero-illustration">
              <div className="illust-main">
                <div className="illust-circle c1"></div>
                <div className="illust-circle c2"></div>
                <div className="illust-circle c3"></div>
                <div className="illust-icons">
                  <span>🎨</span><span>💻</span><span>🤖</span><span>📈</span>
                </div>
              </div>
              <div className="illust-label">Creative Team</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <AnimatedSection className="section stats-section" id="stats">
        <div className="container">
          <motion.div className="stats-grid" variants={stagger}>
            {stats.map((s, i) => (
              <motion.div key={i} className="stat-card glass-card" variants={fadeInUp}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SERVICES */}
      <AnimatedSection className="section" id="services">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Our Services</div>
            <h2>Comprehensive Digital Solutions</h2>
            <p>From branding to AI automation, we deliver everything your business needs to grow.</p>
          </motion.div>
          <motion.div className="services-grid" variants={stagger}>
            {serviceCategories.map((cat, i) => (
              <motion.div key={i} className={`service-card glass-card grad-border-${cat.color.split('-')[1]}`} variants={scaleIn}>
                <div className="service-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <div className="service-items">
                  {cat.items.map((item, j) => <span key={j} className="service-tag">{item}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* INDUSTRIES */}
      <AnimatedSection className="section alt-bg" id="industries">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Industries</div>
            <h2>Industries We Serve</h2>
            <p>Trusted by businesses across diverse sectors to deliver impactful branding and digital solutions.</p>
          </motion.div>
          <motion.div className="industries-grid" variants={stagger}>
            {industries.map((ind, i) => (
              <motion.div key={i} className="industry-card glass-card" variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }}>
                <div className="industry-icon">{['👔', '👗', '🏥', '🏨', '🩺', '🎓', '🏫', '🏛️', '🏗️', '☀️', '👤', '🎙️', '🍽️', '🏨', '🏗️', '🏠', '💻', '🏭', '🛍️', '🚀', '🤝', '🌾', '💰', '💄', '💍', '🚗', '🪑', '📐', '💪', '🛒', '💼'][i]}</div>
                <h4>{ind}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* eBOOKS */}
      <AnimatedSection className="section" id="ebooks">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Brand Strategy eBooks</div>
            <h2>Knowledge That Builds Powerful Brands</h2>
            <p>We have created 20+ Brand Strategy eBooks to help businesses understand branding, marketing, and business growth.</p>
          </motion.div>
          <div className="ebooks-layout">
            <motion.div className="ebooks-topics" variants={stagger}>
              {ebookTopics.map((t, i) => (
                <motion.div key={i} className="ebook-topic glass-card" variants={fadeInUp}>
                  <span className="ebook-icon">📖</span> {t}
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="ebook-form-wrapper glass-card" variants={fadeInUp}>
              {ebookSubmitted ? (
                <div className="success-msg">
                  <span>✅</span>
                  <h3>Request Received!</h3>
                  <p>Your custom eBook will be delivered within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleEbookSubmit}>
                  <h3>Request Custom eBook</h3>
                  <div className="form-row">
                    <div className="form-group"><label>Name *</label><input type="text" required value={ebookForm.name} onChange={e => setEbookForm({...ebookForm, name: e.target.value})} placeholder="Your name" /></div>
                    <div className="form-group"><label>Business Name</label><input type="text" value={ebookForm.business} onChange={e => setEbookForm({...ebookForm, business: e.target.value})} placeholder="Business name" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Email *</label><input type="email" required value={ebookForm.email} onChange={e => setEbookForm({...ebookForm, email: e.target.value})} placeholder="Email" /></div>
                    <div className="form-group"><label>Phone *</label><input type="tel" required value={ebookForm.phone} onChange={e => setEbookForm({...ebookForm, phone: e.target.value})} placeholder="Phone" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Industry</label><input type="text" value={ebookForm.industry} onChange={e => setEbookForm({...ebookForm, industry: e.target.value})} placeholder="Industry" /></div>
                    <div className="form-group"><label>Book Requirement</label><input type="text" value={ebookForm.book} onChange={e => setEbookForm({...ebookForm, book: e.target.value})} placeholder="e.g., Brand Strategy" /></div>
                  </div>
                  <div className="form-group"><label>Additional Notes</label><textarea rows={3} value={ebookForm.notes} onChange={e => setEbookForm({...ebookForm, notes: e.target.value})} placeholder="Any specific requirements..."></textarea></div>
                  <button type="submit" className="btn btn-primary-full">Request Custom eBook</button>
                  <p className="form-note">Custom Brand Strategy eBooks are delivered within 48 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* SWANIX CONNECTS */}
      <AnimatedSection className="section alt-bg" id="connects">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Swanix Connects</div>
            <h2>Connecting Students With Opportunities</h2>
            <p>Every student deserves access to opportunities that help them grow.</p>
          </motion.div>
          <motion.div className="connects-grid" variants={stagger}>
            {connectsItems.map((item, i) => (
              <motion.div key={i} className="connects-card glass-card" variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="connects-icon">{['💼', '🎓', '📜', '🏆', '🎓', '💼', '📄', '🎤', '🧭', '📅'][i]}</div>
                <h4>{item}</h4>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="connects-buttons" variants={fadeInUp}>
            <Link to="/swanix-connects" className="btn btn-purple">Register as Student</Link>
            <Link to="/partner" className="btn btn-blue">Register Your College</Link>
            <Link to="/partner" className="btn btn-green">Explore Opportunities</Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PARTNER */}
      <AnimatedSection className="section" id="partner">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Partner With Swanix</div>
            <h2>Grow Together</h2>
            <p>We partner with businesses, colleges, and organizations for mutual growth.</p>
          </motion.div>
          <motion.div className="partner-grid" variants={stagger}>
            {[
              { icon: '🏢', title: 'Business Partnership', desc: 'Transform your brand with our strategic branding and digital solutions.', gradient: 'grad-orange' },
              { icon: '🏫', title: 'College Partnership', desc: 'Connect your students with workshops, internships, and career programs.', gradient: 'grad-blue' },
              { icon: '📢', title: 'Post an Opportunity', desc: 'Share internships, jobs, and programs with thousands of students.', gradient: 'grad-purple' },
            ].map((card, i) => (
              <motion.div key={i} className={`partner-card glass-card ${card.gradient}`} variants={scaleIn} whileHover={{ scale: 1.03, y: -8 }}>
                <div className="partner-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link to="/partner" className="btn btn-sm">Get Started →</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PORTFOLIO */}
      <AnimatedSection className="section alt-bg" id="portfolio">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Portfolio</div>
            <h2>Our Work Speaks</h2>
            <p>Explore our collection of branding, design, and digital projects.</p>
          </motion.div>
          <motion.div className="portfolio-grid" variants={stagger}>
            {portfolioItems.map((item, i) => (
              <motion.div key={i} className={`portfolio-card ${item.gradient}`} variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="portfolio-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection className="section" id="contact">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Contact</div>
            <h2>Let's Build Something Meaningful Together</h2>
            <p>Whether you're a business owner, entrepreneur, professional, student, or educational institution, we're here to help you grow.</p>
          </motion.div>
          <motion.div className="contact-cards" variants={stagger}>
            {[
              { icon: '📞', label: 'Phone', value: '+91 9502961708', link: 'tel:+919502961708', action: 'Call Now', color: 'grad-orange' },
              { icon: '📧', label: 'Email', value: 'swanixbranddevelopment@gmail.com', link: 'mailto:swanixbranddevelopment@gmail.com', action: 'Get Free Quote', color: 'grad-blue' },
              { icon: '📍', label: 'Location', value: 'Tirupati, Andhra Pradesh', link: 'https://wa.me/919502961708', action: 'WhatsApp Us', color: 'grad-purple' },
            ].map((c, i) => (
              <motion.div key={i} className={`contact-card glass-card ${c.color}`} variants={scaleIn}>
                <div className="contact-icon">{c.icon}</div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-value">{c.value}</div>
                <a href={c.link} className="btn btn-sm" target={c.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.action}</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Home;
