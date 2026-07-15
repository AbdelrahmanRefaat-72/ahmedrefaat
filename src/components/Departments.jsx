import { motion } from 'framer-motion';
import { Activity, Stethoscope, Smile, Sparkles, Baby, HeartHandshake, Headphones, ArrowRight, ArrowLeft } from 'lucide-react';
import { departmentsList } from '../data/doctors';
import { translations } from '../data/translations';

// Map icon strings to Lucide components
const iconMap = {
  Activity,
  Stethoscope,
  Smile,
  Sparkles,
  Baby,
  HeartHandshake,
  Headphones
};

export default function Departments({ lang, onSelectDepartment }) {
  const t = translations[lang];

  // Container variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 22, stiffness: 120 }
    }
  };

  return (
    <section 
      id="departments" 
      className="py-20 bg-white dark:bg-darkbg-200 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl sm:text-4xl font-black text-slate-800 dark:text-white
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.depsTitle}
            </h2>
            <p className={`mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.depsSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Grid Cards Container */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {departmentsList.map((dept) => {
            const Icon = iconMap[dept.icon] || Stethoscope;
            
            // Custom card theme mappings for subtle differences
            let colorTheme = "from-blue-500/10 to-medical-600/10 text-medical-600 dark:text-medical-400 border-medical-100/50 dark:border-medical-900/30";
            if (dept.id === 'emergency') {
              colorTheme = "from-red-500/10 to-rose-600/10 text-red-600 dark:text-red-400 border-red-100/50 dark:border-red-900/30";
            } else if (dept.id === 'customer_service') {
              colorTheme = "from-slate-500/10 to-slate-600/10 text-slate-600 dark:text-slate-400 border-slate-150/50 dark:border-slate-850/30";
            }

            return (
              <motion.div
                key={dept.id}
                variants={cardVariants}
                onClick={() => onSelectDepartment(dept)}
                className="bg-slate-50 dark:bg-slate-850 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-850 shadow-sm hover:shadow-xl hover:scale-[1.03] hover:bg-white dark:hover:bg-slate-800 hover:border-medical-200/50 dark:hover:border-medical-800/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Card Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorTheme} flex items-center justify-center mb-6 border`}>
                    <Icon size={26} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Card Name */}
                  <h3 className={`text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {dept.name[lang]}
                  </h3>

                  {/* Card Description */}
                  <p className={`text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {dept.description[lang]}
                  </p>
                </div>

                {/* Card CTA arrow */}
                <div className={`flex items-center gap-1.5 text-xs font-bold transition-transform duration-300 text-medical-600 dark:text-medical-400
                  ${lang === 'ar' ? 'justify-start font-cairo' : 'justify-start font-inter'}
                `}>
                  <span>{lang === 'ar' ? 'تصفح الأطباء' : 'View Doctors'}</span>
                  {lang === 'ar' ? (
                    <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-200" />
                  ) : (
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
