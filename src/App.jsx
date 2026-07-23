import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Ebooks from './pages/Ebooks';
import SwanixConnects from './pages/SwanixConnects';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Home />} />
        <Route path="/industries" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/ebooks" element={<Home />} />
        <Route path="/swanix-connects" element={<Home />} />
        <Route path="/partner" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/student-register" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
