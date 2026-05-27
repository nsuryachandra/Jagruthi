import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { ChevronDown, Menu, X, Globe, UserPlus, ChevronRight } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen]               = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const menuItems = [
    { id: 'hero', label: t('nav.home') },
    {
      id: 'about', label: t('nav.aboutUs'),
      dropdown: [
        { id: 'about-founder', label: t('nav.founder') },
        { id: 'about-vision',  label: t('nav.vision') },
        { id: 'about-history', label: t('nav.history') },
        { id: 'about-org',     label: t('nav.organization') }
      ]
    },
    { id: 'programs',  label: language === 'en' ? 'Programs' : 'కార్యక్రమాలు' },
    {
      id: 'wings', label: language === 'en' ? 'Wings' : 'విభాగాలు', mega: true,
      wingsList: [
        { id: 'bc',          label: t('wings.bc') },
        { id: 'mbc',         label: t('wings.mbc') },
        { id: 'muslim',      label: t('wings.muslim') },
        { id: 'student',     label: t('wings.student') },
        { id: 'singareni',   label: t('wings.singareni') },
        { id: 'disabled',    label: t('wings.disabled') },
        { id: 'farmer',      label: t('wings.farmer') },
        { id: 'health',      label: t('wings.health') },
        { id: 'trade',       label: t('wings.trade') },
        { id: 'intellectual',label: t('wings.intellectual') },
        { id: 'auto',        label: t('wings.auto') },
        { id: 'labour',      label: t('wings.labour') },
        { id: 'it',          label: t('wings.it') },
        { id: 'dalit',       label: t('wings.dalit') },
        { id: 'adivasi',     label: t('wings.adivasi') },
        { id: 'banjara',     label: t('wings.banjara') },
        { id: 'women',       label: t('wings.women') },
        { id: 'literature',  label: t('wings.literature') },
        { id: 'youth',       label: t('wings.youth') },
        { id: 'legal',       label: t('wings.legal') },
        { id: 'christian',   label: t('wings.christian') },
        { id: 'sikh',        label: t('wings.sikh') }
      ]
    },
    { id: 'news',      label: t('nav.news') },
    { id: 'videos',    label: language === 'en' ? 'Videos' : 'వీడియోలు' },
    { id: 'downloads', label: t('nav.downloads') },
    { id: 'contact',   label: t('nav.contact') }
  ];

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isActive = (item) => {
    if (item.dropdown) return item.dropdown.some(d => d.id === activeSection);
    return activeSection === item.id;
  };

  /* shared nav-link class builder */
  const navLinkCls = (active) => [
    'flex items-center gap-1 px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] transition-all cursor-pointer border-b-2 whitespace-nowrap',
    active
      ? 'text-[#0f5132] border-[#0f5132] bg-[#f0fdf4]'
      : 'text-[#2a3a2e] border-transparent hover:text-[#0f5132] hover:border-[#0f5132]/40 hover:bg-[#f0fdf4]/60'
  ].join(' ');

  return (
    <>
      {/* ── Party Stripe (top of page) ── */}
      <div className="fixed top-0 left-0 right-0 z-[60] party-stripe" />

      {/* ── Main Navbar ── */}
      <nav
        className={[
          'fixed top-[4px] left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white border-b border-gray-200 shadow-[0_2px_20px_rgba(0,0,0,0.07)]'
            : 'bg-white border-b border-gray-100'
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[62px] lg:h-[66px]">

            {/* ── Brand ── */}
            <button onClick={() => navigateTo('hero')}
              className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer group">
              <Logo className="h-[38px] w-[38px] lg:h-[42px] lg:w-[42px] transition-transform group-hover:scale-105" lightBg={true} />
              <div className="flex flex-col items-start">
                <span
                  className="text-[13px] lg:text-[14px] font-display font-black leading-none tracking-[0.08em] uppercase text-[#0a361e]"
                >
                  Telangana Jagruthi
                </span>
                <span
                  className="text-[9px] tracking-[0.22em] uppercase font-ui font-bold text-[#a16207] leading-none mt-[3px]"
                >
                  {language === 'en' ? 'తెలంగాణ జాగృతి' : 'Telangana Jagruthi'}
                </span>
              </div>
            </button>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center font-ui">
              {menuItems.map((item) => {
                if (item.dropdown) return (
                  <div key={item.id} className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                    <button className={navLinkCls(isActive(item))}>
                      {item.label}
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="absolute left-0 top-full w-52 bg-white border border-gray-200 border-t-2 border-t-[#0f5132] shadow-xl animate-slideDown z-50">
                        {item.dropdown.map((sub) => (
                          <button key={sub.id} onClick={() => navigateTo(sub.id)}
                            className={[
                              'w-full text-left px-4 py-2.5 text-[10px] font-ui font-bold transition-all cursor-pointer flex items-center gap-2 border-b border-gray-50 last:border-0 tracking-wider uppercase',
                              activeSection === sub.id
                                ? 'text-[#0f5132] bg-[#f0fdf4]'
                                : 'text-gray-500 hover:text-[#0f5132] hover:bg-[#f0fdf4] hover:pl-6'
                            ].join(' ')}>
                            <ChevronRight className="h-3 w-3 text-[#a16207] flex-shrink-0" />
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );

                if (item.mega) return (
                  <div key={item.id} className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                    <button className={navLinkCls(activeDropdown === item.id || activeSection === 'about-org')}>
                      {item.label}
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-[680px] xl:w-[780px] bg-white border border-gray-200 border-t-2 border-t-[#a16207] shadow-2xl p-5 animate-slideDown z-50">
                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                          <span className="text-[9px] font-display font-black uppercase tracking-widest text-[#0a361e]">
                            Party Wings — 22 Active Divisions
                          </span>
                          <span className="text-[8px] font-ui font-bold bg-amber-50 text-[#a16207] border border-amber-200 px-2 py-0.5 uppercase tracking-wider">తెలంగాణ జాగృతి</span>
                        </div>
                        <div className="grid grid-cols-4 gap-0.5">
                          {item.wingsList.map((wing) => (
                            <button key={wing.id} onClick={() => {
                              navigateTo('wings');
                              window.dispatchEvent(new CustomEvent('filter-wing', { detail: wing.id }));
                            }}
                              className="text-left px-3 py-2 text-[10px] text-gray-600 hover:text-[#0f5132] hover:bg-[#f0fdf4] transition-all cursor-pointer flex items-center gap-1.5 font-ui font-medium">
                              <span className="h-1 w-1 rounded-full bg-[#15803d] flex-shrink-0" />
                              {wing.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );

                return (
                  <button key={item.id} onClick={() => navigateTo(item.id)}
                    className={navLinkCls(activeSection === item.id)}>
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* ── Desktop Right Controls ── */}
            <div className="hidden lg:flex items-center gap-2">
              <button onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 text-[9px] font-ui font-black uppercase tracking-widest text-[#0f5132] bg-[#f0fdf4] border border-[#0f5132]/20 hover:border-[#0f5132]/60 transition-all cursor-pointer"
                style={{ borderRadius: '2px' }}>
                <Globe className="h-3.5 w-3.5 text-[#a16207]" />
                {language === 'en' ? 'తెలుగు' : 'English'}
              </button>
              <button onClick={() => navigateTo('contact')}
                className="btn-primary text-[9px] gap-1.5 px-4 py-2.5"
                style={{ borderRadius: '2px' }}>
                <UserPlus className="h-3.5 w-3.5" />
                {t('common.joinUs')}
              </button>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="flex lg:hidden items-center gap-2">
              <button onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1.5 text-[9px] font-ui font-black uppercase tracking-wider text-[#0f5132] bg-[#f0fdf4] border border-[#0f5132]/20 cursor-pointer"
                style={{ borderRadius: '2px' }}>
                <Globe className="h-3 w-3 text-[#a16207]" />
                {language === 'en' ? 'తె' : 'EN'}
              </button>
              <button onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#0a361e] hover:bg-[#f0fdf4] border border-gray-200 cursor-pointer transition-colors"
                style={{ borderRadius: '2px' }}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t-2 border-t-[#0f5132] shadow-2xl overflow-y-auto max-h-[80svh]">
            <div className="divide-y divide-gray-100">
              {menuItems.map((item) => {
                if (item.dropdown) return (
                  <div key={item.id}>
                    <button onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-[10px] font-ui font-black uppercase tracking-widest text-[#1a2a1f] hover:bg-[#f0fdf4] cursor-pointer transition-colors">
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 text-[#a16207] transition-transform ${mobileExpanded === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.id && (
                      <div className="bg-[#f8f7f5] border-t border-gray-100">
                        {item.dropdown.map((sub) => (
                          <button key={sub.id} onClick={() => navigateTo(sub.id)}
                            className={[
                              'w-full text-left px-8 py-3.5 text-[10px] font-ui font-bold flex items-center gap-2.5 tracking-wider uppercase transition-all cursor-pointer',
                              activeSection === sub.id
                                ? 'text-[#0f5132] bg-[#f0fdf4] border-l-2 border-[#0f5132] pl-7'
                                : 'text-gray-500 hover:text-[#0f5132] hover:bg-[#f0fdf4]'
                            ].join(' ')}>
                            <ChevronRight className="h-3 w-3 text-[#a16207] flex-shrink-0" />
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );

                if (item.mega) return (
                  <div key={item.id}>
                    <button onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-[10px] font-ui font-black uppercase tracking-widest text-[#1a2a1f] hover:bg-[#f0fdf4] cursor-pointer transition-colors">
                      <span>{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[7px] bg-amber-50 text-[#a16207] border border-amber-200 px-1.5 py-0.5 font-bold tracking-wider">22</span>
                        <ChevronDown className={`h-4 w-4 text-[#a16207] transition-transform ${mobileExpanded === item.id ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {mobileExpanded === item.id && (
                      <div className="bg-[#f8f7f5] border-t border-gray-100 p-3">
                        <div className="grid grid-cols-2 gap-1">
                          {item.wingsList.map((wing) => (
                            <button key={wing.id} onClick={() => {
                              navigateTo('wings');
                              window.dispatchEvent(new CustomEvent('filter-wing', { detail: wing.id }));
                            }}
                              className="text-left px-3 py-2 text-[10px] text-gray-600 hover:text-[#0f5132] hover:bg-white transition-all cursor-pointer flex items-center gap-1.5 font-ui font-medium border border-transparent hover:border-gray-200"
                              style={{ borderRadius: '1px' }}>
                              <span className="h-1 w-1 rounded-full bg-[#15803d] flex-shrink-0" />
                              {wing.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );

                return (
                  <button key={item.id} onClick={() => navigateTo(item.id)}
                    className={[
                      'w-full text-left px-5 py-4 text-[10px] font-ui font-black uppercase tracking-widest transition-all cursor-pointer',
                      activeSection === item.id
                        ? 'text-[#0f5132] bg-[#f0fdf4] border-l-4 border-[#0f5132]'
                        : 'text-[#1a2a1f] hover:text-[#0f5132] hover:bg-[#f0fdf4]'
                    ].join(' ')}>
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 bg-[#f8f7f5] border-t border-gray-200">
              <button onClick={() => navigateTo('contact')}
                className="btn-primary w-full justify-center py-3.5 text-[9px]"
                style={{ borderRadius: '2px' }}>
                <UserPlus className="h-4 w-4" />
                {t('common.joinUs')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
