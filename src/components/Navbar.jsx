import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { ChevronDown, Menu, X, Globe, UserPlus } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'about' or 'wings' or null

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: t('nav.home') },
    {
      id: 'about',
      label: t('nav.aboutUs'),
      dropdown: [
        { id: 'about-founder', label: t('nav.founder') },
        { id: 'about-vision', label: t('nav.vision') },
        { id: 'about-history', label: t('nav.history') },
        { id: 'about-org', label: t('nav.organization') }
      ]
    },
    {
      id: 'wings',
      label: t('nav.wings'),
      mega: true,
      wingsList: [
        { id: 'bc', label: t('wings.bc') },
        { id: 'mbc', label: t('wings.mbc') },
        { id: 'muslim', label: t('wings.muslim') },
        { id: 'student', label: t('wings.student') },
        { id: 'singareni', label: t('wings.singareni') },
        { id: 'disabled', label: t('wings.disabled') },
        { id: 'farmer', label: t('wings.farmer') },
        { id: 'health', label: t('wings.health') },
        { id: 'trade', label: t('wings.trade') },
        { id: 'intellectual', label: t('wings.intellectual') },
        { id: 'auto', label: t('wings.auto') },
        { id: 'labour', label: t('wings.labour') },
        { id: 'it', label: t('wings.it') },
        { id: 'dalit', label: t('wings.dalit') },
        { id: 'adivasi', label: t('wings.adivasi') },
        { id: 'banjara', label: t('wings.banjara') },
        { id: 'women', label: t('wings.women') },
        { id: 'literature', label: t('wings.literature') },
        { id: 'youth', label: t('wings.youth') },
        { id: 'legal', label: t('wings.legal') },
        { id: 'christian', label: t('wings.christian') },
        { id: 'sikh', label: t('wings.sikh') }
      ]
    },
    { id: 'news', label: t('nav.news') },
    { id: 'downloads', label: t('nav.downloads') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-[#fafaf9]/92 border-b border-brand-green-900/5 shadow-premium backdrop-blur-md'
          : 'py-5.5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="cursor-pointer" onClick={() => navigateTo('hero')}>
            <Logo className="h-10.5 w-10.5 sm:h-11.5 sm:w-11.5" lightBg={true} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-3.5 py-2.5 text-[11.5px] font-display font-black uppercase tracking-widest flex items-center gap-1 rounded-xl transition-all cursor-pointer ${
                        activeDropdown === item.id || activeSection.startsWith('about-')
                          ? 'text-brand-green-900 bg-brand-green-50/70 border border-brand-green-900/10'
                          : 'text-[#1c2c22] hover:text-brand-green-800 hover:bg-brand-green-50/40'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="absolute left-0 mt-1.5 w-56 rounded-2xl bg-[#fafaf9] border border-brand-gold-700/15 shadow-xl p-2 animate-fadeIn">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => navigateTo(sub.id)}
                            className={`w-full text-left px-3.5 py-2 text-[14px] rounded-lg transition-colors font-semibold cursor-pointer ${
                              activeSection === sub.id
                                ? 'text-brand-green-900 bg-brand-green-50/60 font-extrabold'
                                : 'text-slate-600 hover:text-brand-green-900 hover:bg-brand-green-50/40'
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.mega) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-3.5 py-2.5 text-[11.5px] font-display font-black uppercase tracking-widest flex items-center gap-1 rounded-xl transition-all cursor-pointer ${
                        activeDropdown === item.id || activeSection === 'about-org'
                          ? 'text-brand-green-900 bg-brand-green-50/70 border border-brand-green-900/10'
                          : 'text-[#1c2c22] hover:text-brand-green-800 hover:bg-brand-green-50/40'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-1.5 w-[80vw] max-w-4xl rounded-2xl bg-[#fafaf9] border border-brand-gold-700/15 shadow-2xl p-6.5 grid grid-cols-4 gap-4 animate-fadeIn max-h-[70vh] overflow-y-auto">
                        <div className="col-span-4 border-b border-brand-green-900/10 pb-2 mb-2 flex items-center justify-between">
                          <span className="text-brand-green-900 font-extrabold tracking-wider text-base font-serif">తెలంగాణ జాగృతి విభాగాలు</span>
                          <span className="text-brand-gold-700 text-xs font-bold uppercase tracking-widest bg-amber-50 border border-brand-gold-700/10 px-2.5 py-0.5 rounded-full">22 Org Wings</span>
                        </div>
                        {item.wingsList.map((wing) => (
                          <button
                            key={wing.id}
                            onClick={() => {
                              navigateTo('about-org');
                              window.dispatchEvent(new CustomEvent('filter-wing', { detail: wing.id }));
                            }}
                            className="text-left px-3 py-2 rounded-lg text-slate-600 hover:text-brand-green-950 hover:bg-brand-green-50/50 text-xs sm:text-[13.5px] transition-all hover:translate-x-1.5 flex items-center gap-2 border border-transparent hover:border-brand-green-900/10 font-medium cursor-pointer"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-green-600"></span>
                            {wing.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-3.5 py-2.5 text-[11.5px] font-display font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer ${
                    activeSection === item.id
                      ? 'text-brand-green-900 bg-brand-green-50/70 border border-brand-green-900/10'
                      : 'text-[#1c2c22] hover:text-brand-green-800 hover:bg-brand-green-50/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Language & Register */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher Capsule */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-brand-green-50 hover:bg-brand-green-100/70 text-xs font-extrabold tracking-wider text-brand-green-900 border border-brand-green-900/15 transition-all cursor-pointer shadow-sm"
            >
              <Globe className="h-3.5 w-3.5 text-brand-gold-600" />
              <span>{language === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* CTA Register Button */}
            <button
              onClick={() => navigateTo('contact')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-green-800 to-brand-green-900 hover:from-brand-green-700 hover:to-brand-green-800 text-white text-[11px] font-display font-extrabold uppercase tracking-widest transition-all shadow-sm cursor-pointer hover:shadow-md transform hover:-translate-y-0.5"
            >
              <UserPlus className="h-4 w-4" />
              {t('common.joinUs')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-green-50 border border-brand-green-900/15 text-xs font-bold text-brand-green-900"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language === 'en' ? 'తె' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-brand-green-900 hover:bg-brand-green-50 border border-brand-green-900/10 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#fafaf9]/98 backdrop-blur-lg border-t border-brand-green-900/10 flex flex-col lg:hidden animate-slideIn">
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3.5">
            {menuItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.id} className="space-y-1">
                    <div className="px-3 py-1.5 text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-brand-green-900/5">
                      {item.label}
                    </div>
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => navigateTo(sub.id)}
                        className={`w-full text-left px-5 py-2.5 text-sm rounded-lg transition-colors font-bold cursor-pointer ${
                          activeSection === sub.id
                            ? 'text-brand-green-900 bg-brand-green-50 font-bold'
                            : 'text-slate-600 hover:text-brand-green-900 hover:bg-slate-50'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                );
              }

              if (item.mega) {
                return (
                  <div key={item.id} className="space-y-1">
                    <div className="px-3 py-1.5 text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-brand-green-900/5">
                      {item.label} (22)
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 p-2 bg-stone-50 rounded-xl max-h-[30vh] overflow-y-auto border border-brand-green-900/5">
                      {item.wingsList.map((wing) => (
                        <button
                          key={wing.id}
                          onClick={() => {
                            navigateTo('about-org');
                            window.dispatchEvent(new CustomEvent('filter-wing', { detail: wing.id }));
                          }}
                          className="text-left px-3 py-2 rounded-lg text-slate-600 text-xs font-semibold hover:text-brand-green-900 cursor-pointer"
                        >
                          {wing.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full text-left px-3 py-2.5 text-base font-bold rounded-lg transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'text-brand-green-900 bg-brand-green-50'
                      : 'text-slate-600 hover:text-brand-green-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Join Us Mobile Button */}
          <div className="p-4 border-t border-brand-green-900/10 bg-[#fafaf9] flex items-center justify-center">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white font-bold tracking-wide text-sm shadow-sm cursor-pointer"
            >
              <UserPlus className="h-4 w-4" />
              {t('common.joinUs')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
