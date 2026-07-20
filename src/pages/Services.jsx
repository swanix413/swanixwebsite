const Services = () => {
  const services = [
    { icon: '🎯', title: 'Brand Development', items: ['Brand Strategy', 'Brand Identity', 'Brand Positioning', 'Brand Guidelines'] },
    { icon: '✨', title: 'Logo Design', items: ['Professional Logo Design', 'Visual Identity', 'Brand Assets'] },
    { icon: '📱', title: 'Social Media Branding', items: ['Instagram Branding', 'Facebook Branding', 'LinkedIn Branding', 'Monthly Creative Designs'] },
    { icon: '💻', title: 'Website Design', items: ['Business Websites', 'Portfolio Websites', 'Landing Pages', 'Personal Branding Websites'] },
    { icon: '👤', title: 'Personal Branding', items: ['Doctors', 'Entrepreneurs', 'Business Owners', 'Professionals', 'Creators'] },
    { icon: '📊', title: 'Marketing Solutions', items: ['Posters', 'Brochures', 'Company Profiles', 'Pitch Decks', 'Presentations', 'Product Catalogues', 'Marketing Creatives'] },
  ];

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Our Services</div>
          <h2>What We Offer</h2>
          <p>Comprehensive branding solutions tailored to your business needs.</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
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

        <div style={{ marginTop: '80px' }}>
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

        <div style={{ marginTop: '80px' }}>
          <div className="section-header">
            <div className="badge">Industries</div>
            <h2>Industries We Serve</h2>
          </div>
          <div className="industries-grid">
            {['Healthcare', 'Education', 'Restaurants', 'Technology', 'Fashion', 'Beauty', 'Construction', 'Retail', 'Real Estate', 'Professional Services', 'Manufacturing', 'E-Commerce', 'Startups', 'Personal Brands'].map((industry, i) => (
              <div key={i} className="industry-card">
                <div className="icon">{['🏥', '🎓', '🍽️', '💻', '👗', '💄', '🏗️', '🛍️', '🏠', '💼', '🏭', '🛒', '🚀', '👤'][i]}</div>
                <h4>{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
