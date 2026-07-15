import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Departments from './components/Departments';
import DepartmentView from './components/DepartmentView';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import WorkingHours from './components/WorkingHours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import AppointmentModal from './components/AppointmentModal';
import Toast from './components/Toast';
import LoadingScreen from './components/LoadingScreen';
import { doctorsData } from './data/doctors';
import { translations } from './data/translations';
import { clinicInfo } from './data/clinicInfo';

export default function App() {
  // 1. Language & Layout State (English as default or stored)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('alamalteb_lang') || 'ar';
  });

  // 2. Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('alamalteb_theme') || 'light';
  });

  // 3. Navigation States
  const [selectedDept, setSelectedDept] = useState(null);
  const [currentSection, setCurrentSection] = useState('home');

  // 4. Modal Booking States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDoc, setBookingDoc] = useState(null);
  const [bookingDeptId, setBookingDeptId] = useState(null);

  // 5. Toast States
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 6. Loading splash state
  const [isLoading, setIsLoading] = useState(true);

  // Sync Language changes to localStorage & document elements
  useEffect(() => {
    localStorage.setItem('alamalteb_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Sync Theme changes to localStorage & document element
  useEffect(() => {
    localStorage.setItem('alamalteb_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Simulate Initial App loading (splash screen fade out)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // 7. Dynamic SEO Updates (Sync metadata tags with active view and language)
  useEffect(() => {
    let title = "";
    let desc = "";

    if (lang === 'ar') {
      title = selectedDept 
        ? `${selectedDept.name.ar} | مجمع عيادات عالم الطب`
        : "مجمع عيادات عالم الطب | رعاية صحية متكاملة بالرياض";
      desc = selectedDept
        ? `احجز موعدك في ${selectedDept.name.ar} بمجمع عيادات عالم الطب. استشاريون سعوديون وعالميون لرعايتك.`
        : "مجمع عيادات عالم الطب بالرياض يقدم خدمات طبية متكاملة تحت إشراف نخبة من الاستشاريين. احجز موعدك الآن.";
    } else {
      title = selectedDept
        ? `${selectedDept.name.en} | Alam Al-Teb Medical Clinics`
        : "Alam Al-Teb Medical Clinics Complex | Premium Healthcare Riyadh";
      desc = selectedDept
        ? `Book your appointment in the ${selectedDept.name.en} department at Alam Al-Teb Clinics. Expert board-certified consultants at your service.`
        : "Alam Al-Teb Medical Clinics Complex in Riyadh offers comprehensive healthcare services led by highly qualified consultants. Book online.";
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;

    // Update Open Graph (OG) tags
    const updateMetaTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', desc);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:site_name', lang === 'ar' ? 'مجمع عيادات عالم الطب' : 'Alam Al-Teb Clinics Complex');
  }, [lang, selectedDept]);

  // 8. Intersection Observer to highlight current active navigation link
  useEffect(() => {
    if (selectedDept) return; // disable section highlighting inside sub-views

    const sections = ['home', 'departments', 'about', 'reviews', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedDept]);

  // Navigation Click Handler
  const handleNavClick = (id) => {
    if (id === 'book-appointment') {
      setBookingDoc(null);
      setBookingDeptId(null);
      setIsModalOpen(true);
      return;
    }

    // If inside a department detail page, return to main departments view
    if (selectedDept) {
      setSelectedDept(null);
    }

    // Scroll to section
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Open booking with prefilled values
  const handleBookAppointment = (doctor = null, deptId = null) => {
    setBookingDoc(doctor);
    setBookingDeptId(deptId || (doctor ? doctor.departmentId : null));
    setIsModalOpen(true);
  };

  // Handle successful appointment submission
  const handleBookingSuccess = () => {
    const t = translations[lang];
    setToastMessage(t.bookingSuccessToast);
    setIsToastVisible(true);
  };

  // Return list of doctors for the currently selected department view
  const activeDoctors = selectedDept
    ? doctorsData.filter(doc => doc.departmentId === selectedDept.id)
    : [];

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen lang={lang} />}
      </AnimatePresence>

      <div className={`min-h-screen ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
        
        {/* Navigation Bar */}
        <Navbar 
          lang={lang} 
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
          currentSection={currentSection}
          onNavClick={handleNavClick}
          isInsideDepartment={!!selectedDept}
        />

        {/* Hero Banner */}
        <Hero 
          lang={lang}
          onBookClick={() => handleBookAppointment()}
          onContactClick={() => handleNavClick('contact')}
        />

        {/* Counter Stats Section */}
        <Stats lang={lang} />

        {/* Departments Grid or Detailed Sub-page Section */}
        <main className="relative">
          <div className="relative">
            {selectedDept ? (
              <section id="departments" className="py-20 bg-white dark:bg-darkbg-200 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <DepartmentView
                    department={selectedDept}
                    doctors={activeDoctors}
                    lang={lang}
                    onBack={() => {
                      setSelectedDept(null);
                      // Scroll back to departments section gently
                      setTimeout(() => {
                        const el = document.getElementById('departments');
                        if (el) el.scrollIntoView({ behavior: 'instant' });
                      }, 10);
                    }}
                    onBookClick={(doc) => handleBookAppointment(doc)}
                  />
                </div>
              </section>
            ) : (
              <Departments 
                lang={lang} 
                onSelectDepartment={(dept) => {
                  setSelectedDept(dept);
                  // Scroll to departments top to see details
                  setTimeout(() => {
                    const el = document.getElementById('departments');
                    if (el) el.scrollIntoView({ behavior: 'instant' });
                  }, 10);
                }}
              />
            )}
          </div>
        </main>

        {/* Static Content Blocks */}
        <AboutUs lang={lang} />
        
        <Reviews lang={lang} />
        
        <FAQ lang={lang} />
        
        <WorkingHours lang={lang} />
        
        <Contact lang={lang} />

        {/* Global Footer */}
        <Footer lang={lang} onNavClick={handleNavClick} />

        {/* Global Floating Elements */}
        <FloatingWhatsApp lang={lang} />
        <BackToTop lang={lang} />

        {/* Appointment Scheduler Modal */}
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lang={lang}
          selectedDoc={bookingDoc}
          selectedDeptId={bookingDeptId}
          onSubmitSuccess={handleBookingSuccess}
        />

        {/* Success Confirmation Toast Notifications */}
        <Toast
          message={toastMessage}
          isVisible={isToastVisible}
          onClose={() => setIsToastVisible(false)}
          dir={lang}
        />

      </div>
    </ErrorBoundary>
  );
}
