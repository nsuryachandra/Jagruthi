import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, ShieldCheck, Flag, Image } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadsSection = () => {
  const { language, t } = useLanguage();

  const handleDownload = async (url, customName) => {
    try {
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = customName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.warn("Direct blob download failed, falling back to link download:", error);
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.download = customName;
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const logos = [
    {
      id: 'logo-te',
      langName: 'Telugu (తెలుగు)',
      title: { en: 'Official Telugu Logo', te: 'అధికారిక తెలుగు లోగో' },
      desc: { en: 'Main identity logo in Telugu script, optimized for state-level campaigns and local media.', te: 'రాష్ట్రవ్యాప్త ప్రచారాలు మరియు స్థానిక మీడియాకు అనువైన ప్రధాన తెలుగు అధికారిక లోగో.' },
      imageUrl: 'https://www.telanganajagruthi.org/wp-content/uploads/2025/11/jagruthi-telugu-logo-scaled.png',
      downloadName: 'logo-telugu-jagruthi.png',
      bgColor: 'bg-[#0a361e]'
    },
    {
      id: 'logo-en',
      langName: 'English Identity',
      title: { en: 'Official English Logo', te: 'అధికారిక ఇంగ్లీష్ లోగో' },
      desc: { en: 'International outreach logo in English script, designed for national and global releases.', te: 'జాతీయ మరియు అంతర్జాతీయ ప్రచారాల కోసం రూపొందించబడిన ఇంగ్లీష్ అధికారిక లోగో.' },
      imageUrl: 'https://www.telanganajagruthi.org/wp-content/uploads/2025/11/telangana-jagruthi-telaugu-logo-scaled.png',
      downloadName: 'logo-english-jagruthi.png',
      bgColor: 'bg-[#0a361e]'
    },
    {
      id: 'logo-ur',
      langName: 'Urdu (اردو)',
      title: { en: 'Official Urdu Logo', te: 'అధికారిక ఉర్దూ లోగో' },
      desc: { en: 'Identity logo in Urdu script, celebrating the syncretic culture and legacy of Telangana.', te: 'తెలంగాణ గంగా-జమునా తెహజీబ్ సంస్కృతిని ప్రతిబింబించే అధికారిక ఉర్దూ లోగో.' },
      imageUrl: 'https://www.telanganajagruthi.org/wp-content/uploads/2026/01/tj-oldloo-urdu-scaled.png',
      downloadName: 'logo-urdu-jagruthi.png',
      bgColor: 'bg-white border border-gray-100'
    },
    {
      id: 'logo-hi',
      langName: 'Hindi (हिंदी)',
      title: { en: 'Official Hindi Logo', te: 'అధికారిక హిందీ లోగో' },
      desc: { en: 'Identity logo in Hindi Devanagari script, optimized for national cultural forums.', te: 'జాతీయ సాంస్కృతిక వేదికలు మరియు సదస్సుల కొరకు రూపొందించిన అధికారిక హిందీ లోగో.' },
      imageUrl: 'https://www.telanganajagruthi.org/wp-content/uploads/2026/01/tj-old-logo-hindi-scaled.png',
      downloadName: 'logo-hindi-jagruthi.png',
      bgColor: 'bg-white border border-gray-100'
    }
  ];

  return (
    <section id="downloads" className="py-20 sm:py-28 bg-[#fbfbfa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="section-eyebrow mb-4 inline-flex">
            <Download className="h-3.5 w-3.5" />
            {language === 'en' ? 'Official Brand Assets' : 'అధికారిక బ్రాండ్ ఆస్తులు'}
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mt-3 mb-2">{t('downloads.title')}</h2>
          <p className="text-sm text-gray-500 max-w-xl">{t('downloads.subtitle')}</p>
          <div className="flex items-center gap-2 mt-5">
            <div className="h-0.5 w-12 bg-[#0f5132]" />
            <div className="h-1.5 w-1.5 bg-[#a16207] rotate-45" />
            <div className="h-0.5 w-4 bg-[#a16207]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Official Flag */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <Flag className="h-4 w-4 text-[#a16207]" />
              <h3 className="text-sm font-black text-[#0a361e] font-display uppercase tracking-wider">
                {t('downloads.flagTitle')}
              </h3>
            </div>

            <motion.div 
              whileHover={{ y: -4 }} 
              transition={{ duration: 0.3 }}
              className="official-card bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Flag image preview */}
              <div className="h-56 sm:h-64 bg-[#0a361e]/5 flex items-center justify-center p-6 border-b border-gray-100 overflow-hidden relative">
                <img 
                  src="https://www.telanganajagruthi.org/wp-content/uploads/2025/11/jagruthi-flag.png" 
                  alt="Telangana Jagruthi Official Flag" 
                  className="max-h-full max-w-full object-contain shadow-md transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[7px] font-black uppercase tracking-widest px-2.5 py-1" style={{ borderRadius: '1px' }}>
                  PNG Format
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-sm font-display font-display font-black text-[#0a361e]">
                    {language === 'en' ? 'Telangana Jagruthi Flag (High-Res)' : 'తెలంగాణ జాగృతి జెండా (హై-రెజల్యూషన్)'}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                    {t('downloads.flagDesc')}
                  </p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#0f5132] flex-shrink-0" />
                    {language === 'en' ? 'Verified Official Asset' : 'ధృవీకరించబడిన అధికారిక ఆస్తి'}
                  </div>
                  <button
                    onClick={() => handleDownload('https://www.telanganajagruthi.org/wp-content/uploads/2025/11/jagruthi-flag.png', 'flag-telangana-jagruthi.png')}
                    className="btn-primary btn-gold w-full justify-center py-3 text-[9px] uppercase tracking-widest font-ui"
                    style={{ borderRadius: '2px' }}
                  >
                    <Download className="h-4 w-4" />
                    {t('common.download')} FLAG (PNG)
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Multi-lingual Logos */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5">
              <Image className="h-4 w-4 text-[#a16207]" />
              <h3 className="text-sm font-black text-[#0a361e] font-display uppercase tracking-wider">
                {t('downloads.logoTitle')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {logos.map((logo) => (
                <motion.div
                  key={logo.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="official-card bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-black text-[#a16207] uppercase tracking-widest font-ui">
                        {logo.langName}
                      </span>
                      <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest px-2 py-0.5 bg-gray-100">
                        PNG
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-display font-black text-[#0a361e] leading-snug">
                      {logo.title[language]}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans font-medium">
                      {logo.desc[language]}
                    </p>
                  </div>

                  {/* Logo preview display */}
                  <div className={`h-24 rounded-sm flex items-center justify-center p-4 relative overflow-hidden select-none ${logo.bgColor}`}>
                    <img 
                      src={logo.imageUrl} 
                      alt={logo.title[language]} 
                      className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    />
                  </div>

                  <button
                    onClick={() => handleDownload(logo.imageUrl, logo.downloadName)}
                    className="btn-secondary w-full justify-center py-2.5 text-[9px] uppercase tracking-widest font-ui hover:border-[#0f5132]"
                    style={{ borderRadius: '2px' }}
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download PNG
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
