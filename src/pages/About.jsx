import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="page-wrapper"
    >
      <div className="page-content container">
        
        {/* Main Columns */}
        <div 
          className="flex flex-col lg-flex-row gap-12 items-center" 
          style={{ minHeight: '70vh', width: '100%' }}
        >
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 55 }}
            className="flex-1"
          >
            <div className="hud-badge" style={{ width: 'fit-content', marginBottom: '1rem' }}>
              ABOUT THE HERITAGE
            </div>
            
            <h1 className="text-5xl font-bold mb-6 text-white" style={{ marginTop: '1rem' }}>
              میراث بزرگ <span className="text-gold">AURUM</span>
            </h1>
            
            <p className="text-gray text-lg leading-loose mb-6" style={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
              گالری طلا و مسکوکات آروم با تکیه بر بیش از دو دهه تجربه درخشان در قلب تپنده بازار طلای تهران، فراتر از یک نام، به عنوان سمبل اصالت، تخصص بی‌رقیب و اعتماد همه‌جانبه شناخته می‌شود. ماموریت همیشگی ما، فراهم آوردن کمیاب‌ترین آثار هنری، مسکوکات ارزشمند تاریخی و شمش‌های شناسنامه‌دار طلا برای سرمایه‌گذاران دوراندیش و کلکسیونرهای مشکل‌پسند بوده است.
            </p>
            
            <p className="text-gray text-lg leading-loose mb-8" style={{ textAlign: 'justify', marginBottom: '2.5rem' }}>
              تیم کارشناسی مستقر در گالری آروم با بهره‌گیری از دقیق‌ترین تکنولوژی‌های روز دنیا و دستگاه‌های سنجش عیار دیجیتالی، اصالت، کیفیت فیزیکی و عیار استاندارد تمامی قطعات عرضه شده را به طور صد درصد تضمین می‌کند. در آروم، خرید طلا صرفاً یک معامله اقتصادی نیست، بلکه انتخابی هنری و پایه‌گذاری سرمایه‌ای با ارزش ابدی است.
            </p>
            
            {/* Minimal High-End Experience HUD Panels */}
            <div className="flex gap-4" style={{ width: '100%' }}>
              
              <div className="glass-panel text-center flex-1" style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="text-4xl text-gold mb-2 font-english" style={{ marginBottom: '0.25rem' }}>20+</h3>
                <p className="text-sm text-gray">سال تجربه تخصصی</p>
              </div>
              
              <div className="glass-panel text-center flex-1" style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="text-4xl text-gold mb-2 font-english" style={{ marginBottom: '0.25rem' }}>5K+</h3>
                <p className="text-sm text-gray">مشتری وفادار</p>
              </div>
              
              <div className="glass-panel text-center flex-1" style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="text-4xl text-gold mb-2 font-english" style={{ marginBottom: '0.25rem' }}>100%</h3>
                <p className="text-sm text-gray">ضمانت رسمی اصالت</p>
              </div>
              
            </div>
          </motion.div>

          {/* Right Visual Column (Luxury Abstract Concept) */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div 
              className="w-full relative overflow-hidden" 
              style={{ 
                height: '500px',
                border: '1px solid rgba(255, 223, 0, 0.15)',
                backgroundColor: '#050505',
                boxShadow: '0 0 40px rgba(255, 223, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              {/* Corner indicators */}
              <div style={{ position: 'absolute', top: '15px', right: '15px', color: '#48484a', fontSize: '0.65rem', fontFamily: 'Playfair Display' }}>[ SECURE INTERIOR ]</div>
              <div style={{ position: 'absolute', bottom: '15px', left: '15px', color: '#48484a', fontSize: '0.65rem', fontFamily: 'Playfair Display' }}>EST. 2004</div>
              
              {/* Interactive pulsing luxury design accent */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  width: '240px',
                  height: '240px',
                  border: '1px solid rgba(255, 223, 0, 0.3)',
                  transform: 'rotate(45deg)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{
                  width: '180px',
                  height: '180px',
                  border: '1px solid rgba(255, 223, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <h2 className="text-gold font-english text-3xl tracking-widest opacity-60">AURUM</h2>
                </div>
              </motion.div>
              
              <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <span className="text-gold font-english text-sm tracking-widest" style={{ display: 'block', marginBottom: '0.25rem' }}>
                  CENTRAL VAULT DIVISION
                </span>
                <span style={{ fontSize: '0.75rem', color: '#8e8e93' }}>
                  کارشناسی، ارزش‌گذاری و معامله امن فیزیکی طلا
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
