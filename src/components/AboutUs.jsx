import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';
import { translations } from '../data/translations';

export default function AboutUs({ lang }) {
  const t = translations[lang];

  const cards = [
    {
      id: 'mission',
      icon: Target,
      title: t.aboutMissionTitle,
      description: t.aboutMissionDesc,
      gradient: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-100/50 dark:border-blue-900/30"
    },
    {
      id: 'vision',
      icon: Eye,
      title: t.aboutVisionTitle,
      description: t.aboutVisionDesc,
      gradient: "from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100/50 dark:border-indigo-900/30"
    },
    {
      id: 'commitment',
      icon: ShieldCheck,
      title: t.aboutCommitmentTitle,
      description: t.aboutCommitmentDesc,
      gradient: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100/50 dark:border-emerald-900/30"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              {t.aboutTitle}
            </h2>
            <p className={`mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.aboutSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-750 shadow-sm hover:shadow-xl hover:scale-[1.03] hover:border-medical-200/50 dark:hover:border-medical-800/50 transition-all duration-300 flex flex-col group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 border`}>
                  <Icon size={26} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className={`text-xl font-bold text-slate-800 dark:text-white mb-4
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  {card.title}
                </h3>
                
                <p className={`text-slate-500 dark:text-slate-450 leading-relaxed text-sm flex-1
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Experience banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-medical-600 to-indigo-600 rounded-[2rem] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <Award size={32} />
            </div>
            <div className="text-center md:text-left rtl:md:text-right">
              <h4 className={`text-xl font-bold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                {lang === 'ar' ? 'طاقم طبي سعودي وعالمي معتمد' : 'Board-Certified Saudi & International Staff'}
              </h4>
              <p className={`text-medical-100 text-sm mt-1 max-w-xl ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                {lang === 'ar' 
                  ? 'جميع أطبائنا حاصلون على شهادات البورد ولديهم سجل حافل من التميز الطبي في أكبر الصروح الطبية.' 
                  : 'All our clinicians are certified by national and international boards with years of medical care records.'
                }
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('departments');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-6 py-3.5 bg-white text-medical-700 hover:bg-slate-50 font-bold rounded-xl active:scale-95 transition-all shadow-md text-sm whitespace-nowrap
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}
          >
            {lang === 'ar' ? 'تصفح عياداتنا' : 'Explore Clinics'}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
