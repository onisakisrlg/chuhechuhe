/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Business from './components/Business';
import About from './components/About';
import CompanyProfile from './components/CompanyProfile';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './data/translations';

export default function App() {
  // Pre-set default language to Japanese ('ja' is best for standard compliant Japanese corporate sites)
  const [lang, setLang] = useState<Language>('ja');

  return (
    <div className="bg-[#0b0f19] text-slate-100 font-sans min-h-screen relative selection:bg-gold-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* 1. Global Navigation header block */}
      <Header lang={lang} setLang={setLang} />

      {/* 2. Hero cinematic section */}
      <Hero lang={lang} />

      {/* 3. Core services business grid layout */}
      <Business lang={lang} />

      {/* 4. Brand mission, philosophy, and advantages */}
      <About lang={lang} />

      {/* 5. Clean, high-contrast company specification rows */}
      <CompanyProfile lang={lang} />

      {/* 6. Geolocation google map locator and instructions */}
      <Access lang={lang} />

      {/* 7. Multi-lingual customer inquiry form */}
      <Contact lang={lang} />

      {/* 8. Trust corporate footer details */}
      <Footer lang={lang} />

    </div>
  );
}

