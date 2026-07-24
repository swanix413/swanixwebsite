import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

const AnimatedSection = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section ref={ref} id={id} className={className} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
      {children}
    </motion.section>
  );
};

const serviceCategories = [
  {
    id: 'software',
    icon: '💻',
    title: 'Software Development',
    tagline: 'Custom-built solutions tailored to your business needs',
    color: '#FF8A00',
    colorLight: '#FFF3E0',
    illustration: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    services: [
      { name: 'Custom Website Development', desc: 'Tailored websites built from scratch to match your brand and business goals.' },
      { name: 'E-Commerce Website Development', desc: 'Full-featured online stores with payment gateways, inventory management, and analytics.' },
      { name: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for iOS and Android.' },
      { name: 'Custom Software Development', desc: 'Enterprise-grade software solutions designed for your specific workflows.' },
      { name: 'SaaS Product Development', desc: 'End-to-end SaaS product development from MVP to production.' },
      { name: 'ERP & CRM Software', desc: 'Comprehensive business management systems to streamline operations.' },
      { name: 'API Development & Integration', desc: 'RESTful APIs and third-party integrations to connect your systems.' },
      { name: 'UI/UX Design', desc: 'User-centered design that delights users and drives engagement.' },
      { name: 'DevOps & Cloud Deployment', desc: 'CI/CD pipelines, containerization, and cloud infrastructure setup.' },
      { name: 'Testing, QA & Support', desc: 'Rigorous testing and ongoing maintenance to ensure peak performance.' },
    ]
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI & Automation',
    tagline: 'Intelligent solutions that work 24/7 to grow your business',
    color: '#9C27B0',
    colorLight: '#F3E5F5',
    illustration: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    services: [
      { name: 'AI Chatbots (Web & WhatsApp)', desc: 'Smart chatbots that handle customer queries, bookings, and support.' },
      { name: 'Custom AI Agents', desc: 'Autonomous AI agents that perform complex business tasks.' },
      { name: 'AI Voice Calling Agents', desc: 'AI-powered voice agents for sales, support, and lead qualification.' },
      { name: 'AI Receptionists', desc: 'Virtual receptionists that manage calls and appointments 24/7.' },
      { name: 'WhatsApp Automation', desc: 'Automated WhatsApp workflows for marketing, support, and transactions.' },
      { name: 'Email Automation', desc: 'Smart email sequences triggered by user behavior and events.' },
      { name: 'SMS Automation', desc: 'Automated SMS campaigns and transactional messaging.' },
      { name: 'Business Process Automation', desc: 'End-to-end automation of repetitive business workflows.' },
      { name: 'AI Content Generation', desc: 'AI-powered content creation for blogs, social media, and marketing.' },
      { name: 'AI Analytics & Reporting', desc: 'Intelligent analytics dashboards with predictive insights.' },
    ]
  },
  {
    id: 'marketing',
    icon: '📈',
    title: 'Marketing & Communication',
    tagline: 'Amplify your brand reach and generate quality leads',
    color: '#E91E63',
    colorLight: '#FCE4EC',
    illustration: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    services: [
      { name: 'Digital Marketing', desc: 'Comprehensive digital marketing strategies to grow your online presence.' },
      { name: 'SEO (Search Engine Optimization)', desc: 'Rank higher on Google with proven SEO techniques.' },
      { name: 'Social Media Marketing', desc: 'Engaging social media campaigns across all major platforms.' },
      { name: 'Branding & Graphic Design', desc: 'Brand identity, logos, and visual assets that make an impression.' },
      { name: 'Lead Generation Automation', desc: 'Automated systems to capture and nurture quality leads.' },
      { name: 'Bulk WhatsApp Messaging', desc: 'Reach thousands of customers with targeted WhatsApp campaigns.' },
      { name: 'Bulk Email Campaigns', desc: 'Professional email marketing with high deliverability rates.' },
      { name: 'Bulk SMS Services', desc: 'Mass SMS campaigns for promotions, alerts, and notifications.' },
      { name: 'Email Marketing Automation', desc: 'Automated email funnels that convert prospects into customers.' },
    ]
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud & Security',
    tagline: 'Secure, scalable infrastructure for your digital assets',
    color: '#2196F3',
    colorLight: '#E3F2FD',
    illustration: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    services: [
      { name: 'Cloud Infrastructure & Migration', desc: 'Seamless migration to cloud platforms with zero downtime.' },
      { name: 'AWS, Azure, Google Cloud', desc: 'Multi-cloud solutions leveraging the best of each platform.' },
      { name: 'Cybersecurity Solutions', desc: 'Protect your business with enterprise-grade security measures.' },
      { name: 'Data Backup & Recovery', desc: 'Reliable backup solutions with fast disaster recovery.' },
      { name: 'Business Intelligence', desc: 'Transform raw data into actionable business insights.' },
      { name: 'Data Analytics', desc: 'Advanced analytics and visualization to drive data-informed decisions.' },
    ]
  },
  {
    id: 'emerging',
    icon: '🚀',
    title: 'Emerging Technologies',
    tagline: 'Future-ready solutions powered by cutting-edge technology',
    color: '#F44336',
    colorLight: '#FFEBEE',
    illustration: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    services: [
      { name: 'Blockchain Development', desc: 'Decentralized applications, smart contracts, and token solutions.' },
      { name: 'IoT Solutions', desc: 'Connected device ecosystems for smart businesses.' },
      { name: 'GPS & Tracking Apps', desc: 'Real-time location tracking and fleet management solutions.' },
      { name: 'Game Development', desc: 'Engaging game experiences for mobile and web platforms.' },
      { name: 'AR/VR Solutions', desc: 'Immersive augmented and virtual reality applications.' },
    ]
  },
];

const BusinessSolutions = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const cat = location.hash.replace('#', '');
      if (serviceCategories.find(c => c.id === cat)) {
        setActiveCategory(cat);
        setTimeout(() => {
          document.getElementById(`detail-${cat}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="business-solutions-page">
      {/* Hero */}
      <section className="bs-hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <motion.div className="bs-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="hero-badge">🚀 Business Solutions</div>
            <h1>End-to-End Digital Solutions for <span>Every Business</span></h1>
            <p>From software development to AI automation and digital marketing – we deliver comprehensive solutions that drive growth across every dimension of your business.</p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <AnimatedSection className="section" id="categories">
        <div className="container">
          <motion.div className="section-header" variants={fadeInUp}>
            <h2>Our Service <span>Categories</span></h2>
            <p>Click on any category to explore all services</p>
          </motion.div>
          <motion.div className="bs-categories-grid" variants={stagger}>
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                className={`bs-category-card glass-card ${activeCategory === cat.id ? 'active' : ''}`}
                variants={scaleIn}
                whileHover={{ y: -8, boxShadow: `0 20px 40px ${cat.color}20` }}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              >
                <div className="bs-cat-icon" style={{ background: cat.colorLight, color: cat.color }}>{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.tagline}</p>
                <span className="bs-cat-count">{cat.services.length} Services</span>
                <span className="bs-cat-arrow" style={{ color: cat.color }}>{activeCategory === cat.id ? '−' : '+'}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Expanded Category Details */}
      {serviceCategories.map((cat) => (
        activeCategory === cat.id && (
          <AnimatedSection key={cat.id} className="section bs-detail-section" id={`detail-${cat.id}`}>
            <div className="container">
              <motion.div className="bs-detail-header" variants={fadeInUp}>
                <div className="bs-detail-icon" style={{ background: cat.colorLight, color: cat.color }}>{cat.icon}</div>
                <div>
                  <h2>{cat.title}</h2>
                  <p>{cat.tagline}</p>
                </div>
              </motion.div>
              <div className="bs-detail-grid">
                <motion.div className="bs-detail-image" variants={fadeInUp}>
                  <img src={cat.illustration} alt={cat.title} />
                </motion.div>
                <motion.div className="bs-detail-services" variants={stagger}>
                  {cat.services.map((service, j) => (
                    <motion.div key={j} className="bs-service-item glass-card" variants={scaleIn} whileHover={{ x: 5, borderColor: cat.color }}>
                      <div className="bs-service-num" style={{ color: cat.color }}>{String(j + 1).padStart(2, '0')}</div>
                      <div>
                        <h4>{service.name}</h4>
                        <p>{service.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <motion.div className="bs-cta" variants={fadeInUp}>
                <a href="https://wa.me/919502961708" target="_blank" rel="noopener noreferrer" className="btn btn-orange">Get Free Consultation →</a>
                <Link to="/" className="btn btn-outline" style={{ color: 'var(--heading)', borderColor: 'var(--border)' }}>← Back to Home</Link>
              </motion.div>
            </div>
          </AnimatedSection>
        )
      ))}

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss your requirements and find the perfect solution.</p>
          </motion.div>
          <motion.div className="cta-buttons" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <a href="https://wa.me/919502961708" target="_blank" rel="noopener noreferrer" className="btn btn-orange">Get Free Consultation →</a>
            <a href="tel:+919502961708" className="btn btn-outline" style={{ color: 'white' }}>📞 Call Now</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutions;
