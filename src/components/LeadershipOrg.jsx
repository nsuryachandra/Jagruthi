import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { leadershipData } from '../data/leadership';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Phone, Users, ChevronDown } from 'lucide-react';

const LeadershipOrg = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('core'); // 'core' | 'wing' | 'district'
  const [selectedWing, setSelectedWing] = useState('all'); // 'all' | specific wingId
  const [searchQuery, setSearchQuery] = useState('');
  
  const sectionRef = useRef(null);

  // Listen to custom filter event triggered by the Navbar mega menu
  useEffect(() => {
    const handleFilterWing = (event) => {
      const wingId = event.detail;
      
      // Categorize properly based on selected wing
      if (['bc', 'mbc', 'muslim', 'student', 'singareni', 'disabled', 'farmer', 'health', 'trade', 'intellectual', 'auto', 'labour', 'it', 'dalit', 'adivasi', 'banjara', 'women', 'literature', 'youth', 'legal', 'christian', 'sikh'].includes(wingId)) {
        setActiveTab('wing');
        setSelectedWing(wingId);
      }
      
      // Auto scroll to leadership section
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    };

    window.addEventListener('filter-wing', handleFilterWing);
    return () => window.removeEventListener('filter-wing', handleFilterWing);
  }, []);

  // Filter leadership data based on tab, wing selection, and search query
  const filteredLeaders = leadershipData.filter(leader => {
    if (leader.category !== activeTab) return false;
    if (activeTab === 'wing' && selectedWing !== 'all' && leader.wingId !== selectedWing) return false;

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const nameMatch = leader.name[language].toLowerCase().includes(query) || leader.name.en.toLowerCase().includes(query);
      const roleMatch = leader.role[language].toLowerCase().includes(query) || leader.role.en.toLowerCase().includes(query);
      return nameMatch || roleMatch;
    }

    return true;
  });

  const wingFilterOptions = [
    { id: 'all', label: language === 'en' ? 'All Wings' : 'అన్ని విభాగాలు' },
    { id: 'bc', label: t('wings.bc') },
    { id: 'mbc', label: t('wings.mbc') },
    { id: 'banjara', label: t('wings.banjara') },
    { id: 'health', label: t('wings.health') },
    { id: 'labour', label: t('wings.labour') },
    { id: 'youth', label: t('wings.youth') }
  ];

  return (
    <section id="about-org" ref={sectionRef} className="py-24 bg-[#f5f5f4] relative overflow-hidden border-b border-brand-green-900/5">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-green-800/[0.03] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-brand-gold-600/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green-900 tracking-wide font-display">
            {t('leadership.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-bold uppercase tracking-widest font-telugu">
            {t('leadership.regNo')}
          </p>
          <div className="ornament-line mt-5">
            <div className="ornament-diamond" />
          </div>
        </div>

        {/* Directory Controls Panel */}
        <div className="bg-[#fafaf9] rounded-3xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium border border-brand-green-900/10">
          
          {/* Tabs switch */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl w-full md:w-auto border border-brand-green-900/5">
            <button
              onClick={() => { setActiveTab('core'); setSelectedWing('all'); }}
              className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-display font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'core'
                  ? 'bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-brand-green-900 hover:bg-[#fafaf9]'
              }`}
            >
              {t('leadership.filterCore')}
            </button>
            <button
              onClick={() => { setActiveTab('wing'); setSelectedWing('all'); }}
              className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-display font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'wing'
                  ? 'bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-brand-green-900 hover:bg-[#fafaf9]'
              }`}
            >
              {t('leadership.filterWings')}
            </button>
            <button
              onClick={() => { setActiveTab('district'); setSelectedWing('all'); }}
              className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-display font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'district'
                  ? 'bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-brand-green-900 hover:bg-[#fafaf9]'
              }`}
            >
              {t('leadership.filterDistricts')}
            </button>
          </div>

          {/* Wing specific filters (Visible only in Wing Tab) */}
          {activeTab === 'wing' && (
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider hidden lg:inline">Filter Wing:</span>
              <div className="relative w-full md:w-48">
                <select
                  value={selectedWing}
                  onChange={(e) => setSelectedWing(e.target.value)}
                  className="w-full bg-white border border-brand-green-900/15 rounded-xl px-4 py-2.5 text-slate-700 text-xs sm:text-sm focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all cursor-pointer appearance-none font-telugu font-semibold shadow-sm"
                >
                  {wingFilterOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={language === 'en' ? "Search leaders..." : "నాయకుల కోసం వెతకండి..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-green-900/15 rounded-xl pl-10 pr-4 py-2.5 text-slate-700 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all font-telugu font-semibold shadow-sm"
            />
          </div>

        </div>

        {/* Directory Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader) => (
              <motion.div
                layout
                key={leader.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl p-0.5 bg-gradient-to-b from-brand-green-900/5 to-transparent hover:from-brand-gold-700/10 shadow-premium hover:shadow-premium-hover border border-brand-green-900/10 group transition-all duration-300"
              >
                <div className="bg-[#fafaf9] rounded-[15px] p-5 h-full flex flex-col items-center justify-between text-center relative overflow-hidden">
                  
                  {/* Decorative gold corner background */}
                  <div className="absolute top-0 right-0 h-16 w-16 bg-[radial-gradient(ellipse_at_top_right,rgba(180,83,9,0.03),transparent_50%)]" />

                  {/* Profile Avatar Emblem */}
                  <div className="h-20 w-20 rounded-full bg-brand-green-50 border-2 border-brand-green-900/10 flex items-center justify-center text-brand-green-900 font-extrabold text-lg shadow-inner mb-4 mt-2 group-hover:border-brand-gold-700/35 transition-colors relative select-none">
                    <span className="uppercase tracking-widest font-serif">{leader.avatar}</span>
                    {/* Ring glow on hover */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-brand-gold-700/0 group-hover:border-brand-gold-700/20 group-hover:animate-spin-slow transition-all" />
                  </div>

                  {/* Name and Role */}
                  <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-wide font-display group-hover:text-brand-green-900 transition-colors leading-tight">
                      {leader.name[language]}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-bold text-brand-gold-700 tracking-wider font-telugu uppercase">
                      {leader.role[language]}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-stone-200/60 my-4" />

                  {/* Interactive Details / Contact Buttons */}
                  <div className="w-full space-y-2">
                    {leader.phone ? (
                      <div className="flex items-center justify-center gap-2 text-xs text-slate-700 hover:text-brand-green-900 transition-colors py-1.5 rounded bg-brand-green-50/40 border border-brand-green-900/5 font-semibold">
                        <Phone className="h-3 w-3 text-brand-green-800" />
                        <span>{leader.phone}</span>
                      </div>
                    ) : (
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest py-1 select-none">
                        Telangana Committee
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredLeaders.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-[#fafaf9] border border-brand-green-900/10 rounded-3xl shadow-premium animate-fadeIn"
          >
            <Users className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 font-display">
              {language === 'en' ? "No leaders found" : "ఎటువంటి నాయకులు లభించలేదు"}
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-telugu">
              {language === 'en' ? "Try adjusting your search criteria." : "మీ శోధన పదాలను మార్చి మళ్లీ ప్రయత్నించండి."}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default LeadershipOrg;
