import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldAlert, HeartHandshake, Eye, Search, Newspaper, Users } from 'lucide-react';

const NewsArticles = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newsItems = [
    {
      id: 'n1', category: 'welfare', date: '2026-01-20',
      title:   { en: "Rajesh Custodial Death Investigation Demanded", te: "రాజేశ్ మృతిపై విచారణ జరపాలి - కల్వకుంట్ల కవిత" },
      summary: { en: "Smt. Kalvakuntla Kavitha visits survivors of the custodial death incident in Kodad, demanding a high-level probe and support.", te: "కోదాడ లో కస్టోడియల్ డెత్ ఘటనపై కల్వకుంట్ల కవిత గారు బాధిత కుటుంబాన్ని పరామర్శించారు. ఈ మృతిపై సమగ్ర విచారణ జరపాలని డిమాండ్ చేశారు." },
      tag:     { en: "Investigation", te: "విచారణ డిమాండ్" },
      icon:    <ShieldAlert className="h-3.5 w-3.5 text-red-600" />, accentColor: '#dc2626',
      image:   "https://www.telanganarakshanasena.org/wp-content/uploads/2026/01/kalvakuntla-kavitha-kodad-custodial-death-visit-600x400.jpeg"
    },
    {
      id: 'n2', category: 'protest', date: '2026-01-18',
      title:   { en: "Appeal to Maoists for Democratic Political Struggle", te: "రాజకీయ పోరాటమే మంచిది - కల్వకుంట్ల కవిత" },
      summary: { en: "During a press conference, Smt. Kavitha urged Maoist groups to adopt democratic political paths for long-term reform.", te: "సూర్యాపేట ప్రెస్ మీట్ లో కల్వకుంట్ల కవిత గారు మాట్లాడుతూ శాంతియుత ప్రజాస్వామ్య పంథాలోనే నిజమైన ప్రజా సమస్యల పరిష్కారం సాధ్యమని పేర్కొన్నారు." },
      tag:     { en: "Press Meet", te: "పత్రికా సమావేశం" },
      icon:    <ShieldAlert className="h-3.5 w-3.5 text-red-600" />, accentColor: '#dc2626',
      image:   "https://www.telanganarakshanasena.org/wp-content/uploads/2026/01/kalvakuntla-kavitha-suryapet-press-meet-maoists-600x400.jpg"
    },
    {
      id: 'n3', category: 'protest', date: '2026-01-15',
      title:   { en: "Tungaturthi Janambata Public Meeting Mobilised", te: "ప్రజలేమైనా ఓటింగ్ మెషీన్లా - తుంగతుర్తి సభ" },
      summary: { en: "Mass public assembly addressing community rights, rural employment, and local administrative failures.", te: "తుంగతుర్తి జనంబాట బహిరంగ సభలో కవిత గారు పాల్గొని గ్రామీణ సమస్యల పరిష్కారంలో పాలక ప్రభుత్వ వైఫల్యాలను ఎండగట్టారు." },
      tag:     { en: "Public Meeting", te: "బహిరంగ సభ" },
      icon:    <Users className="h-3.5 w-3.5 text-amber-600" />, accentColor: '#d97706',
      image:   "https://www.telanganarakshanasena.org/wp-content/uploads/2026/01/kavitha-janambata-public-meeting-tungaturthi-600x400.jpeg"
    },
    {
      id: 'n4', category: 'welfare', date: '2026-01-14',
      title:   { en: "CHC Hospital Visit Identifies Pending Projects", te: "100 పడకల ఆసుపత్రి పనుల పెండింగ్ పరిశీలన" },
      summary: { en: "Inspecting the pending 100-bed hospital project initiated under KCR, raising questions on developmental delays.", te: "తుంగతుర్తి కమ్యూనిటీ హెల్త్ సెంటర్ ఆసుపత్రిని సందర్శించి కెసిఆర్ హయాంలో శంకుస్థాపన చేసిన 100 పడకల ఆసుపత్రి పనుల జాప్యంపై నిలదీశారు." },
      tag:     { en: "Healthcare", te: "ఆరోగ్య రంగం" },
      icon:    <HeartHandshake className="h-3.5 w-3.5 text-emerald-600" />, accentColor: '#059669',
      image:   "https://www.telanganarakshanasena.org/wp-content/uploads/2026/01/kavitha-tungaturthi-chc-hospital-visit-1-600x400.jpeg"
    },
    {
      id: 'n5', category: 'welfare', date: '2025-12-28',
      title:   { en: "Government School Infrastructure Concerns Raised", te: "పేద విద్యార్థుల పట్ల ప్రభుత్వ వైఖరిపై నిరసన" },
      summary: { en: "Smt. Kavitha visits Kacheguda High School to examine classrooms and raises voice against poor educational facilities.", te: "కాచిగూడ ప్రభుత్వ ఉన్నత పాఠశాలను సందర్శించి విద్యార్థుల కనీస సౌకర్యాల లేమి మరియు విద్యా సంక్షోభంపై ప్రభుత్వాన్ని నిలదీశారు." },
      tag:     { en: "Education", te: "విద్యా రంగం" },
      icon:    <HeartHandshake className="h-3.5 w-3.5 text-emerald-600" />, accentColor: '#059669',
      image:   "https://www.telanganarakshanasena.org/wp-content/uploads/2025/12/kalvakuntla-kavitha-kacheguda-high-school-visit-hyderabad-1-668x520.jpeg"
    },
    {
      id: 'n6', category: 'culture', date: '2025-11-20',
      title:   { en: "Nalgonda Janam Bata Campaign Enters Day 2", te: "నల్గొండ జనం బాట రెండవ రోజు యాత్ర" },
      summary: { en: "Highlighting rural grievances, historical sites, and agricultural challenges during the statewide yatra.", te: "నల్గొండ జిల్లా జనం బాట యాత్రలో గ్రామ గ్రామాన ప్రజలు ఘన స్వాగతం పలికారు, స్థానిక సమస్యల పరిష్కారానికి హామీ ఇచ్చారు." },
      tag:     { en: "Janam Bata", te: "జనం బాట యాత్ర" },
      icon:    <Eye className="h-3.5 w-3.5 text-blue-600" />, accentColor: '#2563eb',
      image:   "https://www.telanganarakshanasena.org/wp-content/uploads/2025/11/jagruthi-janam-baata-nalgonda-day-2-24-668x520.jpg"
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
          <div className="flex items-center gap-0 border border-gray-200 overflow-x-auto max-w-full no-scrollbar"
            style={{ borderRadius: '2px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={[
                  'px-4 py-2.5 text-[9px] font-ui font-black uppercase tracking-widest transition-all cursor-pointer border-r border-gray-200 last:border-r-0 whitespace-nowrap',
                  selectedCategory === cat.id
                    ? 'bg-[#0f5132] text-white'
                    : 'bg-white text-gray-500 hover:bg-[#f0fdf4] hover:text-[#0f5132]'
                ].join(' ')}
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
                className="official-card bg-white flex flex-col group cursor-default overflow-hidden"
                style={{ borderTopColor: item.accentColor }}
              >
                {/* Event Card Image */}
                <div className="h-44 w-full overflow-hidden relative bg-[#0a361e]/5">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

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
                  <h3 className="text-sm sm:text-base font-black text-[#0a361e] leading-snug group-hover:text-[#0f5132] transition-colors font-display">
                    {item.title[language]}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1 font-sans">
                    {item.summary[language]}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[8px] font-black uppercase tracking-widest font-ui"
                      style={{ color: item.accentColor }}>
                      {item.category}
                    </span>
                    <button className="text-[10px] font-black text-[#0f5132] hover:text-[#a16207] transition-colors flex items-center gap-1 cursor-pointer uppercase tracking-wider font-ui">
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
            <h3 className="text-base font-black text-gray-500 font-display">
              {language === 'en' ? 'No articles found' : 'ఎటువంటి వ్యాసాలు లభించలేదు'}
            </h3>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsArticles;
