import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Compass, Eye, Calendar } from 'lucide-react';

const AboutSection = () => {
  const { language, t } = useLanguage();

  const historyPoints = Array.isArray(t('history.points')) ? t('history.points') : [];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-[#fafaf9] text-slate-800">
      
      {/* 1. Founder & President Sub-section */}
      <section id="about-founder" className="relative py-24 border-b border-brand-green-900/5 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green-900 tracking-wide font-display">
              {t('founder.title')}
            </h2>
            {/* Majestic Heritage Ornament Divider */}
            <div className="ornament-line mt-5">
              <div className="ornament-diamond" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Premium Interactive Founder Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[360px] rounded-3xl p-0.5 bg-gradient-to-b from-brand-green-700/10 via-brand-gold-600/10 to-transparent shadow-premium shadow-premium-hover border border-brand-green-900/10"
              >
                <div className="bg-[#fafaf9] rounded-[22px] p-6 text-center relative overflow-hidden flex flex-col items-center">
                  
                  {/* Decorative gold corner grid */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,rgba(180,83,9,0.05),transparent_50%)]" />
                  
                  {/* Premium Monogram/Avatar Badge */}
                  <div className="h-44 w-44 rounded-full bg-gradient-to-tr from-brand-green-50 via-brand-green-100/50 to-brand-gold-300/10 border-2 border-brand-gold-700/20 flex items-center justify-center p-3 relative mb-6 shadow-sm mt-4">
                    {/* Glowing light ring */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-brand-gold-700/20 animate-spin-slow" />
                    
                    {/* Stylized Vector Portrait Emblem */}
                    <svg className="w-full h-full text-brand-gold-600 filter drop-shadow-[0_2px_4px_rgba(180,83,9,0.15)]" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" fill="rgba(6,78,59,0.05)" />
                      {/* Stylized hair/crown shape */}
                      <path d="M30 42 C30 25, 70 25, 70 42 C70 42, 75 52, 68 56 C62 60, 68 72, 50 72 C32 72, 38 60, 32 56 C25 52, 30 42, 30 42 Z" fill="url(#avatarHair)" />
                      {/* Traditional forehead bindi */}
                      <circle cx="50" cy="46" r="3" fill="#ef4444" className="animate-pulse" />
                      {/* Royal collar/ornaments */}
                      <path d="M 38 65 C 42 72, 58 72, 62 65 C 60 76, 40 76, 38 65 Z" fill="url(#avatarGold)" />
                      {/* Monogram letters KK in fine gold calligraphy */}
                      <text x="50" y="85" textAnchor="middle" fill="#0f5132" fontSize="11" fontWeight="bold" letterSpacing="2">Smt. KK</text>
                      
                      <defs>
                        <linearGradient id="avatarHair" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#16a34a" />
                          <stop offset="100%" stopColor="#15803d" />
                        </linearGradient>
                        <linearGradient id="avatarGold" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#facc15" />
                          <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-800 tracking-wide font-display">
                    {t('founder.subtitle')}
                  </h3>
                  <p className="text-xs font-bold text-brand-gold-700 uppercase tracking-widest mt-1 mb-4">
                    {language === 'en' ? 'Founder & President' : 'వ్యవస్థాపక అధ్యక్షురాలు'}
                  </p>
                  
                  <div className="w-full h-[1px] bg-brand-green-900/10 my-3" />
                  
                  {/* Mini Info Details */}
                  <div className="grid grid-cols-2 gap-4 w-full text-left pt-2 pb-2">
                    <div className="p-2.5 rounded-lg bg-white border border-brand-green-900/5">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Joined</span>
                      <span className="text-xs font-bold text-brand-green-800">2006 (Founder)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-brand-green-900/5">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Focus</span>
                      <span className="text-xs font-bold text-brand-green-800">Culture & Welfare</span>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </div>

            {/* Right Column: Bio Paragraphs */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-slate-600 leading-relaxed font-telugu">
              <p className="text-xl sm:text-2xl text-brand-green-900 font-extrabold italic font-serif leading-relaxed">
                "{language === 'en' 
                  ? 'Reviving the heritage of Telangana is not just a project, it is the heartbeat of our separate statehood soul.' 
                  : 'తెలంగాణ వారసత్వాన్ని పునరుద్ధరించడం అనేది ఒక ప్రాజెక్ట్ మాత్రమే కాదు, అది మన ప్రత్యేక రాష్ట్ర ఆత్మ యొక్క గుండెచప్పుడు.'}"
              </p>
              <p className="text-sm sm:text-base font-medium">
                {t('founder.p1')}
              </p>
              <p className="text-sm sm:text-base font-medium">
                {t('founder.p2')}
              </p>
              <p className="text-sm sm:text-base font-medium">
                {t('founder.p3')}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Vision & Mission Sub-section */}
      <section id="about-vision" className="relative py-24 bg-[#f5f5f4] border-b border-brand-green-900/5">
        
        {/* Decorative corner light */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brand-green-700/5 to-transparent blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green-900 tracking-wide font-display">
              {t('vision.title')}
            </h2>
            <div className="ornament-line mt-5">
              <div className="ornament-diamond" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-3xl bg-[#fafaf9] border border-brand-green-900/10 shadow-premium shadow-premium-hover overflow-hidden group"
            >
              {/* Glow background anchor */}
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-green-600/5 group-hover:bg-brand-green-600/10 blur-2xl transition-colors" />
              
              <div className="h-12 w-12 rounded-2xl bg-brand-green-50 border border-brand-green-900/10 flex items-center justify-center text-brand-green-900 mb-6 shadow-sm">
                <Eye className="h-6 w-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-green-900 mb-4 font-display">
                {t('vision.visionTitle')}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-telugu font-medium">
                {t('vision.visionText')}
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-3xl bg-[#fafaf9] border border-brand-gold-700/10 shadow-premium shadow-premium-hover overflow-hidden group"
            >
              {/* Glow background anchor */}
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-gold-500/5 group-hover:bg-brand-gold-500/10 blur-2xl transition-colors" />

              <div className="h-12 w-12 rounded-2xl bg-amber-50 border border-brand-gold-700/15 flex items-center justify-center text-brand-gold-700 mb-6 shadow-sm">
                <Compass className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold text-brand-green-900 mb-4 font-display">
                {t('vision.missionTitle')}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-telugu font-medium">
                {t('vision.missionText')}
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. History Timeline Sub-section */}
      <section id="about-history" className="relative py-24 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green-900 tracking-wide font-display">
              {t('history.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-bold uppercase tracking-widest font-telugu">
              {t('history.subtitle')}
            </p>
            <div className="ornament-line mt-5">
              <div className="ornament-diamond" />
            </div>
          </div>

          <p className="text-center max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed mb-16 font-telugu font-medium">
            {t('history.intro')}
          </p>

          {/* Timeline Process */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-green-800 via-brand-gold-500 to-brand-green-100/50" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              {historyPoints.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`flex flex-col md:flex-row relative ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Dot on Timeline line */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-[7px] top-6 h-3.5 w-3.5 rounded-full bg-[#fafaf9] border-2 border-brand-gold-700 z-10 shadow-sm" />

                    {/* Timeline Card */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="relative p-6 rounded-2xl bg-[#f5f5f4] border border-brand-green-900/10 hover:border-brand-gold-700/25 hover:bg-[#fafaf9] shadow-premium hover:shadow-premium-hover transition-all duration-300 group">
                        
                        {/* Year Badge */}
                        <div className="flex items-center gap-2 text-brand-gold-700 font-bold text-lg mb-2">
                          <Calendar className="h-4 w-4 text-brand-green-800" />
                          <span className="font-serif font-extrabold">{item.year}</span>
                        </div>
                        
                        <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2 font-display group-hover:text-brand-green-900 transition-colors">
                          {item.title[language]}
                        </h4>
                        
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-telugu font-semibold">
                          {item.desc[language]}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for Desktop */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutSection;
