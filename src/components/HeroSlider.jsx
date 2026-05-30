import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ThreeDHero from './ThreeDHero';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Slide data ───────────────────────────────────────── */
const SLIDES = [
  {
    id: 'slide-1',
    eyebrow: { en: 'Bhoomi Poratam', te: 'భూ పోరాటం' },
    title: { en: 'Justice for Movement Activists', te: 'ఉద్యమకారుల హక్కుల రక్షణ' },
    highlight: { en: 'Land Agitation Lead by Kavitha in Manakondur', te: 'మానకొండూరులో కవిత గారి భూపోరాటం' },
    desc: {
      en: 'Demanding immediate justice and land allocations for Telangana movement activists who sacrificed for statehood.',
      te: 'తెలంగాణ రాష్ట్ర సాధన కోసం ప్రాణాలర్పించిన ఉద్యమకారుల కుటుంబాలకు తక్షణ న్యాయం మరియు భూ కేటాయింపులను డిమాండ్ చేస్తున్నాము.'
    },
    stat: { value: '10K+', label: { en: 'Activists Joined', te: 'పాల్గొన్న ఉద్యమకారులు' } },
    icon: ShieldAlert,
    accentColor: '#b91c1c',
    image: 'https://www.telanganarakshanasena.org/wp-content/uploads/2025/12/kalvakuntla-kavitha-land-agitation-telangana-activists-manakondur-9.jpg'
  },
  {
    id: 'slide-2',
    eyebrow: { en: 'Janam Bata Campaign', te: 'జనం బాట యాత్ర' },
    title: { en: 'TRS Janam Bata — Karimnagar', te: 'టీఆర్ఎస్ జనం బాట — కరీంనగర్' },
    highlight: { en: 'Connecting with Citizens at the Grassroots', te: 'క్షేత్రస్థాయిలో ప్రజలతో మమేకం' },
    desc: {
      en: 'Travelling village to village to understand local grievances, advocate for solutions, and lead grassroots development.',
      te: 'స్థానిక సమస్యలను తెలుసుకోవడానికి, పరిష్కారాల కోసం పోరాడటానికి మరియు గ్రామ గ్రామాన అభివృద్ధిని ప్రోత్సహించడానికి క్షేత్రస్థాయి పర్యటన.'
    },
    stat: { value: 'Karimnagar', label: { en: 'District Campaign', te: 'జిల్ల్లా ప్రచారం' } },
    icon: Users,
    accentColor: '#0f5132',
    image: 'https://www.telanganarakshanasena.org/wp-content/uploads/2025/10/slider-4.jpg'
  },
  {
    id: 'slide-3',
    eyebrow: { en: 'Public Outreach', te: 'ప్రజా బాట' },
    title: { en: 'A Journey to Listen and Lead', te: 'వినడం మరియు నడిపించే ప్రయాణం' },
    highlight: { en: 'TRS Janam Bata Statewide Movement', te: 'టీఆర్ఎస్ జనం బాట రాష్ట్రవ్యాప్త ఉద్యమం' },
    desc: {
      en: 'Organising mass public meetings to raise awareness on agricultural rights, educational reforms, and heritage preservation.',
      te: 'వ్యవసాయ హక్కులు, విద్యా రంగ సంస్కరణలు మరియు సంస్కృతి సంరక్షణపై అవగాహన పెంచేందుకు భారీ బహిరంగ సభల నిర్వహణ.'
    },
    stat: { value: '2006', label: { en: 'Established', te: 'స్థాపితమైంది' } },
    icon: Award,
    accentColor: '#a16207',
    image: 'https://www.telanganarakshanasena.org/wp-content/uploads/2025/10/home-page-slider.jpg'
  },
  {
    id: 'slide-4',
    eyebrow: { en: 'Nizamabad Session', te: 'నిజామాబాద్ సదస్సు' },
    title: { en: 'TRS Janam Bata — Nizamabad', te: 'టీఆర్ఎస్ జనం బాట — నిజామాబాద్' },
    highlight: { en: 'Resolving Grievances & Mobilising Youth', te: 'సమస్యల పరిష్కారం & యువత సమీకరణ' },
    desc: {
      en: 'Empowering local communities by assessing ground realities, holding town halls, and creating regional livelihood opportunities.',
      te: 'క్షేత్రస్థాయి పరిస్థితులను అంచనా వేయడం, సదస్సులు నిర్వహించడం మరియు ప్రాంతీయ ఉపాధి అవకాశాలను సృష్టించడం ద్వారా ప్రజలను బలోపేతం చేయడం.'
    },
    stat: { value: 'Nizamabad', label: { en: 'District Campaign', te: 'జిల్లా ప్రచారం' } },
    icon: Users,
    accentColor: '#0f5132',
    image: 'https://www.telanganarakshanasena.org/wp-content/uploads/2025/10/home-page-slide-2.jpeg'
  },
  {
    id: 'slide-5',
    eyebrow: { en: 'Heritage & Welfare', te: 'వారసత్వం & సంక్షేమం' },
    title: { en: 'Statewide Cultural Empowerment', te: 'రాష్ట్రవ్యాప్త సాంస్కృతిక సాధికారత' },
    highlight: { en: 'Reviving Traditions and Supporting Livelihoods', te: 'సంప్రదాయాల పునరుద్ధరణ & ఉపాధి మద్దతు' },
    desc: {
      en: 'From Bathukamma celebrations to skill-building initiatives, we work to protect Telangana\'s unique identity and economic strength.',
      te: 'బతుకమ్మ పండుగ వేడుకల నుండి నైపుణ్య శిక్షణా కార్యక్రమాల వరకు, తెలంగాణ ప్రత్యేక అస్తిత్వాన్ని మరియు ఆర్థిక బలాన్ని కాపాడటానికి కృషి చేస్తున్నాము.'
    },
    stat: { value: '33', label: { en: 'Districts Covered', te: 'కవర్ చేసిన జిల్లాలు' } },
    icon: Award,
    accentColor: '#a16207',
    image: 'https://www.telanganarakshanasena.org/wp-content/uploads/2025/10/home-jagruthi-janam-baata.jpg'
  }
];

/* ── Component ────────────────────────────────────────── */
const HeroSlider = ({ setActiveSection }) => {
  const { language, t } = useLanguage();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(p => (p + 1) % SLIDES.length), 9000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIdx(p => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIdx(p => (p + 1) % SLIDES.length);

  const goTo = (id, section) => {
    setActiveSection(section);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const slide = SLIDES[idx];
  const Icon  = slide.icon;

  return (
    <section id="hero"
      className="relative min-h-[91svh] flex items-center bg-[#f8f7f5] overflow-hidden">

      {/* ── Subtle graph paper grid ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(10,54,30,1) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(10,54,30,1) 1px, transparent 1px)'
          ].join(','),
          backgroundSize: '48px 48px'
        }}
      />

      {/* ── Soft gradient orbs ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f0fdf4] rounded-full blur-[120px] opacity-40 pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#fffbeb] rounded-full blur-[100px] opacity-30 pointer-events-none translate-y-1/4 -translate-x-1/4" />

      {/* ── Vertical left accent ── */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0f5132] via-[#a16207] to-transparent hidden lg:block" />

      {/* 3D Canvas Background (Interactive Bathukamma Particles) */}
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] z-0 pointer-events-none opacity-[0.22] hidden lg:block">
        <ThreeDHero />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ───────── LEFT: Text ───────── */}
          <div className="flex flex-col gap-6 lg:gap-7 order-2 lg:order-1">

            {/* Eyebrow pill */}
            <AnimatePresence mode="wait">
              <motion.div key={slide.id + '-eyebrow'}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.3 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[8px] font-ui font-black uppercase tracking-[0.22em] border"
                  style={{
                    color: slide.accentColor,
                    borderColor: slide.accentColor + '40',
                    background: slide.accentColor + '08',
                    borderRadius: '1px'
                  }}>
                  <Icon className="h-3 w-3" style={{ color: slide.accentColor }} />
                  {slide.eyebrow[language]}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Main Title */}
            <AnimatePresence mode="wait">
              <motion.div key={slide.id + '-title'}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}>
                <h1
                  className="text-[clamp(2rem,5vw,3.6rem)] font-display font-black leading-[1.1] text-[#0a361e] tracking-tight"
                >
                  {slide.title[language]}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Highlight subtitle */}
            <AnimatePresence mode="wait">
              <motion.p key={slide.id + '-hl'}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[clamp(0.9rem,2.5vw,1.15rem)] font-display font-bold leading-snug tracking-tight"
                style={{ color: slide.accentColor }}>
                {slide.highlight[language]}
              </motion.p>
            </AnimatePresence>

            {/* Ornament */}
            <div className="flex items-center gap-2">
              <div className="h-px w-10 bg-[#0f5132]" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#a16207]" />
              <div className="h-px w-5 bg-[#a16207]/50" />
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p key={slide.id + '-desc'}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                className="text-[clamp(0.82rem,1.8vw,0.95rem)] text-[#3d4f41] leading-[1.8] max-w-[520px] font-sans font-medium">
                {slide.desc[language]}
              </motion.p>
            </AnimatePresence>

            {/* Stat banner */}
            <AnimatePresence mode="wait">
              <motion.div key={slide.id + '-stat'}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-stretch gap-0 bg-white border border-gray-200 shadow-sm overflow-hidden w-fit"
                style={{ borderRadius: '2px', borderLeft: `4px solid ${slide.accentColor}` }}>
                <div className="px-5 py-3.5">
                  <p className="text-[clamp(1.5rem,4vw,2.2rem)] font-display font-black text-[#0a361e] leading-none">
                    {slide.stat.value}
                  </p>
                  <p className="text-[8px] uppercase tracking-[0.2em] font-ui font-bold mt-1"
                    style={{ color: slide.accentColor }}>
                    {slide.stat.label[language]}
                  </p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="px-4 py-3.5 flex items-center">
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-ui font-bold leading-relaxed max-w-[100px]">
                    TRS: Telangana Rakshana Sena Achievement
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button onClick={() => goTo('about-founder', 'about-founder')}
                className="btn-primary gap-2 text-[9px] px-5 py-3"
                style={{ borderRadius: '2px' }}>
                {t('hero.exploreBtn')}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => goTo('contact', 'contact')}
                className="btn-secondary gap-2 text-[9px] px-5 py-3"
                style={{ borderRadius: '2px' }}>
                {t('common.joinUs')}
              </button>
            </div>

            {/* Slide controls */}
            <div className="flex items-center gap-3 pt-1">
              <button onClick={prev}
                className="h-8 w-8 border border-gray-300 hover:border-[#0f5132] text-gray-400 hover:text-[#0f5132] flex items-center justify-center transition-all cursor-pointer"
                style={{ borderRadius: '2px' }}>
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {SLIDES.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className={`transition-all cursor-pointer ${i === idx ? 'w-6 h-2 bg-[#0f5132]' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
                    style={{ borderRadius: '1px' }}
                  />
                ))}
              </div>
              <button onClick={next}
                className="h-8 w-8 border border-gray-300 hover:border-[#0f5132] text-gray-400 hover:text-[#0f5132] flex items-center justify-center transition-all cursor-pointer"
                style={{ borderRadius: '2px' }}>
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="text-[8px] font-ui font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">
                {String(idx + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* ───────── RIGHT: Stacked Image and 3D Canvas ───────── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">

            {/* Official frame with corner brackets */}
            <div className="relative w-full max-w-[480px] mx-auto h-[300px] sm:h-[380px] lg:h-[460px] bg-[#0a361e]/5 overflow-hidden">
              {/* Event Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title[language]}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10"
                />
              </AnimatePresence>

              {/* Corner bracket accents */}
              {[
                'top-0 left-0 border-t-2 border-l-2',
                'top-0 right-0 border-t-2 border-r-2',
                'bottom-0 left-0 border-b-2 border-l-2',
                'bottom-0 right-0 border-b-2 border-r-2'
              ].map((cls, i) => (
                <div key={i} className={`absolute h-6 w-6 border-[#a16207] ${cls} pointer-events-none z-20`} />
              ))}

              {/* Faint inner border */}
              <div className="absolute inset-3 border border-[#a16207]/20 pointer-events-none z-20" />

              {/* Footer label */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-20 bg-[#0a361e]/70 px-3 py-1 border border-[#a16207]/30" style={{ borderRadius: '1px' }}>
                <span className="text-[7px] tracking-[0.25em] uppercase text-white/90 font-display font-black">
                  TRS: Telangana Rakshana Sena — Est. 2006
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f5132] via-[#a16207] to-[#0f5132]" />
    </section>
  );
};

export default HeroSlider;
