import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { translations } from '../data/translations';

export default function Reviews({ lang }) {
  const t = translations[lang];

  const reviewsList = [
    {
      id: 1,
      name: {
        en: "Eng. Khalid Al-Fahad",
        ar: "المهندس خالد الفهد"
      },
      rating: 5,
      comment: {
        en: "Highly professional dental clinic! Dr. Faisal was extremely patient and detailed when explaining my clear aligners treatment. The clinics are exceptionally clean and modern.",
        ar: "عيادة أسنان احترافية للغاية! كان الدكتور فيصل صبوراً جداً وقدم شرحاً تفصيلياً لتقويم الأسنان الشفاف. العيادات نظيفة ومتطورة بشكل استثنائي."
      },
      role: {
        en: "Dental Patient",
        ar: "مريض عيادة الأسنان"
      }
    },
    {
      id: 2,
      name: {
        en: "Sarah Ahmed",
        ar: "سارة أحمد"
      },
      rating: 5,
      comment: {
        en: "I visited the dermatology clinic under Dr. Mona. She is wonderful! My skin has improved significantly after her customized treatment plan. The support team is also very helpful.",
        ar: "زرت عيادة الجلدية تحت إشراف الدكتورة منى. إنها رائعة! تحسنت بشرتي بشكل كبير بعد الخطة العلاجية المخصصة. فريق الدعم متعاون جداً أيضاً."
      },
      role: {
        en: "Dermatology Patient",
        ar: "مريضة عيادة الجلدية"
      }
    },
    {
      id: 3,
      name: {
        en: "Dr. Abdulrahman Al-Harbi",
        ar: "د. عبد الرحمن الحربي"
      },
      rating: 5,
      comment: {
        en: "The emergency department is well-prepared. When we arrived with our child in the middle of the night, Dr. Mahmoud treated us instantly. Thank you for the quick and expert response!",
        ar: "قسم الطوارئ مجهز بشكل ممتاز. عندما وصلنا مع طفلنا في منتصف الليل، استقبلنا الدكتور محمود وعالج الحالة فوراً. شكراً للاستجابة السريعة والخبرة العالية!"
      },
      role: {
        en: "Emergency Visitor",
        ar: "مرافق حالة طارئة"
      }
    },
    {
      id: 4,
      name: {
        en: "Reem Al-Otaibi",
        ar: "ريم العتيبي"
      },
      rating: 5,
      comment: {
        en: "Booking appointments is very convenient. The pediatric section is clean, child-friendly, and Dr. Huda is highly knowledgeable and reassuring. Best clinics in Riyadh.",
        ar: "حجز المواعيد مريح للغاية. قسم الأطفال نظيف ومناسب للأطفال، والدكتورة هدى طبيبة خبيرة وتبعث الطمأنينة في نفوس الآباء. أفضل عيادات في الرياض."
      },
      role: {
        en: "Pediatrics Patient",
        ar: "مريضة عيادة الأطفال"
      }
    }
  ];

  return (
    <section 
      id="reviews" 
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
              {t.reviewsTitle}
            </h2>
            <p className={`mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.reviewsSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsList.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-slate-50 dark:bg-slate-850 rounded-3xl p-8 border border-slate-100 dark:border-slate-850 shadow-sm relative group hover:shadow-lg hover:scale-[1.01] hover:border-medical-100 dark:hover:border-medical-950 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote bubble absolute icon */}
              <div className={`absolute top-6 text-slate-200 dark:text-slate-800 pointer-events-none group-hover:text-medical-200/30 dark:group-hover:text-medical-900/30 transition-colors duration-300
                ${lang === 'ar' ? 'left-6' : 'right-6'}
              `}>
                <Quote size={56} className="transform scale-x-[-1]" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="fill-amber-400 text-amber-400" 
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className={`text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed mb-6 italic relative z-10
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  "{review.comment[lang]}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                {/* Monogram Circle Avatar */}
                <div className="w-12 h-12 rounded-full bg-medical-100 dark:bg-medical-950/50 text-medical-700 dark:text-medical-300 font-bold flex items-center justify-center text-sm shadow-sm select-none border border-medical-200/20">
                  {review.name[lang].slice(idx === 2 ? 3 : 0, (idx === 2 ? 3 : 0) + 1)}
                </div>
                <div>
                  <h4 className={`text-sm sm:text-base font-bold text-slate-800 dark:text-white
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {review.name[lang]}
                  </h4>
                  <p className={`text-[11px] sm:text-xs text-slate-400 dark:text-slate-550 mt-0.5 font-medium
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {review.role[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
