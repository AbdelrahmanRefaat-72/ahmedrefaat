import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, HeartPulse } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { translations } from '../data/translations';
import ScrollProgress from './ScrollProgress';

export default function Navbar({ lang, setLang, theme, toggleTheme, currentSection, onNavClick, isInsideDepartment }) {
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'departments', label: t.navDepartments },
    { id: 'about', label: t.navAbout },
    { id: 'reviews', label: t.navReviews },
    { id: 'faq', label: t.navFaq },
    { id: 'contact', label: t.navContact },
  ];

  const handleLinkClick = (id) => {
    setIsOpen(false);
    onNavClick(id);
  };

  const handleLangToggle = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
          ${isScrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md border-slate-100 dark:border-slate-800 py-3' 
            : 'bg-transparent border-transparent py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="flex items-center gap-2 outline-none group"
              aria-label={clinicInfo.name[lang]}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-medical-600 to-medical-400 flex items-center justify-center text-white shadow-lg shadow-medical-600/20 group-hover:scale-105 transition-transform duration-300">
                <HeartPulse size={22} className="animate-pulse" />
              </div>
              <span className={`font-bold tracking-tight text-slate-800 dark:text-white transition-colors duration-300 leading-tight hidden xs:block
                ${lang === 'ar' ? 'font-cairo text-lg' : 'font-inter text-base lg:text-lg'}
              `}>
                {lang === 'ar' ? (
                  <>
                    <span className="text-medical-600 dark:text-medical-400 block text-xs font-semibold">مجمع عيادات</span>
                    عالم الطب
                  </>
                ) : (
                  <>
                    <span className="text-medical-600 dark:text-medical-400 block text-xs font-semibold">Alam Al-Teb</span>
                    Medical Clinics
                  </>
                )}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = currentSection === item.id && !isInsideDepartment;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 outline-none focus:ring-2 focus:ring-medical-500
                      ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                      ${isActive 
                        ? 'text-medical-600 dark:text-medical-400 bg-medical-50/50 dark:bg-medical-950/20 font-semibold' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all outline-none focus:ring-2 focus:ring-medical-500"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Language Switcher */}
              <button
                onClick={handleLangToggle}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all outline-none focus:ring-2 focus:ring-medical-500 text-sm font-medium"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span className={lang === 'ar' ? 'font-inter' : 'font-cairo'}>
                  {lang === 'en' ? 'العربية' : 'English'}
                </span>
              </button>

              {/* Book Appointment CTA */}
              <button
                onClick={() => handleLinkClick('book-appointment')}
                className={`px-5 py-2.5 bg-medical-600 hover:bg-medical-700 text-white font-semibold rounded-xl shadow-lg shadow-medical-600/10 hover:shadow-medical-600/20 active:scale-95 transition-all outline-none focus:ring-2 focus:ring-medical-500 text-sm
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}
              >
                {t.navBookBtn}
              </button>
            </div>

            {/* Mobile controls & Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              {/* Language Switcher (Mobile icon) */}
              <button
                onClick={handleLangToggle}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 outline-none focus:ring-2 focus:ring-medical-500"
                aria-label="Toggle language"
              >
                <Globe size={18} />
              </button>

              {/* Theme Toggle (Mobile icon) */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 outline-none focus:ring-2 focus:ring-medical-500"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 outline-none focus:ring-2 focus:ring-medical-500"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden shadow-inner"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold outline-none focus:ring-2 focus:ring-medical-500
                      ${lang === 'ar' ? 'font-cairo text-right' : 'font-inter text-left'}
                      ${currentSection === item.id && !isInsideDepartment
                        ? 'text-medical-600 dark:text-medical-400 bg-medical-50/50 dark:bg-medical-950/10'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleLinkClick('book-appointment')}
                    className={`w-full py-3 bg-medical-600 hover:bg-medical-700 text-white font-bold rounded-xl shadow-lg shadow-medical-600/10 flex items-center justify-center outline-none focus:ring-2 focus:ring-medical-500
                      ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                    `}
                  >
                    {t.navBookBtn}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
