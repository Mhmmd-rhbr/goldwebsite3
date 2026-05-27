import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: 'ارزیابی و کارشناسی تخصصی', desc: 'سنجش دقیق خلوص، اصالت و عیار سنجی مسکوکات و شمش‌های گوناگون با پیشرفته‌ترین سیستم‌های لیزری و کارشناسان زبده صنف طلا همراه با صدور گواهینامه تضمین کیفیت رسمی.' },
    { title: 'سفارش و طراحی سه‌بعدی اختصاصی', desc: 'طراحی رایانه‌ای و شخصی‌سازی شده انواع قطعات طلا با استفاده از نرم‌افزارهای مدرن طراحی سه‌بعدی و ریخته‌گری اتوماتیک ایتالیایی کاملاً مطابق با ایده‌آل‌ها و سلیقه شما.' },
    { title: 'مشاوره استراتژیک سرمایه‌گذاری', desc: 'تحلیل تکنیکال و فاندامنتال روند بازار طلای داخلی و انس جهانی جهت ارائه مطمئن‌ترین راهکارهای حفظ ارزش دارایی و مدیریت سبد سرمایه شما در بازار مسکوکات.' },
    { title: 'معاملات امن و تضمین‌شده', desc: 'ایجاد بستری کاملاً قانونی، شفاف و با حاشیه سود عادلانه به همراه فاکتور رسمی تایید شده توسط اتحادیه جهت خرید و فروش فوری شمش‌ها و کلکسیون‌های گران‌قیمت شما.' },
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
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div className="hud-badge mx-auto" style={{ justifyContent: 'center', width: 'fit-content' }}>
            PREMIUM WORKFLOW
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white" style={{ marginTop: '1rem' }}>
            خدمات ممتاز <span className="text-gold">آروم</span>
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            ما با تکیه بر استانداردهای نوین بین‌المللی، مفهوم جدیدی از خدمات و امنیت در بازار طلا را برای سرمایه‌گذاران تعریف کرده‌ایم.
          </p>
        </div>

        {/* Responsive Grid using advanced CSS minmax logic */}
        <div 
          className="cards-grid" 
          style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '2.5rem' 
          }}
        >
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: 'spring', stiffness: 50 }}
              className="glass-panel"
              style={{ 
                borderRight: '4px solid var(--gold-primary)', // Right border for RTL Persian layout
                padding: '3rem',
                position: 'relative'
              }}
            >
              <div className="hud-number" style={{ top: '2rem', left: '2rem' }}>[ 0{idx + 1} ]</div>
              
              <div className="hud-badge" style={{ marginBottom: '1.5rem', color: 'var(--gold-dark)' }}>
                SERVICE UNIT
              </div>
              
              <h2 className="text-3xl mb-4 gold-gradient-text" style={{ marginBottom: '1rem' }}>
                {srv.title}
              </h2>
              
              <p className="text-gray text-lg leading-loose" style={{ textAlign: 'justify' }}>
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
