import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Coins, Gem, ArrowUpRight } from 'lucide-react';
import { Language, translations } from '../data/translations';

// Import our beautiful custom generated assets
import brandImg from '../assets/images/brand_items_card_1781505260734.jpg';
import metalsImg from '../assets/images/precious_metals_clean_1782293843425.jpg';
import accessImg from '../assets/images/accessories_card_1781505409659.jpg';

interface BusinessProps {
  lang: Language;
}

export default function Business({ lang }: BusinessProps) {
  const t = translations[lang];

  const services = [
    {
      title: t.bizBrandTitle,
      desc: t.bizBrandDesc,
      tags: t.bizBrandTags,
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
      image: brandImg,
    },
    {
      title: t.bizMetalTitle,
      desc: t.bizMetalDesc,
      tags: t.bizMetalTags,
      icon: <Coins className="w-5 h-5 text-gold-400" />,
      image: metalsImg,
    },
    {
      title: t.bizAccessoryTitle,
      desc: t.bizAccessoryDesc,
      tags: t.bizAccessoryTags,
      icon: <Gem className="w-5 h-5 text-gold-400" />,
      image: accessImg,
    },
  ];

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="business" 
      className="relative py-24 bg-[#0d1322] overflow-hidden"
    >
      {/* Structural background geometric curves */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-400/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#1e293b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold text-gold-400 uppercase tracking-[0.25em] mb-3"
          >
            {t.businessSubtitle}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            {t.businessTitle}
          </motion.h2>
          
          <div className="w-12 h-[2px] bg-gold-400 mx-auto mb-6" />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed font-light"
          >
            {t.businessDesc}
          </motion.p>
        </div>

        {/* Business Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-[#0b0f19] rounded-xl overflow-hidden border border-slate-800/80 hover:border-gold-400/40 transition-all duration-300 flex flex-col shadow-xl shadow-[#03060d]/50"
            >
              {/* Card Image Container with Hover Scale */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-950">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle Luxury Gradient Mesh over Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />
                
                {/* Floating Category Icon in top right */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0b0f19]/80 backdrop-blur-md flex items-center justify-center border border-slate-700/50 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-300">
                  <div className="group-hover:text-[#0b0f19] transition-colors duration-300">
                    {svc.icon}
                  </div>
                </div>
              </div>

              {/* Card Info Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide mb-3 group-hover:text-gold-400 transition-colors duration-300 flex items-center justify-between">
                  <span>{svc.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6 flex-grow">
                  {svc.desc}
                </p>

                {/* Styled pill labels */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {svc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] sm:text-xs tracking-wider px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global trading banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-slate-900 via-[#101726] to-slate-900 border border-slate-800/80 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <h4 className="font-serif text-lg sm:text-xl font-medium text-white mb-2">
              グローバル取引のご相談・お見積もり
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              日本国内の古物市場や精錬所、海外の専門機関と連携し、最適な仕入・流通スキームをご提案いたします。
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="shrink-0 px-6 py-3 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-widest hover:bg-gold-400 hover:text-[#0b0f19] active:translate-y-px transition-all duration-300 cursor-pointer"
          >
            お見積もり・相談窓口へ
          </button>
        </motion.div>

      </div>
    </section>
  );
}
