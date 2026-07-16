import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { translations } from '../data/translations';

export default function FloatingWhatsApp({ lang }) {
  const t = translations[lang];
  const number = clinicInfo.whatsappFormatted;
  const message = encodeURIComponent(t.whatsappMessage);
  const whatsappUrl = `https://wa.me/${number}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.docWhatsApp}
      className={`fixed bottom-6 z-45 p-4 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-full shadow-2xl shadow-emerald-500/30 dark:shadow-emerald-950/40 hover:shadow-emerald-500/50 flex items-center justify-center transition-colors outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800
        ${lang === 'rtl' ? 'left-6' : 'right-6'}
      `}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        scale: { type: 'spring', delay: 1, stiffness: 260, damping: 20 },
        opacity: { delay: 1 },
        y: {
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut'
        }
      }}
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
      </span>
    </motion.a>
  );
}
