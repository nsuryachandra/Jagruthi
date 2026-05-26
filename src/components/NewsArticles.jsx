import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldAlert, HeartHandshake, Eye, Search } from 'lucide-react';

const NewsArticles = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newsItems = [
    {
      id: "n1",
      category: "protest",
      date: "2026-05-15",
      title: {
        en: "Statewide Agitation for Farmers' Paddy Procurement Bonus",
        te: "రైతుల వరి కొనుగోలు బోనస్ కోసం రాష్ట్రవ్యాప్త ఆందోళన"
      },
      summary: {
        en: "Smt. Kalvakuntla Kavitha leads peaceful protests across all district collectors demanding immediate crop procurement bonus and insurance release.",
        te: "రైతులకు తక్షణ పంట కొనుగోలు బోనస్ మరియు పంట బీమా విడుదల చేయాలని డిమాండ్ చేస్తూ శ్రీమతి కల్వకుంట్ల కవిత గారి ఆధ్వర్యంలో అన్ని జిల్లా కలెక్టరేట్ల వద్ద శాంతియుత నిరసనలు."
      },
      tag: { en: "Farmers' Welfare", te: "రైతు సంక్షేమం" },
      icon: <ShieldAlert className="h-4 w-4 text-rose-600" />
    },
    {
      id: "n2",
      category: "culture",
      date: "2025-10-12",
      title: {
        en: "Global Bathukamma Celebrations Planned in 18 Countries",
        te: "18 దేశాలలో అంతర్జాతీయ బతుకమ్మ సంబరాల ప్రణాళిక"
      },
      summary: {
        en: "Telangana Jagruthi coordinates global diaspora committees to host the annual floral festival across major cities in Europe, US, and Gulf.",
        te: "యూరప్, అమెరికా మరియు గల్ఫ్ ప్రాంతాల్లోని ప్రధాన నగరాల్లో వార్షిక బతుకమ్మ పూల పండుగను నిర్వహించడానికి అంతర్జాతీయ ప్రవాస కమిటీలను తెలంగాణ जागృతి సమన్వయం చేస్తోంది."
      },
      tag: { en: "Cultural Heritage", te: "సాంస్కృతిక వారసత్వం" },
      icon: <HeartHandshake className="h-4 w-4 text-amber-600" />
    },
    {
      id: "n3",
      category: "protest",
      date: "2026-04-20",
      title: {
        en: "Protests Staged Against Fees Regulation Delay in Private Schools",
        te: "ప్రైవేట్ పాఠశాలల ఫీజుల నియంత్రణ జాప్యంపై నిరసనలు"
      },
      summary: {
        en: "Jagruthi student and youth wings raise slogans outside Education Director's office demanding immediate implementation of regulatory acts.",
        te: "ఫీజుల నియంత్రణ చట్టాన్ని తక్షణమే అమలు చేయాలని డిమాండ్ చేస్తూ విద్యాశాఖ డైరెక్టర్ కార్యాలయం వెలుపల జాగృతి విద్యార్థి, యువజన విభాగాలు నినాదాలు చేశాయి."
      },
      tag: { en: "Education Rights", te: "విద్యా హక్కులు" },
      icon: <ShieldAlert className="h-4 w-4 text-rose-600" />
    },
    {
      id: "n4",
      category: "welfare",
      date: "2026-02-08",
      title: {
        en: "Free Health Camps Organised in Remote Forest Habitats",
        te: "మారుమూల అటవీ ప్రాంతాల్లో ఉచిత వైద్య శిబిరాలు"
      },
      summary: {
        en: "Medical wing conducts diagnostic camps and distributes free medicines to Chenchu tribals in Nallamala forest reserves.",
        te: "నల్లమల అటవీ ప్రాంతంలోని చెంచు గిరిజనులకు వైద్య విభాగం ఆధ్వర్యంలో ఉచిత వైద్య పరీక్షలు నిర్వహించి, మందులను పంపిణీ చేశారు."
      },
      tag: { en: "Medical Relief", te: "ఉచిత వైద్యం" },
      icon: <HeartHandshake className="h-4 w-4 text-emerald-600" />
    },
    {
      id: "n5",
      category: "culture",
      date: "2025-12-05",
      title: {
        en: "Telangana Literature Festival Celebrates Folk Poets",
        te: "జానపద కవుల సన్మానంతో తెలంగాణ సాహిత్య సదస్సు"
      },
      summary: {
        en: "Jagruthi literature wing hosts a three-day summit in Warangal honoring native folk singers, poets, and historical movement balladeers.",
        te: "వరంగల్‌లో మూడు రోజుల పాటు జరిగిన సాహిత్య సదస్సులో స్థానిక జానపద గాయకులు, కవులు మరియు ఉద్యమ కవులను జాగృతి సాహిత్య విభాగం సత్కరించింది."
      },
      tag: { en: "Literature", te: "సాహిత్యం" },
      icon: <Eye className="h-4 w-4 text-blue-600" />
    },
    {
      id: "n6",
      category: "welfare",
      date: "2026-05-01",
      title: {
        en: "Jagruthi Janam Baata Welfare Programs Launched",
        te: "జాగృతి జనం బాట సంక్షేమ కార్యక్రమాల ప్రారంభం"
      },
      summary: {
        en: "A new grassroots outreach campaign kicked off to survey rural grievances and provide legal aid to migrant workers.",
        te: "గ్రామీణ సమస్యల సర్వే మరియు వలస కార్మికులకు ఉచిత న్యాయ సహాయంనందించడానికి కొత్త క్షేత్రస్థాయి ప్రచార కార్యక్రమం ప్రారంభమైంది."
      },
      tag: { en: "Grassroots Outreach", te: "క్షేత్రస్థాయి సేవలు" },
      icon: <HeartHandshake className="h-4 w-4 text-emerald-600" />
    }
  ];

  const categories = [
    { id: 'all', label: t('news.categories.all') },
    { id: 'protest', label: t('news.categories.protest') },
    { id: 'culture', label: t('news.categories.culture') },
    { id: 'welfare', label: t('news.categories.welfare') }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="news" className="py-24 bg-[#fafaf9] relative overflow-hidden border-b border-brand-green-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green-900 tracking-wide font-display">
            {t('news.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-bold uppercase tracking-widest font-telugu">
            {t('news.subtitle')}
          </p>
          <div className="ornament-line mt-5">
            <div className="ornament-diamond" />
          </div>
        </div>

        {/* Filters and Search controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white rounded-3xl p-5 border border-brand-green-900/10 shadow-premium">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-xl text-[10px] sm:text-xs font-display font-black uppercase tracking-widest transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-green-800 text-white border border-brand-green-900 shadow-sm'
                    : 'bg-[#fafaf9] text-slate-500 hover:text-brand-green-900 hover:bg-stone-50 border border-brand-green-900/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={language === 'en' ? "Search news and articles..." : "వ్యాసాలు మరియు వార్తల కోసం వెతకండి..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-green-900/15 rounded-xl pl-10 pr-4 py-2.5 text-slate-700 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all font-telugu font-semibold shadow-sm"
            />
          </div>

        </div>

        {/* News Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#fafaf9] rounded-3xl p-6 border border-brand-green-900/10 flex flex-col justify-between hover:border-brand-gold-700/25 hover:bg-white shadow-premium hover:shadow-premium-hover transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Article Metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-3.5 w-3.5 text-brand-green-800" />
                      <span>{new Date(item.date).toLocaleDateString(language === 'en' ? 'en-US' : 'te-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-green-50 text-brand-green-900 font-bold border border-brand-green-900/10">
                      {item.icon}
                      <span className="font-telugu ml-0.5 text-[11px]">{item.tag[language]}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 leading-snug font-display group-hover:text-brand-green-900 transition-colors">
                    {item.title[language]}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-telugu font-semibold">
                    {item.summary[language]}
                  </p>
                </div>

                {/* Read More button */}
                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-brand-gold-700 uppercase tracking-widest select-none">
                    {item.category.toUpperCase()}
                  </span>
                  <button className="text-xs font-extrabold text-brand-green-800 hover:text-brand-green-950 transition-colors flex items-center gap-1 font-telugu cursor-pointer">
                    {t('common.readMore')}
                    <span>→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty News Search State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-[#fafaf9] border border-brand-green-900/10 rounded-3xl shadow-premium">
            <h3 className="text-lg font-bold text-slate-800 font-display">
              {language === 'en' ? "No articles found" : "ఎటువంటి వ్యాసాలు లభించలేదు"}
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-telugu">
              {language === 'en' ? "Try adjusting your search filters." : "మీ శోధనను మార్చి మళ్లీ ప్రయత్నించండి."}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsArticles;
