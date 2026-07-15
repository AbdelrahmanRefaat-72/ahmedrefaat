import { motion } from 'framer-motion';
import { Calendar, PhoneCall, HeartPulse, Shield, Award } from 'lucide-react';
import { translations } from '../data/translations';

export default function Hero({ lang, onBookClick, onContactClick }) {
  const t = translations[lang];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-medical-50 via-white to-slate-50 dark:from-slate-950 dark:via-darkbg-100 dark:to-slate-900 flex items-center min-h-[85vh]"
    >
      {/* Decorative blurry glowing blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-medical-300/30 dark:bg-medical-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 rounded-full bg-indigo-200/40 dark:bg-indigo-900/10 blur-3xl pointer-events-none" />

      {/* Grid pattern background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left rtl:lg:text-right"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-100/60 dark:bg-medical-950/40 border border-medical-200/50 dark:border-medical-900/50 text-medical-700 dark:text-medical-300 text-xs font-semibold mb-6 shadow-sm font-cairo"
            >
              <Shield size={14} className="text-medical-600 dark:text-medical-400" />
              <span>مجمع طبي مرخص من وزارة الصحة | Ministry of Health Licensed</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight
                ${lang === 'ar' ? 'font-cairo leading-snug' : 'font-inter'}
              `}
            >
              {t.heroTitle}
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className={`mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-350 max-w-2xl mx-auto lg:mx-0 leading-relaxed
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}
            >
              {t.heroSub}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary Book */}
              <button
                onClick={onBookClick}
                className={`w-full sm:w-auto px-8 py-4 bg-medical-600 hover:bg-medical-700 active:scale-95 text-white font-bold rounded-2xl shadow-xl shadow-medical-600/20 hover:shadow-medical-600/30 flex items-center justify-center gap-2 transition-all outline-none focus:ring-4 focus:ring-medical-200 dark:focus:ring-medical-800
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}
              >
                <Calendar size={18} />
                <span>{t.heroBookBtn}</span>
              </button>

              {/* Secondary Contact */}
              <button
                onClick={onContactClick}
                className={`w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 active:scale-95 rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all outline-none focus:ring-4 focus:ring-slate-100 dark:focus:ring-slate-800
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}
              >
                <PhoneCall size={18} className="text-medical-600 dark:text-medical-400" />
                <span>{t.heroContactBtn}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration / Graphics Right */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 80, delay: 0.4 }}
          >
            {/* Elegant premium vector graphic layout */}
            <div className="relative w-full max-w-[400px] aspect-square rounded-[2.5rem] bg-gradient-to-tr from-medical-600 to-indigo-500 overflow-hidden shadow-2xl flex items-center justify-center group">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:scale-105 transition-transform duration-700" />
              
              {/* Overlay animated visual circles */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#fff_2px,transparent_2px)] bg-[size:1.5rem_1.5rem]" />
              
              {/* Centered medical logo symbol graphic */}
              <motion.div 
                className="relative z-10 w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <HeartPulse size={48} />
              </motion.div>

              {/* Floating badges */}
              <motion.div 
                className="absolute top-8 left-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-2 rounded-lg bg-medical-50 dark:bg-medical-950/40 text-medical-600 dark:text-medical-400">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Experience</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white font-cairo">15+ عاماً من العطاء</p>
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-8 right-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                  <HeartPulse size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Consultants</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white font-cairo">استشاريين متميزين</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
