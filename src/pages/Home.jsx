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
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const heroStats = [
    { icon: '🚀', num: '500+', label: 'Projects Completed' },
    { icon: '😊', num: '200+', label: 'Happy Clients' },
    { icon: '👥', num: '50+', label: 'Experts' },
    { icon: '🕐', num: '24/7', label: 'Support' },
  ];

  const services = [
    {
      icon: '💻', iconClass: 'icon-orange', title: 'Software Development',
      items: ['Custom Website Development', 'E-Commerce Website Development', 'Mobile App Development', 'Custom Software Development', 'SaaS Product Development', 'ERP & CRM Software', 'API Development', 'UI/UX Design', 'DevOps & Cloud Deployment', 'Testing, QA & Support', 'Maintenance & Support']
    },
    {
      icon: '🤖', iconClass: 'icon-purple', title: 'AI & Automation',
      items: ['AI Chatbots (Web & WhatsApp)', 'Custom AI Agents', 'AI Voice Calling Agents', 'AI Receptionists', 'WhatsApp Automation', 'Email Automation', 'SMS Automation', 'Business Process Automation', 'AI Content Generation', 'AI Analytics & Reporting']
    },
    {
      icon: '📈', iconClass: 'icon-pink', title: 'Marketing & Communication',
      items: ['Digital Marketing', 'SEO (Search Engine Optimization)', 'Social Media Marketing', 'Branding & Graphic Design', 'Lead Generation Automation', 'Bulk WhatsApp Messaging', 'Bulk Email Campaigns', 'Bulk SMS Services', 'Email Marketing Automation']
    },
    {
      icon: '☁️', iconClass: 'icon-sky', title: 'Cloud & Security',
      items: ['Cloud Infrastructure & Migration', 'AWS, Azure, Google Cloud', 'Cybersecurity Solutions', 'Data Backup & Recovery', 'Business Intelligence', 'Data Analytics']
    },
    {
      icon: '🚀', iconClass: 'icon-red', title: 'Emerging Technologies',
      items: ['Blockchain Development', 'IoT Solutions', 'GPS & Tracking Apps', 'Game Development', 'AR/VR Solutions']
    },
  ];

  const whyChoose = [
    { icon: '⏱️', title: 'On-Time Delivery', desc: 'We deliver projects on schedule.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Quality solutions within budget.' },
    { icon: '👥', title: 'Expert Team', desc: 'Skilled professionals.' },
    { icon: '🕐', title: '24/7 Support', desc: 'We are always here to help.' },
  ];

  const industries = ['Healthcare', 'Education', 'Real Estate', 'E-commerce', 'Manufacturing', 'Logistics', 'Finance', 'Restaurants', 'More'];

  const processSteps = [
    { num: '01', title: 'Requirement Discussion', desc: 'Understanding your business goals.' },
    { num: '02', title: 'Planning & Design', desc: 'We create user-friendly designs & plan the architecture.' },
    { num: '03', title: 'Development', desc: 'We build scalable solutions with modern technologies.' },
    { num: '04', title: 'Testing', desc: 'We test everything to ensure quality and performance.' },
    { num: '05', title: 'Launch', desc: 'We deploy your solution smoothly to production.' },
    { num: '06', title: 'Support', desc: 'We provide continuous maintenance and improvements.' },
  ];

  const portfolio = [
    { title: 'E-Commerce Platform', desc: 'Full-featured e-commerce solution with payment integration.', icon: '🛒', grad: 'grad-purple-pink' },
    { title: 'AI Chatbot Solution', desc: 'WhatsApp AI chatbot for customer support automation.', icon: '🤖', grad: 'grad-sky-purple' },
    { title: 'ERP for Manufacturing', desc: 'Complete ERP system to manage production, sales & inventory.', icon: '🏭', grad: 'grad-pink-orange' },
    { title: 'Real Estate Website', desc: 'Modern real estate website with advanced search & property listings.', icon: '🏠', grad: 'grad-orange-sky' },
    { title: 'Education Portal', desc: 'E-learning platform with courses, live classes & exams.', icon: '🎓', grad: 'grad-purple-sky' },
  ];

  const testimonials = [
    { stars: 5, quote: '"Swanix transformed our business with a custom ERP system. The team is highly professional and delivered beyond our expectations."', author: 'Rajesh Kumar', company: 'CEO, TechSolutions' },
    { stars: 5, quote: '"Our AI chatbot reduced customer support workload by over 70%. Excellent work and great support."', author: 'Priya Sharma', company: 'Founder, TrendyMart' },
    { stars: 5, quote: '"Excellent website design, SEO, and digital marketing services. We started getting quality leads within weeks."', author: 'Ahmed Khan', company: 'Director, BuildHome' },
  ];

  const clientLogos = ['TechSolutions', 'TrendyMart', 'BuildHome', 'EduLearn', 'HealthCare+', 'NextGen', 'PrimeLogistics'];

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
              <Link to="/contact" className="btn btn-orange">Get Free Consultation →</Link>
              <Link to="/contact" className="btn btn-outline">📞 Talk to an Expert</Link>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="hero-image-wrapper">
              <div className="hero-glow"></div>
              <img src="/images/hero/team.png" alt="Swanix Team" />
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
                <div className={`service-icon-circle ${cat.iconClass}`}>{cat.icon}</div>
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
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="industries-scroll">
              {industries.map((ind, i) => (
                <div key={i} className={`industry-pill ${i === 0 ? 'active' : ''}`}>
                  <span>{['🏥', '🎓', '🏠', '🛒', '🏭', '🚛', '💰', '🍽️', '➕'][i]}</span> {ind}
                </div>
              ))}
            </div>
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
              <motion.div key={i} className="portfolio-card glass-card" variants={scaleIn}>
                <div className={`portfolio-img ${item.grad}`}>{item.icon}</div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="portfolio-link">View Case Study →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* TESTIMONIALS */}
      <AnimatedSection className="section alt-bg" id="testimonials">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <h2>What Our Clients Say</h2>
          </motion.div>
          <motion.div className="testimonials-grid" variants={stagger}>
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial-card glass-card" variants={scaleIn}>
                <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
                <blockquote>{t.quote}</blockquote>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-company">{t.company}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="client-logos" variants={stagger}>
            {clientLogos.map((logo, i) => (
              <motion.div key={i} className="client-logo" variants={fadeInUp}>{logo}</motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="section" id="faq">
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
            <Link to="/contact" className="btn btn-orange">Get Free Consultation →</Link>
            <a href="https://wa.me/919502961708" target="_blank" rel="noopener noreferrer" className="btn btn-green">💬 WhatsApp Us</a>
            <a href="tel:+919502961708" className="btn btn-outline" style={{ color: 'white' }}>📞 Call Now</a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <AnimatedSection className="section" id="contact">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <h2>Contact Us</h2>
            <p>Let's discuss your project requirements</p>
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
