import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  const highlights = [
    {
      title: t.aboutPoint1Title,
      desc: t.aboutPoint1Desc,
      icon: <Globe className="w-5 h-5 text-gold-400" />
    },
    {
      title: t.aboutPoint2Title,
      desc: t.aboutPoint2Desc,
      icon: <ShieldCheck className="w-5 h-5 text-gold-400" />
    },
    {
      title: t.aboutPoint3Title,
      desc: t.aboutPoint3Desc,
      icon: <HeartHandshake className="w-5 h-5 text-gold-400" />
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 bg-[#0b0f19] overflow-hidden"
    >
      {/* Absolute decorative backdrops */}
      <div className="absolute right-0 top-1/3 w-[350px] h-[350px] bg-gold-400/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-blue-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold text-gold-400 uppercase tracking-[0.25em] mb-3"
          >
            {t.aboutSubtitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            {t.aboutTitle}
          </motion.h2>
          <div className="w-12 h-[2px] bg-gold-400 mb-6" />
        </div>

        {/* Dynamic Splits Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core理念 Narrative Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-wide leading-snug mb-6">
              {t.aboutConceptTitle}
            </h3>
            
            {/* Split description paragraphs for beauty */}
            <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              {t.aboutConceptDesc.split('\n').map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Solid corporate certification badge layout */}
            <div className="mt-8 p-5 rounded-xl bg-slate-900/60 border border-slate-850/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="text-white text-xs sm:text-sm font-semibold mb-1">
                  公安委員会許可加盟、安心の厳格査定
                </p>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  株式会社初禾は、日本の法令を厳格に順守し、正規ルートに基づいた健全かつ信頼性の高いお取引をお約束します。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Core Strengths cards stack */}
          <div className="lg:col-span-6 space-y-6">
            {highlights.map((hlt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="p-6 rounded-xl bg-[#0d1322] border border-slate-800/80 hover:border-gold-400/30 transition-all duration-300 flex gap-5 group"
              >
                {/* Floating animated icon */}
                <div className="w-12 h-12 rounded-lg bg-[#0b0f19] border border-slate-800 flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-300">
                  <div className="group-hover:text-[#0b0f19] transition-colors duration-300">
                    {hlt.icon}
                  </div>
                </div>

                {/* Narrative content block */}
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-medium text-white mb-2 tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                    {hlt.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {hlt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
