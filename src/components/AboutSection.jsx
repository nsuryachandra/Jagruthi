import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Compass, Eye, Calendar, Quote } from 'lucide-react';

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="mb-12 sm:mb-16">
    <span className="section-eyebrow mb-4 inline-flex">{eyebrow}</span>
    <h2 className="section-title text-3xl sm:text-4xl mt-3 mb-4">{title}</h2>
    {subtitle && (
      <p className="text-sm text-gray-500 font-medium max-w-xl leading-relaxed">{subtitle}</p>
    )}
    <div className="flex items-center gap-2 mt-5">
      <div className="h-0.5 w-12 bg-[#0f5132]" />
      <div className="h-1.5 w-1.5 bg-[#a16207] rotate-45" />
      <div className="h-0.5 w-4 bg-[#a16207]" />
    </div>
  </div>
);

const AboutSection = ({ section }) => {
  const { language, t } = useLanguage();
  const historyPoints = Array.isArray(t('history.points')) ? t('history.points') : [];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };
  const cardVariants = {
    hidden:   { opacity: 0, y: 24 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="bg-[#f8f7f5] text-[#1a2a1f]">

      {/* ══════════════════════════════════════════
          1. FOUNDER SECTION
      ══════════════════════════════════════════ */}
        <section id="about-founder" className="py-20 sm:py-28 border-b border-gray-200 relative">
        {/* Subtle left accent */}
        <div className="absolute left-0 top-12 bottom-12 w-0.5 bg-gradient-to-b from-transparent via-[#0f5132]/20 to-transparent hidden lg:block" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={<><Award className="h-3.5 w-3.5" /> {language === 'en' ? 'Our Leader' : 'మా నాయకురాలు'}</>}
            title={t('founder.title')}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: Founder Card */}
            <div className="lg:col-span-4">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="official-card bg-white"
              >
                {/* Card header strip */}
                <div className="h-2 w-full bg-gradient-to-r from-[#0f5132] to-[#a16207] rounded-t-none" />

                <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                  {/* Avatar emblem */}
                  <div className="relative mb-6 mt-2">
                    <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] border-4 border-[#0f5132]/15 flex items-center justify-center shadow-inner">
                      <img
                        src="https://www.telanganajagruthi.org/wp-content/uploads/2025/10/about-us-kalvakuntla-kavitha.jpg"
                        alt="Smt. Kalvakuntla Kavitha"
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </div>
                    {/* Official badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0f5132] text-white text-[7px] font-ui font-black uppercase tracking-widest px-3 py-1 whitespace-nowrap"
                      style={{ borderRadius: '1px' }}>
                      Founder & President
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0a361e] mt-4 font-display">
                    {t('founder.subtitle')}
                  </h3>
                  <p className="text-xs text-[#a16207] font-bold uppercase tracking-widest mt-1 mb-5 font-ui">
                    {language === 'en' ? 'Telangana Rakshana Sena' : 'తెలంగాణ రక్షణ సేన'}
                  </p>

                  <div className="w-full h-px bg-gray-100 mb-5" />

                  <div className="grid grid-cols-2 gap-3 w-full text-left">
                    <div className="bg-[#f8f7f5] border border-gray-100 p-3 border-l-2 border-l-[#0f5132]">
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Founded</p>
                      <p className="text-xs font-black text-[#0f5132] mt-0.5">2006</p>
                    </div>
                    <div className="bg-[#f8f7f5] border border-gray-100 p-3 border-l-2 border-l-[#a16207]">
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Focus</p>
                      <p className="text-xs font-black text-[#0f5132] mt-0.5">Culture & Welfare</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Bio */}
            <div className="lg:col-span-8 space-y-6">
              {/* Pull quote */}
              <div className="relative pl-6 border-l-4 border-[#a16207] py-2">
                <Quote className="h-6 w-6 text-[#a16207]/30 absolute -top-1 -left-1" />
                <p className="text-base sm:text-lg text-[#0a361e] font-bold font-serif leading-relaxed italic">
                  {language === 'en'
                    ? '"Reviving the heritage of Telangana is not just a project — it is the heartbeat of our separate statehood soul."'
                    : '"తెలంగాణ వారసత్వాన్ని పునరుద్ధరించడం అనేది ఒక ప్రాజెక్ట్ మాత్రమే కాదు, అది మన ప్రత్యేక రాష్ట్ర ఆత్మ యొక్క గుండెచప్పుడు."'}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#3a4a3f] leading-relaxed font-sans">
                <p>{t('founder.p1')}</p>
                <p>{t('founder.p2')}</p>
                <p>{t('founder.p3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. VISION & MISSION
      ══════════════════════════════════════════ */}
      <section id="about-vision" className="py-20 sm:py-28 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={<><Eye className="h-3.5 w-3.5" /> {language === 'en' ? 'Our Purpose' : 'మా లక్ష్యం'}</>}
            title={t('vision.title')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="official-card bg-white p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-[#f0fdf4] border border-[#0f5132]/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-5 w-5 text-[#0f5132]" />
                </div>
                <h3 className="text-xl font-black text-[#0a361e] font-display">
                  {t('vision.visionTitle')}
                </h3>
              </div>
              <div className="h-0.5 w-full bg-gradient-to-r from-[#0f5132]/30 to-transparent mb-5" />
              <p className="text-sm sm:text-base text-[#3a4a3f] leading-relaxed font-sans">
                {t('vision.visionText')}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="official-card official-card-gold bg-white p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-[#fffbeb] border border-[#a16207]/20 flex items-center justify-center flex-shrink-0">
                  <Compass className="h-5 w-5 text-[#a16207]" />
                </div>
                <h3 className="text-xl font-black text-[#0a361e] font-display">
                  {t('vision.missionTitle')}
                </h3>
              </div>
              <div className="h-0.5 w-full bg-gradient-to-r from-[#a16207]/30 to-transparent mb-5" />
              <p className="text-sm sm:text-base text-[#3a4a3f] leading-relaxed font-sans">
                {t('vision.missionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. HISTORY TIMELINE
      ══════════════════════════════════════════ */}
      <section id="about-history" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={<><Calendar className="h-3.5 w-3.5" /> {language === 'en' ? 'Our Journey' : 'మా ప్రయాణం'}</>}
            title={t('history.title')}
            subtitle={t('history.subtitle')}
          />

          <p className="text-sm sm:text-base text-[#3a4a3f] leading-relaxed mb-16 max-w-3xl font-sans">
            {t('history.intro')}
          </p>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0f5132] via-[#a16207] to-gray-200" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-10"
            >
              {historyPoints.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`flex flex-col md:flex-row relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-[5px] top-5 h-3 w-3 bg-white border-2 border-[#a16207] z-10 shadow-sm"
                      style={{ borderRadius: '1px' }} />

                    {/* Card */}
                    <div className="w-full md:w-1/2 pl-8 pr-4 md:pl-0 md:pr-0 md:px-8">
                      <div className="official-card bg-white p-5 group cursor-default hover:border-t-[#a16207]">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="h-3.5 w-3.5 text-[#0f5132] flex-shrink-0" />
                          <span className="text-base font-black text-[#a16207] font-display">{item.year}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0a361e] mb-2 group-hover:text-[#0f5132] transition-colors">
                          {item.title[language]}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                          {item.desc[language]}
                        </p>
                      </div>
                    </div>

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
