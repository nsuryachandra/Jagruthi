import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ThreeDHero from './ThreeDHero';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = ({ setActiveSection }) => {
  const { language, t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      eyebrow: 'Cultural Heritage',
      icon: <Award className="h-4 w-4 text-[#a16207]" />,
      title:    { en: 'Preserving Cultural Identity', te: 'సాంస్కృతిక పునరుజ్జీవనం' },
      subtitle: { en: 'Bathukamma Floral Festival — Elevated Globally', te: 'బతుకమ్మ పండుగ ప్రపంచవ్యాప్తం' },
      desc:     {
        en: 'Telangana Jagruthi successfully revitalized the ancient floral festival of Bathukamma, bringing Telangana\'s traditional heritage to international fame across 18 countries.',
        te: 'తెలంగాణ సంస్కృతికి ప్రతీక అయిన బతుకమ్మ పూల పండుగను తెలంగాణ జాగృతి పునరుద్ధరించింది. 18 కంటే ఎక్కువ దేశాల్లో ఈ పండుగను ఘనంగా నిర్వహించి ప్రపంచవ్యాప్త ఖ్యాతిని చేకూర్చింది.'
      },
      stat: { value: '18+', label: 'Countries' },
      accent: '#a16207'
    },
    {
      eyebrow: 'Community Development',
      icon: <Users className="h-4 w-4 text-[#0f5132]" />,
      title:    { en: 'Empowering Rural Communities', te: 'నైపుణ్యాభివృద్ధి & ఉపాధి' },
      subtitle: { en: '17+ Skill Development Centres Statewide', te: 'వేలాది మంది యువతకు ఉచిత శిక్షణ' },
      desc:     {
        en: 'Through vocational training, digital literacy, and women\'s empowerment cells, we are building a self-reliant and economically strong Telangana.',
        te: 'రాష్ట్రవ్యాప్తంగా నైపుణ్యాభివృద్ధి కేంద్రాల ద్వారా వేలాది మంది యువతకు, మహిళలకు ఉపాధి శిక్షణ కల్పించి, వారిని స్వయం సమృద్ధులుగా తీర్చిదిద్దుతున్నాము.'
      },
      stat: { value: '17+', label: 'Training Centres' },
      accent: '#0f5132'
    },
    {
      eyebrow: 'Agitational Leadership',
      icon: <ShieldAlert className="h-4 w-4 text-[#b91c1c]" />,
      title:    { en: 'Advocating for Farmers & Workers', te: 'రైతులు మరియు విద్యార్థుల హక్కులు' },
      subtitle: { en: 'People-First Movement Since 2006', te: 'ప్రజా ఉద్యమాలలో అగ్రగామి' },
      desc:     {
        en: 'Rooted in the separate statehood agitation, we lead peaceful movements for farmers\' procurement bonuses, crop insurance rights, and education fee regulations.',
        te: 'ప్రత్యేక రాష్ట్ర ఉద్యమ స్ఫూర్తితో రైతులు, విద్యార్థులు మరియు నిరుద్యోగుల హక్కుల కోసం నిరంతరం పోరాడుతోంది.'
      },
      stat: { value: '2006', label: 'Founded' },
      accent: '#b91c1c'
    }
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent(p => (p + 1) % slides.length), 8500);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent(p => (p + 1) % slides.length);

  const goTo = (id, section) => {
    setActiveSection(section);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const slide = slides[current];

  return (
    <section
      id="hero"
      className="relative min-h-[92svh] sm:min-h-[88svh] flex items-center overflow-hidden bg-[#f8f7f5]"
    >
      {/* ── Subtle official background pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 47px, #0a361e 47px, #0a361e 48px), repeating-linear-gradient(90deg, transparent, transparent 47px, #0a361e 47px, #0a361e 48px)',
        }}
      />

      {/* ── Left accent line ── */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0f5132] via-[#a16207] to-[#0f5132] opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Eyebrow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-eyebrow'}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35 }}
              >
                <span className="section-eyebrow">
                  {slide.icon}
                  {slide.eyebrow}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Main Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-title'}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="space-y-3"
              >
                <h1
                  className="font-display font-black text-[#0a361e] leading-tight"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {t('hero.title')}
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#a16207] font-serif leading-snug">
                  {slide.subtitle[language]}
                </h2>
              </motion.div>
            </AnimatePresence>

            {/* Ornament */}
            <div className="flex items-center gap-3 w-fit">
              <div className="h-px w-8 bg-[#a16207]" />
              <div className="h-1.5 w-1.5 bg-[#a16207] rotate-45" />
              <div className="h-px w-8 bg-[#a16207]" />
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current + '-desc'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base text-[#3a4a3f] leading-relaxed font-medium max-w-xl"
                style={{ fontFamily: 'Mandali, Outfit, sans-serif' }}
              >
                {slide.desc[language]}
              </motion.p>
            </AnimatePresence>

            {/* Stat callout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-stat'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="inline-flex items-center gap-4 bg-white border border-gray-200 border-l-4 border-l-[#0f5132] px-5 py-3 shadow-sm"
                style={{ borderRadius: '2px' }}
              >
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#0a361e] font-display leading-none"
                    style={{ fontFamily: 'Cinzel, serif' }}>{slide.stat.value}</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#a16207] font-bold mt-0.5">{slide.stat.label}</p>
                </div>
                <div className="h-10 w-px bg-gray-200" />
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold max-w-[120px] leading-relaxed">
                  Telangana Jagruthi Achievement
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => goTo('about-founder', 'about-founder')}
                className="btn-primary text-[9px] sm:text-[10px]"
                style={{ borderRadius: '2px' }}
              >
                {t('hero.exploreBtn')}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => goTo('contact', 'contact')}
                className="btn-secondary text-[9px] sm:text-[10px]"
                style={{ borderRadius: '2px' }}
              >
                {t('common.joinUs')}
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={prev}
                className="h-7 w-7 border border-gray-300 hover:border-[#0f5132] text-gray-400 hover:text-[#0f5132] flex items-center justify-center transition-all cursor-pointer"
                style={{ borderRadius: '2px' }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all cursor-pointer ${i === current ? 'w-6 h-2 bg-[#0f5132]' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
                    style={{ borderRadius: '1px' }}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="h-7 w-7 border border-gray-300 hover:border-[#0f5132] text-gray-400 hover:text-[#0f5132] flex items-center justify-center transition-all cursor-pointer"
                style={{ borderRadius: '2px' }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* ── Right: 3D Emblem ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Official frame */}
            <div
              className="absolute inset-0 border-2 border-[#0f5132]/10 pointer-events-none"
              style={{ borderRadius: '2px' }}
            />
            <div className="relative h-[300px] sm:h-[400px] lg:h-[460px] w-full flex items-center justify-center">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-[#a16207]" />
              <div className="absolute top-0 right-0 h-5 w-5 border-t-2 border-r-2 border-[#a16207]" />
              <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-[#a16207]" />
              <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-[#a16207]" />
              <ThreeDHero />
            </div>
            {/* Official seal label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span
                className="text-[7px] font-display font-bold uppercase tracking-[0.2em] text-[#0f5132]/50"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Telangana Jagruthi — Est. 2006
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom border stripe */}
      <div className="absolute bottom-0 left-0 right-0 party-stripe" />
    </section>
  );
};

export default HeroSlider;
