import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, ShieldCheck, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadsSection = () => {
  const { language, t } = useLanguage();

  const triggerDownload = (fileName, svgContent) => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = fileName;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  const flagSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
    <rect width="600" height="200" fill="#15803d"/>
    <rect y="200" width="600" height="200" fill="#ffffff"/>
    <circle cx="300" cy="200" r="85" fill="#ffffff" stroke="#d97706" stroke-width="4"/>
    <text x="300" y="208" font-family="sans-serif" font-weight="bold" font-size="20" fill="#dc2626" text-anchor="middle">తెలంగాణ జాగృతి</text>
  </svg>`;

  const getLogoSvg = (text, subtitle) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="100%" height="100%">
    <rect width="400" height="120" rx="0" fill="#0d1b14"/>
    <circle cx="60" cy="60" r="40" fill="none" stroke="#d97706" stroke-width="2"/>
    <path d="M 55 35 C 60 36, 68 32, 73 36 C 78 40, 80 45, 81 50 C 82 55, 80 60, 78 65 C 75 70, 70 73, 67 78 C 65 83, 60 85, 55 83 C 50 81, 47 76, 45 71 C 43 66, 38 63, 36 58 C 34 53, 37 48, 41 45 C 45 42, 48 37, 55 35 Z" fill="#15803d" opacity="0.8"/>
    <text x="120" y="58" font-family="sans-serif" font-weight="bold" font-size="26" fill="#dc2626">${text}</text>
    <text x="120" y="82" font-family="sans-serif" font-size="12" fill="#22c55e" letter-spacing="3">${subtitle}</text>
  </svg>`;

  const logos = [
    { id: 'logo-te', langName: 'Telugu (తెలుగు)',  text: 'తెలంగాణ జాగృతి',  subText: 'TELANGANA JAGRUTHI', fileName: 'telangana_jagruthi_logo_telugu.svg'  },
    { id: 'logo-en', langName: 'English',           text: 'TELANGANA JAGRUTHI', subText: 'FOUNDED IN 2006',   fileName: 'telangana_jagruthi_logo_english.svg' },
    { id: 'logo-hi', langName: 'Hindi (हिंदी)',     text: 'तेलंगाना जागृति',   subText: 'TELANGANA JAGRUTHI', fileName: 'telangana_jagruthi_logo_hindi.svg'   },
    { id: 'logo-ur', langName: 'Urdu (اردو)',       text: 'تلنگانہ جاگرتی',    subText: 'TELANGANA JAGRUTHI', fileName: 'telangana_jagruthi_logo_urdu.svg'    }
  ];

  return (
    <section id="downloads" className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <span className="section-eyebrow mb-4 inline-flex">
            <Download className="h-3.5 w-3.5" />
            {language === 'en' ? 'Official Assets' : 'అధికారిక ఆస్తులు'}
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mt-3 mb-2">{t('downloads.title')}</h2>
          <p className="text-sm text-gray-500">{t('downloads.subtitle')}</p>
          <div className="flex items-center gap-2 mt-5">
            <div className="h-0.5 w-12 bg-[#0f5132]" />
            <div className="h-1.5 w-1.5 bg-[#a16207] rotate-45" />
            <div className="h-0.5 w-4 bg-[#a16207]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Flag */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <Flag className="h-4 w-4 text-[#a16207]" />
              <h3 className="text-sm font-black text-[#0a361e] font-display">
                {t('downloads.flagTitle')}
              </h3>
            </div>

            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}
              className="official-card bg-white official-card-gold overflow-hidden">
              {/* Flag preview */}
              <div className="h-44 sm:h-52 w-full flex flex-col overflow-hidden select-none">
                <div className="flex-1 bg-[#15803d]" />
                <div className="flex-1 bg-white" />
                {/* Emblem */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ position: 'relative' }}>
                  {/* rendered differently */}
                </div>
              </div>

              {/* Actual flag visual */}
              <div className="h-44 sm:h-52 w-full select-none overflow-hidden relative -mt-44 sm:-mt-52">
                <div className="h-1/2 w-full bg-[#15803d]" />
                <div className="h-1/2 w-full bg-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white border-2 border-[#d97706] flex items-center justify-center shadow-md">
                    <span className="text-[7px] sm:text-[8px] font-bold text-red-600 text-center leading-tight px-1">తెలంగాణ<br/>జాగృతి</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#f8f7f5] border-t border-gray-100 px-4 py-2 flex items-center justify-between">
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">SVG Vector Preview</span>
                  <span className="text-[9px] text-[#0f5132] font-black uppercase tracking-wider font-telugu">తెలంగాణ జెండా</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                  {t('downloads.flagDesc')}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0f5132] flex-shrink-0" />
                  High-resolution production-ready SVG vector format
                </div>
                <button
                  onClick={() => triggerDownload('telangana_jagruthi_flag.svg', flagSvg)}
                  className="btn-primary btn-gold w-full justify-center py-3 text-[9px]"
                  style={{ borderRadius: '2px' }}
                >
                  <Download className="h-4 w-4" />
                  {t('common.download')} FLAG (SVG)
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Logos Grid */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-4 w-4 bg-[#0f5132] flex items-center justify-center">
                <span className="text-[7px] text-white font-black">TJ</span>
              </div>
              <h3 className="text-sm font-black text-[#0a361e] font-display">
                {t('downloads.logoTitle')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {logos.map((logo) => (
                <motion.div
                  key={logo.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="official-card bg-white p-5 flex flex-col justify-between gap-4"
                >
                  <div>
                    <span className="text-[8px] font-black text-[#a16207] uppercase tracking-widest block mb-1 font-ui">
                      {logo.langName}
                    </span>
                    <h4 className="text-xs font-bold text-[#0a361e] leading-tight">{logo.text}</h4>
                  </div>

                  {/* Logo preview */}
                  <div className="bg-[#0d1b14] rounded-sm p-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full border border-[#d97706]/50 flex items-center justify-center flex-shrink-0 bg-[#0f5132]/30">
                      <div className="h-2 w-2 rounded-full bg-[#15803d]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-red-400 leading-tight block">{logo.text}</span>
                      <span className="text-[7px] text-green-400 tracking-wider font-bold">{logo.subText}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerDownload(logo.fileName, getLogoSvg(logo.text, logo.subText))}
                    className="btn-secondary w-full justify-center py-2.5 text-[9px]"
                    style={{ borderRadius: '2px' }}
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download SVG
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
