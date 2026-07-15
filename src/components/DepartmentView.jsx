import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Search, Sparkles, Star } from 'lucide-react';
import { translations } from '../data/translations';
import DoctorCard from './DoctorCard';

export default function DepartmentView({ department, doctors, lang, onBack, onBookClick }) {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');

  // Reset search when department changes (safeguard)
  useMemo(() => {
    setSearchQuery('');
  }, [department.id]);

  const filteredDoctors = useMemo(() => {
    if (!searchQuery.trim()) return doctors;
    
    const query = searchQuery.toLowerCase().trim();
    return doctors.filter((doc) => {
      const nameMatch = doc.name[lang].toLowerCase().includes(query);
      const specMatch = doc.specialty[lang].toLowerCase().includes(query);
      const expMatch = doc.experienceYears.toString().includes(query) || 
                       (lang === 'ar' ? 'خبرة' : 'experience').includes(query);
      
      return nameMatch || specMatch || expMatch;
    });
  }, [doctors, searchQuery, lang]);

  return (
    <div className="w-full">
      {/* Navigation & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
        <button
          onClick={onBack}
          className={`inline-flex items-center gap-2 text-slate-500 hover:text-medical-600 dark:text-slate-400 dark:hover:text-medical-400 transition-colors text-sm font-bold outline-none focus:ring-2 focus:ring-medical-500 py-1.5 px-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-750 active:scale-95 duration-200
            ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
          `}
        >
          {lang === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          <span>{t.depBackBtn}</span>
        </button>

        <h2 className={`text-2xl sm:text-3xl font-black text-slate-850 dark:text-white
          ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
        `}>
          {department.name[lang]}
        </h2>
      </div>

      {/* Advanced Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <div className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 dark:text-slate-500
            ${lang === 'ar' ? 'right-4' : 'left-4'}
          `}>
            <Search size={18} />
          </div>
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-750 rounded-2xl text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 shadow-sm transition-all duration-300
              ${lang === 'ar' ? 'font-cairo pr-12 pl-4 text-right' : 'font-inter pl-12 pr-4 text-left'}
            `}
            aria-label={t.searchLabel}
          />
          
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute inset-y-0 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold px-4 outline-none focus:text-medical-500
                ${lang === 'ar' ? 'left-0' : 'right-0'}
              `}
            >
              {lang === 'ar' ? 'مسح' : 'Clear'}
            </button>
          )}
        </div>
      </div>

      {/* Doctors Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                lang={lang}
                onBookClick={onBookClick}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:col-span-2 text-center py-16 px-4 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-750 shadow-sm flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/20 text-amber-500 dark:text-amber-400 flex items-center justify-center mb-4">
                <Sparkles size={26} />
              </div>
              <h3 className={`text-lg font-bold text-slate-800 dark:text-white mb-2
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                {lang === 'ar' ? 'لا توجد نتائج مطابقة' : 'No Results Found'}
              </h3>
              <p className={`text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                {t.searchNoResults}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
