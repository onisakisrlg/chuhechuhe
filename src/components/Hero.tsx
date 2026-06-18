import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, Shield, Award } from 'lucide-react';
import { Language, translations } from '../data/translations';
import bgImage from '../assets/images/luxury_hero_bg_1781505243425.jpg';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];

  const handleScrollDown = () => {
    const el = document.getElementById('business');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Immersive Background Image Layer with gradient filters */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Hatsune Corporate Luxury Background"
          className="w-full h-full object-cover scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic rich overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060d]/95 via-[#0b0f19]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-[#03060d]/65" />
        <div className="absolute inset-0 bg-[#0b0f19]/30" />
      </div>

      {/* Decorative luxury sparkles or floating lines (safe purely CSS decorative elements) */}
      <div className="absolute top-1/4 right-[15%] w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Visual Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge with elegant slide in */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Shield className="w-3.5 h-3.5 fill-gold-400/20" />
            <span>{t.heroBadge}</span>
          </motion.div>

          {/* Heading with exquisite editorial serif font */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-semibold tracking-tight leading-[1.15] mb-6"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-200">
              {t.heroTitle}
            </span>
          </motion.h1>

          {/* Thin luxury gold separator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-300 mb-6 rounded-full"
          />

          {/* Subtitle summary description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light tracking-wide max-w-2xl mb-10"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Staggered action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <button
              onClick={() => handleScrollDown()}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-[#0b0f19] font-medium tracking-widest text-sm uppercase shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{t.navBusiness}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => handleContactClick()}
              className="px-8 py-4 rounded-lg border border-slate-700 hover:border-gold-400/50 hover:bg-gold-400/5 text-slate-300 hover:text-white font-medium tracking-widest text-sm uppercase transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <span>{t.navContact}</span>
            </button>
          </motion.div>
        </div>

        {/* Small Trust Metrics Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-16 mt-16 border-t border-slate-800/60 max-w-2xl font-serif"
        >
          <div>
            <span className="block text-2xl sm:text-3xl text-gold-400 font-semibold mb-1">Authentic 100%</span>
            <span className="block text-slate-400 text-[10px] sm:text-xs font-sans tracking-widest uppercase">厳格な真贋査定</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl text-gold-400 font-semibold mb-1">Worldwide</span>
            <span className="block text-slate-400 text-[10px] sm:text-xs font-sans tracking-widest uppercase">国際輸出入ルート</span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="block text-2xl sm:text-3xl text-gold-400 font-semibold mb-1">Established</span>
            <span className="block text-slate-400 text-[10px] sm:text-xs font-sans tracking-widest uppercase">大阪府都島区 本社</span>
          </div>
        </motion.div>
      </div>

      {/* Floating anchor scroll down icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.button
          onClick={() => handleScrollDown()}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors cursor-pointer group"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-light">
            {t.heroScroll}
          </span>
          <ChevronDown className="w-5 h-5 group-hover:scale-110 duration-200" />
        </motion.button>
      </div>
    </section>
  );
}
