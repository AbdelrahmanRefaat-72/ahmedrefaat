import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose, duration = 5000, dir = 'ltr' }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div 
          className={`fixed bottom-6 z-50 flex pointer-events-none max-w-sm w-full px-4
            ${dir === 'rtl' ? 'left-0 sm:left-6' : 'right-0 sm:right-6'}
          `}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="pointer-events-auto flex items-start gap-3 w-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl shadow-2xl shadow-medical-950/10 dark:shadow-black/40 border border-emerald-100 dark:border-emerald-950 p-4 border-l-4 border-l-emerald-500 dark:border-l-emerald-400"
            role="status"
            aria-live="polite"
          >
            <div className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5">
              <CheckCircle size={20} />
            </div>
            
            <div className="flex-1 text-sm font-medium leading-relaxed font-cairo">
              {message}
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
