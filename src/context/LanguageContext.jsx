import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('tjsf_lang');
    return saved === 'en' || saved === 'te' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('tjsf_lang', language);
    // Set html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'te' : 'en'));
  };

  // Helper function to get translations by dotted path (e.g. 'nav.aboutUs')
  const t = (path) => {
    const parts = path.split('.');
    let current = translations;
    
    for (let part of parts) {
      if (current[part] === undefined) {
        console.warn(`Translation path "${path}" is missing`);
        return path;
      }
      current = current[part];
    }
    
    if (Array.isArray(current)) {
      return current;
    }
    
    if (current && typeof current === 'object') {
      return current[language] || current['en'] || path;
    }
    
    return current || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
