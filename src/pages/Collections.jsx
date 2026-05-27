import React from 'react';
import { motion } from 'framer-motion';

export default function Collections() {
  const items = [
    { id: 1, title: 'سکه تمام بهار آزادی', desc: 'ضرب سال ۱۳۸۶ با کیفیت عالی بانکی، ضمانت اصالت فیزیکی و هولوگرام اختصاصی گالری آروم.', price: 'تماس بگیرید' },
    { id: 2, title: 'شمش طلای ۲۴ عیار PAMP', desc: 'شمش‌های ۱۰۰ گرمی سوئیسی با استاندارد بین‌المللی ال‌بی‌ام‌ای، بارکد معتبر و سریال یونیک.', price: 'تماس بگیرید' },
    { id: 3, title: 'سکه پهلوی کلکسیونی', desc: 'تعداد محدود از سکه‌های تاریخی پهلوی با کیفیت عالی و حفظ ارزش تاریخی بالا.', price: 'تماس بگیرید' },
    { id: 4, title: 'سرویس طلا مدرن ابریشمی', desc: 'طراحی مینیمال و تهاجمی ویژه مشکل‌پسندان، ساخته شده با تکنولوژی ریخته‌گری سه‌بعدی ایتالیا.', price: 'تماس بگیرید' },
    { id: 5, title: 'سکه امامی بانکی ۸۶', desc: 'پلمپ معتبر با گارانتی تعویض و بازخرید در تمامی شعب معتبر سراسر کشور.', price: 'تماس بگیرید' },
    { id: 6, title: 'شمش طلای خانه ایران', desc: 'شمش‌های ۵۰ گرمی با خلوص ۹۹۹.۹ دارای استاندارد ملی و تاییدیه کارشناسی گالری.', price: 'تماس بگیرید' },
  ];

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
            EXQUISITE VAULT
          </div>
          <h1 className="text-5xl font-bold mb-4 gold-gradient-text" style={{ marginTop: '1rem' }}>کالکشن‌های اختصاصی</h1>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            مجموعه‌ای متمایز از کمیاب‌ترین و باارزش‌ترین مسکوکات و شمش‌های طلای عیار بالا
          </p>
        </div>

        <div className="cards-grid">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, type: 'spring', stiffness: 50 }}
              className="glass-panel flex flex-col"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '450px' }}
            >
              <div className="hud-number">[ 0{item.id} ]</div>
              
              <div>
                {/* Luxury Asset Cover Placeholder */}
                <div 
                  className="w-full h-48 flex flex-col items-center justify-center relative overflow-hidden" 
                  style={{ 
                    backgroundColor: '#050505', 
                    border: '1px solid rgba(255, 223, 0, 0.08)',
                    marginBottom: '1.5rem',
                    position: 'relative'
                  }}
                >
                  {/* Decorative glowing lines */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(255, 223, 0, 0.04) 0%, transparent 70%)'
                  }}></div>
                  
                  {/* Glowing gold dot in center */}
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--gold-primary)',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px var(--gold-primary)',
                    marginBottom: '1rem'
                  }}></div>
                  
                  <span className="text-gold font-english text-sm tracking-widest opacity-60">
                    AURUM ASSET {item.id}
                  </span>
                  <span className="font-english" style={{ fontSize: '0.65rem', color: '#48484a', letterSpacing: '0.2em', marginTop: '0.5rem' }}>
                    SECURED IN PLATFORM
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white" style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                <p className="text-gray mb-6 text-sm leading-relaxed" style={{ marginBottom: '1.5rem', textAlign: 'justify' }}>{item.desc}</p>
              </div>

              <div className="flex justify-between items-center mt-auto" style={{ borderTop: '1px solid rgba(255,223,0,0.08)', paddingTop: '1.25rem' }}>
                <span className="text-gold font-bold text-lg">{item.price}</span>
                <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>جزئیات اثر</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
