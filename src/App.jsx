import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import LeadershipOrg from './components/LeadershipOrg';
import NewsArticles from './components/NewsArticles';
import DownloadsSection from './components/DownloadsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about-founder', 'about-vision', 'about-history', 'about-org', 'news', 'downloads', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col relative">
      
      {/* 1. Glassmorphic Floating Header Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Interactive Canvas Slider */}
        <HeroSlider setActiveSection={setActiveSection} />

        {/* 3. About, Vision & History Section */}
        <AboutSection />

        {/* 4. Interactive Leadership directory */}
        <LeadershipOrg />

        {/* 5. News & agitations */}
        <NewsArticles />

        {/* 6. High-res Downloads section */}
        <DownloadsSection />

        {/* 7. Validated Contact portal */}
        <ContactForm />

      </main>

      {/* 8. Modern Curved Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* 9. Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/20 text-white flex items-center justify-center cursor-pointer shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-110 active:scale-95 transform duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}

    </div>
  );
}

export default App;
