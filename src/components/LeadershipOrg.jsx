import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { leadershipData } from '../data/leadership';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, Users, ChevronDown } from 'lucide-react';

const LeadershipOrg = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab]     = useState('core');
  const [selectedWing, setSelectedWing] = useState('all');
  const [searchQuery, setSearchQuery]   = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleFilterWing = (event) => {
      const wingId = event.detail;
      if (['bc','mbc','muslim','student','singareni','disabled','farmer','health','trade',
           'intellectual','auto','labour','it','dalit','adivasi','banjara','women',
           'literature','youth','legal','christian','sikh'].includes(wingId)) {
        setActiveTab('wing');
        setSelectedWing(wingId);
      }
      setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    };
    window.addEventListener('filter-wing', handleFilterWing);
    return () => window.removeEventListener('filter-wing', handleFilterWing);
  }, []);

  const filteredLeaders = leadershipData.filter(leader => {
    if (leader.category !== activeTab) return false;
    if (activeTab === 'wing' && selectedWing !== 'all' && leader.wingId !== selectedWing) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        leader.name[language].toLowerCase().includes(q) ||
        leader.name.en.toLowerCase().includes(q) ||
        leader.role[language].toLowerCase().includes(q)
      );
    }
    return true;
  });

  const wingFilterOptions = [
    { id: 'all',       label: language === 'en' ? 'All Wings' : 'అన్ని విభాగాలు' },
    { id: 'bc',        label: t('wings.bc') },
    { id: 'mbc',       label: t('wings.mbc') },
    { id: 'banjara',   label: t('wings.banjara') },
    { id: 'health',    label: t('wings.health') },
    { id: 'labour',    label: t('wings.labour') },
    { id: 'youth',     label: t('wings.youth') }
  ];

  const tabs = [
    { id: 'core',     label: t('leadership.filterCore') },
    { id: 'wing',     label: t('leadership.filterWings') },
    { id: 'district', label: t('leadership.filterDistricts') }
  ];

  return (
    <section
      id="about-org"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#f8f7f5] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="mb-10 sm:mb-14">
          <span className="section-eyebrow mb-4 inline-flex">
            <Users className="h-3.5 w-3.5" />
            {language === 'en' ? 'Party Leadership' : 'పార్టీ నాయకత్వం'}
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mt-3 mb-2">{t('leadership.title')}</h2>
          <p className="text-[10px] text-[#a16207] font-bold uppercase tracking-widest mt-1">
            {t('leadership.regNo')}
          </p>
          <div className="flex items-center gap-2 mt-5">
            <div className="h-0.5 w-12 bg-[#0f5132]" />
            <div className="h-1.5 w-1.5 bg-[#a16207] rotate-45" />
            <div className="h-0.5 w-4 bg-[#a16207]" />
          </div>
        </div>

        {/* ── Controls Panel ── */}
        <div className="bg-white border border-gray-200 border-t-2 border-t-[#0f5132] p-4 sm:p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderRadius: '2px' }}>

          {/* Tab switcher */}
          <div className="flex items-center gap-0 border border-gray-200 overflow-hidden"
            style={{ borderRadius: '2px' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedWing('all'); }}
                className={[
                  'px-4 py-2.5 text-[9px] font-display font-black uppercase tracking-widest transition-all cursor-pointer border-r border-gray-200 last:border-r-0 whitespace-nowrap',
                  activeTab === tab.id
                    ? 'bg-[#0f5132] text-white'
                    : 'bg-white text-gray-500 hover:bg-[#f0fdf4] hover:text-[#0f5132]'
                ].join(' ')}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            {/* Wing filter dropdown */}
            {activeTab === 'wing' && (
              <div className="relative">
                <select
                  value={selectedWing}
                  onChange={(e) => setSelectedWing(e.target.value)}
                  className="w-full sm:w-44 bg-white border border-gray-200 px-3 py-2.5 text-[11px] text-gray-600 focus:outline-none focus:border-[#0f5132] transition-all cursor-pointer appearance-none font-medium pr-8"
                  style={{ borderRadius: '2px' }}
                >
                  {wingFilterOptions.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
              </div>
            )}

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search leaders...' : 'నాయకుల కోసం వెతకండి...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-white border border-gray-200 pl-9 pr-4 py-2.5 text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#0f5132] transition-all"
                style={{ borderRadius: '2px' }}
              />
            </div>
          </div>
        </div>

        {/* ── Leaders Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader) => (
              <motion.div
                layout
                key={leader.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="official-card bg-white group cursor-default"
              >
                <div className="p-4 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#f0fdf4] border-2 border-[#0f5132]/15 flex items-center justify-center text-[#0f5132] font-black text-sm mb-3 mt-2 group-hover:border-[#a16207]/40 transition-colors select-none"
                    style={{ fontFamily: 'Cinzel, serif' }}>
                    {leader.avatar}
                  </div>

                  {/* Name */}
                  <h3 className="text-xs sm:text-sm font-black text-[#0a361e] leading-tight mb-1 group-hover:text-[#0f5132] transition-colors"
                    style={{ fontFamily: 'Cinzel, serif' }}>
                    {leader.name[language]}
                  </h3>

                  {/* Role */}
                  <p className="text-[9px] sm:text-[10px] font-bold text-[#a16207] uppercase tracking-wider leading-tight"
                    style={{ fontFamily: 'Mandali, sans-serif' }}>
                    {leader.role[language]}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 my-3" />

                  {/* Contact */}
                  {leader.phone ? (
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
                      <Phone className="h-3 w-3 text-[#0f5132]" />
                      <span>{leader.phone}</span>
                    </div>
                  ) : (
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                      Telangana Committee
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredLeaders.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white border border-gray-200"
            style={{ borderRadius: '2px' }}
          >
            <Users className="h-10 w-10 text-gray-300 mx-auto mb-4" />
            <h3 className="text-base font-black text-gray-600 font-display"
              style={{ fontFamily: 'Cinzel, serif' }}>
              {language === 'en' ? 'No leaders found' : 'ఎటువంటి నాయకులు లభించలేదు'}
            </h3>
            <p className="text-xs text-gray-400 mt-2">
              {language === 'en' ? 'Try adjusting your search criteria.' : 'మీ శోధన పదాలను మార్చి మళ్లీ ప్రయత్నించండి.'}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default LeadershipOrg;
