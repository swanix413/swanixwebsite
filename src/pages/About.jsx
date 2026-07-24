import { motion } from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const About = () => {
  const team = [
    {
      name: 'Mahamkali Swathi',
      role: 'Founder & Brand Strategist',
      initial: 'S',
      desc: 'Mahamkali Swathi is the Founder of Swanix, leading the company with a vision to build impactful brands and help businesses achieve sustainable growth. She specializes in branding, digital strategy, and business development, ensuring every project delivers creativity, quality, and measurable results.',
      color: 'linear-gradient(135deg, #5B2EFF, #FF2E8A)'
    },
    {
      name: 'Gaali Uday Kiran',
      role: 'Finance & Operations',
      initial: 'U',
      desc: 'Gaali Uday Kiran oversees the financial planning and operational management of Swanix. He manages budgeting, financial coordination, and internal business processes to ensure smooth operations. His strategic approach and commitment to efficiency contributes to the company\'s stability and long-term growth.',
      color: 'linear-gradient(135deg, #FF8A00, #FF2E8A)'
    },
    {
      name: 'Sankoji Kaveri',
      role: 'Client Relationship Manager',
      initial: 'K',
      desc: 'Sankoji Kaveri manages client relationships and coordinates projects with professionalism and care. She focuses on understanding client requirements, maintaining clear communication, and ensuring every project is delivered smoothly. Her dedication to client satisfaction helps build strong and lasting business relationships.',
      color: 'linear-gradient(135deg, #2DB9FF, #5B2EFF)'
    },
  ];

  return (
    <section className="about-page">
      <div className="container">
        <motion.div className="about-hero" variants={fadeInUp} initial="hidden" animate="visible">
          <div className="badge">About Swanix</div>
          <h1>About Swanix Brand Development</h1>
          <p className="about-lead">Swanix Brand Development Studio is a creative branding and digital growth company dedicated to helping businesses establish a powerful market presence.</p>
        </motion.div>

        <motion.div className="about-content" variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <div className="about-text-block">
            <p>We believe that every brand has a unique story that deserves to be communicated with clarity and impact.</p>
            <p>Our services combine creativity, strategy, and technology to build meaningful brand experiences. From brand identity and website development to digital marketing and online growth, we provide complete business solutions under one roof.</p>
            <p>We work closely with startups, entrepreneurs, and growing businesses to understand their goals and create customized strategies.</p>
            <p>Our approach focuses on innovation, quality, and long-term success rather than short-term results.</p>
            <p>Every project is handled with professionalism, transparency, and attention to detail.</p>
            <p>At Swanix, we don't just build brands—we build trust, credibility, and lasting customer relationships.</p>
            <p>Our mission is to empower businesses with modern branding solutions that inspire confidence and drive sustainable growth.</p>
            <p>Together, we transform ideas into impactful brands that stand out in today's competitive market.</p>
          </div>
        </motion.div>

        <motion.div className="about-values" variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <div className="about-value-card glass-card">
            <div className="about-value-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower businesses with modern branding solutions that inspire confidence and drive sustainable growth.</p>
          </div>
          <div className="about-value-card glass-card">
            <div className="about-value-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>To become one of India's most trusted brand development companies while creating opportunities that empower future professionals.</p>
          </div>
          <div className="about-value-card glass-card">
            <div className="about-value-icon">💡</div>
            <h3>Our Approach</h3>
            <p>Innovation, quality, and long-term success rather than short-term results. Every project handled with professionalism.</p>
          </div>
        </motion.div>

        <motion.div className="team-section" variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
          <div className="section-header">
            <h2>Our <span>Team</span></h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div key={i} className="team-card glass-card" whileHover={{ y: -8 }}>
                <div className="team-avatar" style={{ background: member.color }}>
                  <span>{member.initial}</span>
                </div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
