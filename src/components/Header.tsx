import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, Gem } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      // Background translucent scroll effect
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ['home', 'business', 'about', 'profile', 'access', 'contact'];
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

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'business', label: t.navBusiness },
    { id: 'about', label: t.navAbout },
    { id: 'profile', label: t.navProfile },
    { id: 'access', label: t.navAccess },
    { id: 'contact', label: t.navContact }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (selectedLang: Language) => {
    setLang(selectedLang);
    setIsLangDropdownOpen(false);
  };

  const currentLangLabel = {
    ja: '日本語',
    en: 'English',
    zh: '中文'
  }[lang];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand / Trademark */}
          <div 
            id="corporate-branding-logo"
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 p-0.5 shadow-md shadow-gold-500/10">
              <div className="w-full h-full bg-[#0b0f19] rounded-[6px] flex items-center justify-center transition-colors group-hover:bg-[#0b0f19]/80">
                <Gem className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg tracking-widest text-white leading-none">
                株式会社初禾
              </span>
              <span className="font-sans text-[9px] tracking-wider text-gold-400/80 uppercase font-medium mt-1">
                HATSUKA CO., LTD.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm tracking-wide transition-colors relative py-1.5 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-gold-400 font-medium' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Utilities (Language switcher + CTA info button) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selection */}
            <div className="relative">
              <button
                id="language-selector-button"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-800/80 bg-slate-900/50 hover:bg-slate-800/80 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-gold-400" />
                <span>{currentLangLabel}</span>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <>
                    {/* Backdrop to close list */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsLangDropdownOpen(false)} 
                    />
                    <motion.div
                      id="language-dropdown-panel"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-32 rounded-lg bg-slate-950 border border-slate-800 shadow-xl z-50 py-1 overflow-hidden"
                    >
                      {(['ja', 'en', 'zh'] as Language[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => handleLanguageChange(l)}
                          className={`w-full text-left px-4 py-2 text-xs transition-colors cursor-pointer ${
                            lang === l 
                              ? 'bg-gold-500/10 text-gold-400 font-medium' 
                              : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                          }`}
                        >
                          {l === 'ja' ? '日本語' : l === 'en' ? 'English' : '简体中文'}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Contact Link CTA button */}
            <button
              id="header-cta-contact-button"
              onClick={() => handleNavClick('contact')}
              className="text-xs tracking-wider px-4 py-2 rounded-full font-medium border border-gold-400/50 text-gold-400 bg-gold-400/5 hover:bg-gold-400 hover:text-[#0b0f19] transition-all duration-300 cursor-pointer"
            >
              {t.navContact}
            </button>
          </div>

          {/* Mobile Menu Action Controls */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Quick Lang Switch */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="p-1 px-2.5 rounded-md border border-slate-800 bg-slate-900/50 text-xs text-gold-400 flex items-center gap-1 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase">{lang}</span>
              </button>

              {isLangDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-28 rounded-md bg-slate-950 border border-slate-800 shadow-lg z-50 py-1 font-sans">
                    {(['ja', 'en', 'zh'] as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLanguageChange(l)}
                        className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                          lang === l ? 'bg-gold-500/15 text-gold-400' : 'text-slate-300 hover:bg-slate-900'
                        }`}
                      >
                        {l === 'ja' ? '日本語' : l === 'en' ? 'English' : '中文'}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Toggle Drawer Button */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-md border border-slate-800 bg-slate-900/40 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1322] border-b border-slate-800 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-sans tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'bg-gold-500/10 text-gold-400 font-medium'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full text-center py-2.5 rounded-md text-xs tracking-widest uppercase font-semibold bg-gradient-to-r from-gold-500 to-gold-400 text-[#0b0f19] shadow-md shadow-gold-500/10"
                >
                  {t.navContact}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
