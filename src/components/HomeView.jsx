import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import HeroSlider from './HeroSlider';
import { Award, ShieldAlert, Users, HeartHandshake, Eye, ArrowRight, Play, FileText, Calendar } from 'lucide-react';

const HomeView = ({ navigateTo }) => {
  const { language, t } = useLanguage();

  React.useEffect(() => {
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      };
    } else {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  // News On Jagruthi Press Clippings
  const pressClippings = [
    {
      title: { en: "Kacheguda High School Visit: Status of Poor Students", te: "పేద విద్యార్థుల పట్ల ఇదేనా ప్రభుత్వ వైఖరి - కాచిగూడ స్కూల్ సందర్శన" },
      date: "2025-12-12",
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/12/kalvakuntla-kavitha-kacheguda-high-school-visit-hyderabad-1-668x520.jpeg"
    },
    {
      title: { en: "Jagruthi Janam Baata – Mahabubnagar Day 1 yatra details", te: "జగృతి జనం బాట – మహబూబ్‌నగర్ మొదటి రోజు యాత్ర" },
      date: "2025-11-20",
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/10/slider-4.jpg"
    },
    {
      title: { en: "Jagruthi Janam Bata Nalgonda – Day 2 public meetings", te: "జగృతి జనం బాట నల్గొండ – రెండవ రోజు ప్రజా సభలు" },
      date: "2025-11-13",
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/11/jagruthi-janam-baata-nalgonda-day-2-24-668x520.jpg"
    }
  ];

  // Image Gallery Cards (Includes all official items)
  const galleryImages = [
    {
      title: { en: "Statewide Land Struggle Protests Lead by Kavitha in Manakondur", te: "అన్ని జిల్లాల్లో భూపోరాటం కొనసాగిస్తాం - మానకొండూరు నిరసన" },
      date: "2025-12-31",
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/12/kalvakuntla-kavitha-land-agitation-telangana-activists-manakondur-9.jpg"
    },
    {
      title: { en: "Kavitha Visits Bhadrachalam Ramayya Temple for Tributes & Blessings", te: "భద్రాద్రి రామయ్యను దర్శించుకున్న కవిత" },
      date: "2025-12-19",
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/10/home-page-slide-2.jpeg"
    },
    {
      title: { en: "Tributes Offered to Mahatma Gandhi at Bapu Ghat", te: "బాపూజీ కి ఘన నివాళి - కార్వాన్ బాపు ఘాట్ వద్ద కవిత" },
      date: "2025-12-13",
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/10/home-page-slider.jpg"
    },
    {
      title: { en: "Jagruthi Janam Baata – Karimnagar Village Campaign", te: "జగృతి జనం బాట – కరీంనగర్ గ్రామీణ ప్రచారం" },
      date: "2025-11-04",
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/10/home-jagruthi-janam-baata.jpg"
    }
  ];

  // Janam Jagruthi Baata grid items
  const gridEvents = [
    {
      title: { en: "100-Bed Hospital Construction Remains Pending in Tungaturthi", te: "కేసీఆర్ చేత శంకుస్థాపన-పనులింకా పెండింగే - తుంగతుర్తి ఆసుపత్రి" },
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2026/01/kavitha-tungaturthi-chc-hospital-visit-1-600x400.jpeg"
    },
    {
      title: { en: "Kavitha Demands Probe into Karla Rajesh Custodial Death", te: "రాజేశ్ మృతిపై విచారణ జరపాలి - కస్టోడియల్ డెత్ పై కవిత డిమాండ్" },
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2026/01/kalvakuntla-kavitha-kodad-custodial-death-visit-600x400.jpeg"
    },
    {
      title: { en: "Suryapet Protests: Citizens Face Issues Due to Local Tyranny", te: "జగదీశ్ రెడ్డి దౌర్జన్యాలకు జనం బలి - సూర్యాపేట లో కవిత" },
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2026/01/kalvakuntla-kavitha-suryapet-press-meet-maoists-600x400.jpg"
    },
    {
      title: { en: "Kavitha Rejects Upper Bhadra National Status Allocations", te: "ఆల్మట్టి ఎత్తు పెంపు, అప్పర్ భద్రకు జాతీయ హోదాను వ్యతిరేకిస్తూ తీర్మానం" },
      image: "https://www.telanganajagruthi.org/wp-content/uploads/2025/10/home-page-slide-2.jpeg"
    }
  ];

  // Key Focus / Issues Section (From official website content)
  const keyFocusItems = [
    {
      title: { en: "Appampally: Timeless Anchor in Telangana’s History", te: "అప్పంపల్లి: తెలంగాణ చరిత్రలో ఒక చారిత్రక ఘట్టం" },
      date: "2025-10-30",
      desc: { 
        en: "Exploring the historic value of Appampally village, its cultural significance, and current grassroots initiatives for development.",
        te: "అప్పంపల్లి గ్రామం యొక్క చారిత్రక విలువ, దాని సాంస్కృతిక ప్రాముఖ్యత మరియు ప్రస్తుత గ్రామీణాభివృద్ధి ప్రణాళికల వివరణ." 
      }
    },
    {
      title: { en: "Jagruthi Janambata — A Journey to Listen, Learn, and Lead", te: "జగృతి జనంబాట — వినడం, నేర్చుకోవడం మరియు నడిపించే ప్రయాణం" },
      date: "2025-10-24",
      desc: {
        en: "A comprehensive report on Kalvakuntla Kavitha's statewide outreach movement to reconnect with grassroots communities and assess local challenges.",
        te: "కల్వకుంట్ల కవిత గారి రాష్ట్రవ్యాప్త పర్యటన, గ్రామీణ సమాజాలతో అనుసంధానం మరియు స్థానిక సవాళ్ల పరిశీలనపై సమగ్ర నివేదిక."
      }
    },
    {
      title: { en: "Kavitha Demands Cancellation of Group-I Exam in Telangana", te: "తెలంగాణలో గ్రూప్-1 పరీక్ష రద్దు చేయాలని కవిత డిమాండ్" },
      date: "2025-10-24",
      desc: {
        en: "Advocating for student welfare, Kavitha demands cancellation and rescheduling of the Group-I exams due to operational issues and syllabus shifts.",
        te: "విద్యార్థుల సంక్షేమం కోరుతూ, సిలబస్ మార్పులు మరియు నిర్వహణ లోపాల కారణంగా గ్రూప్-1 పరీక్షను రద్దు చేసి తిరిగి నిర్వహించాలని డిమాండ్."
      }
    }
  ];

  // Latest News & Articles Section (From official website content)
  const latestNewsArticles = [
    {
      title: { 
        en: "Revanth Reddy Government Is Inhuman, Warns Kavitha Over Professor Nageshwar Arrest Row", 
        te: "రేవంత్ రెడ్డి ప్రభుత్వం అమానుషం, ప్రొఫెసర్ నాగేశ్వర్ అరెస్ట్ పై కవిత తీవ్ర ఆగ్రహం" 
      },
      date: "2026-05-25",
      desc: {
        en: "Strongly condemning the high-handed arrest of intellectuals, Smt. Kavitha warns the state administration against suppressing democratic protests.",
        te: "మేధావుల అక్రమ అరెస్టులను తీవ్రంగా ఖండిస్తూ, ప్రజాస్వామ్య నిరసనలను అణచివేయవద్దని రాష్ట్ర ప్రభుత్వానికి కవిత హెచ్చరిక."
      }
    },
    {
      title: { 
        en: "Kavitha Warns of Protest at Chandrababu’s Hyderabad Residence Over Prof Nageshwar Arrest", 
        te: "ప్రొఫెసర్ నాగేశ్వర్ అరెస్ట్‌కు నిరసనగా చంద్రబాబు నివాసం వద్ద ఆందోళనకు కవిత పిలుపు" 
      },
      date: "2026-05-25",
      desc: {
        en: "Stating solidarity with the academic community, Kavitha demands immediate release of the professor and points out political collusion.",
        te: "విద్యావేత్తల సంఘీభావంతో, ప్రొఫెసర్ తక్షణ విడుదలను డిమాండ్ చేస్తూ చంద్రబాబు నివాసం వద్ద నిరసనకు కల్వకుంట్ల కవిత పిలుపునిచ్చారు."
      }
    },
    {
      title: { 
        en: "Kalvakuntla Kavitha Supports Centering Workers Dharna at Indira Park, Warns Telangana Govt", 
        te: "ఇందిరా పార్క్ వద్ద కార్మికుల ధర్నాకు మద్దతు తెలిపిన కల్వకుంట్ల కవిత" 
      },
      date: "2026-05-23",
      desc: {
        en: "Standing firm with centering workers and contract laborers, Kavitha addresses the Indira Park gathering, demanding minimum wages and security.",
        te: "కాంట్రాక్ట్ మరియు సెంటరింగ్ కార్మికులకు అండగా ఉంటూ, కనీస వేతనాలు మరియు భద్రత కల్పించాలని డిమాండ్ చేస్తూ ఇందిరా పార్క్ సభలో కవిత ప్రసంగం."
      }
    }
  ];

  return (
    <div className="bg-[#f8f7f5] text-[#1a2a1f]">
      {/* 1. Hero Carousel */}
      <HeroSlider setActiveSection={navigateTo} />

      {/* 2. Press Release & Watch Us Live (Two-Column Layout) */}
      <section className="py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Press Release Card */}
            <div className="bg-[#0f5132] text-white p-8 flex flex-col justify-between border-l-4 border-[#a16207]">
              <div>
                <span className="text-[8px] uppercase tracking-[0.25em] font-ui font-bold text-[#a16207]">
                  Official Updates
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black mt-2 mb-4">
                  {language === 'en' ? "TELANGANA JAGRUTHI - Press Release" : "తెలంగాణ జాగృతి - పత్రికా ప్రకటన"}
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed mb-6 font-sans">
                  {language === 'en' 
                    ? "Read recent announcements, resolution drafts, and statements released by the central committee office."
                    : "కేంద్ర కమిటీ కార్యాలయం ద్వారా విడుదల చేయబడిన తాజా నివేదికలు, తీర్మానాలు మరియు అధికారిక ప్రకటనలను చదవండి."}
                </p>
              </div>
              <button onClick={() => navigateTo('news')} className="flex items-center gap-2 text-xs font-bold text-[#facc15] hover:text-white transition-colors group w-fit">
                {language === 'en' ? "View More" : "మరింత చూడండి"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Watch Us Live Card */}
            <div className="bg-[#f0fdf4] border border-[#0f5132]/10 p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle background overlay */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Play className="w-40 h-40 text-[#0f5132]" />
              </div>
              
              <div>
                <span className="text-[8px] uppercase tracking-[0.25em] font-ui font-bold text-[#0f5132]">
                  Broadcast Stream
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-[#0f5132] mt-2 mb-4">
                  {language === 'en' ? "TELANGANA JAGRUTHI - Watch Us Live" : "తెలంగాణ జాగృతి - లైవ్ ప్రసారాలు"}
                </h3>
                <p className="text-xs text-[#3a4a3f] leading-relaxed mb-6 font-sans">
                  {language === 'en'
                    ? "Follow Smt. Kalvakuntla Kavitha's public agitations, press meets, and yatra updates in real-time."
                    : "శ్రీమతి కల్వకుంట్ల కవిత గారి ప్రజా ఆందోళనలు, పత్రికా సమావేశాలు మరియు యాత్ర అప్‌డేట్‌లను ప్రత్యక్షంగా వీక్షించండి."}
                </p>
              </div>
              <button onClick={() => navigateTo('videos')} className="flex items-center gap-2.5 bg-[#dc2626] text-white px-5 py-2.5 text-xs font-bold w-fit hover:bg-red-700 transition-colors shadow-sm" style={{ borderRadius: '1px' }}>
                <Play className="h-3.5 w-3.5 fill-current" />
                Jagruthi Janam Baata Live
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder K. Kavitha's Ideals Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0a361e] to-[#041a0e] text-white border-y border-[#a16207]/30 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0f5132]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#a16207]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[8px] tracking-[0.25em] font-ui font-black uppercase text-[#facc15] border border-[#facc15]/30 bg-[#facc15]/5" style={{ borderRadius: '1px' }}>
              <Award className="h-3.5 w-3.5" />
              {language === 'en' ? "OUR CORE PHILOSOPHY" : "మన ముఖ్య సిద్ధాంతాలు"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black mt-4 text-white">
              {language === 'en' 
                ? "Founder K. Kavitha Announced Telangana Jagruthi's Ideals"
                : "వ్యవస్థాపకురాలు కల్వకుంట్ల కవిత ప్రకటించిన తెలంగాణ జాగృతి సిద్ధాంతాలు"}
            </h2>
            <div className="h-0.5 w-24 bg-[#a16207] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: { en: "Opportunity (Avakaasam)", te: "అవకాశం" },
                desc: {
                  en: "Striving for equal educational, professional, and livelihood opportunities for all sections of rural and urban communities.",
                  te: "గ్రామీణ మరియు పట్టణ వర్గాల అన్ని విభాగాల వారికి సమాన విద్యా, ఉపాధి మరియు జీవనోపాధి అవకాశాల కల్పన కోసం పోరాటం."
                },
                color: "#15803d"
              },
              {
                title: { en: "Power (Adhikaram)", te: "అధికారం" },
                desc: {
                  en: "Empowering youth, women, and marginalized sections to command their voice and active representation in local governance.",
                  te: "స్థానిక పాలన మరియు సామాజిక నాయకత్వంలో యువత, మహిళలు మరియు వెనుకబడిన వర్గాల క్రియాశీల భాగస్వామ్యం, హక్కుల సాధన."
                },
                color: "#b45309"
              },
              {
                title: { en: "Self-Respect (Aatmagowravam)", te: "ఆత్మగౌరవం" },
                desc: {
                  en: "Reviving native cultural pride and heritage identity worldwide to foster community dignity and individual self-esteem.",
                  te: "మన సంస్కృతి, సంప్రదాయాలు మరియు చారిత్రాత్మక వారసత్వాన్ని సగర్వంగా ప్రచారం చేస్తూ సమాజంలో ఆత్మగౌరవాన్ని పెంపొందించడం."
                },
                color: "#dc2626"
              }
            ].map((ideal, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 relative group flex flex-col justify-between" style={{ borderRadius: '2px' }}>
                {/* Accent border strip */}
                <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300" style={{ backgroundColor: ideal.color }} />
                <div>
                  <h4 className="text-lg sm:text-xl font-display font-black text-[#facc15] mb-4">
                    {ideal.title[language]}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-medium">
                    {ideal.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto border-t border-white/10 pt-8">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic font-sans font-medium">
              {language === 'en'
                ? "\"She exuded confidence that these ideals will help realise Samajika Telangana (Social Telangana) - ensuring progress and opportunities with dignity for all sections of society.\""
                : "\"సమాజంలోని అన్ని వర్గాల వారికి సమాన అవకాశాలు, హక్కులు మరియు ఆత్మగౌరవంతో కూడిన ప్రగతిని అందిస్తూ, సామాజిక తెలంగాణ నిర్మాణానికి ఈ ఆదర్శాలు ఎంతగానో దోహదపడతాయని ఆమె ఆశాభావం వ్యక్తం చేశారు.\""}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Latest Events Section (Janam Jagruthi Baata) */}
      <section className="py-16 sm:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Highlight Detail */}
            <div className="lg:w-1/3 space-y-6">
              <span className="section-eyebrow inline-flex">
                {language === 'en' ? "CAMPAIGN HIGHLIGHT" : "యాత్ర ముఖ్యాంశం"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0a361e] leading-tight">
                {language === 'en' ? "Jagruthi Janam Baata" : "జాగృతి జనం బాట"}
              </h2>
              <p className="text-sm text-[#a16207] font-bold uppercase tracking-widest font-ui">
                {language === 'en' 
                  ? "Kavitha to Embark on “Jagruthi Janambata” — A Journey to Listen, Learn, and Lead."
                  : "కల్వకుంట్ల కవిత జనంబాట — వినడం, నేర్చుకోవడం మరియు నడిపించే ప్రయాణం."}
              </p>
              <div className="h-0.5 w-16 bg-[#0f5132]" />
              <p className="text-sm text-[#3d4f41] leading-relaxed font-sans font-medium">
                {language === 'en'
                  ? "Starting October 25, Kalvakuntla Kavitha launched a statewide outreach movement titled “Jagruthi Janambata” to reconnect with the roots of Telangana, assess ground realities, and advocate for community solutions."
                  : "అక్టోబర్ 25 నుండి, కల్వకుంట్ల కవిత గారు రాష్ట్రవ్యాప్త ప్రజా బాట యాత్రకు శ్రీకారం చుట్టారు. గ్రామాల్లో పర్యటిస్తూ క్షేత్రస్థాయి సమస్యలను నేరుగా తెలుసుకుని, ప్రజలకు అండగా నిలిచేందుకు ఈ ఉద్యమాన్ని ప్రారంభించారు."}
              </p>
              <button onClick={() => navigateTo('programs')} className="btn-primary gap-2 text-[9px] px-5 py-3 w-fit" style={{ borderRadius: '2px' }}>
                {language === 'en' ? "Discover More Programs" : "మరిన్ని కార్యక్రమాలను చూడండి"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Right: Grid of Events */}
            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {gridEvents.map((item, i) => (
                  <div key={i} className="official-card bg-white hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                    <div className="h-44 overflow-hidden relative">
                      <img src={item.image} alt="Event" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="text-sm sm:text-base font-display font-black text-[#0a361e] leading-snug mb-4 line-clamp-2">
                        {item.title[language]}
                      </h4>
                      <button onClick={() => navigateTo('news')} className="text-[9px] font-black uppercase tracking-widest text-[#a16207] hover:text-[#0f5132] transition-colors flex items-center gap-1.5 w-fit">
                        {language === 'en' ? "Read Event Details" : "పూర్తి వివరాలు చూడండి"}
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* 6.5. Key Focus & Issues Section */}
      <section className="py-16 sm:py-20 bg-[#f4f3f0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="section-eyebrow mb-3 inline-flex">
                {language === 'en' ? "CRITICAL OUTLOOK" : "కీలక అంశాలు"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0a361e]">
                {language === 'en' ? "Key Issues & Focus" : "తెలంగాణ కీలక సమస్యలు & ప్రాధాన్యతలు"}
              </h2>
            </div>
            <button onClick={() => navigateTo('news')} className="btn-secondary gap-1.5 text-[9px] px-4 py-2 w-fit border-gray-300 hover:border-[#0f5132]" style={{ borderRadius: '2px' }}>
              {language === 'en' ? "View All Issues" : "అన్ని అంశాలు చూడండి"}
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFocusItems.map((item, i) => (
              <div key={i} className="official-card bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-[#a16207]/40 transition-colors border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-ui font-black uppercase tracking-widest text-[#a16207]">
                      {language === 'en' ? "Key Issue" : "ముఖ్యమైన అంశం"}
                    </span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-display font-black text-[#0a361e] leading-snug">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {item.desc[language]}
                  </p>
                </div>
                <button onClick={() => navigateTo('news')} className="text-[9px] font-black uppercase tracking-widest text-[#0f5132] hover:text-[#a16207] transition-colors flex items-center gap-1.5 mt-6 w-fit">
                  {language === 'en' ? "Read Focus Paper" : "పూర్తి నివేదిక చదవండి"}
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6. Latest News & Articles Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="section-eyebrow mb-3 inline-flex">
                {language === 'en' ? "LATEST COVERAGE" : "తాజా సమాచారం"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0a361e]">
                {language === 'en' ? "Latest News & Articles" : "తాజా వార్తలు & వ్యాసాలు"}
              </h2>
            </div>
            <button onClick={() => navigateTo('news')} className="btn-secondary gap-1.5 text-[9px] px-4 py-2 w-fit border-gray-300 hover:border-[#0f5132]" style={{ borderRadius: '2px' }}>
              {language === 'en' ? "Browse Articles" : "వ్యాసాల నిధి"}
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNewsArticles.map((item, i) => (
              <div key={i} className="official-card bg-[#fcfbfa] p-6 sm:p-7 flex flex-col justify-between hover:border-[#0f5132]/40 transition-colors border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-ui font-black uppercase tracking-widest text-[#0f5132] px-2 py-0.5 bg-[#0f5132]/5">
                      {language === 'en' ? "Press Update" : "తాజా ప్రకటన"}
                    </span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-display font-black text-[#0a361e] leading-snug">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {item.desc[language]}
                  </p>
                </div>
                <button onClick={() => navigateTo('news')} className="text-[9px] font-black uppercase tracking-widest text-[#a16207] hover:text-[#0f5132] transition-colors flex items-center gap-1.5 mt-6 w-fit">
                  {language === 'en' ? "Read Article" : "పూర్తి వ్యాసం చదవండి"}
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Live Video (Footer Area Embed) */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0a361e] to-[#041a0e] text-white border-b border-[#a16207]/30 relative overflow-hidden">
        {/* Map outline background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "url('https://www.telanganajagruthi.org/wp-content/uploads/2024/03/telanaga-membership-party.jpg.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[8px] tracking-[0.25em] font-ui font-black uppercase text-[#facc15] border border-[#facc15]/30 bg-[#facc15]/5 mb-4" style={{ borderRadius: '1px' }}>
            <Play className="h-3 w-3 fill-current" />
            {language === 'en' ? "TELANGANA JAGRUTHI LIVE VIDEO" : "తెలంగాణ जागृति లైవ్ వీడియో"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white mb-3">
            {language === 'en' ? "WATCH US LIVE" : "ప్రత్యక్ష ప్రసారాలు"}
          </h2>
          <p className="text-xs text-gray-300 max-w-xl mx-auto mb-8 font-sans font-medium">
            {language === 'en'
              ? "Watch live yatra updates, press statements, and public meeting addresses directly from our official channel."
              : "మా అధికారిక ఛానెల్ ద్వారా ప్రత్యక్ష ప్రసారాలు, పత్రికా సమావేశాలు మరియు యాత్ర అప్‌డేట్‌లను ఇక్కడే వీక్షించండి."}
          </p>

          {/* YouTube Embed Container */}
          <div className="w-full aspect-video border-2 border-[#a16207]/30 shadow-2xl relative bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/h0RdKGW2WXA"
              title="Telangana Jagruthi Live Video Broadcasts"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 8. Social Feed Panels (Facebook & Instagram Side-by-Side) */}
      <section className="py-16 sm:py-20 bg-[#f8f7f5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center space-y-4 mb-14">
            <span className="section-eyebrow bg-[#0f5132]/5 text-[#0f5132] inline-flex items-center gap-1.5">
              {language === 'en' ? 'LIVE SOCIAL CHANNELS' : 'సామాజిక ప్రవాహాలు'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0a361e] uppercase tracking-tight">
              {language === 'en' ? 'Our Facebook & Instagram Feeds' : 'ఫేస్‌బుక్ & ఇన్‌స్టాగ్రామ్ ఫీడ్స్'}
            </h2>
            <div className="h-1 w-14 bg-[#a16207]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Facebook Page Feed Panel */}
            <div className="bg-white border border-gray-200 shadow-sm p-5 sm:p-6 flex flex-col justify-between" style={{ borderRadius: '2px' }}>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#1877F2]/10 rounded-sm">
                    <svg className="h-5.5 w-5.5 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-[#0a361e] uppercase tracking-wider">Bharat Jagruthi Facebook</h3>
                    <p className="text-[10px] text-gray-400 font-bold">@BharatJagruthi</p>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/BharatJagruthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-[#1877F2] text-white font-ui font-black text-[9px] uppercase tracking-widest hover:bg-[#1565C0] transition-colors"
                  style={{ borderRadius: '1.5px' }}
                >
                  Visit Page
                </a>
              </div>

              {/* Real Facebook Iframe Timeline Embed */}
              <div className="w-full h-[500px] bg-white flex items-center justify-center relative overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBharatJagruthi&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1798293220578993"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '500px', width: '500px', height: '500px' }}
                  scrolling="yes"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            {/* Instagram Feed Panel */}
            <div className="bg-white border border-gray-200 shadow-sm p-5 sm:p-6 flex flex-col justify-between" style={{ borderRadius: '2px' }}>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#E1306C]/10 rounded-sm">
                    <svg className="h-5.5 w-5.5 fill-none stroke-[#E1306C]" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-[#0a361e] uppercase tracking-wider">Telangana Jagruthi Instagram</h3>
                    <p className="text-[10px] text-gray-400 font-bold">@telangana__jagruthi</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/telangana__jagruthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-ui font-black text-[9px] uppercase tracking-widest hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '1.5px' }}
                >
                  Follow Us
                </a>
              </div>

              {/* Real Instagram Blockquote Embed */}
              <div className="w-full h-[500px] overflow-y-auto bg-white border border-gray-100 p-2 flex justify-center no-scrollbar">
                <blockquote 
                  className="instagram-media w-full" 
                  data-instgrm-permalink="https://www.instagram.com/telangana__jagruthi/?utm_source=ig_embed&ig_rid=b111820c-2e58-4834-a8e0-2beada848f1d" 
                  data-instgrm-version="14"
                  style={{ margin: '0 auto', width: '100%', minWidth: '326px', maxWidth: '500px' }}
                >
                  <a href="https://www.instagram.com/telangana__jagruthi/?utm_source=ig_embed&ig_rid=b111820c-2e58-4834-a8e0-2beada848f1d" target="_blank" rel="noopener noreferrer">
                    Loading Instagram Feed...
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
