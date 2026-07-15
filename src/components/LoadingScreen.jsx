import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
import { translations } from '../data/translations';

export default function LoadingScreen({ lang }) {
  const t = translations[lang];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Animated outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-medical-600 dark:border-t-medical-400 flex items-center justify-center"
        >
          {/* Inner pulsating heart icon */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full bg-medical-50 dark:bg-medical-950/40 flex items-center justify-center text-medical-600 dark:text-medical-400 border border-medical-100 dark:border-medical-900"
          >
            <HeartPulse size={32} />
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <div className="mt-4">
          <h2 className={`text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight
            ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
          `}>
            {lang === 'ar' ? 'مجمع عيادات عالم الطب' : 'Alam Al-Teb Clinics'}
          </h2>
          <p className={`text-xs text-slate-400 dark:text-slate-550 mt-1.5 font-medium tracking-wider
            ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
          `}>
            {t.loadingText}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
