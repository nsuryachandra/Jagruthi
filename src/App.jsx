import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import LeadershipOrg from './components/LeadershipOrg';
import NewsArticles from './components/NewsArticles';
import DownloadsSection from './components/DownloadsSection';
import ContactForm from './components/ContactForm';
import SocialFeeds from './components/SocialFeeds';
import ProgramsActivities from './components/ProgramsActivities';
import OrganizationalWings from './components/OrganizationalWings';
import VideoGallery from './components/VideoGallery';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop]  = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['hero', 'about-founder', 'about-vision', 'about-history', 'about-org', 'programs', 'wings', 'news', 'videos', 'downloads', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-[#1a2a1f] flex flex-col relative">

      {/* Floating Navigation (ribbon + navbar handled inside) */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/*
        Top padding accounts for fixed nav stack height:
          Mobile  → nav bar only:            64px  → pt-16
          sm+     → ribbon (28px) + nav (68px) = 96px → sm:pt-24
      */}
      <main className="flex-1 pt-[66px] lg:pt-[70px]">
        {/* Clickable Party Membership Banner */}
        <div className="w-full bg-[#0a361e] border-b border-[#a16207]/30 overflow-hidden relative group">
          <a
            href="https://www.telanganajagruthi.org/party-membership-form/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full hover:opacity-95 transition-opacity duration-300"
          >
            <img
              src="https://www.telanganajagruthi.org/wp-content/uploads/2024/03/telanaga-membership-party.jpg.jpeg"
              alt="Click Here to Register Party Membership"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Subtle premium gold shine overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a16207]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          </a>
        </div>

        <HeroSlider setActiveSection={setActiveSection} />
        <AboutSection />
        <ProgramsActivities />
        <LeadershipOrg />
        <OrganizationalWings />
        <NewsArticles />
        <VideoGallery />
        <SocialFeeds />
        <DownloadsSection />
        <ContactForm />

      </main>

      <Footer setActiveSection={setActiveSection} />

      {/* Back to top — official square style */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 h-11 w-11 bg-[#0f5132] hover:bg-[#15803d] text-white flex items-center justify-center cursor-pointer shadow-xl transition-all hover:scale-105 active:scale-95 duration-200"
          style={{ borderRadius: '2px', borderTop: '2px solid #a16207' }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

    </div>
  );
}

export default App;
