import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function FAQ({ lang }) {
  const t = translations[lang];
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: {
        en: "How can I book an appointment?",
        ar: "كيف يمكنني حجز موعد في العيادات؟"
      },
      answer: {
        en: "You can book an appointment online through our website by clicking the 'Book Appointment' button, or by calling our customer service at +966 55 123 4567, or via WhatsApp at +966 55 987 6543. Walk-ins are also welcome, though pre-booking is recommended to minimize waiting times.",
        ar: "يمكنك حجز موعد عبر موقعنا الإلكتروني بالضغط على زر 'حجز موعد'، أو عن طريق الاتصال بخدمة العملاء على الرقم 4567 123 55 966+ أو عبر الواتساب على الرقم 6543 987 55 966+. نسعد أيضاً باستقبالكم دون موعد مسبق، وإن كنا نفضل الحجز المسبق لتقليل فترة الانتظار."
      }
    },
    {
      question: {
        en: "Do you provide emergency services?",
        ar: "هل تقدمون خدمات الطوارئ الطبية؟"
      },
      answer: {
        en: "Yes, we provide 24/7 emergency and critical care services. Our emergency department is fully staffed with board-certified trauma physicians, paramedics, and state-of-the-art life-support equipment to handle acute medical conditions immediately.",
        ar: "نعم، نحن نقدم خدمات الطوارئ والعناية الحرجة على مدار الساعة 24/7. قسم الطوارئ لدينا مجهز بالكامل بأطباء طوارئ وحوادث معتمدين، ومسعفين، وأحدث أجهزة دعم الحياة للتعامل مع جميع الحالات الطبية الطارئة فوراً."
      }
    },
    {
      question: {
        en: "What are your working hours?",
        ar: "ما هي أوقات العمل الرسمية للعيادات؟"
      },
      answer: {
        en: "Our outpatient clinics operate Saturday through Thursday from 9:00 AM to 11:00 PM, and on Fridays from 2:00 PM to 10:00 PM. The Emergency Department and critical care teams operate 24 hours a day, 7 days a week.",
        ar: "تعمل العيادات الخارجية من السبت إلى الخميس من الساعة 9:00 صباحاً حتى 11:00 مساءً، ويوم الجمعة من الساعة 2:00 ظهراً حتى 10:00 مساءً. أما قسم الطوارئ وفرق العناية الحرجة فتعمل على مدار 24 ساعة طوال أيام الأسبوع."
      }
    },
    {
      question: {
        en: "How can I contact customer support?",
        ar: "كيف يمكنني التواصل مع دعم العملاء؟"
      },
      answer: {
        en: "You can contact our customer support team directly via email at info@alamalteb.sa, or by calling our helpline. You can also chat with our dedicated customer care team in real-time by clicking the floating WhatsApp button at the bottom of the screen.",
        ar: "يمكنك التواصل مع فريق خدمة العملاء ورعاية المرضى مباشرة عبر البريد الإلكتروني info@alamalteb.sa، أو الاتصال بالرقم المخصص. كما يمكنك التحدث مع فريق الدعم مباشرة بالضغط على زر الواتساب العائم أسفل الشاشة."
      }
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-medical-50 dark:bg-medical-950/40 text-medical-600 dark:text-medical-400 flex items-center justify-center mb-4">
              <HelpCircle size={24} />
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black text-slate-800 dark:text-white
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.faqTitle}
            </h2>
            <p className={`mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.faqSubtitle}
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-750 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left rtl:text-right outline-none focus:bg-slate-50/50 dark:focus:bg-slate-750/50 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`text-slate-800 dark:text-white font-bold text-sm sm:text-base leading-snug
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {faq.question[lang]}
                  </span>
                  
                  {/* Plus/Minus Toggle Icon */}
                  <div className={`p-1.5 rounded-lg flex-shrink-0 transition-colors duration-200
                    ${isOpen 
                      ? 'bg-medical-50 dark:bg-medical-950/40 text-medical-600 dark:text-medical-400' 
                      : 'bg-slate-50 dark:bg-slate-700/50 text-slate-400 dark:text-slate-350'
                    }
                  `}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Animated Dropdown Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 border-t border-slate-100/50 dark:border-slate-700/50 pt-4">
                        <p className={`text-slate-500 dark:text-slate-400 text-sm leading-relaxed
                          ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                        `}>
                          {faq.answer[lang]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
