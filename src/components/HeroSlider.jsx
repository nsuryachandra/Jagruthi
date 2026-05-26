import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ThreeDHero from './ThreeDHero';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, ShieldAlert } from 'lucide-react';

const HeroSlider = ({ setActiveSection }) => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: <Sparkles className="h-3.5 w-3.5 text-brand-gold-600" />,
      icon: <Award className="h-8 w-8 text-brand-gold-600" />,
      title: {
        en: "Preserving Cultural Identity",
        te: "సాంస్కృతిక పునరుజ్జీవనం"
      },
      subtitle: {
        en: "Bathukamma Floral Festival Elevated Globally",
        te: "బతుకమ్మ పండుగ ప్రపంచవ్యాప్తం"
      },
      desc: {
        en: "Telangana Jagruthi successfully revitalized the ancient floral festival of Bathukamma, bringing Telangana's traditional heritage to international fame across 18 countries.",
        te: "తెలంగాణ సంస్కృతికి ప్రతీక అయిన బతుకమ్మ పూల పండుగను తెలంగాణ జాగృతి పునరుద్ధరించింది. 18 కంటే ఎక్కువ దేశాల్లో ఈ పండుగను ఘనంగా నిర్వహించి ప్రపంచవ్యాప్త ఖ్యాతిని చేకూర్చింది."
      }
    },
    {
      badge: <Users className="h-3.5 w-3.5 text-brand-green-700" />,
      icon: <Users className="h-8 w-8 text-brand-green-700" />,
      title: {
        en: "Empowering Rural Communities",
        te: "నైపుణ్యాభివృద్ధి & ఉపాధి"
      },
      subtitle: {
        en: "17+ Skill Development Centers Statewide",
        te: "వేలాది మంది యువతకు ఉచిత శిక్షణ"
      },
      desc: {
        en: "Through vocational training, digital literacy, and women's empowerment cells, we are building a self-reliant and economically strong Samajika Telangana.",
        te: "రాష్ట్రవ్యాప్తంగా నైపుణ్యాభివృద్ధి కేంద్రాల ద్వారా వేలాది మంది యువతకు, మహిళలకు ఉపాధి శిక్షణ కల్పించి, వారిని స్వయం సమృద్ధులుగా తీర్చిదిద్దుతున్నాము."
      }
    },
    {
      badge: <ShieldAlert className="h-3.5 w-3.5 text-rose-600" />,
      icon: <ShieldAlert className="h-8 w-8 text-rose-600" />,
      title: {
        en: "Agitational Social Leadership",
        te: "నిరంతర ప్రజా ఉద్యమాలు"
      },
      subtitle: {
        en: "Advocating for Farmers, Workers & Youth",
        te: "రైతులు మరియు విద్యార్థుల హక్కుల రక్షణ"
      },
      desc: {
        en: "Rooted in the separate statehood agitation, we lead peaceful movements for regulatory school fees, farmers' procurement bonuses, and crop insurance rights.",
        te: "ప్రత్యేక రాష్ట్ర ఉద్యమ స్ఫూర్తితో రైతులు, వ్యవసాయ అనుబంధ రంగాలు, ప్రైవేటు పాఠశాలల ఫీజుల నియంత్రణ మరియు నిరుద్యోగుల హక్కుల కోసం నిరంతరం పోరాడుతోంది."
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleExplore = () => {
    const element = document.getElementById('about-founder');
    if (element) {
      setActiveSection('about-founder');
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRegister = () => {
    const element = document.getElementById('contact');
    if (element) {
      setActiveSection('contact');
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[95svh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#fafaf9]">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Glow Spheres */}
        <div className="absolute top-[15%] left-[8%] w-[35vw] h-[35vw] rounded-full bg-brand-green-900/[0.035] blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[8%] w-[45vw] h-[45vw] rounded-full bg-brand-gold-500/[0.035] blur-[160px] pointer-events-none" />
        
        {/* Subtle grid lines background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,78,59,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,78,59,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Slider Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left">
          
          {/* Animated Header Badge */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white border border-brand-green-900/10 shadow-sm w-fit">
            {slides[currentSlide].badge}
            <span className="text-[10px] sm:text-xs font-display font-black tracking-widest text-brand-green-900 uppercase">
              {language === 'en' ? 'Telangana Jagruthi' : 'తెలంగాణ జాగృతి'}
            </span>
          </div>

          {/* Majestic Serif Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight text-brand-green-900 leading-tight font-display">
            {t('hero.title')}
          </h1>

          {/* Slider Content Wrapper */}
          <div className="min-h-[160px] sm:min-h-[130px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.55 }}
                className="space-y-3.5"
              >
                <h3 className="text-lg sm:text-xl font-bold text-brand-gold-600 font-serif">
                  {slides[currentSlide].subtitle[language]}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-telugu font-medium">
                  {slides[currentSlide].desc[language]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4.5 pt-2">
            <button
              onClick={handleExplore}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-brand-green-900/20 hover:border-brand-green-900/40 text-brand-green-900 text-[11px] font-display font-black uppercase tracking-widest transition-all shadow-sm cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>{t('hero.exploreBtn')}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </button>
            <button
              onClick={handleRegister}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-gold-600 to-brand-gold-700 hover:from-brand-gold-500 hover:to-brand-gold-600 text-white text-[11px] font-display font-black uppercase tracking-widest transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t('common.joinUs')}
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center gap-3 pt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all rounded-full cursor-pointer ${
                  currentSlide === index ? 'w-10 bg-brand-green-900' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Right Column: 3D Emblem Canvas */}
        <div className="lg:col-span-5 relative h-[360px] sm:h-[460px] w-full flex items-center justify-center">
          
          {/* Subtle light circular frame background */}
          <div className="absolute h-[340px] w-[340px] sm:h-[430px] sm:w-[430px] rounded-full border border-brand-green-900/5 flex items-center justify-center animate-spin-slow pointer-events-none">
            <div className="h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] rounded-full border border-dashed border-brand-green-900/10" />
          </div>

          {/* 3D Canvas Component */}
          <ThreeDHero />

        </div>

      </div>

      {/* Curved bottom transition separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[35px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C67.81,118.92,144.29,111.31,214.34,92.83,284.4,74.35,302,60,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default HeroSlider;
