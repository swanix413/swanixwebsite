import { motion } from 'framer-motion';

const Careers = () => {
  return (
    <section className="careers-page">
      <div className="container">
        <motion.div
          className="careers-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="careers-illustration">
            <div className="careers-icon-large">💼</div>
            <div className="careers-circles">
              <div className="careers-circle c1"></div>
              <div className="careers-circle c2"></div>
              <div className="careers-circle c3"></div>
            </div>
          </div>
          <h2>Careers at Swanix</h2>
          <h1 className="careers-heading">Currently No Openings</h1>
          <p>We're always looking for talented people. Check back soon for new opportunities, or send your resume to <a href="mailto:swanixbranddevelopment@gmail.com">swanixbranddevelopment@gmail.com</a></p>
          <div className="careers-notify">
            <div className="careers-notify-icon">🔔</div>
            <div>
              <h4>Stay Updated</h4>
              <p>Follow us on social media to know when new positions open up.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
