import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutSection from './components/AboutSection';
import LeadershipOrg from './components/LeadershipOrg';
import NewsArticles from './components/NewsArticles';
import DownloadsSection from './components/DownloadsSection';
import ContactForm from './components/ContactForm';
import SocialFeeds from './components/SocialFeeds';
import ProgramsActivities from './components/ProgramsActivities';
import OrganizationalWings from './components/OrganizationalWings';
import VideoGallery from './components/VideoGallery';
import { ArrowUp } from 'lucide-react';

const ABOUT_IDS = ['about-founder', 'about-vision', 'about-history', 'about-org'];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  const navigateTo = (id) => setActiveSection(id);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Determine what to render ── */
  const isHome = activeSection === 'hero';
  const isAbout = ABOUT_IDS.includes(activeSection);

  const renderMain = () => {
    if (isHome) {
      return <HomeView navigateTo={navigateTo} />;
    }
    if (isAbout) {
      return (
        <div className="bg-[#f8f7f5]">
          <AboutSection />
        </div>
      );
    }
    switch (activeSection) {
      case 'programs':
        return <ProgramsActivities />;
      case 'wings':
        return <OrganizationalWings />;
      case 'news':
        return <NewsArticles />;
      case 'videos':
        return <VideoGallery />;
      case 'downloads':
        return <DownloadsSection />;
      case 'contact':
        return (
          <div className="bg-[#f8f7f5]">
            <ContactForm />
            <SocialFeeds />
          </div>
        );
      case 'about-org':
        return (
          <div className="bg-[#f8f7f5]">
            <LeadershipOrg />
          </div>
        );
      default:
        return <HomeView navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-[#1a2a1f] flex flex-col relative">

      {/* Fixed Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={navigateTo} />

      <main className="flex-1 pt-[66px] lg:pt-[70px]">
        {/* Clickable Party Membership Banner — always visible on all pages */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a16207]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          </a>
        </div>

        {/* Routed View */}
        {renderMain()}
      </main>

      <Footer setActiveSection={navigateTo} />

      {/* Back to top */}
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
