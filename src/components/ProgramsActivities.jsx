import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, BookOpen, Users, MapPin } from 'lucide-react';

const ProgramsActivities = () => {
  const { language, t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [
    { id: 'all', en: 'All Programs', te: 'అన్ని కార్యక్రమాలు' },
    { id: 'campaigns', en: 'Campaigns & Rallies', te: 'ఉద్యమాలు & యాత్రలు' },
    { id: 'culture', en: 'Cultural & Heritage', te: 'సాంస్కృతిక & వారసత్వం' },
    { id: 'welfare', en: 'Social Welfare', te: 'సామాజిక సంక్షేమం' }
  ];

  const programs = [
    {
      id: 'p1',
      category: 'campaigns',
      title: { en: 'Jagruthi Janam Baata', te: 'జాగృతి జనం బాట' },
      highlight: { en: 'Grassroots Movement for Social Justice', te: 'సామాజిక తెలంగాణ కోసం క్షేత్రస్థాయి యాత్ర' },
      desc: {
        en: 'A massive public outreach campaign led by Smt. Kalvakuntla Kavitha, visiting villages across all districts of Telangana to listen to grievances and lead local agitations.',
        te: 'తెలంగాణలోని అన్ని జిల్లాల్లో పర్యటించి, ప్రజల సమస్యలను తెలుసుకోవడానికి మరియు స్థానిక పోరాటాలను నడిపించడానికి శ్రీమతి కల్వకుంట్ల కవిత గారి నేతృత్వంలో సాగిన భారీ ప్రజా యాత్ర.'
      },
      image: 'https://www.telanganajagruthi.org/wp-content/uploads/2025/10/home-page-slider.jpg',
      stat: '33 Districts',
      statLabel: { en: 'Campaign Scope', te: 'యాత్రా పరిధి' }
    },
    {
      id: 'p2',
      category: 'culture',
      title: { en: 'Bathukamma Renaissance', te: 'బతుకమ్మ పూల పండుగ పునరుజ్జీవనం' },
      highlight: { en: 'Global Recognition for Telangana\'s Identity', te: 'తెలంగాణ అస్తిత్వానికి అంతర్జాతీయ గుర్తింపు' },
      desc: {
        en: 'Telangana Jagruthi transformed the traditional Bathukamma floral festival into a state symbol and elevated it globally, including historic light shows on the Burj Khalifa in Dubai.',
        te: 'సాంప్రదాయ బతుకమ్మ పూల పండుగను రాష్ట్ర సంస్కృతికి ప్రతీకగా మార్చడమే కాకుండా, దుబాయ్ లోని బూర్జ్ ఖలీఫా పై చారిత్రాత్మక ప్రదర్శనతో అంతర్జాతీయ స్థాయికి తీసుకువెళ్ళాము.'
      },
      image: 'https://telanganajagruthi.org/wp-content/uploads/2024/04/footer-gallery-05.jpg',
      stat: '18+ Nations',
      statLabel: { en: 'Global Celebrations', te: 'అంతర్జాతీయ వేడుకలు' }
    },
    {
      id: 'p3',
      category: 'campaigns',
      title: { en: 'TRS Flag Festival (Jenda Panduga)', te: 'టిఆర్ఎస్ జెండా పండుగ' },
      highlight: { en: 'Hoisting Hopes in Every Village', te: 'ప్రతి గ్రామంలో పార్టీ పతాక ఆవిష్కరణ' },
      desc: {
        en: 'A month-long campaign to hoist organization and party flags across rural areas to connect with local cadre and strengthen public relations.',
        te: 'గ్రామీణ ప్రాంతాల్లో పార్టీ పతాకాలను ఆవిష్కరించి, స్థానిక శ్రేణులతో మమేకం కావడానికి మరియు ప్రజా సంబంధాలను బలోపేతం చేయడానికి నెల రోజుల పాటు సాగిన ప్రచార కార్యక్రమం.'
      },
      image: 'https://www.telanganajagruthi.org/wp-content/uploads/2026/05/trs-flag-festival-kalvakuntla-kavitha-hyderabad-668x520.jpeg',
      stat: '30 Days',
      statLabel: { en: 'Statewide Tour', te: 'రాష్ట్రవ్యాప్త యాత్ర' }
    },
    {
      id: 'p4',
      category: 'campaigns',
      title: { en: 'Paddy Procurement Agitations', te: 'వరి కొనుగోలు రైతాంగ పోరాటం' },
      highlight: { en: 'Standing Firmly with Telangana\'s Farmers', te: 'తెలంగాణ రైతాంగానికి అండగా' },
      desc: {
        en: 'Leading statewide peaceful agitations and representations demanding immediate and fair paddy procurement bonuses from the government.',
        te: 'రైతులకు తక్షణ మరియు మద్దతు ధరతో కూడిన వరి కొనుగోలు బోనస్ అందించాలని డిమాండ్ చేస్తూ రాష్ట్రవ్యాప్తంగా శాంతియుత నిరసనల నిర్వహణ.'
      },
      image: 'https://www.telanganajagruthi.org/wp-content/uploads/2026/05/k-kavitha-telangana-paddy-procurement-protest-farmers-668x520.jpeg',
      stat: '100% Support',
      statLabel: { en: 'For Farming Families', te: 'రైతు కుటుంబాల కొరకు' }
    },
    {
      id: 'p5',
      category: 'welfare',
      title: { en: 'Adoption of Suicide-Affected Families', te: 'రైతు కుటుంబాల దత్తత' },
      highlight: { en: 'Rehabilitating and Supporting Farming Homes', te: 'ఆత్మహత్య చేసుకున్న రైతు కుటుంబాలకు ఆసరా' },
      desc: {
        en: 'Adopted 389 families affected by farmer suicides across Telangana, offering financial assistance of INR 2,500 monthly for four years alongside education support.',
        te: 'తెలంగాణ వ్యాప్తంగా ఆత్మహత్య చేసుకున్న 389 రైతు కుటుంబాలను దత్తత తీసుకుని, నాలుగేళ్ల పాటు నెలకు రూ. 2,500 ఆర్థిక సహాయంతో పాటు పిల్లల చదువుకు మద్దతు.'
      },
      image: 'https://www.telanganajagruthi.org/wp-content/uploads/2026/01/kalvakuntla-kavitha-kodad-custodial-death-visit-600x400.jpeg',
      stat: '389 Families',
      statLabel: { en: 'Adopted & Assisted', te: 'దత్తత మరియు సహాయం' }
    },
    {
      id: 'p6',
      category: 'welfare',
      title: { en: 'Annadanam & Youth Mid-Day Meals', te: 'అన్నదాన వితరణ & పోటీ పరీక్షార్థుల భోజనాలు' },
      highlight: { en: 'Feeding the Needy & Empowering Job Aspirants', te: 'ఆకలి తీర్చడం & నిరుద్యోగ యువతకు మద్దతు' },
      desc: {
        en: 'Providing daily free quality meals to patients and attendees in government hospitals, alongside nutritious lunches for youth preparing for state competitive exams.',
        te: 'ప్రభుత్వ ఆసుపత్రులలోని రోగులు మరియు వారి సహాయకులకు ప్రతిరోజూ ఉచిత నాణ్యమైన భోజనం మరియు పోటీ పరీక్షలకు సిద్ధమవుతున్న నిరుద్యోగ యువతకు ఉచిత మధ్యాహ్న భోజన సౌకర్యం.'
      },
      image: 'https://www.telanganajagruthi.org/wp-content/uploads/2026/01/kavitha-tungaturthi-chc-hospital-visit-1-600x400.jpeg',
      stat: 'Daily Meals',
      statLabel: { en: 'Continuous Service', te: 'నిరంతర సేవ' }
    },
    {
      id: 'p7',
      category: 'culture',
      title: { en: 'Historical Site Research Drive', te: 'చారిత్రక కట్టడాల పరిశోధనలు' },
      highlight: { en: 'Unearthing Inscriptions & Rock Art Heritage', te: 'శిలాశాసనాలు మరియు రాతి చిత్రాల వెలికితీత' },
      desc: {
        en: 'A specialized history wing researched 328 sites in Telangana, translating 42 rare ancient inscriptions and identifying 23 pre-historic Rock Art sites.',
        te: 'తెలంగాణలోని 328 చారిత్రక ప్రదేశాలపై పరిశోధన చేసి, 42 అరుదైన ప్రాచీన శిలాశాసనాలను అనువదించి మరియు 23 చరిత్రపూర్వ రాతి చిత్రాల స్థలాలను గుర్తించారు.'
      },
      image: 'https://www.telanganajagruthi.org/wp-content/uploads/2025/10/about-telangana-jagruthi-intro-1-1024x676.png',
      stat: '328 Sites',
      statLabel: { en: 'Researched & Cataloged', te: 'పరిశోధించిన ప్రదేశాలు' }
    }
  ];

  const filteredPrograms = programs.filter(prog => selectedCat === 'all' || prog.category === selectedCat);

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#fcfbfa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="section-eyebrow bg-[#0f5132]/5 text-[#0f5132] inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#0f5132]" />
            <span>{language === 'en' ? 'What We Do' : 'కార్యక్రమాలు'}</span>
          </div>
          <h2 className="section-title text-[#0a361e] font-display font-black uppercase tracking-tight">
            {language === 'en' ? 'Programs & Activities' : 'ప్రజా సేవలు & కార్యక్రమాలు'}
          </h2>
          <div className="h-1 w-14 bg-[#a16207]" />
        </div>

        {/* Filters */}
        <div className="flex justify-start sm:justify-center mb-10 overflow-x-auto max-w-full no-scrollbar">
          <div className="flex items-center gap-0 border border-gray-200" style={{ borderRadius: '2px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={[
                  'px-4 py-2.5 text-[9px] font-ui font-black uppercase tracking-widest transition-all cursor-pointer border-r border-gray-200 last:border-r-0 whitespace-nowrap',
                  selectedCat === cat.id
                    ? 'bg-[#0f5132] text-white'
                    : 'bg-white text-gray-500 hover:bg-[#f0fdf4] hover:text-[#0f5132]'
                ].join(' ')}
              >
                {cat[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog) => (
              <motion.article
                layout
                key={prog.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="official-card bg-white flex flex-col group overflow-hidden border-t-2 border-t-[#0f5132]"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={prog.image}
                    alt={prog.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 bg-[#a16207] text-white font-ui font-black text-[8px] uppercase tracking-widest px-2 py-0.5" style={{ borderRadius: '1px' }}>
                    {prog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 space-y-4">
                  <div>
                    <h3 className="text-base font-black text-[#0a361e] leading-snug group-hover:text-[#0f5132] transition-colors font-display">
                      {prog.title[language]}
                    </h3>
                    <p className="text-[10px] font-bold text-[#a16207] uppercase tracking-wider mt-1 font-ui">
                      {prog.highlight[language]}
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed flex-1 font-sans">
                    {prog.desc[language]}
                  </p>

                  {/* Stat Badge */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
                    <div className="bg-[#0f5132]/5 border border-[#0f5132]/10 px-3 py-1.5" style={{ borderRadius: '1px' }}>
                      <p className="text-xs font-black text-[#0f5132] leading-none">{prog.stat}</p>
                      <p className="text-[8px] uppercase font-bold text-[#a16207] tracking-widest mt-1 leading-none font-ui">
                        {prog.statLabel[language]}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProgramsActivities;
