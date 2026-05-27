import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Coin3D from '../components/Coin3D';

export default function Home() {
  return (
    <div className="home-container">
      {/* ========================================================
          LAYER 1: GIANT BACKGROUND BRAND TYPOGRAPHY (BEHIND COIN)
         ======================================================== */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="brand-bg-text font-english"
      >
        AURUM
        <span className="brand-bg-subtitle">GOLD & COIN GALLERY</span>
      </motion.div>

      {/* ========================================================
          LAYER 2: FULL-VIEWPORT 3D COIN CANVAS (INTERACTIVE)
         ======================================================== */}
      <div className="coin-canvas-container">
        <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }}>
          <Suspense fallback={null}>
            <Coin3D />
          </Suspense>
        </Canvas>
      </div>

      {/* ========================================================
          LAYER 3: FLOATING HUD PANELS (ON TOP OF CANVAS)
         ======================================================== */}
      <div className="hud-container">
        
        {/* Left HUD Panel */}
        <motion.div 
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 60, delay: 0.3 }}
          className="hud-panel-left"
        >
          <div className="glass-panel">
            <div className="hud-number">[ 01 ]</div>
            <div className="hud-badge">LUXURY ASSETS</div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient-text" style={{ marginBottom: '1rem' }}>کالکشن‌های بی‌نظیر</h3>
            <p className="text-gray" style={{ marginBottom: '2rem', lineHeight: '1.8', fontSize: '0.875rem' }}>
              کشف مجموعه‌ای بی‌نظیر از سکه‌های تاریخی، شمش‌های معتبر و قطعات طلای کمیاب. هر قطعه با دقت بالا ارزیابی و با شناسنامه رسمی ارائه می‌شود.
            </p>
            <Link to="/collections" style={{ textDecoration: 'none' }}>
              <button className="btn-primary w-full">
                مشاهده گالری
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right HUD Panel */}
        <motion.div 
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 60, delay: 0.5 }}
          className="hud-panel-right"
        >
          <div className="glass-panel">
            <div className="hud-number">[ 02 ]</div>
            <div className="hud-badge">SECURE VENTURE</div>
            <h3 className="text-2xl font-bold mb-4 gold-gradient-text" style={{ marginBottom: '1rem' }}>سرمایه‌گذاری امن</h3>
            <p className="text-gray" style={{ marginBottom: '2rem', lineHeight: '1.8', fontSize: '0.875rem' }}>
              سرمایه‌گذاری اصولی و مطمئن در بازار طلا با تضمین نقدشوندگی و مشاوره اختصاصی. ما به شما کمک می‌کنیم تا ارزش دارایی خود را با اطمینان ارتقا دهید.
            </p>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-outline w-full">
                مشاوره رایگان
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
