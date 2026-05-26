import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldAlert, HeartHandshake, Eye, Search, Newspaper } from 'lucide-react';

const NewsArticles = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newsItems = [
    {
      id: 'n1', category: 'protest', date: '2026-05-15',
      title:   { en: "Statewide Agitation for Farmers' Paddy Procurement Bonus", te: "రైతుల వరి కొనుగోలు బోనస్ కోసం రాష్ట్రవ్యాప్త ఆందోళన" },
      summary: { en: "Smt. Kalvakuntla Kavitha leads peaceful protests across all district collectors demanding immediate crop procurement bonus and insurance release.", te: "రైతులకు తక్షణ పంట కొనుగోలు బోనస్ మరియు పంట బీమా విడుదల చేయాలని డిమాండ్ చేస్తూ శ్రీమతి కల్వకుంట్ల కవిత గారి ఆధ్వర్యంలో అన్ని జిల్లా కలెక్టరేట్ల వద్ద శాంతియుత నిరసనలు." },
      tag:     { en: "Farmers' Welfare", te: "రైతు సంక్షేమం" },
      icon:    <ShieldAlert className="h-3.5 w-3.5 text-red-600" />, accentColor: '#dc2626'
    },
    {
      id: 'n2', category: 'culture', date: '2025-10-12',
      title:   { en: 'Global Bathukamma Celebrations Planned in 18 Countries', te: '18 దేశాలలో అంతర్జాతీయ బతుకమ్మ సంబరాల ప్రణాళిక' },
      summary: { en: 'Telangana Jagruthi coordinates global diaspora committees to host the annual floral festival across major cities in Europe, US, and Gulf.', te: 'యూరప్, అమెరికా మరియు గల్ఫ్ ప్రాంతాల్లోని ప్రధాన నగరాల్లో వార్షిక బతుకమ్మ పూల పండుగను నిర్వహించడానికి అంతర్జాతీయ ప్రవాస కమిటీలను తెలంగాణ జాగృతి సమన్వయం చేస్తోంది.' },
      tag:     { en: 'Cultural Heritage', te: 'సాంస్కృతిక వారసత్వం' },
      icon:    <HeartHandshake className="h-3.5 w-3.5 text-amber-600" />, accentColor: '#d97706'
    },
    {
      id: 'n3', category: 'protest', date: '2026-04-20',
      title:   { en: 'Protests Staged Against Fees Regulation Delay in Private Schools', te: 'ప్రైవేట్ పాఠశాలల ఫీజుల నియంత్రణ జాప్యంపై నిరసనలు' },
      summary: { en: 'Jagruthi student and youth wings raise slogans outside Education Director\'s office demanding immediate implementation of regulatory acts.', te: 'ఫీజుల నియంత్రణ చట్టాన్ని తక్షణమే అమలు చేయాలని డిమాండ్ చేస్తూ విద్యాశాఖ డైరెక్టర్ కార్యాలయం వెలుపల జాగృతి విద్యార్థి, యువజన విభాగాలు నినాదాలు చేశాయి.' },
      tag:     { en: 'Education Rights', te: 'విద్యా హక్కులు' },
      icon:    <ShieldAlert className="h-3.5 w-3.5 text-red-600" />, accentColor: '#dc2626'
    },
    {
      id: 'n4', category: 'welfare', date: '2026-02-08',
      title:   { en: 'Free Health Camps Organised in Remote Forest Habitats', te: 'మారుమూల అటవీ ప్రాంతాల్లో ఉచిత వైద్య శిబిరాలు' },
      summary: { en: 'Medical wing conducts diagnostic camps and distributes free medicines to Chenchu tribals in Nallamala forest reserves.', te: 'నల్లమల అటవీ ప్రాంతంలోని చెంచు గిరిజనులకు వైద్య విభాగం ఆధ్వర్యంలో ఉచిత వైద్య పరీక్షలు నిర్వహించి, మందులను పంపిణీ చేశారు.' },
      tag:     { en: 'Medical Relief', te: 'ఉచిత వైద్యం' },
      icon:    <HeartHandshake className="h-3.5 w-3.5 text-emerald-600" />, accentColor: '#059669'
    },
    {
      id: 'n5', category: 'culture', date: '2025-12-05',
      title:   { en: 'Telangana Literature Festival Celebrates Folk Poets', te: 'జానపద కవుల సన్మానంతో తెలంగాణ సాహిత్య సదస్సు' },
      summary: { en: 'Jagruthi literature wing hosts a three-day summit in Warangal honoring native folk singers, poets, and historical movement balladeers.', te: 'వరంగల్‌లో మూడు రోజుల పాటు జరిగిన సాహిత్య సదస్సులో స్థానిక జానపద గాయకులు, కవులు మరియు ఉద్యమ కవులను జాగృతి సాహిత్య విభాగం సత్కరించింది.' },
      tag:     { en: 'Literature', te: 'సాహిత్యం' },
      icon:    <Eye className="h-3.5 w-3.5 text-blue-600" />, accentColor: '#2563eb'
    },
    {
      id: 'n6', category: 'welfare', date: '2026-05-01',
      title:   { en: 'Jagruthi Janam Baata Welfare Programs Launched', te: 'జాగృతి జనం బాట సంక్షేమ కార్యక్రమాల ప్రారంభం' },
      summary: { en: 'A new grassroots outreach campaign kicked off to survey rural grievances and provide legal aid to migrant workers.', te: 'గ్రామీణ సమస్యల సర్వే మరియు వలస కార్మికులకు ఉచిత న్యాయ సహాయంనందించడానికి కొత్త క్షేత్రస్థాయి ప్రచార కార్యక్రమం ప్రారంభమైంది.' },
      tag:     { en: 'Grassroots Outreach', te: 'క్షేత్రస్థాయి సేవలు' },
      icon:    <HeartHandshake className="h-3.5 w-3.5 text-emerald-600" />, accentColor: '#059669'
    }
  ];

  const categories = [
    { id: 'all',     label: t('news.categories.all') },
    { id: 'protest', label: t('news.categories.protest') },
    { id: 'culture', label: t('news.categories.culture') },
    { id: 'welfare', label: t('news.categories.welfare') }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchCat  = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = !searchQuery.trim() ||
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="news" className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <span className="section-eyebrow mb-4 inline-flex">
            <Newspaper className="h-3.5 w-3.5" />
            {language === 'en' ? 'Press & Media' : 'వార్తలు & మీడియా'}
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mt-3 mb-2">{t('news.title')}</h2>
          <p className="text-sm text-gray-500 max-w-xl">{t('news.subtitle')}</p>
          <div className="flex items-center gap-2 mt-5">
            <div className="h-0.5 w-12 bg-[#0f5132]" />
            <div className="h-1.5 w-1.5 bg-[#a16207] rotate-45" />
            <div className="h-0.5 w-4 bg-[#a16207]" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 p-4 bg-[#f8f7f5] border border-gray-200"
          style={{ borderRadius: '2px' }}>
          {/* Category tabs */}
          <div className="flex items-center gap-0 border border-gray-200 overflow-hidden flex-wrap"
            style={{ borderRadius: '2px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={[
                  'px-4 py-2.5 text-[9px] font-display font-black uppercase tracking-widest transition-all cursor-pointer border-r border-gray-200 last:border-r-0 whitespace-nowrap',
                  selectedCategory === cat.id
                    ? 'bg-[#0f5132] text-white'
                    : 'bg-white text-gray-500 hover:bg-[#f0fdf4] hover:text-[#0f5132]'
                ].join(' ')}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search news...' : 'వార్తల కోసం వెతకండి...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 pl-9 pr-4 py-2.5 text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#0f5132] transition-all"
              style={{ borderRadius: '2px' }}
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="official-card bg-white flex flex-col group cursor-default"
                style={{ borderTopColor: item.accentColor }}
              >
                <div className="p-5 sm:p-6 flex flex-col flex-1 space-y-4">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-[10px] text-gray-400">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-3.5 w-3.5 text-[#0f5132]" />
                      {new Date(item.date).toLocaleDateString(
                        language === 'en' ? 'en-US' : 'te-IN',
                        { year: 'numeric', month: 'short', day: 'numeric' }
                      )}
                    </div>
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2 py-0.5 font-bold"
                      style={{ borderRadius: '1px' }}>
                      {item.icon}
                      <span className="ml-0.5 text-[9px]">{item.tag[language]}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-black text-[#0a361e] leading-snug group-hover:text-[#0f5132] transition-colors"
                    style={{ fontFamily: 'Cinzel, serif' }}>
                    {item.title[language]}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1"
                    style={{ fontFamily: 'Mandali, Outfit, sans-serif' }}>
                    {item.summary[language]}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[8px] font-black uppercase tracking-widest"
                      style={{ color: item.accentColor, fontFamily: 'Cinzel, serif' }}>
                      {item.category}
                    </span>
                    <button className="text-[10px] font-black text-[#0f5132] hover:text-[#a16207] transition-colors flex items-center gap-1 cursor-pointer uppercase tracking-wider"
                      style={{ fontFamily: 'Cinzel, serif' }}>
                      {t('common.readMore')} →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20 bg-[#f8f7f5] border border-gray-200" style={{ borderRadius: '2px' }}>
            <Newspaper className="h-10 w-10 text-gray-300 mx-auto mb-4" />
            <h3 className="text-base font-black text-gray-500" style={{ fontFamily: 'Cinzel, serif' }}>
              {language === 'en' ? 'No articles found' : 'ఎటువంటి వ్యాసాలు లభించలేదు'}
            </h3>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsArticles;
