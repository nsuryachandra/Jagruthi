import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ThreeDHero from './ThreeDHero';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Slide data ───────────────────────────────────────── */
const SLIDES = [
  {
    id: 'slide-1',
    eyebrow: { en: 'Cultural Revival',           te: 'సాంస్కృతిక పునరుజ్జీవనం' },
    title:   { en: 'Preserving Telangana\'s Heritage', te: 'తెలంగాణ వారసత్వ సంరక్షణ' },
    highlight:{ en: 'Bathukamma — Celebrated in 18+ Nations', te: 'బతుకమ్మ — 18+ దేశాల్లో వేడుక' },
    desc:    {
      en: 'Telangana Jagruthi revitalised the ancient Bathukamma floral festival, transforming a regional tradition into an internationally celebrated cultural milestone.',
      te: 'తెలంగాణ జాగృతి బతుకమ్మ పూల పండుగను పునరుద్ధరించి, ఒక ప్రాంతీయ సంప్రదాయాన్ని అంతర్జాతీయంగా ఘనంగా నిర్వహించింది.'
    },
    stat: { value: '18+', label: { en: 'Countries', te: 'దేశాలు' } },
    icon: Award,
    accentColor: '#a16207'
  },
  {
    id: 'slide-2',
    eyebrow: { en: 'Community Development',      te: 'సమాజాభివృద్ధి' },
    title:   { en: 'Empowering Every Community', te: 'ప్రతి వర్గాన్ని శక్తిమంతం చేయడం' },
    highlight:{ en: '17+ Skill Centres Operating Statewide', te: '17+ నైపుణ్య కేంద్రాలు రాష్ట్రవ్యాప్తంగా' },
    desc:    {
      en: 'Through vocational training, digital literacy programmes and women\'s empowerment cells, we build a self-reliant Telangana — district by district.',
      te: 'వృత్తి శిక్షణ, డిజిటల్ అక్షరాస్యత కార్యక్రమాలు మరియు మహిళా సాధికారత కేంద్రాల ద్వారా మేము జిల్లా జిల్లాగా స్వావలంబన తెలంగాణను నిర్మిస్తున్నాం.'
    },
    stat: { value: '17+', label: { en: 'Training Centres', te: 'శిక్షణ కేంద్రాలు' } },
    icon: Users,
    accentColor: '#0f5132'
  },
  {
    id: 'slide-3',
    eyebrow: { en: 'People\'s Movement',         te: 'ప్రజా ఉద్యమం' },
    title:   { en: 'Standing for Farmers & Workers', te: 'రైతులు & కార్మికుల పక్షాన' },
    highlight:{ en: 'Grassroots Advocacy Since 2006', te: '2006 నుండి క్షేత్రస్థాయి పోరాటం' },
    desc:    {
      en: 'Rooted in the separate statehood movement, Jagruthi leads peaceful agitations demanding farmers\' procurement bonuses, crop insurance, and fair education fee regulations.',
      te: 'ప్రత్యేక రాష్ట్ర ఉద్యమ స్ఫూర్తితో రైతుల కొనుగోలు బోనస్, పంట బీమా మరియు విద్యా ఫీజుల నియంత్రణ కోసం జాగృతి శాంతియుత ఆందోళనలు నిర్వహిస్తోంది.'
    },
    stat: { value: '2006', label: { en: 'Established', te: 'స్థాపితమైంది' } },
    icon: ShieldAlert,
    accentColor: '#b91c1c'
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

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ───────── LEFT: Text ───────── */}
          <div className="flex flex-col gap-6 lg:gap-7 order-2 lg:order-1">

            {/* Eyebrow pill */}
            <AnimatePresence mode="wait">
              <motion.div key={slide.id + '-eyebrow'}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.3 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.22em] border"
                  style={{
                    fontFamily: "'Cinzel', serif",
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
                  className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] text-[#0a361e]"
                  style={{ fontFamily: "'Cinzel', Georgia, serif", letterSpacing: '-0.01em' }}
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
                className="text-[clamp(0.9rem,2.5vw,1.2rem)] font-bold leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: slide.accentColor }}>
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
                className="text-[clamp(0.82rem,1.8vw,0.95rem)] text-[#3d4f41] leading-[1.8] max-w-[520px] font-medium"
                style={{ fontFamily: "'Outfit', 'Mandali', sans-serif" }}>
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
                  <p className="text-[clamp(1.5rem,4vw,2.2rem)] font-black text-[#0a361e] leading-none"
                    style={{ fontFamily: "'Cinzel', serif" }}>
                    {slide.stat.value}
                  </p>
                  <p className="text-[8px] uppercase tracking-[0.2em] font-bold mt-1"
                    style={{ color: slide.accentColor, fontFamily: "'Outfit', sans-serif" }}>
                    {slide.stat.label[language]}
                  </p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="px-4 py-3.5 flex items-center">
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold leading-relaxed max-w-[100px]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Telangana Jagruthi Achievement
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button onClick={() => goTo('about-founder', 'about-founder')}
                className="btn-primary gap-2 text-[9px] px-5 py-3"
                style={{ borderRadius: '2px', fontFamily: "'Cinzel', serif" }}>
                {t('hero.exploreBtn')}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => goTo('contact', 'contact')}
                className="btn-secondary gap-2 text-[9px] px-5 py-3"
                style={{ borderRadius: '2px', fontFamily: "'Cinzel', serif" }}>
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
              <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1"
                style={{ fontFamily: "'Cinzel', serif" }}>
                {String(idx + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* ───────── RIGHT: 3D Canvas ───────── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">

            {/* Official frame with corner brackets */}
            <div className="relative w-full max-w-[480px] mx-auto h-[300px] sm:h-[380px] lg:h-[460px]">
              {/* Corner bracket accents */}
              {[
                'top-0 left-0 border-t-2 border-l-2',
                'top-0 right-0 border-t-2 border-r-2',
                'bottom-0 left-0 border-b-2 border-l-2',
                'bottom-0 right-0 border-b-2 border-r-2'
              ].map((cls, i) => (
                <div key={i} className={`absolute h-6 w-6 border-[#a16207] ${cls} pointer-events-none`} />
              ))}

              {/* Faint inner border */}
              <div className="absolute inset-3 border border-[#0f5132]/5 pointer-events-none" />

              {/* 3D Canvas */}
              <ThreeDHero />

              {/* Footer label */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-[7px] tracking-[0.25em] uppercase text-[#0f5132]/30 font-black"
                  style={{ fontFamily: "'Cinzel', serif" }}>
                  Telangana Jagruthi — Est. 2006
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
