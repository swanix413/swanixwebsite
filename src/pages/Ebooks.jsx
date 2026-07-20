import { Link } from 'react-router-dom';

const Ebooks = () => {
  const topics = [
    'Brand Strategy', 'Personal Branding', 'Business Growth',
    'Social Media Branding', 'Digital Marketing', 'Startup Branding',
    'Brand Positioning', 'Customer Experience', 'Business Identity',
    'Marketing Planning', 'Website Branding', 'Brand Communication'
  ];

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="ebooks-content">
          <div className="ebooks-text">
            <div className="badge">Learn. Think. Grow.</div>
            <h2>Brand Strategy <span>eBooks</span></h2>
            <p>Knowledge is one of the strongest foundations of successful branding. Swanix has created 20+ Brand Strategy eBooks designed to help entrepreneurs, startups, professionals, and business owners understand branding, marketing, and business growth.</p>
            <div className="ebooks-topics">
              {topics.map((topic, i) => (
                <div key={i} className="topic-tag">
                  <span className="icon">📖</span>
                  {topic}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '50px',
              textAlign: 'center',
              maxWidth: '350px',
              width: '100%'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📚</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px', color: 'var(--heading)' }}>20+ eBooks</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '25px', lineHeight: 1.6 }}>Comprehensive guides covering every aspect of branding and business growth.</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Access →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebooks;
