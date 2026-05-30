import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Radio } from 'lucide-react';

const SocialFeeds = () => {
  const { language } = useLanguage();

  const feeds = [
    {
      id: 'facebook',
      platform: 'Facebook',
      handle: '@BharatTRS',
      title: { en: 'Official Campaign Stream', te: 'అధికారిక ఫేస్బుక్ అప్‌డేట్స్' },
      desc: { en: 'Track daily grassroots activities, local statements, and public engagement notices.', te: 'రోజువారీ క్షేత్రస్థాయి కార్యక్రమాలు మరియు ప్రజలతో ముఖాముఖి సమాచారం.' },
      link: 'https://www.facebook.com/BharatTRS/',
      icon: (
        <svg className="h-6 w-6 fill-current text-[#1877F2]" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      ),
      banner: 'https://www.telanganajagruthi.org/wp-content/uploads/2025/10/slider-4.jpg',
      stat: '500K+ Followers',
      action: { en: 'Visit Page', te: 'పేజీని సందర్శించండి' }
    },
    {
      id: 'instagram',
      platform: 'Instagram',
      handle: '@telangana__jagruthi',
      title: { en: 'Photo Gallery & Highlights', te: 'ఇన్‌స్టాగ్రామ్ విశేషాలు' },
      desc: { en: 'Visual reports of cultural preservation drives, district training meets, and Bathukamma highlights.', te: 'సాంస్కృతిక వేడుకలు, జిల్లా శిక్షణా శిబిరాలు మరియు ఫోటోల సమాహారం.' },
      link: 'https://www.instagram.com/telangana__jagruthi/',
      icon: (
        <svg className="h-6 w-6 fill-none stroke-[#E1306C]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      banner: 'https://www.telanganajagruthi.org/wp-content/uploads/2026/01/kavitha-janambata-public-meeting-tungaturthi-600x400.jpeg',
      stat: '150K+ Followers',
      action: { en: 'Follow Us', te: 'ఫాలో అవ్వండి' }
    },
    {
      id: 'youtube',
      platform: 'YouTube',
      handle: 'Telangana Rakshana Sena TV',
      title: { en: 'Official Videos & Speeches', te: 'యూట్యూబ్ వీడియో ప్రసంగాలు' },
      desc: { en: 'Watch press conferences, live speeches of Smt. Kavitha, and documentary archives.', te: 'పత్రికా సమావేశాలు, కవిత గారి ప్రసంగాలు మరియు అధికారిక డాక్యుమెంటరీలు.' },
      link: 'https://youtube.com/user/TelanganaTRS',
      icon: (
        <svg className="h-6 w-6 fill-current text-[#FF0000]" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      banner: 'https://www.telanganajagruthi.org/wp-content/uploads/2025/10/home-jagruthi-janam-baata.jpg',
      stat: '100K+ Subscribers',
      action: { en: 'Subscribe', te: 'సబ్‌స్క్రయిబ్ చేయండి' }
    }
  ];

  return (
    <section id="social-feeds" className="py-20 sm:py-28 bg-[#f8f7f5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="section-eyebrow bg-[#0f5132]/5 text-[#0f5132] inline-flex items-center gap-1.5">
            <Radio className="h-3.5 w-3.5 text-[#0f5132]" />
            <span>{language === 'en' ? 'Social Channels' : 'సామాజిక మాధ్యమాలు'}</span>
          </div>
          <h2 className="section-title text-[#0a361e] font-display font-black uppercase tracking-tight">
            {language === 'en' ? 'Connect with TRS' : 'టీఆర్ఎస్ తో కనెక్ట్ అవ్వండి'}
          </h2>
          <div className="h-1 w-14 bg-[#a16207]" />
        </div>

        {/* Feeds grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {feeds.map((feed) => (
            <motion.div
              key={feed.id}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 flex flex-col group overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              {/* Card Banner Image */}
              <div className="h-36 w-full overflow-hidden relative bg-gray-100">
                <img
                  src={feed.banner}
                  alt={feed.platform}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 bg-[#0a361e]/90 text-white font-ui font-black text-[9px] uppercase tracking-widest px-2 py-0.5" style={{ borderRadius: '1px' }}>
                  {feed.stat}
                </span>
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#f8f7f5] border border-gray-200" style={{ borderRadius: '2px' }}>
                    {feed.icon}
                  </div>
                  <div>
                    <h3 className="font-ui font-black text-xs uppercase tracking-wider text-[#0a361e] leading-none">
                      {feed.platform}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {feed.handle}
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-black text-[#0a361e] font-display">
                  {feed.title[language]}
                </h4>

                <p className="text-xs text-gray-500 leading-relaxed flex-1 font-sans">
                  {feed.desc[language]}
                </p>

                <a
                  href={feed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-white border border-gray-200 text-[#0f5132] font-ui font-black text-[9px] uppercase tracking-widest text-center cursor-pointer flex items-center justify-center gap-1.5 transition-all hover:bg-[#0f5132] hover:text-white hover:border-[#0f5132]"
                  style={{ borderRadius: '2px' }}
                >
                  <span>{feed.action[language]}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialFeeds;
