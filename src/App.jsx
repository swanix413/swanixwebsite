import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
        <Route path="/services" element={<Services />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/swanix-connects" element={<SwanixConnects />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-register" element={<SwanixConnects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
