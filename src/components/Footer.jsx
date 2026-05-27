import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  const { language, t } = useLanguage();

  const go = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const socialLinks = [
    {
      label: 'Facebook',
      url: 'https://facebook.com/TelanganaJagruthi',
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    },
    {
      label: 'Twitter / X',
      url: 'https://twitter.com/TJagruthi',
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/telangana_jagruthi_official/',
      icon: (
        <svg className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      label: 'YouTube',
      url: 'https://youtube.com/user/TelanganaJagruthi',
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  const navLinks = [
    { id: 'hero',           label: t('nav.home') },
    { id: 'about-founder',  label: t('nav.founder') },
    { id: 'about-vision',   label: t('nav.vision') },
    { id: 'about-history',  label: t('nav.history') },
    { id: 'programs',       label: language === 'en' ? 'Programs' : 'కార్యక్రమాలు' },
    { id: 'wings',          label: language === 'en' ? 'Wings' : 'విభాగాలు' },
    { id: 'news',           label: t('nav.news') },
    { id: 'videos',         label: language === 'en' ? 'Videos' : 'వీడియోలు' },
    { id: 'downloads',      label: t('nav.downloads') },
    { id: 'contact',        label: t('nav.contact') }
  ];
  const galleryImages = Array.from({ length: 9 }, (_, i) => `https://telanganajagruthi.org/wp-content/uploads/2024/04/footer-gallery-0${i + 1}.jpg`);
  const doubledGallery = [...galleryImages, ...galleryImages];

  return (
    <footer className="bg-[#0a361e] text-white">
      {/* Top golden party stripe */}
      <div className="h-1 bg-gradient-to-r from-[#0f5132] via-[#a16207] to-[#0f5132]" />

      {/* Footer Gallery Infinite Scrolling Carousel */}
      <div className="w-full bg-[#072c18] py-5 border-b border-[#a16207]/20 overflow-hidden relative group">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a16207]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a16207]/30 to-transparent" />
        
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] transition-all">
          {doubledGallery.map((imgUrl, index) => (
            <div key={index} className="w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 flex-shrink-0 overflow-hidden border border-[#a16207]/20 relative shadow-sm transition-opacity duration-300 hover:opacity-90">
              <img
                src={imgUrl}
                alt={`Telangana Jagruthi Gallery ${index + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => go('hero')}>
              <Logo className="h-11 w-11 flex-shrink-0" lightBg={false} />
              <div>
                <p className="text-xs font-black tracking-[0.16em] uppercase text-white font-display">
                  Telangana Jagruthi
                </p>
                <p className="text-[9px] text-[#a16207] tracking-widest uppercase font-bold font-ui">Official Website</p>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-[220px] font-sans">
              {language === 'en'
                ? 'A registered political organisation dedicated to Telangana heritage, welfare, and people\'s rights since 2006.'
                : '2006 నుండి తెలంగాణ వారసత్వం, సంక్షేమం మరియు ప్రజల హక్కులకు అంకితమైన నమోదిత రాజకీయ సంస్థ.'}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-8 w-8 bg-white/8 hover:bg-[#a16207] text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 hover:border-[#a16207]"
                  style={{ borderRadius: '2px' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.18em] text-[#a16207] mb-5 pb-2 border-b border-white/10 font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className="text-xs text-white/60 hover:text-white transition-colors cursor-pointer flex items-center gap-2 hover:gap-3 font-ui font-medium"
                  >
                    <span className="h-px w-3 bg-[#a16207] flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.18em] text-[#a16207] mb-5 pb-2 border-b border-white/10 font-display">
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#a16207]" />, val: t('contact.addressVal') },
                { icon: <Phone className="h-3.5 w-3.5 flex-shrink-0 text-[#a16207]" />,         val: t('contact.phoneVal') },
                { icon: <Mail className="h-3.5 w-3.5 flex-shrink-0 text-[#a16207]" />,          val: t('contact.emailVal') }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  {item.icon}
                  <span className="text-xs text-white/60 leading-relaxed font-sans">
                    {item.val}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[9px] text-white/40 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Telangana Jagruthi. All Rights Reserved.
          </p>
          <p className="text-[9px] text-white/30 font-medium">
            {language === 'en' ? 'Built for the People of Telangana' : 'తెలంగాణ ప్రజల కోసం నిర్మించబడింది'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
