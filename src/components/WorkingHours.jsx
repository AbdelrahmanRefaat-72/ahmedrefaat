import { motion } from 'framer-motion';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { translations } from '../data/translations';

export default function WorkingHours({ lang }) {
  const t = translations[lang];

  const info = clinicInfo.workingHours;

  const schedules = [
    {
      id: 'weekdays',
      days: info.weekdays.days[lang],
      hours: info.weekdays.hours[lang],
      icon: Calendar,
      color: "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-medical-600 dark:text-medical-400"
    },
    {
      id: 'friday',
      days: info.friday.days[lang],
      hours: info.friday.hours[lang],
      icon: Clock,
      color: "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-darkbg-200 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl sm:text-4xl font-black text-slate-800 dark:text-white
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.hoursTitle}
            </h2>
            <p className={`mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.hoursSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {schedules.map((sched, idx) => {
            const Icon = sched.icon;
            return (
              <motion.div
                key={sched.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 border shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ${sched.color}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <Icon size={24} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {sched.id === 'weekdays' ? (lang === 'ar' ? 'أيام العمل' : 'Standard Shift') : (lang === 'ar' ? 'عطلة الأسبوع' : 'Weekend Shift')}
                  </span>
                </div>

                <div>
                  <h3 className={`text-2xl font-black text-slate-850 dark:text-white mb-2
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {sched.days}
                  </h3>
                  <p className={`text-slate-500 dark:text-slate-400 font-medium text-base sm:text-lg flex items-center gap-2
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    <Clock size={16} className="text-slate-400" />
                    <span>{sched.hours}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Emergency Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl p-8 bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-lg shadow-red-500/10 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col justify-between md:col-span-1"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-white/10 rounded-2xl border border-white/20">
                <AlertCircle size={24} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider text-red-100/80
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                {lang === 'ar' ? 'عناية عاجلة' : 'Critical Care'}
              </span>
            </div>

            <div>
              <h3 className={`text-2xl font-black mb-2
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                {t.statsEmergency}
              </h3>
              <p className={`text-red-500 bg-white font-bold px-3 py-1.5 rounded-xl text-sm w-fit flex items-center gap-1.5 shadow-sm
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                <span className="h-2 w-2 rounded-full bg-red-650 animate-ping"></span>
                <span>{lang === 'ar' ? 'مستمر 24/7' : 'Continuous 24/7'}</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
