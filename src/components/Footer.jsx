import { HeartPulse, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { translations } from '../data/translations';

export default function Footer({ lang, onNavClick }) {
  const t = translations[lang];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    onNavClick(id);
  };

  const socialIcons = [
    { icon: Facebook, href: clinicInfo.socials.facebook, label: 'Facebook' },
    { icon: Twitter, href: clinicInfo.socials.twitter, label: 'Twitter' },
    { icon: Instagram, href: clinicInfo.socials.instagram, label: 'Instagram' },
    { icon: Linkedin, href: clinicInfo.socials.linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors duration-300">
      
      {/* Top Footer Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-medical-600 flex items-center justify-center text-white shadow-lg shadow-medical-600/10">
                <HeartPulse size={20} />
              </div>
              <span className={`text-lg font-black text-white leading-tight
                ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
              `}>
                {clinicInfo.name[lang]}
              </span>
            </div>
            
            <p className={`text-slate-400 text-sm leading-relaxed max-w-sm
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.footerDesc}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3.5 pt-2">
              {socialIcons.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-medical-600 text-slate-400 hover:text-white transition-all flex items-center justify-center border border-slate-750/30 hover:border-transparent hover:scale-105 active:scale-95 duration-200 outline-none focus:ring-2 focus:ring-medical-500"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className={`text-sm font-bold text-white uppercase tracking-wider
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.footerQuickLinks}
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { id: 'home', label: t.navHome },
                { id: 'departments', label: t.navDepartments },
                { id: 'about', label: t.navAbout },
                { id: 'reviews', label: t.navReviews },
                { id: 'faq', label: t.navFaq },
                { id: 'contact', label: t.navContact }
              ].map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`hover:text-medical-400 transition-colors outline-none focus:underline
                      ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h3 className={`text-sm font-bold text-white uppercase tracking-wider
              ${lang === 'ar' ? 'font-cairo' : 'font-inter'}
            `}>
              {t.footerContactInfo}
            </h3>
            
            <ul className="space-y-4 text-sm font-inter">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-medical-500 mt-1 flex-shrink-0" />
                <span className={lang === 'ar' ? 'font-cairo' : 'font-inter'}>
                  {clinicInfo.address[lang]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-medical-500 flex-shrink-0" />
                <a href={`tel:${clinicInfo.phoneFormatted}`} className="hover:text-medical-400 transition-colors">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-medical-500 flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-medical-400 transition-colors">
                  {clinicInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="bg-slate-950 border-t border-slate-800/60 py-6 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={lang === 'ar' ? 'font-cairo' : 'font-inter'}>
            {t.footerCopyright}
          </p>
          <p className="text-slate-650 font-inter">
            {lang === 'ar' 
              ? 'موقع تجريبي - جميع البيانات مستخدمة للتوضيح فقط' 
              : 'Demo Website - All records are fictional/for display only'
            }
          </p>
        </div>
      </div>

    </footer>
  );
}
