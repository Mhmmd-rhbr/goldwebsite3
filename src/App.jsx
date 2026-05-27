import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col" style={{ backgroundColor: '#000000' }}>
        {/* Aggressive Glowing Background Overlay & Grid HUD Lines */}
        <div className="bg-gradient-overlay"></div>
        <div className="bg-grid-lines"></div>
        
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1 relative z-10 flex flex-col">
          <AnimatedRoutes />
        </main>
        
        {/* Minimalist Footer */}
        <footer className="z-10 text-center" style={{ padding: '1.5rem 0', borderTop: '1px solid rgba(255, 223, 0, 0.05)', backgroundColor: '#000000', marginTop: 'auto' }}>
          <p className="font-english text-gold tracking-widest text-xs opacity-60">
            EST. MMXXIV | AURUM GALLERY
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
