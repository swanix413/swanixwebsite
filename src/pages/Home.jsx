import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

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
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const heroStats = [
    { icon: '🚀', num: '500+', label: 'Projects Completed' },
    { icon: '😊', num: '200+', label: 'Happy Clients' },
    { icon: '👥', num: '50+', label: 'Experts' },
    { icon: '🕐', num: '24/7', label: 'Support' },
  ];

  const services = [
    { icon: '💻', iconBg: '#FFF3E0', iconColor: '#FF8A00', title: 'Software Development', items: ['Custom Website Development', 'E-Commerce Website Development', 'Mobile App Development', 'Custom Software Development', 'SaaS Product Development', 'ERP & CRM Software', 'API Development', 'UI/UX Design', 'DevOps & Cloud Deployment', 'Testing, QA & Support', 'Maintenance & Support'] },
    { icon: '🤖', iconBg: '#F3E5F5', iconColor: '#9C27B0', title: 'AI & Automation', items: ['AI Chatbots (Web & WhatsApp)', 'Custom AI Agents', 'AI Voice Calling Agents', 'AI Receptionists', 'WhatsApp Automation', 'Email Automation', 'SMS Automation', 'Business Process Automation', 'AI Content Generation', 'AI Analytics & Reporting'] },
    { icon: '📈', iconBg: '#FCE4EC', iconColor: '#E91E63', title: 'Marketing & Communication', items: ['Digital Marketing', 'SEO (Search Engine Optimization)', 'Social Media Marketing', 'Branding & Graphic Design', 'Lead Generation Automation', 'Bulk WhatsApp Messaging', 'Bulk Email Campaigns', 'Bulk SMS Services', 'Email Marketing Automation'] },
    { icon: '☁️', iconBg: '#E3F2FD', iconColor: '#2196F3', title: 'Cloud & Security', items: ['Cloud Infrastructure & Migration', 'AWS, Azure, Google Cloud', 'Cybersecurity Solutions', 'Data Backup & Recovery', 'Business Intelligence', 'Data Analytics'] },
    { icon: '🚀', iconBg: '#FFEBEE', iconColor: '#F44336', title: 'Emerging Technologies', items: ['Blockchain Development', 'IoT Solutions', 'GPS & Tracking Apps', 'Game Development', 'AR/VR Solutions'] },
  ];

  const whyChoose = [
    { icon: '⏱️', title: 'On-Time Delivery', desc: 'We deliver projects on schedule.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Quality solutions within budget.' },
    { icon: '👥', title: 'Expert Team', desc: 'Skilled professionals.' },
    { icon: '🕐', title: '24/7 Support', desc: 'We are always here to help.' },
  ];

  const industries = [
    { name: 'Clothing Brands', icon: '👔', color: '#FF8A00' },
    { name: 'Personal Branding', icon: '⭐', color: '#FF2E8A' },
    { name: 'Doctors', icon: '🩺', color: '#2DB9FF' },
    { name: 'Hospitals', icon: '🏥', color: '#FF4757' },
    { name: 'Clinics', icon: '💊', color: '#2ecc71' },
    { name: 'Schools', icon: '🎒', color: '#9C27B0' },
    { name: 'Colleges', icon: '🎓', color: '#5B2EFF' },
    { name: 'Government Projects', icon: '🏛️', color: '#FF8A00' },
    { name: 'Solar Companies', icon: '☀️', color: '#FFB300' },
    { name: 'Podcasts', icon: '🎙️', color: '#E91E63' },
    { name: 'Restaurants', icon: '🍽️', color: '#FF5722' },
    { name: 'Hotels', icon: '🏨', color: '#2196F3' },
    { name: 'Real Estate', icon: '🏠', color: '#4CAF50' },
    { name: 'Construction', icon: '🏗️', color: '#FF9800' },
    { name: 'IT Companies', icon: '💻', color: '#00BCD4' },
    { name: 'Startups', icon: '🚀', color: '#FF2E8A' },
    { name: 'Manufacturing', icon: '🏭', color: '#607D8B' },
    { name: 'Retail', icon: '🛍️', color: '#E91E63' },
    { name: 'Finance', icon: '💰', color: '#4CAF50' },
    { name: 'NGOs', icon: '🤝', color: '#2DB9FF' },
    { name: 'Agriculture', icon: '🌾', color: '#8BC34A' },
    { name: 'Beauty', icon: '💄', color: '#FF2E8A' },
    { name: 'Jewellery', icon: '💍', color: '#FFB300' },
    { name: 'Automobile', icon: '🚗', color: '#2196F3' },
    { name: 'Interior Designers', icon: '🪑', color: '#795548' },
    { name: 'Architects', icon: '📐', color: '#FF5722' },
    { name: 'Fitness', icon: '💪', color: '#FF4757' },
    { name: 'E-Commerce', icon: '🛒', color: '#FF8A00' },
    { name: 'Professional Services', icon: '💼', color: '#5B2EFF' },
  ];

  const processSteps = [
    { num: '01', title: 'Requirement Discussion', desc: 'Understanding your business goals.' },
    { num: '02', title: 'Planning & Design', desc: 'We create user-friendly designs & plan the architecture.' },
    { num: '03', title: 'Development', desc: 'We build scalable solutions with modern technologies.' },
    { num: '04', title: 'Testing', desc: 'We test everything to ensure quality and performance.' },
    { num: '05', title: 'Launch', desc: 'We deploy your solution smoothly to production.' },
    { num: '06', title: 'Support', desc: 'We provide continuous maintenance and improvements.' },
  ];

  const portfolio = [
    { title: 'Corporate Website', desc: 'Premium corporate website with modern design and seamless UX.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', grad: 'grad-purple-pink' },
    { title: 'AI Chatbot Dashboard', desc: 'WhatsApp AI chatbot for customer support automation.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', grad: 'grad-sky-purple' },
    { title: 'E-Commerce Store', desc: 'Full-featured e-commerce solution with payment integration.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', grad: 'grad-pink-orange' },
    { title: 'Hospital Website', desc: 'Healthcare platform with appointment booking and patient portal.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop', grad: 'grad-orange-sky' },
    { title: 'School Website', desc: 'Education portal with courses, live classes & exams.', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop', grad: 'grad-purple-sky' },
    { title: 'Solar Company Website', desc: 'Renewable energy website with product catalog and lead capture.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop', grad: 'grad-sky-orange' },
    { title: 'Restaurant Website', desc: 'Food ordering platform with menu, reservations & delivery.', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', grad: 'grad-pink-sky' },
    { title: 'Real Estate Website', desc: 'Property listings with advanced search and virtual tours.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop', grad: 'grad-purple-orange' },
  ];

  const faqs = [
    { q: 'How long does it take to build a website?', a: 'Typically 2-6 weeks for standard websites and 4-12 weeks for complex projects like e-commerce or SaaS platforms.' },
    { q: 'Do you provide maintenance and support?', a: 'Yes, we offer ongoing maintenance packages including updates, security patches, bug fixes, and feature enhancements.' },
    { q: 'Do you develop mobile apps?', a: 'Yes, we develop both Android and iOS applications using native and cross-platform technologies.' },
    { q: 'Do you work with international clients?', a: 'Absolutely! We work with clients globally across different time zones and industries.' },
    { q: 'Can you build AI chatbots?', a: 'Yes, we build custom AI chatbots for websites, WhatsApp, and other platforms with advanced conversational capabilities.' },
    { q: 'What is the cost of a project?', a: 'Project costs vary based on complexity and requirements. Contact us for a free consultation and custom quote.' },
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
            <h1>Software, AI & Digital Solutions That <span>Grow Your Business</span></h1>
            <p>From custom websites to AI automation and digital marketing – everything your business needs under one roof.</p>
            <div className="hero-stats">
              {heroStats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <div className="hero-stat-icon">{s.icon}</div>
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="hero-buttons">
              <a href="https://wa.me/919502961708" target="_blank" rel="noopener noreferrer" className="btn btn-orange">Get Free Consultation →</a>
              <a href="tel:+919502961708" className="btn btn-outline">📞 Talk to an Expert</a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="hero-image-wrapper">
              <div className="hero-glow"></div>
              <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" className="hero-svg-illustration">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1B1464', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#5B1D74', stopOpacity: 0.3 }} />
                  </linearGradient>
                  <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#f0f4ff', stopOpacity: 0.9 }} />
                  </linearGradient>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#FF8A00' }} />
                    <stop offset="100%" style={{ stopColor: '#FF6A00' }} />
                  </linearGradient>
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6c3ce0' }} />
                    <stop offset="100%" style={{ stopColor: '#5B1D74' }} />
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="10" stdDeviation="20" floodColor="#1B1464" floodOpacity="0.3"/>
                  </filter>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Floating elements */}
                <circle cx="80" cy="100" r="40" fill="#FF8A00" opacity="0.15">
                  <animate attributeName="cy" values="100;80;100" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="520" cy="400" r="30" fill="#6c3ce0" opacity="0.2">
                  <animate attributeName="cy" values="400;420;400" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="500" cy="120" r="20" fill="#2db9ff" opacity="0.2">
                  <animate attributeName="cy" values="120;100;120" dur="5s" repeatCount="indefinite"/>
                </circle>

                {/* Main laptop/device */}
                <g filter="url(#shadow)">
                  {/* Laptop base */}
                  <rect x="100" y="180" width="400" height="250" rx="16" fill="url(#cardGrad)"/>
                  {/* Screen */}
                  <rect x="115" y="195" width="370" height="180" rx="8" fill="#0f0f23"/>
                  {/* Screen content - Dashboard */}
                  <rect x="130" y="210" width="80" height="150" rx="6" fill="url(#purpleGrad)" opacity="0.9"/>
                  <rect x="220" y="210" width="130" height="70" rx="6" fill="#1a1040"/>
                  <rect x="360" y="210" width="110" height="70" rx="6" fill="#1a1040"/>
                  <rect x="220" y="290" width="250" height="85" rx="6" fill="#1a1040"/>

                  {/* Dashboard elements */}
                  <rect x="140" y="225" width="60" height="8" rx="4" fill="#FF8A00" opacity="0.8"/>
                  <rect x="140" y="240" width="45" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
                  <rect x="140" y="255" width="55" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
                  <rect x="140" y="270" width="50" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
                  <rect x="140" y="285" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>

                  {/* Chart bars */}
                  <rect x="235" y="255" width="15" height="30" rx="3" fill="#6c3ce0"/>
                  <rect x="258" y="245" width="15" height="40" rx="3" fill="#FF8A00"/>
                  <rect x="281" y="250" width="15" height="35" rx="3" fill="#2db9ff"/>
                  <rect x="304" y="240" width="15" height="45" rx="3" fill="#ff2e8a"/>
                  <rect x="327" y="248" width="15" height="37" rx="3" fill="#6c3ce0"/>

                  {/* Stats cards */}
                  <rect x="370" y="225" width="90" height="50" rx="4" fill="rgba(255,255,255,0.1)"/>
                  <text x="415" y="248" fill="#FF8A00" fontSize="16" fontWeight="bold" textAnchor="middle">98%</text>
                  <text x="415" y="265" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">Performance</text>

                  {/* Bottom chart */}
                  <polyline points="235,350 260,335 285,345 310,320 335,330 360,310 385,325 410,305 435,315 460,300"
                    fill="none" stroke="#FF8A00" strokeWidth="2" opacity="0.8"/>
                  <polyline points="235,355 260,345 285,350 310,335 335,340 360,325 385,335 410,320 435,330 460,315"
                    fill="none" stroke="#6c3ce0" strokeWidth="2" opacity="0.6"/>
                </g>

                {/* Floating UI elements */}
                <g filter="url(#glow)">
                  {/* Notification card */}
                  <rect x="420" y="140" width="140" height="60" rx="10" fill="white" opacity="0.95"/>
                  <circle cx="445" cy="170" r="15" fill="#25d366"/>
                  <text x="445" y="175" fill="white" fontSize="14" textAnchor="middle">✓</text>
                  <text x="470" y="165" fill="#0f0f23" fontSize="10" fontWeight="600">WhatsApp</text>
                  <text x="470" y="178" fill="#6b7280" fontSize="8">Connected</text>

                  {/* AI Badge */}
                  <rect x="50" y="200" width="100" height="50" rx="10" fill="white" opacity="0.95"/>
                  <text x="100" y="225" fill="#6c3ce0" fontSize="20" textAnchor="middle">🤖</text>
                  <text x="100" y="242" fill="#0f0f23" fontSize="9" fontWeight="600" textAnchor="middle">AI Powered</text>

                  {/* Growth arrow */}
                  <rect x="50" y="320" width="80" height="60" rx="10" fill="url(#accentGrad)" opacity="0.9"/>
                  <text x="90" y="348" fill="white" fontSize="18" textAnchor="middle">📈</text>
                  <text x="90" y="368" fill="white" fontSize="8" fontWeight="600" textAnchor="middle">+150%</text>
                </g>

                {/* Connection lines */}
                <line x1="190" y1="310" x2="50" y2="350" stroke="#6c3ce0" strokeWidth="1" opacity="0.3" strokeDasharray="4,4"/>
                <line x1="420" y1="200" x2="420" y2="195" stroke="#25d366" strokeWidth="1" opacity="0.4" strokeDasharray="4,4"/>
              </svg>
            </div>
            <div className="connects-float">
              <h4>Swanix Connects</h4>
              <div className="sub">For Students</div>
              <ul>
                <li>Internships</li>
                <li>Training Programs</li>
                <li>Placements</li>
                <li>Skill Development</li>
                <li>Career Guidance</li>
              </ul>
              <Link to="/swanix-connects" className="btn btn-sm">Explore Connects →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <AnimatedSection className="section" id="services">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <h2>Our Core <span>Services</span></h2>
            <p>End-to-end solutions to grow your business in the digital world</p>
          </motion.div>
          <motion.div className="services-grid" variants={stagger}>
            {services.map((cat, i) => (
              <motion.div key={i} className="service-card glass-card" variants={scaleIn}>
                <div className="service-icon-circle" style={{ background: cat.iconBg, color: cat.iconColor }}>{cat.icon}</div>
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
          <motion.div className="why-grid" variants={stagger}>
            {whyChoose.map((w, i) => (
              <motion.div key={i} className="why-card" variants={scaleIn}>
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
            <h2>Industries We Serve</h2>
            <p>Trusted by businesses across diverse sectors</p>
          </motion.div>
          <motion.div className="industries-grid-new" variants={stagger}>
            {industries.map((ind, i) => (
              <motion.div key={i} className="industry-card-new glass-card" variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }}>
                <div className="industry-card-icon" style={{ background: `${ind.color}15`, color: ind.color }}>{ind.icon}</div>
                <h4>{ind.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PROCESS */}
      <AnimatedSection className="section alt-bg" id="process">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <h2>Our Development Process</h2>
            <p>Simple, Transparent & Efficient</p>
          </motion.div>
          <motion.div className="process-timeline" variants={stagger}>
            {processSteps.map((step, i) => (
              <motion.div key={i} className="process-step" variants={fadeInUp}>
                <div className="process-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PORTFOLIO */}
      <AnimatedSection className="section" id="portfolio">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <h2>Our Portfolio / Case Studies</h2>
            <p>Some of our recent successful projects</p>
          </motion.div>
          <motion.div className="portfolio-grid" variants={stagger}>
            {portfolio.map((item, i) => (
              <motion.div key={i} className="portfolio-card glass-card" variants={scaleIn} whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(108,60,224,0.15)' }}>
                <div className="portfolio-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
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
            <h2>Frequently Asked Questions</h2>
          </motion.div>
          <motion.div className="faq-list" variants={stagger}>
            {faqs.map((faq, i) => (
              <motion.div key={i} className={`faq-item glass-card ${openFaq === i ? 'open' : ''}`} variants={fadeInUp} onClick={() => toggleFaq(i)}>
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="arrow">+</span>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's build your next website, mobile app, AI solution, or digital marketing strategy together.</p>
          </motion.div>
          <motion.div className="cta-buttons" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <a href="https://wa.me/919502961708" target="_blank" rel="noopener noreferrer" className="btn btn-orange">Get Free Consultation →</a>
            <a href="https://wa.me/919502961708" target="_blank" rel="noopener noreferrer" className="btn btn-green">💬 WhatsApp Us</a>
            <a href="tel:+919502961708" className="btn btn-outline" style={{ color: 'white' }}>📞 Call Now</a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section-dark" id="contact">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>Contact Us</h2>
            <p>Let's discuss your project requirements</p>
          </motion.div>
          <motion.div className="contact-cards" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {[
              { icon: '📞', label: 'Phone', value: '+91 9502961708', link: 'tel:+919502961708', action: 'Call Now' },
              { icon: '📧', label: 'Email', value: 'swanixbranddevelopment@gmail.com', link: 'mailto:swanixbranddevelopment@gmail.com', action: 'Send Email' },
              { icon: '📍', label: 'Location', value: 'Tirupati, Andhra Pradesh', link: 'https://wa.me/919502961708', action: 'WhatsApp Us' },
            ].map((c, i) => (
              <motion.div key={i} className="contact-card-dark" variants={scaleIn}>
                <div className="contact-icon-dark">{c.icon}</div>
                <div className="contact-label-dark">{c.label}</div>
                <div className="contact-value-dark">{c.value}</div>
                <a href={c.link} className="btn btn-sm" target={c.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.action}</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
