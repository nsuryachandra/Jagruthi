import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Tv, Film } from 'lucide-react';

const VideoGallery = () => {
  const { language } = useLanguage();
  const [activeVideoId, setActiveVideoId] = useState(null);

  const videos = [
    {
      id: '1toCS6npCJ8',
      title: { en: 'Smt. Kavitha Meets Governor Over Velugumatla Victims', te: 'వెలుగుమట్ల బాధితుల పక్షాన గవర్నర్‌ను కలిసిన కల్వకుంట్ల కవిత గారు' },
      date: '2026-03-12',
      thumbnail: 'https://img.youtube.com/vi/1toCS6npCJ8/maxresdefault.jpg'
    },
    {
      id: 'M1K9ehcMysA',
      title: { en: 'Kalvakuntla Kavitha Address on Summer Welfare Measures', te: 'తెలంగాణ ఎండ తీవ్రత - ప్రజలు తీసుకోవాల్సిన జాగ్రత్తలపై కవిత గారు' },
      date: '2026-04-05',
      thumbnail: 'https://img.youtube.com/vi/M1K9ehcMysA/maxresdefault.jpg'
    },
    {
      id: 'CjKNZ-cragg',
      title: { en: 'LIVE Broadcast: Addressing Media Conclave', te: 'మీడియా సమావేశంలో ప్రత్యక్ష ప్రసంగం' },
      date: '2026-02-18',
      thumbnail: 'https://img.youtube.com/vi/CjKNZ-cragg/maxresdefault.jpg'
    },
    {
      id: 'vKMe78pIleg',
      title: { en: 'Centering Workers Rights and Welfare Demands', te: 'కార్మికుల హక్కుల సాధన సదస్సులో కవిత గారి పూర్తి ప్రసంగం' },
      date: '2026-01-22',
      thumbnail: 'https://img.youtube.com/vi/vKMe78pIleg/maxresdefault.jpg'
    }
  ];

  return (
    <section id="videos" className="py-20 sm:py-28 bg-[#fcfbfa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="section-eyebrow bg-[#0f5132]/5 text-[#0f5132] inline-flex items-center gap-1.5">
            <Tv className="h-3.5 w-3.5 text-[#0f5132]" />
            <span>{language === 'en' ? 'Media Center' : 'మీడియా సెంటర్'}</span>
          </div>
          <h2 className="section-title text-[#0a361e] font-display font-black uppercase tracking-tight">
            {language === 'en' ? 'Video Broadcasts' : 'వీడియో ప్రసంగాలు'}
          </h2>
          <div className="h-1 w-14 bg-[#a16207]" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideoId(vid.id)}
              className="bg-white border border-gray-200 flex flex-col group overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={vid.thumbnail}
                  alt={vid.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300">
                  <div className="h-14 w-14 bg-[#0f5132] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110" style={{ borderRadius: '50%' }}>
                    <Play className="h-6 w-6 fill-current text-white translate-x-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-[#a16207] text-white font-ui font-black text-[8px] uppercase tracking-widest px-2 py-0.5" style={{ borderRadius: '1px' }}>
                  {vid.date}
                </div>
              </div>

              {/* Title Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-xs sm:text-sm font-black text-[#0a361e] font-display leading-snug group-hover:text-[#0f5132] transition-colors">
                  {vid.title[language]}
                </h3>
                <div className="flex items-center gap-1 text-[8px] uppercase tracking-widest text-[#a16207] font-black font-ui mt-3">
                  <Film className="h-3 w-3" />
                  <span>{language === 'en' ? 'Watch Broadcast' : 'ప్రసంగం చూడండి'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Video Lightbox Modal */}
        <AnimatePresence>
          {activeVideoId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-8"
              onClick={() => setActiveVideoId(null)}
            >
              <div
                className="relative w-full max-w-4xl aspect-video bg-black shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideoId(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-1 font-ui font-black text-xs uppercase tracking-widest cursor-pointer"
                >
                  <span>{language === 'en' ? 'Close' : 'మూసివేయి'}</span>
                  <X className="h-5 w-5" />
                </button>

                {/* Iframe */}
                <iframe
                  title="TRS: Telangana Rakshana Sena Video Player"
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default VideoGallery;
