import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const AnimatedSection = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section ref={ref} id={id} className={className} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
      {children}
    </motion.section>
  );
};

const Home = () => {
  const [ebookForm, setEbookForm] = useState({ name: '', business: '', email: '', phone: '', industry: '', goals: '', notes: '' });
  const [ebookSubmitted, setEbookSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleEbookSubmit = (e) => {
    e.preventDefault();
    setEbookSubmitted(true);
  };

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const stats = [
    { num: '20+', label: 'Brand Strategy eBooks Created' },
    { num: '3', label: 'Industries Served' },
    { num: 'India', label: 'Serving Businesses Across India' },
    { num: 'Students', label: 'Career Opportunities Shared Regularly' },
  ];

  const serviceCategories = [
    { icon: '🎨', title: 'Branding & Creative', grad: 'grad-border-1', items: ['Brand Strategy', 'Brand Identity Development', 'Logo Design', 'Personal Branding', 'Company Profile Design', 'Brochure Design', 'Social Media Branding', 'Graphic Design'] },
    { icon: '🌐', title: 'Software Development', grad: 'grad-border-2', items: ['Custom Website Development', 'E-Commerce Website Development', 'Android App Development', 'iOS App Development', 'Custom Software Development', 'SaaS Product Development', 'Enterprise Software (ERP & CRM)', 'API Development & Third-Party Integrations', 'UI/UX Design', 'DevOps & Cloud Deployment', 'Software Testing & QA', 'Software Maintenance & Support'] },
    { icon: '🤖', title: 'AI & Automation', grad: 'grad-border-3', items: ['AI Chatbots for Websites', 'WhatsApp AI Chatbots', 'Custom AI Agents', 'AI Voice Calling Agents', 'AI Receptionists', 'Virtual Assistants', 'WhatsApp Automation', 'Email Automation', 'SMS Automation', 'Business Process Automation', 'AI Content Generation', 'AI Analytics & Reporting'] },
    { icon: '📈', title: 'Marketing & Communication', grad: 'grad-border-4', items: ['Digital Marketing', 'Search Engine Optimization', 'Social Media Marketing', 'Branding & Graphic Design', 'Lead Generation Automation', 'Bulk WhatsApp Messaging', 'Bulk Email Campaigns', 'Bulk SMS Services'] },
    { icon: '☁️', title: 'Cloud & Security', grad: 'grad-border-5', items: ['Cloud Infrastructure', 'Cloud Migration', 'Cybersecurity Solutions', 'Data Backup & Recovery', 'Business Intelligence', 'Data Analytics'] },
    { icon: '🚀', title: 'Emerging Technologies', grad: 'grad-border-6', items: ['Blockchain Development', 'IoT Solutions', 'GPS & Tracking Applications', 'Game Development', 'AR / VR Solutions'] },
  ];

  const whyChoose = [
    { icon: '🎯', title: 'Strategic Branding', desc: 'Data-driven strategies that deliver results.' },
    { icon: '💡', title: 'Creative Thinking', desc: 'Fresh perspectives that make your brand stand out.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at competitive prices.' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'We grow with you, not just for a project.' },
  ];

  const industries = [
    'Clothing Brands', 'Fashion Brands', 'Personal Branding', 'Doctors', 'Hospitals', 'Clinics',
    'Schools', 'Colleges', 'Universities', 'Government Projects', 'Solar Companies', 'Podcasts',
    'Restaurants', 'Hotels', 'Real Estate', 'Construction', 'IT Companies', 'Software Companies',
    'Manufacturing', 'Retail', 'Startups', 'NGOs', 'Agriculture', 'Finance', 'Beauty',
    'Jewellery', 'Automobile', 'Interior Designers', 'Architects', 'Fitness', 'E-Commerce', 'Professional Services'
  ];

  const processSteps = [
    { num: '01', title: 'Requirement Discussion', desc: 'Understanding your needs' },
    { num: '02', title: 'Research & Planning', desc: 'Strategic approach' },
    { num: '03', title: 'Design & Development', desc: 'Creating solutions' },
    { num: '04', title: 'Testing', desc: 'Quality assurance' },
    { num: '05', title: 'Deployment', desc: 'Going live' },
    { num: '06', title: 'Support & Maintenance', desc: 'Ongoing growth' },
  ];

  const portfolioItems = [
    { title: 'Brand Identity', icon: '🎨', grad: 'grad-purple-pink' },
    { title: 'Logo Design', icon: '✏️', grad: 'grad-pink-orange' },
    { title: 'Website Development', icon: '💻', grad: 'grad-sky-purple' },
    { title: 'Social Media Branding', icon: '📱', grad: 'grad-purple-orange' },
    { title: 'Marketing Posters', icon: '📊', grad: 'grad-orange-sky' },
    { title: 'Brochures', icon: '📄', grad: 'grad-purple-pink' },
    { title: 'Business Profiles', icon: '📋', grad: 'grad-pink-orange' },
    { title: 'Brand Strategy eBooks', icon: '📚', grad: 'grad-sky-purple' },
  ];

  const ebookTopics = ['Brand Strategy', 'Personal Branding', 'Business Growth', 'Social Media Branding', 'Digital Marketing', 'Startup Branding', 'Brand Positioning', 'Customer Experience', 'Business Identity', 'Marketing Planning', 'Website Branding', 'Brand Communication'];

  const connectsItems = ['Internships', 'Workshops', 'Certifications', 'Hackathons', 'Scholarships', 'Freshers Jobs', 'Resume Resources', 'Interview Preparation', 'Career Guidance', 'Events'];

  const blogs = [
    { title: 'Why Branding Matters for Startups in 2026', desc: 'Discover how strategic branding can transform your startup into a trusted business.', tag: 'Branding', icon: '🎨', grad: 'grad-purple-pink', date: 'Jul 20, 2026' },
    { title: 'AI-Powered Marketing: The Future of Digital Growth', desc: 'Learn how AI automation is revolutionizing marketing for businesses worldwide.', tag: 'AI Updates', icon: '🤖', grad: 'grad-sky-purple', date: 'Jul 18, 2026' },
    { title: 'Top 10 Career Opportunities for Students in 2026', desc: 'Explore the best internships, certifications, and job opportunities available today.', tag: 'Student Resources', icon: '🎓', grad: 'grad-pink-orange', date: 'Jul 15, 2026' },
  ];

  const faqs = [
    { q: 'What services does Swanix Brand Development offer?', a: 'We offer branding, logo design, website development, mobile app development, AI & automation, digital marketing, cloud solutions, and emerging technologies like blockchain and IoT.' },
    { q: 'How can Swanix help my startup?', a: 'We provide end-to-end branding, custom software development, AI-powered automation, and digital marketing solutions tailored specifically for startups looking to build a strong market presence.' },
    { q: 'What is Swanix Connects?', a: 'Swanix Connects is our initiative to help students discover internships, workshops, certifications, hackathons, scholarships, and career opportunities to shape their professional journey.' },
    { q: 'How long does it take to develop a website?', a: 'Typically, a custom website takes 2-6 weeks depending on complexity. E-commerce and SaaS projects may take 4-12 weeks. We follow an agile development process with regular updates.' },
    { q: 'Do you provide ongoing support after project delivery?', a: 'Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, security patches, and feature enhancements to ensure your digital products stay current.' },
    { q: 'What industries do you serve?', a: 'We serve 30+ industries including healthcare, education, IT, real estate, fashion, restaurants, manufacturing, startups, NGOs, and many more.' },
    { q: 'Can I request a custom Brand Strategy eBook?', a: 'Yes! We create custom Brand Strategy eBooks tailored to your business, target audience, and goals. They are delivered within 48 hours of your request.' },
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
            <div className="hero-badge">🚀 We Build, Automate & Scale Your Business</div>
            <h1>Building Brands, AI & Digital Solutions That <span>Grow Your Business</span></h1>
            <p>Swanix Brand Development helps businesses build memorable brands through strategic branding, custom websites, AI-powered automation, software development and digital marketing while empowering students through Swanix Connects.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-orange">🟠 Get Free Consultation</Link>
              <Link to="/contact" className="btn btn-sky">🔵 Talk To An Expert</Link>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="hero-image-wrapper">
              <div className="hero-glow"></div>
              <img src="/images/hero/team.png" alt="Swanix Brand Development Team" />
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
            <div className="badge">Our Core Services</div>
            <h2>Comprehensive Digital Solutions</h2>
            <p>From branding to AI automation, we deliver everything your business needs to grow and scale.</p>
          </motion.div>
          <motion.div className="services-grid" variants={stagger}>
            {serviceCategories.map((cat, i) => (
              <motion.div key={i} className={`service-card glass-card ${cat.grad}`} variants={scaleIn}>
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

      {/* WHY CHOOSE */}
      <AnimatedSection className="section alt-bg" id="why">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Why Choose Swanix</div>
            <h2>What Makes Us Different</h2>
          </motion.div>
          <motion.div className="why-grid" variants={stagger}>
            {whyChoose.map((w, i) => (
              <motion.div key={i} className="why-card glass-card" variants={scaleIn}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* INDUSTRIES */}
      <AnimatedSection className="section" id="industries">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Industries</div>
            <h2>Industries We Serve</h2>
            <p>Trusted by businesses across diverse sectors to deliver impactful branding and digital solutions.</p>
          </motion.div>
          <motion.div className="industries-grid" variants={stagger}>
            {industries.map((ind, i) => (
              <motion.div key={i} className="industry-card glass-card" variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }}>
                <div className="industry-icon">{['👔', '👗', '👤', '🏥', '🏨', '🩺', '🎓', '🏫', '🏛️', '🏗️', '☀️', '🎙️', '🍽️', '🏨', '🏠', '🏗️', '💻', '⚙️', '🏭', '🛍️', '🚀', '🤝', '🌾', '💰', '💄', '💍', '🚗', '🪑', '📐', '💪', '🛒', '💼'][i]}</div>
                <h4>{ind}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PROCESS */}
      <AnimatedSection className="section alt-bg" id="process">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Our Process</div>
            <h2>Development Process</h2>
            <p>A systematic approach to delivering exceptional results.</p>
          </motion.div>
          <motion.div className="process-timeline" variants={stagger}>
            {processSteps.map((step, i) => (
              <motion.div key={i} className="process-step" variants={fadeInUp}>
                <div className="process-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < processSteps.length - 1 && <span className="process-arrow">→</span>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PORTFOLIO */}
      <AnimatedSection className="section" id="portfolio">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Portfolio</div>
            <h2>Our Work Speaks</h2>
            <p>Explore our collection of branding, design, and digital projects.</p>
          </motion.div>
          <motion.div className="portfolio-grid" variants={stagger}>
            {portfolioItems.map((item, i) => (
              <motion.div key={i} className={`portfolio-card ${item.grad}`} variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <div className="portfolio-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* eBOOKS */}
      <AnimatedSection className="section alt-bg" id="ebooks">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Brand Strategy eBooks</div>
            <h2>Knowledge That Builds Powerful Brands</h2>
            <p>We have successfully created 20+ Brand Strategy eBooks for businesses across multiple industries.</p>
          </motion.div>
          <div className="ebooks-layout">
            <motion.div variants={stagger}>
              <motion.div className="ebooks-topics" variants={stagger}>
                {ebookTopics.map((t, i) => (
                  <motion.div key={i} className="ebook-topic glass-card" variants={fadeInUp}>
                    <span className="ebook-icon">📖</span> {t}
                  </motion.div>
                ))}
              </motion.div>
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(46,204,113,0.08)', borderRadius: '12px', border: '1px solid rgba(46,204,113,0.15)' }}>
                <p style={{ fontSize: '0.85rem', color: '#27ae60', fontWeight: 600, textAlign: 'center' }}>Every Brand Strategy eBook is prepared based on the client's business, target audience, goals and branding requirements.</p>
              </div>
            </motion.div>
            <motion.div className="ebook-form-wrapper glass-card" variants={fadeInUp}>
              {ebookSubmitted ? (
                <div className="success-msg">
                  <span>✅</span>
                  <h3>Request Received!</h3>
                  <p>Your Brand Strategy eBook will be delivered within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleEbookSubmit}>
                  <h3>Request Your Brand Strategy eBook</h3>
                  <p className="form-subtitle">Get a custom eBook tailored to your business needs.</p>
                  <div className="form-row">
                    <div className="form-group"><label>Full Name *</label><input type="text" required value={ebookForm.name} onChange={e => setEbookForm({...ebookForm, name: e.target.value})} placeholder="Your name" /></div>
                    <div className="form-group"><label>Business Name</label><input type="text" value={ebookForm.business} onChange={e => setEbookForm({...ebookForm, business: e.target.value})} placeholder="Business name" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Email *</label><input type="email" required value={ebookForm.email} onChange={e => setEbookForm({...ebookForm, email: e.target.value})} placeholder="Email" /></div>
                    <div className="form-group"><label>Phone Number *</label><input type="tel" required value={ebookForm.phone} onChange={e => setEbookForm({...ebookForm, phone: e.target.value})} placeholder="Phone" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Industry</label><input type="text" value={ebookForm.industry} onChange={e => setEbookForm({...ebookForm, industry: e.target.value})} placeholder="Your industry" /></div>
                    <div className="form-group"><label>Business Goals</label><input type="text" value={ebookForm.goals} onChange={e => setEbookForm({...ebookForm, goals: e.target.value})} placeholder="e.g., Brand Awareness" /></div>
                  </div>
                  <div className="form-group"><label>Additional Requirements</label><textarea rows={3} value={ebookForm.notes} onChange={e => setEbookForm({...ebookForm, notes: e.target.value})} placeholder="Any specific requirements..."></textarea></div>
                  <button type="submit" className="btn btn-primary-full">Request My Brand Strategy eBook</button>
                  <div style={{ textAlign: 'center', marginTop: '12px' }}>
                    <span className="delivery-badge">⚡ Delivery Time: Within 48 Hours</span>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* SWANIX CONNECTS */}
      <AnimatedSection className="section" id="connects">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Swanix Connects</div>
            <h2>Connecting Students with Opportunities</h2>
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
            <Link to="/partner" className="btn btn-sky">Explore Opportunities</Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PARTNER */}
      <AnimatedSection className="section alt-bg" id="partner">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Partner With Swanix</div>
            <h2>Grow Together</h2>
            <p>We partner with businesses, colleges, and organizations for mutual growth.</p>
          </motion.div>
          <motion.div className="partner-grid" variants={stagger}>
            {[
              { icon: '🏢', title: 'Business Partnership', desc: 'Transform your brand with our strategic branding and digital solutions.', grad: 'grad-purple-pink' },
              { icon: '🏫', title: 'College Partnership', desc: 'Connect your students with workshops, internships, and career programs.', grad: 'grad-sky-purple' },
              { icon: '📢', title: 'Post an Opportunity', desc: 'Share internships, jobs, and programs with thousands of students.', grad: 'grad-pink-orange' },
            ].map((card, i) => (
              <motion.div key={i} className={`partner-card ${card.grad}`} variants={scaleIn} whileHover={{ scale: 1.03, y: -8 }}>
                <div className="partner-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link to="/partner" className="btn btn-sm">Get Started →</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* BLOGS */}
      <AnimatedSection className="section" id="blogs">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">Blogs</div>
            <h2>Latest Branding Articles</h2>
            <p>Stay updated with marketing tips, AI updates, student resources, and business growth strategies.</p>
          </motion.div>
          <motion.div className="blogs-grid" variants={stagger}>
            {blogs.map((blog, i) => (
              <motion.div key={i} className="blog-card glass-card" variants={scaleIn}>
                <div className={`blog-img ${blog.grad}`}><span>{blog.icon}</span></div>
                <div className="blog-content">
                  <span className="blog-tag">{blog.tag}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                  <span className="blog-date">{blog.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="section alt-bg" id="faq">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <div className="badge">FAQ</div>
            <h2>Frequently Asked Questions</h2>
          </motion.div>
          <motion.div className="faq-list" variants={stagger}>
            {faqs.map((faq, i) => (
              <motion.div key={i} className={`faq-item glass-card ${openFaq === i ? 'open' : ''}`} variants={fadeInUp} onClick={() => toggleFaq(i)}>
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="arrow">▾</span>
                </div>
                <div className="faq-answer">{faq.a}</div>
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
              { icon: '📞', label: 'Phone', value: '+91 9502961708', link: 'tel:+919502961708', action: 'Call Now', grad: 'grad-purple-pink' },
              { icon: '📧', label: 'Email', value: 'swanixbranddevelopment@gmail.com', link: 'mailto:swanixbranddevelopment@gmail.com', action: 'Get Free Quote', grad: 'grad-sky-purple' },
              { icon: '📍', label: 'Location', value: 'Tirupati, Andhra Pradesh', link: 'https://wa.me/919502961708', action: 'WhatsApp Us', grad: 'grad-pink-orange' },
            ].map((c, i) => (
              <motion.div key={i} className={`contact-card ${c.grad}`} variants={scaleIn}>
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
