import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  const { t } = useLanguage();

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { 
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      ), 
      url: "https://facebook.com/TelanganaJagruthi" 
    },
    { 
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      url: "https://twitter.com/TJagruthi" 
    },
    { 
      icon: (
        <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      url: "https://instagram.com/telanganajagruthi" 
    },
    { 
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      url: "https://youtube.com/user/TelanganaJagruthi" 
    }
  ];

  return (
    <footer className="relative bg-[#0b331c] text-[#f5f5f4] overflow-hidden border-t border-brand-gold-700/25">
      
      {/* Decorative Top Wave Vector */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-gold-500">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Left Block: Logo and Branding */}
          <div className="md:col-span-5 space-y-4">
            <Logo showText={true} className="h-12 w-12" lightBg={false} />
            <p className="text-sm text-stone-200/70 max-w-sm leading-relaxed mt-4 font-telugu">
              {t('hero.subtitle')}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-[#082414] border border-emerald-500/20 flex items-center justify-center text-brand-gold-500 hover:text-emerald-950 hover:bg-brand-gold-500 hover:border-brand-gold-500 transition-all hover:scale-115 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Center Block: Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-[15px] font-extrabold text-brand-gold-500 tracking-wider uppercase border-l-2 border-brand-gold-500 pl-3 font-serif">
              {t('nav.aboutUs')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('about-founder')}
                  className="hover:text-brand-gold-300 hover:translate-x-1.5 transition-all text-left text-stone-200/70 cursor-pointer"
                >
                  {t('nav.founder')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about-vision')}
                  className="hover:text-brand-gold-300 hover:translate-x-1.5 transition-all text-left text-stone-200/70 cursor-pointer"
                >
                  {t('nav.vision')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about-history')}
                  className="hover:text-brand-gold-300 hover:translate-x-1.5 transition-all text-left text-stone-200/70 cursor-pointer"
                >
                  {t('nav.history')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about-org')}
                  className="hover:text-brand-gold-300 hover:translate-x-1.5 transition-all text-left text-stone-200/70 cursor-pointer"
                >
                  {t('nav.organization')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('news')}
                  className="hover:text-brand-gold-300 hover:translate-x-1.5 transition-all text-left text-stone-200/70 cursor-pointer"
                >
                  {t('nav.news')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('downloads')}
                  className="hover:text-brand-gold-300 hover:translate-x-1.5 transition-all text-left text-stone-200/70 cursor-pointer"
                >
                  {t('nav.downloads')}
                </button>
              </li>
            </ul>
          </div>

          {/* Right Block: Address & Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-[15px] font-extrabold text-brand-gold-500 tracking-wider uppercase border-l-2 border-brand-gold-500 pl-3 font-serif">
              {t('contact.officeAddress')}
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-stone-200/70 font-telugu font-medium">
                  {t('contact.addressVal')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-brand-gold-500 shrink-0" />
                <a href="tel:04023511111" className="hover:text-brand-gold-300 transition-colors text-stone-200/70 font-medium">
                  040 - 2351 1111
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-brand-gold-500 shrink-0" />
                <a href="mailto:telanganajagruthi@gmail.com" className="hover:text-brand-gold-300 transition-colors text-stone-200/70 font-medium">
                  telanganajagruthi@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-500/20 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Telangana Jagruthi. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
