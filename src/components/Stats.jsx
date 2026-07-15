import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Users, HeartHandshake, ShieldAlert } from 'lucide-react';
import { translations } from '../data/translations';

function Counter({ targetValue, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // Total count-up time in milliseconds
      const stepTime = Math.max(Math.floor(duration / targetValue), 15);
      const timer = setInterval(() => {
        start += Math.ceil(targetValue / (duration / stepTime));
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats({ lang }) {
  const t = translations[lang];

  const stats = [
    {
      id: 'deps',
      icon: Building2,
      target: 7,
      suffix: "",
      label: t.statsDeps,
      colorClass: "from-blue-500 to-medical-600 shadow-blue-500/20"
    },
    {
      id: 'docs',
      icon: Users,
      target: 13,
      suffix: "",
      label: t.statsDocs,
      colorClass: "from-indigo-500 to-indigo-600 shadow-indigo-500/20"
    },
    {
      id: 'patients',
      icon: HeartHandshake,
      target: 500,
      suffix: "+",
      label: t.statsPatients,
      colorClass: "from-emerald-500 to-emerald-600 shadow-emerald-500/20"
    },
    {
      id: 'emergency',
      icon: ShieldAlert,
      target: null, // text display instead of counting
      label: t.statsEmergency,
      subLabel: t.statsEmergencySub,
      colorClass: "from-red-500 to-rose-600 shadow-red-500/20"
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-darkbg-200 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden bg-slate-50 dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-750 shadow-sm flex items-center gap-5 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                {/* Colored Icon box */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${stat.colorClass} flex items-center justify-center text-white shadow-lg`}>
                  <Icon size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-white font-inter">
                    {stat.target !== null ? (
                      <Counter targetValue={stat.target} suffix={stat.suffix} />
                    ) : (
                      <span className={lang === 'ar' ? 'font-cairo text-xl' : 'font-inter text-xl'}>
                        {lang === 'ar' ? 'متاح 24 ساعة' : '24/7 Support'}
                      </span>
                    )}
                  </h3>
                  <p className={`text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 font-medium
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
