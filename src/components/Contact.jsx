import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, Check } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { translations } from '../data/translations';

export default function Contact({ lang }) {
  const t = translations[lang];

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = lang === 'ar' ? 'الاسم مطلوب (3 أحرف على الأقل)' : 'Name is required (at least 3 characters)';
    }
    const phoneRegex = /^(05|5|\+9665)[0-9]{8}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = lang === 'ar' ? 'رقم الجوال غير صحيح' : 'Invalid phone number';
    }
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = lang === 'ar' ? 'الرسالة مطلوبة (10 أحرف على الأقل)' : 'Message is required (at least 10 characters)';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      id: 'phone',
      icon: Phone,
      title: lang === 'ar' ? 'اتصل بنا' : 'Phone Call',
      value: clinicInfo.phone,
      actionLabel: lang === 'ar' ? 'اتصل الآن' : 'Call Now',
      href: `tel:${clinicInfo.phoneFormatted}`,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border-blue-100/50'
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      title: lang === 'ar' ? 'تواصل معنا واتساب' : 'WhatsApp Support',
      value: clinicInfo.whatsapp,
      actionLabel: lang === 'ar' ? 'محادثة' : 'Chat Now',
      href: `https://wa.me/${clinicInfo.whatsappFormatted}?text=${encodeURIComponent(t.whatsappMessage)}`,
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-100/50'
    },
    {
      id: 'email',
      icon: Mail,
      title: lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address',
      value: clinicInfo.email,
      actionLabel: lang === 'ar' ? 'إرسال بريد' : 'Send Email',
      href: `mailto:${clinicInfo.email}`,
      color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border-indigo-100/50'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
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
              {t.contactTitle}
            </h2>
            <p className={`mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.contactSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Contact Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info & coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold text-slate-850 dark:text-white mb-2
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                {t.contactGetInTouch}
              </h3>
              
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.id}
                    initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-750 p-5 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${detail.color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className={`text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider
                          ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                        `}>
                          {detail.title}
                        </h4>
                        <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5 select-all font-inter">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                    
                    <a
                      href={detail.href}
                      target={detail.id === 'whatsapp' ? "_blank" : undefined}
                      rel={detail.id === 'whatsapp' ? "noopener noreferrer" : undefined}
                      className={`px-4 py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-350 text-xs font-bold rounded-xl border border-slate-100 dark:border-slate-850 transition-colors outline-none focus:ring-2 focus:ring-medical-500
                        ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                      `}
                    >
                      {detail.actionLabel}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Address & Fake Map preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-750 p-6 rounded-3xl shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-medical-50 text-medical-600 dark:bg-medical-950/40 dark:text-medical-400 border border-medical-100/50 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className={`text-xs font-semibold text-slate-400 dark:text-slate-550 uppercase tracking-wider
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  {lang === 'ar' ? 'العنوان والموقع' : 'Location Address'}
                </h4>
                <p className={`text-sm font-bold text-slate-850 dark:text-white mt-1 leading-relaxed
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  {clinicInfo.address[lang]}
                </p>
                <a
                  href="https://maps.google.com/?q=King+Fahd+Road+Riyadh+Saudi+Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-3 text-xs text-medical-600 hover:text-medical-700 dark:text-medical-400 dark:hover:text-medical-300 font-bold underline outline-none
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}
                >
                  {lang === 'ar' ? 'عرض على خرائط جوجل ↗' : 'View on Google Maps ↗'}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right panel: Simulated message form */}
          <motion.div 
            className="lg:col-span-7 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-750 rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="flex flex-col">
                  <label htmlFor="name" className={`text-xs font-bold text-slate-500 dark:text-slate-400 mb-2
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {t.contactFormName} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors
                      ${errors.name ? 'border-red-500 dark:border-red-500' : ''}
                      ${lang === 'ar' ? 'font-cairo text-right' : 'font-inter text-left'}
                    `}
                    placeholder={lang === 'ar' ? 'اكتب اسمك الثلاثي...' : 'John Doe...'}
                  />
                  {errors.name && (
                    <span className={`text-xs text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone field */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className={`text-xs font-bold text-slate-500 dark:text-slate-400 mb-2
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {t.contactFormPhone} *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors font-inter
                      ${errors.phone ? 'border-red-500 dark:border-red-500' : ''}
                      ${lang === 'ar' ? 'text-right' : 'text-left'}
                    `}
                    placeholder="e.g. 0551234567"
                  />
                  {errors.phone && (
                    <span className={`text-xs text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email field */}
              <div className="flex flex-col">
                <label htmlFor="email" className={`text-xs font-bold text-slate-500 dark:text-slate-400 mb-2
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  {t.contactFormEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors font-inter
                    ${lang === 'ar' ? 'text-right' : 'text-left'}
                  `}
                  placeholder="e.g. name@email.com"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col">
                <label htmlFor="message" className={`text-xs font-bold text-slate-500 dark:text-slate-400 mb-2
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  {t.contactFormMessage} *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors resize-none
                    ${errors.message ? 'border-red-500 dark:border-red-500' : ''}
                    ${lang === 'ar' ? 'font-cairo text-right' : 'font-inter text-left'}
                  `}
                  placeholder={lang === 'ar' ? 'اكتب استفسارك بالتفصيل هنا...' : 'Type your detailed message here...'}
                />
                {errors.message && (
                  <span className={`text-xs text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`w-full py-4 bg-medical-600 hover:bg-medical-700 disabled:bg-medical-450 dark:disabled:bg-medical-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-medical-600/10 active:scale-98 transition-all outline-none focus:ring-4 focus:ring-medical-200
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}
              >
                {isSubmitting ? (
                  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : submitSuccess ? (
                  <>
                    <Check size={18} />
                    <span>{lang === 'ar' ? 'تم الإرسال بنجاح' : 'Sent Successfully'}</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className={lang === 'ar' ? 'transform scale-x-[-1]' : ''} />
                    <span>{t.contactFormSubmit}</span>
                  </>
                )}
              </button>
            </form>

            {/* Success Prompt Banner */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-3
                    ${lang === 'ar' ? 'font-cairo text-right' : 'font-inter text-left'}
                  `}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                    {t.contactFormSuccess}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
