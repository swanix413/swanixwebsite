import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Welcome to Swanix Brand Development</div>
          <h1>
            Building Brands.{' '}
            <span className="gradient">Creating Opportunities.</span>
          </h1>
          <p>
            At Swanix Brand Development, we help businesses create powerful brands that inspire trust, attract customers, and support long-term growth. Alongside our branding services, Swanix Connects is dedicated to helping students discover internships, workshops, certifications, scholarships, hackathons, career guidance, and freshers' opportunities.
          </p>
          <div className="hero-buttons">
            <Link to="/partner" className="btn btn-primary">Build Your Brand →</Link>
            <Link to="/swanix-connects" className="btn btn-secondary">Swanix Connects</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">What We Do</div>
            <h2>Our Core Services</h2>
            <p>We build complete brand experiences through strategy, creativity, and digital solutions.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: '🎯', title: 'Brand Development', items: ['Brand Strategy', 'Brand Identity', 'Brand Positioning', 'Brand Guidelines'] },
              { icon: '✨', title: 'Logo Design', items: ['Professional Logo Design', 'Visual Identity', 'Brand Assets'] },
              { icon: '📱', title: 'Social Media Branding', items: ['Instagram Branding', 'Facebook Branding', 'LinkedIn Branding', 'Monthly Creative Designs'] },
              { icon: '💻', title: 'Website Design', items: ['Business Websites', 'Portfolio Websites', 'Landing Pages', 'Personal Branding Websites'] },
              { icon: '👤', title: 'Personal Branding', items: ['Doctors', 'Entrepreneurs', 'Business Owners', 'Professionals', 'Creators'] },
              { icon: '📊', title: 'Marketing Solutions', items: ['Posters', 'Brochures', 'Company Profiles', 'Pitch Decks', 'Presentations'] },
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Process</div>
            <h2>How We Work</h2>
            <p>A systematic approach to building brands that stand out.</p>
          </div>
          <div className="process-timeline">
            {['Discover', 'Research', 'Strategy', 'Design', 'Launch', 'Grow'].map((step, i) => (
              <div key={i} className="process-step">
                <div className="number">{i + 1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Why Choose Us</div>
            <h2>Why Choose Swanix</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '🎯', title: 'Strategic Branding', desc: 'Data-driven brand strategies that deliver results.' },
              { icon: '💡', title: 'Creative Thinking', desc: 'Fresh perspectives that make your brand memorable.' },
              { icon: '🎨', title: 'Professional Design', desc: 'Pixel-perfect designs that reflect your vision.' },
              { icon: '📈', title: 'Business-Focused', desc: 'Every solution designed to grow your business.' },
              { icon: '🎓', title: 'Student-Centered', desc: 'Creating opportunities for the next generation.' },
              { icon: '🤝', title: 'Long-Term Support', desc: 'We grow with you, not just for a project.' },
              { icon: '📚', title: 'Practical Resources', desc: 'eBooks and guides for branding success.' },
              { icon: '⚡', title: 'Modern Solutions', desc: 'Latest tools and digital strategies.' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', color: 'var(--heading)' }}>
            Ready to Build Your Brand?
          </h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '500px', margin: '0 auto 30px', lineHeight: 1.7 }}>
            Let's create something extraordinary together. Schedule a consultation with our team.
          </p>
          <div className="hero-buttons">
            <Link to="/partner" className="btn btn-primary">Build Your Brand →</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
