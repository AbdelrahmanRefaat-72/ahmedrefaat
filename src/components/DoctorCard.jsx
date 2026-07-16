import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, ChevronDown, ChevronUp, Star, Award, BookOpen } from 'lucide-react';
import { translations } from '../data/translations';

// SVG Doctor Avatars
function DoctorAvatar({ gender, className }) {
  if (gender === 'male') {
    return (
      <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="url(#maleGrad)" stroke="#bae2fd" strokeWidth="2"/>
        {/* Head */}
        <circle cx="60" cy="44" r="18" fill="#fbcfe8" /> {/* base head */}
        <path d="M42 44C42 44 45 28 60 28C75 28 78 44 78 44" fill="#1e293b" /> {/* hair */}
        {/* Glasses */}
        <rect x="48" y="40" width="10" height="6" rx="1.5" stroke="#0f172a" strokeWidth="1.5" fill="none"/>
        <rect x="62" y="40" width="10" height="6" rx="1.5" stroke="#0f172a" strokeWidth="1.5" fill="none"/>
        <line x1="58" y1="43" x2="62" y2="43" stroke="#0f172a" strokeWidth="1.5"/>
        {/* Doctor Coat & Shirt */}
        <path d="M26 94C26 80 40 70 60 70C80 70 94 80 94 94V108H26V94Z" fill="#f8fafc" />
        <path d="M48 70L60 88L72 70" fill="#0284c7" /> {/* tie background */}
        <path d="M57 88H63V104H57V88Z" fill="#0369a1" /> {/* tie */}
        <path d="M38 72L60 92L82 72" fill="none" stroke="#e2e8f0" strokeWidth="3" /> {/* coat lapels */}
        {/* Stethoscope */}
        <path d="M44 64C44 78 76 78 76 64" stroke="#475569" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M60 76V88" stroke="#475569" strokeWidth="2.5" fill="none" />
        <circle cx="60" cy="90" r="4.5" fill="#94a3b8" />
        <defs>
          <linearGradient id="maleGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#bae2fd" stopOpacity="0.4"/>
            <stop stopColor="#0e8cf0" stopOpacity="0.15"/>
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (gender === 'female') {
    return (
      <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="url(#femaleGrad)" stroke="#fbcfe8" strokeWidth="2"/>
        {/* Hair Back */}
        <path d="M38 48C30 52 30 70 30 76C30 76 34 78 38 74V48Z" fill="#475569" />
        <path d="M82 48C90 52 90 70 90 76C90 76 86 78 82 74V48Z" fill="#475569" />
        {/* Head */}
        <circle cx="60" cy="44" r="18" fill="#fbcfe8" />
        {/* Hijab / Scarf Frame */}
        <path d="M42 34C46 26 54 24 60 24C66 24 74 26 78 34C82 42 82 58 78 63C74 68 66 70 60 70C54 70 46 68 42 63C38 58 38 42 42 34Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        {/* Inner face frame */}
        <path d="M46 38C48 30 54 28 60 28C66 28 72 30 74 38C76 46 75 58 72 61C68 64 62 65 60 65C58 65 52 64 48 61C45 58 44 46 46 38Z" fill="#fed7aa" />
        {/* Doctor Coat */}
        <path d="M26 94C26 80 40 70 60 70C80 70 94 80 94 94V108H26V94Z" fill="#f8fafc" />
        <path d="M44 70L60 88L76 70" fill="#0d9488" /> {/* medical scrub colors */}
        <path d="M38 72L60 92L82 72" fill="none" stroke="#e2e8f0" strokeWidth="3" />
        {/* Stethoscope */}
        <path d="M44 66C44 78 76 78 76 66" stroke="#475569" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M60 77V86" stroke="#475569" strokeWidth="2.5" fill="none" />
        <circle cx="60" cy="88" r="4.5" fill="#94a3b8" />
        <defs>
          <linearGradient id="femaleGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fbcfe8" stopOpacity="0.4"/>
            <stop stopColor="#db2777" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    // Team icon
    return (
      <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" fill="url(#teamGrad)" stroke="#cbd5e1" strokeWidth="2"/>
        {/* Figures silhouette */}
        <path d="M25 94C25 80 35 72 48 72C61 72 71 80 71 94V108H25V94Z" fill="#94a3b8" opacity="0.75" />
        <circle cx="48" cy="54" r="12" fill="#94a3b8" opacity="0.75" />
        <path d="M72 94C72 80 82 72 95 72C108 72 118 80 118 94V108H72V94Z" fill="#94a3b8" opacity="0.75" />
        <circle cx="95" cy="54" r="12" fill="#94a3b8" opacity="0.75" />
        {/* Center Main Figure */}
        <path d="M42 90C42 75 52 66 68 66C84 66 94 75 94 90V108H42V90Z" fill="#0284c7" />
        <circle cx="68" cy="46" r="15" fill="#bae2fd" />
        <defs>
          <linearGradient id="teamGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e2e8f0" stopOpacity="0.6"/>
            <stop stopColor="#475569" stopOpacity="0.15"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export default function DoctorCard({ doctor, lang, onBookClick }) {
  const t = translations[lang];
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsAppMessage = encodeURIComponent(
    lang === 'ar' 
      ? `مرحباً، أود حجز موعد مع ${doctor.name.ar} في قسم ${doctor.specialty.ar}` 
      : `Hello, I would like to book an appointment with ${doctor.name.en} in the ${doctor.specialty.en} department.`
  );
  
  const cleanPhone = doctor.whatsapp.replace(/[\s\+]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanPhone}?text=${whatsAppMessage}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-750 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div className="p-6 sm:p-8">
        
        {/* Header: Avatar + Identity */}
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left rtl:sm:text-right mb-6">
          <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <DoctorAvatar 
              gender={doctor.gender} 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-inner object-cover" 
            />
            {doctor.gender !== 'team' && (
              <span className="absolute bottom-0 right-0 sm:right-1 bg-emerald-500 border-2 border-white dark:border-slate-800 w-4.5 h-4.5 rounded-full flex items-center justify-center" aria-label="Available">
                <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
              </span>
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-medical-50 dark:bg-medical-950/40 text-medical-600 dark:text-medical-400 border border-medical-100/50
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                {doctor.specialty[lang]}
              </span>
              
              {doctor.gender !== 'team' && (
                <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500 font-inter">
                  <Star size={12} className="fill-current" />
                  <span>4.9</span>
                </span>
              )}
            </div>

            <h3 className={`text-lg sm:text-xl font-black text-slate-850 dark:text-white leading-tight
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {doctor.name[lang]}
            </h3>

            {doctor.gender !== 'team' && (
              <p className={`text-slate-400 text-xs sm:text-sm mt-1 font-medium flex items-center justify-center sm:justify-start gap-1
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                <span>{doctor.experienceYears} {lang === 'ar' ? 'سنوات خبرة' : 'years experience'}</span>
              </p>
            )}
          </div>
        </div>

        {/* Working Hours Summary Panel */}
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100/50 dark:border-slate-850 p-4 rounded-2xl space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className={`text-slate-400 dark:text-slate-500 font-medium ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
              {t.docSchedule}:
            </span>
            <span className={`font-bold text-slate-700 dark:text-slate-200 text-right ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
              {doctor.schedule.days[lang]}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className={`text-slate-400 dark:text-slate-500 font-medium ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
              {t.docHours}:
            </span>
            <span className="font-bold text-slate-700 dark:text-slate-200 text-right font-inter">
              {doctor.schedule.hours[lang]}
            </span>
          </div>
        </div>

        {/* Collapsible Info section for credentials */}
        {doctor.gender !== 'team' && (
          <div className="border-t border-slate-100 dark:border-slate-750 pt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-full flex items-center justify-between py-1 text-slate-500 dark:text-slate-400 hover:text-medical-600 dark:hover:text-medical-400 transition-colors text-xs font-bold outline-none focus:ring-1 focus:ring-medical-500
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}
              aria-expanded={isExpanded}
            >
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} />
                <span>{lang === 'ar' ? 'السيرة المهنية والمؤهلات' : 'Profile Bio & Qualifications'}</span>
              </span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3 text-xs leading-relaxed space-y-3"
                >
                  {/* Qualifications */}
                  <div className="p-3 bg-medical-50/20 dark:bg-medical-950/10 rounded-xl border border-medical-100/10 text-slate-600 dark:text-slate-350">
                    <h4 className={`font-bold text-medical-700 dark:text-medical-400 mb-1 flex items-center gap-1
                      ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                    `}>
                      <Award size={12} />
                      <span>{t.docQualifications}</span>
                    </h4>
                    <p className={lang === 'ar' ? 'font-cairo leading-relaxed' : 'font-inter'}>
                      {doctor.qualification[lang]}
                    </p>
                  </div>

                  {/* Biography */}
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100/50 dark:border-slate-850 text-slate-500 dark:text-slate-400">
                    <p className={lang === 'ar' ? 'font-cairo leading-relaxed' : 'font-inter'}>
                      {doctor.bio[lang]}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>

      {/* Footer Buttons Actions */}
      <div className="p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-750 flex flex-col sm:flex-row gap-3">
        {/* WhatsApp Chat button */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 py-3 border border-emerald-250 hover:bg-emerald-50 dark:border-emerald-950 dark:hover:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 font-bold rounded-xl active:scale-98 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-emerald-400
            ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
          `}
        >
          <Phone size={14} className="fill-current text-emerald-500" />
          <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        {/* Book appointment button */}
        <button
          onClick={() => onBookClick(doctor)}
          className={`flex-1 py-3 bg-medical-600 hover:bg-medical-700 active:scale-98 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-medical-500
            ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
          `}
        >
          <Calendar size={14} />
          <span>{t.docBookBtn}</span>
        </button>
      </div>
    </motion.div>
  );
}
