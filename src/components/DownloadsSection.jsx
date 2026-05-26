import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadsSection = () => {
  const { language, t } = useLanguage();

  const triggerDownload = (fileName, svgContent) => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const flagSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
    <rect width="600" height="200" fill="#15803d" />
    <rect y="200" width="600" height="200" fill="#ffffff" />
    <circle cx="300" cy="200" r="85" fill="#ffffff" stroke="#d97706" stroke-width="4" />
    <text x="300" y="208" font-family="sans-serif" font-weight="bold" font-size="20" fill="#dc2626" text-anchor="middle">తెలంగాణ జాగృతి</text>
  </svg>`;

  const getLogoSvg = (langText, subtitle) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="100%" height="100%">
    <rect width="400" height="120" rx="15" fill="#0d1b14" />
    <circle cx="60" cy="60" r="40" fill="none" stroke="#d97706" stroke-width="2" />
    <path d="M 55 35 C 60 36, 68 32, 73 36 C 78 40, 80 45, 81 50 C 82 55, 80 60, 78 65 C 75 70, 70 73, 67 78 C 65 83, 60 85, 55 83 C 50 81, 47 76, 45 71 C 43 66, 38 63, 36 58 C 34 53, 37 48, 41 45 C 45 42, 48 37, 55 35 Z" fill="#15803d" opacity="0.8"/>
    <path d="M 50 48 C 47 54, 47 60, 50 60 C 53 60, 53 54, 50 48 Z" fill="#facc15" />
    <text x="120" y="58" font-family="sans-serif" font-weight="bold" font-size="26" fill="#dc2626">${langText}</text>
    <text x="120" y="82" font-family="sans-serif" font-size="12" fill="#22c55e" letter-spacing="3">${subtitle}</text>
  </svg>`;

  const assets = {
    flag: {
      id: "flag",
      title: t('downloads.flagTitle'),
      desc: t('downloads.flagDesc'),
      fileName: "telangana_jagruthi_flag.svg",
      content: flagSvg,
      render: (
        <div className="w-full h-40 sm:h-48 rounded-xl border border-brand-green-900/10 overflow-hidden flex flex-col shadow-inner bg-stone-100 select-none">
          <div className="flex-1 w-full relative">
            <div className="h-1/2 bg-[#15803d]" />
            <div className="h-1/2 bg-white" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white border border-brand-gold-700 flex items-center justify-center">
              <span className="text-[7px] sm:text-[9px] font-bold text-red-600">తెలంగాణ జాగృతి</span>
            </div>
          </div>
          <div className="bg-[#fafaf9] border-t border-brand-green-900/5 py-2.5 px-4 text-left flex items-center justify-between">
            <span className="text-slate-400 text-xs font-bold">Vector SVG Preview</span>
            <span className="text-brand-green-800 font-extrabold text-xs font-telugu">తెలంగాణ జెండా</span>
          </div>
        </div>
      )
    },
    logos: [
      {
        id: "logo-te",
        langName: "Telugu (తెలుగు)",
        text: "తెలంగాణ జాగృతి",
        subText: "TELANGANA JAGRUTHI",
        fileName: "telangana_jagruthi_logo_telugu.svg",
        content: getLogoSvg("తెలంగాణ జాగృతి", "TELANGANA JAGRUTHI")
      },
      {
        id: "logo-en",
        langName: "English",
        text: "TELANGANA JAGRUTHI",
        subText: "FOUNDED IN 2006",
        fileName: "telangana_jagruthi_logo_english.svg",
        content: getLogoSvg("TELANGANA JAGRUTHI", "FOUNDED IN 2006")
      },
      {
        id: "logo-hi",
        langName: "Hindi (हिंदी)",
        text: "तेलंगाना जागृति",
        subText: "TELANGANA JAGRUTHI",
        fileName: "telangana_jagruthi_logo_hindi.svg",
        content: getLogoSvg("तेलंगाना जागृति", "TELANGANA JAGRUTHI")
      },
      {
        id: "logo-ur",
        langName: "Urdu (اردو)",
        text: "تلنگانہ جاگرتی",
        subText: "TELANGANA JAGRUTHI",
        fileName: "telangana_jagruthi_logo_urdu.svg",
        content: getLogoSvg("تلنگانہ جاگرتی", "TELANGANA JAGRUTHI")
      }
    ]
  };

  return (
    <section id="downloads" className="py-24 bg-[#f5f5f4] relative overflow-hidden border-b border-brand-green-900/5">
      
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-brand-green-800/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-brand-gold-600/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green-900 tracking-wide font-display">
            {t('downloads.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-bold uppercase tracking-widest font-telugu">
            {t('downloads.subtitle')}
          </p>
          <div className="ornament-line mt-5">
            <div className="ornament-diamond" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Flag Card */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 tracking-wide border-l-2 border-brand-gold-700 pl-3 font-display">
              {t('downloads.flagTitle')}
            </h3>
            
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#fafaf9] rounded-3xl p-6 border border-brand-green-900/10 shadow-premium space-y-6"
            >
              {assets.flag.render}

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-telugu font-semibold">
                  {assets.flag.desc}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-bold select-none">
                  <ShieldCheck className="h-4 w-4 text-brand-green-800 shrink-0" />
                  <span>High-resolution production ready SVG vector format</span>
                </div>
              </div>

              <button
                onClick={() => triggerDownload(assets.flag.fileName, assets.flag.content)}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-green-800 to-brand-green-900 hover:from-brand-green-700 hover:to-brand-green-800 text-white text-[10px] sm:text-xs font-display font-black uppercase tracking-widest transition-all shadow-sm cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>{t('common.download')} FLAG (SVG)</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Logos Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 tracking-wide border-l-2 border-brand-green-800 pl-3 font-display">
              {t('downloads.logoTitle')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {assets.logos.map((logo) => (
                <motion.div
                  key={logo.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#fafaf9] rounded-2xl p-5 border border-brand-green-900/10 flex flex-col justify-between space-y-4 shadow-premium hover:shadow-premium-hover hover:border-brand-gold-700/25"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold text-brand-gold-700 tracking-wider uppercase block select-none">
                      {logo.langName}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 font-telugu leading-tight">
                      {logo.text}
                    </h4>
                  </div>

                  {/* Vector Logo Preview Box */}
                  <div className="bg-white border border-brand-green-900/5 p-4 rounded-xl flex items-center justify-center h-24 select-none">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full border border-brand-gold-700/30 flex items-center justify-center p-1 bg-brand-green-50">
                        <div className="h-2.5 w-2.5 rounded-full bg-brand-green-800" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-red-600 font-telugu leading-tight">{logo.text}</span>
                        <span className="text-[8px] text-brand-green-900 font-bold tracking-wider font-sans leading-none">{logo.subText}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerDownload(logo.fileName, logo.content)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-900 border border-brand-green-900/15 text-[10px] sm:text-xs font-display font-black uppercase tracking-widest transition-all cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download SVG</span>
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
