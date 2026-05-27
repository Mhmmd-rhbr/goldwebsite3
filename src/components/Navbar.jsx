import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'خانه', path: '/' },
    { name: 'کالکشن‌ها', path: '/collections' },
    { name: 'خدمات', path: '/services' },
    { name: 'درباره ما', path: '/about' },
    { name: 'تماس با ما', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      className="navbar"
    >
      {/* Brand & Links */}
      <div className="flex items-center gap-12" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Neon Golden Accent Logo Dot */}
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--gold-primary)',
            borderRadius: '50%',
            boxShadow: '0 0 10px var(--gold-primary)'
          }}></div>
          <h2 className="font-english text-2xl text-white" style={{ letterSpacing: '0.2em', margin: 0, fontWeight: 800 }}>
            AURUM
          </h2>
        </Link>
        
        {/* Navigation Links */}
        <div className="nav-links">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div>
        <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
          ورود / ثبت‌نام
        </button>
      </div>
    </motion.nav>
  );
}
