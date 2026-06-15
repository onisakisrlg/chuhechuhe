import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Train, Landmark, Navigation2 } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface AccessProps {
  lang: Language;
}

export default function Access({ lang }: AccessProps) {
  const t = translations[lang];

  // Raw coordinates or query address for Google Maps custom iframe
  const addressQuery = "大阪府大阪市都島区内代町１丁目４－１７"; 
  const googleMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("大阪府大阪市都島区内代町1丁目4-17")}`;

  return (
    <section 
      id="access" 
      className="relative py-24 bg-[#0b0f19] overflow-hidden"
    >
      {/* Decorative vectors */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-gold-400/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold text-gold-400 uppercase tracking-[0.25em] mb-3"
          >
            {t.accessSubtitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            {t.accessTitle}
          </motion.h2>
          <div className="w-12 h-[2px] bg-gold-400 mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-300 text-sm sm:text-base font-light max-w-2xl"
          >
            {t.accessDesc}
          </motion.p>
        </div>

        {/* Dynamic Splits Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Location stats, cards and details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            {/* Address Information Card */}
            <div className="bg-[#0d1322] p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-gold-400/20 transition-all flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-semibold text-white text-base sm:text-lg">
                  {t.addressLabel}
                </h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                〒534-0013 <br />
                {t.recAddrVal}
              </p>
            </div>

            {/* Transit and Stations Card */}
            <div className="bg-[#0d1322] p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-gold-400/20 transition-all flex flex-col gap-4 flex-grow">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Train className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-semibold text-white text-base sm:text-lg">
                  {t.stationLabel}
                </h3>
              </div>
              
              <div className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed space-y-4">
                {t.stationVal.split('\n').map((stn, idx) => (
                  <div key={idx} className="flex gap-3 items-start border-l-2 border-gold-400/40 pl-3">
                    <p>{stn}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Open in external link CTA */}
            <a
              href={externalMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-gold-400/40 text-gold-400 hover:text-white transition-all text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Navigation2 className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              <span>{t.mapBtn}</span>
            </a>
          </motion.div>

          {/* Right Column: Google Maps Interactive Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 shadow-2xl h-[350px] lg:h-auto min-h-[350px]"
          >
            <iframe
              title="Google Maps Location Tracker for 株式会社初禾"
              src={googleMapsUrl}
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Elegant overlay watermark of premium corporate logo details */}
            <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-md bg-[#0b0f19]/90 border border-slate-800 backdrop-blur-md text-[10px] sm:text-xs text-stone-300 flex items-center gap-2 pointer-events-none shadow-md shadow-[#01040a]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
              <span>株式会社初禾 (Hatsuka Co., Ltd.) Location</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
