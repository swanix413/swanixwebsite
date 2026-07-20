const About = () => {
  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>We Don't Just Design. <span>We Build Brands.</span></h2>
            <p>Swanix Brand Development is a branding company based in Tirupati, Andhra Pradesh. We specialize in helping startups, entrepreneurs, professionals, educational institutions, healthcare organizations, and businesses create strong and memorable brands.</p>
            <p>Our services go beyond design. We build complete brand experiences through strategy, creativity, and digital solutions that help businesses stand out in competitive markets.</p>
            <p>Through Swanix Connects, we also support students by connecting them with valuable career opportunities, industry programs, and professional learning resources.</p>
            <p>Our mission is to build brands that inspire confidence while creating opportunities that empower future professionals.</p>
          </div>
          <div className="about-image">
            <div className="icon-wrapper">🏗️</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '80px' }}>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>To build meaningful brands that create lasting business value while connecting students with opportunities that help shape successful careers.</p>
          </div>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>To become one of India's most trusted brand development companies while building a platform that connects businesses, colleges, and students for mutual growth.</p>
          </div>
        </div>

        <div style={{ marginTop: '80px' }}>
          <div className="section-header">
            <div className="badge">Our Values</div>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {['Creativity', 'Innovation', 'Trust', 'Transparency', 'Professionalism', 'Long-Term Relationships', 'Continuous Learning'].map((value, i) => (
              <div key={i} className="value-card">
                <div className="icon">{['🎨', '💡', '🤝', '🔍', '👔', '🤝', '📖'][i]}</div>
                <h3>{value}</h3>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '80px' }}>
          <div className="section-header">
            <div className="badge">Our Team</div>
            <h2>Meet the Founders</h2>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">S</div>
              <h3>Swathi M</h3>
              <div className="role">Founder & Brand Strategist</div>
              <p>Swathi M founded Swanix Brand Development with a vision to help businesses build brands that people remember. She believes branding is not just about logos or colors—it is about creating trust, identity, and meaningful customer experiences. With a passion for creativity and strategic thinking, she focuses on helping businesses grow through purposeful branding while also creating initiatives that support students and young professionals.</p>
              <div className="quote">"A strong brand earns trust. The right opportunity changes lives."</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">K</div>
              <h3>Kaveri Sankoji</h3>
              <div className="role">Co-Founder & Creative Director</div>
              <p>Kaveri Sankoji is the Co-Founder and Creative Director of Swanix Brand Development. She contributes to shaping the creative direction of the company by focusing on thoughtful design, brand consistency, and impactful visual communication. Her creative mindset helps transform ideas into brand experiences that are clear, memorable, and meaningful.</p>
              <div className="quote">"Creativity becomes powerful when it creates meaningful experiences."</div>
            </div>
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

export default About;
