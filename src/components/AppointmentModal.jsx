import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Check, ClipboardList } from 'lucide-react';
import { departmentsList, doctorsData } from '../data/doctors';
import { translations } from '../data/translations';

export default function AppointmentModal({ isOpen, onClose, lang, selectedDoc = null, selectedDeptId = null, onSubmitSuccess }) {
  const t = translations[lang];
  const modalRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    departmentId: '',
    doctorId: '',
    date: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset or prefill form when modal opens or selections change
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        phone: '',
        departmentId: selectedDeptId || (selectedDoc ? selectedDoc.departmentId : ''),
        doctorId: selectedDoc ? selectedDoc.id : '',
        date: ''
      });
      setErrors({});
      
      // Focus on first input
      setTimeout(() => {
        const nameInput = document.getElementById('modal-name');
        if (nameInput) nameInput.focus();
      }, 100);
    }
  }, [isOpen, selectedDoc, selectedDeptId]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Derived list of doctors for the chosen department
  const filteredDoctors = orignDoctorsForDept(formData.departmentId);

  function orignDoctorsForDept(deptId) {
    if (!deptId) return [];
    return doctorsData.filter(doc => doc.departmentId === deptId);
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value };
      // If changing department, reset selected doctor
      if (field === 'departmentId') {
        next.doctorId = '';
      }
      return next;
    });

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name: Required, min 3 chars
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = t.bookingValidationName;
    }

    // Phone: Saudi phone validation (e.g., +966551234567, 0551234567)
    // Accept +966 followed by 9 digits, or 05 followed by 8 digits
    const phoneRegex = /^(05|5|\+9665)[0-9]{8}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = t.bookingValidationPhone;
    }

    // Department: Required
    if (!formData.departmentId) {
      newErrors.departmentId = t.bookingValidationDept;
    }

    // Doctor: Required
    if (!formData.doctorId) {
      newErrors.doctorId = t.bookingValidationDoc;
    }

    // Date: Required & must be future date
    if (!formData.date) {
      newErrors.date = t.bookingValidationDate;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // compare date only
      if (selectedDate < today) {
        newErrors.date = t.bookingValidationDate;
      }
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
    
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(); // trigger parent success toast
      onClose();         // close modal
    }, 1500);
  };

  // Get current date string for min date attribute in form (prevent past dates in browser calendar picker)
  const getTodayString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-y-auto max-h-[90vh] z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            
            {/* Modal Header */}
            <div className="px-5 sm:px-6 py-4 sm:py-5 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-750 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-medical-600 dark:text-medical-400">
                <ClipboardList size={22} />
                <h2 
                  id="modal-title" 
                  className={`text-lg sm:text-xl font-bold
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}
                >
                  {t.bookingTitle}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 outline-none"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 sm:space-y-5">
              
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="modal-name" className={`text-xs font-bold text-slate-500 dark:text-slate-450 mb-1.5 flex items-center gap-1.5
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  <User size={14} className="text-slate-400" />
                  <span>{t.bookingFormName} *</span>
                </label>
                <input
                  type="text"
                  id="modal-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors
                    ${errors.name ? 'border-red-500 dark:border-red-500' : ''}
                    ${lang === 'ar' ? 'font-cairo text-right pr-4' : 'font-inter text-left pl-4'}
                  `}
                  placeholder={lang === 'ar' ? 'اكتب اسمك الثلاثي...' : 'e.g. Abdullah Salem'}
                />
                {errors.name && (
                  <span className={`text-[11px] text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label htmlFor="modal-phone" className={`text-xs font-bold text-slate-500 dark:text-slate-450 mb-1.5 flex items-center gap-1.5
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  <Phone size={14} className="text-slate-400" />
                  <span>{t.bookingFormPhone} *</span>
                </label>
                <input
                  type="text"
                  id="modal-phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors font-inter
                    ${errors.phone ? 'border-red-500 dark:border-red-500' : ''}
                    ${lang === 'ar' ? 'text-right pr-4' : 'text-left pl-4'}
                  `}
                  placeholder="e.g. 0551234567"
                />
                {errors.phone && (
                  <span className={`text-[11px] text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Grid: Department & Doctor Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Department Select */}
                <div className="flex flex-col">
                  <label htmlFor="modal-dept" className={`text-xs font-bold text-slate-500 dark:text-slate-450 mb-1.5
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {t.bookingFormDept} *
                  </label>
                  <select
                    id="modal-dept"
                    value={formData.departmentId}
                    onChange={(e) => handleInputChange('departmentId', e.target.value)}
                    className={`px-3 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors
                      ${errors.departmentId ? 'border-red-500 dark:border-red-500' : ''}
                      ${lang === 'ar' ? 'font-cairo text-right' : 'font-inter text-left'}
                    `}
                  >
                    <option value="">{lang === 'ar' ? '-- اختر القسم --' : '-- Choose Dept --'}</option>
                    {departmentsList.map(dept => (
                      <option key={dept.id} value={dept.id}>{dept.name[lang]}</option>
                    ))}
                  </select>
                  {errors.departmentId && (
                    <span className={`text-[11px] text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                      {errors.departmentId}
                    </span>
                  )}
                </div>

                {/* Doctor Select */}
                <div className="flex flex-col">
                  <label htmlFor="modal-doctor" className={`text-xs font-bold text-slate-500 dark:text-slate-450 mb-1.5
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}>
                    {t.bookingFormDoc} *
                  </label>
                  <select
                    id="modal-doctor"
                    value={formData.doctorId}
                    disabled={!formData.departmentId}
                    onChange={(e) => handleInputChange('doctorId', e.target.value)}
                    className={`px-3 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 text-slate-850 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors disabled:opacity-60
                      ${errors.doctorId ? 'border-red-500 dark:border-red-500' : ''}
                      ${lang === 'ar' ? 'font-cairo text-right' : 'font-inter text-left'}
                    `}
                  >
                    <option value="">
                      {!formData.departmentId ? t.bookingSelectDept : t.bookingSelectDoc}
                    </option>
                    {filteredDoctors.map(doc => (
                      <option key={doc.id} value={doc.id}>{doc.name[lang]}</option>
                    ))}
                  </select>
                  {errors.doctorId && (
                    <span className={`text-[11px] text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                      {errors.doctorId}
                    </span>
                  )}
                </div>
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col">
                <label htmlFor="modal-date" className={`text-xs font-bold text-slate-500 dark:text-slate-450 mb-1.5 flex items-center gap-1.5
                  ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                `}>
                  <Calendar size={14} className="text-slate-400" />
                  <span>{t.bookingFormDate} *</span>
                </label>
                <input
                  type="date"
                  id="modal-date"
                  min={getTodayString()}
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 text-slate-800 dark:text-white text-sm outline-none focus:border-medical-500 dark:focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-colors font-inter
                    ${errors.date ? 'border-red-500 dark:border-red-500' : ''}
                    ${lang === 'ar' ? 'text-right pr-4' : 'text-left pl-4'}
                  `}
                />
                {errors.date && (
                  <span className={`text-[11px] text-red-500 mt-1 font-semibold ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
                    {errors.date}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-750">
                <button
                  type="button"
                  onClick={onClose}
                  className={`px-5 py-3 rounded-xl text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-750 text-sm font-bold transition-colors outline-none focus:ring-1 focus:ring-slate-400
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}
                >
                  {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-medical-600 hover:bg-medical-700 disabled:bg-medical-450 text-white font-bold rounded-xl shadow-lg shadow-medical-600/10 active:scale-98 transition-all flex items-center gap-2 text-sm outline-none focus:ring-2 focus:ring-medical-500
                    ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                  `}
                >
                  {isSubmitting ? (
                    <span className="h-4.5 w-4.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Check size={16} />
                      <span>{t.bookingFormSubmit}</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
