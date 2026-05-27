import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="page-wrapper"
    >
      <div className="page-content container">
        
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="hud-badge mx-auto" style={{ justifyContent: 'center', width: 'fit-content' }}>
            SECURED CONNECTIONS
          </div>
          <h1 className="text-5xl font-bold mb-4 gold-gradient-text" style={{ marginTop: '1rem' }}>ارتباط با گالری</h1>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            برای انجام مشاوره اختصاصی سرمایه‌گذاری، استعلام اصالت مسکوکات و یا هرگونه سوال دیگر با ما در ارتباط باشید.
          </p>
        </div>

        {/* Responsive Flex/Column layout using custom styles */}
        <div className="flex flex-col lg-flex-row gap-12 max-w-5xl mx-auto" style={{ width: '100%' }}>
          
          {/* Form Column */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="flex-1 glass-panel"
            style={{ padding: '3rem' }}
          >
            <div className="hud-badge" style={{ marginBottom: '2rem' }}>
              DIRECT TRANSMISSION
            </div>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-white mb-2 block" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>نام و نام خانوادگی</label>
                <input 
                  type="text" 
                  className="w-full text-white" 
                  style={{ 
                    backgroundColor: 'rgba(10, 10, 10, 0.8)', 
                    border: '1px solid rgba(255, 223, 0, 0.15)', 
                    padding: '0.875rem',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }} 
                />
              </div>
              
              <div>
                <label className="text-white mb-2 block" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>شماره تماس</label>
                <input 
                  type="text" 
                  className="w-full text-white" 
                  style={{ 
                    backgroundColor: 'rgba(10, 10, 10, 0.8)', 
                    border: '1px solid rgba(255, 223, 0, 0.15)', 
                    padding: '0.875rem',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }} 
                />
              </div>
              
              <div>
                <label className="text-white mb-2 block" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>پیام شما</label>
                <textarea 
                  rows="5" 
                  className="w-full text-white" 
                  style={{ 
                    backgroundColor: 'rgba(10, 10, 10, 0.8)', 
                    border: '1px solid rgba(255, 223, 0, 0.15)', 
                    padding: '0.875rem',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s',
                    resize: 'none'
                  }}
                ></textarea>
              </div>
              
              <button className="btn-primary mt-4 py-4 text-lg" style={{ marginTop: '1rem', width: '100%' }}>ارسال پیام امن</button>
            </form>
          </motion.div>

          {/* Info Column */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 50 }}
            className="flex-1 flex flex-col gap-6"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div className="hud-badge" style={{ marginBottom: '1rem', color: 'var(--gold-dark)' }}>
                HEADQUARTERS
              </div>
              <h3 className="text-2xl text-gold mb-2" style={{ marginBottom: '0.5rem' }}>آدرس گالری مرکزی</h3>
              <p className="text-gray leading-relaxed" style={{ fontSize: '0.95rem' }}>
                تهران، بازار بزرگ، راسته زرگرها، پاساژ جواهر، طبقه اول، پلاک ۴۲، گالری طلا و سکه آروم
              </p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div className="hud-badge" style={{ marginBottom: '1rem', color: 'var(--gold-dark)' }}>
                CONTACT MATRICES
              </div>
              <h3 className="text-2xl text-gold mb-2" style={{ marginBottom: '0.5rem' }}>خطوط ارتباطی</h3>
              <p className="text-gray mb-2 font-english" dir="ltr" style={{ marginBottom: '0.25rem' }}>+98 21 5555 1234</p>
              <p className="text-gray mb-2 font-english" dir="ltr" style={{ marginBottom: '0.25rem' }}>+98 912 000 0000</p>
              <p className="text-gray font-english" dir="ltr">vault@aurum-gallery.com</p>
            </div>
            
            <div 
              className="glass-panel flex-1 flex items-center justify-center text-center" 
              style={{ 
                padding: '2.5rem',
                border: '1px dashed rgba(255, 223, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(5, 5, 5, 0.5)'
              }}
            >
              <div>
                <span className="text-gold font-english text-sm tracking-widest" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  GPS VAULT SYNC
                </span>
                <span className="text-gray text-sm">
                  سیستم مسیریابی ماهواره‌ای گالری (به زودی در این قسمت)
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
