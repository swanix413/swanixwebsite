import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import SwanixConnects from './pages/SwanixConnects';
import BusinessSolutions from './pages/BusinessSolutions';
import './App.css';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <Router>
      <Navbar onQuoteClick={() => setQuoteOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<BusinessSolutions />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/swanix-connects" element={<SwanixConnects />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </Router>
  );
}

export default App;
