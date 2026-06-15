import React from 'react';
import { motion } from 'motion/react';
import { Building2, Award, Scale, HelpCircle } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface CompanyProfileProps {
  lang: Language;
}

export default function CompanyProfile({ lang }: CompanyProfileProps) {
  const t = translations[lang];

  const profileRows = [
    { label: t.recName, value: t.recNameVal },
    { label: t.recAddr, value: t.recAddrVal },
    { label: t.recEst, value: t.recEstVal },
    { label: t.recCapital, value: t.recCapitalVal },
    { label: t.recBusiness, value: t.recBusinessVal },
    { label: t.recBank, value: t.recBankVal },
  ];

  return (
    <section 
      id="profile" 
      className="relative py-24 bg-[#0d1322] overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute left-1/3 top-0 w-96 h-96 bg-gold-400/2 rounded-full blur-3xl pointer-events-none" />

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
            {t.profileSubtitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            {t.profileTitle}
          </motion.h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto" />
        </div>

        {/* Profile Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Official corporate detail listings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#0b0f19] rounded-2xl p-6 sm:p-10 border border-slate-800/80 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-lg sm:text-xl font-medium text-white pb-4 border-b border-slate-800 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-gold-400" />
                <span>会社基本情報</span>
              </h3>
              
              <div className="divide-y divide-slate-800/60">
                {profileRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4 items-start">
                    <div className="sm:col-span-4 text-xs sm:text-sm font-medium text-gold-400 tracking-wider">
                      {row.label}
                    </div>
                    <div className="sm:col-span-8 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-[10px] sm:text-xs text-slate-400 font-light flex items-center gap-1.5">
              <span>※ 古物商許可、ならびに関連輸出入ライセンス申請・保持。</span>
            </div>
          </motion.div>

          {/* Right Column: Visual Trust Blocks & Legal Certs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Cert Card 1: Japanese Authenticate Trust */}
            <div className="bg-[#0b0f19] p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-gold-400/20 transition-colors flex-grow flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-gold-400/5 border border-gold-400/15 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-gold-400" />
              </div>
              <h4 className="font-serif text-white font-medium text-base sm:text-lg mb-2">
                公安委員会届出・法令遵守
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                株式会社初禾は、日本の各種商取引法、関税法、その他輸出入業務に関する一切の法体系を徹底的に遵守します。また、古物営業法に基づく各種管理を厳密に進め、クリアで安心おける取引プラットフォームを提供いたします。
              </p>
            </div>

            {/* Cert Card 2: Fair Pricing Value Promise */}
            <div className="bg-[#0b0f19] p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-gold-400/20 transition-colors flex-grow flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-gold-400/5 border border-gold-400/15 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-gold-400" />
              </div>
              <h4 className="font-serif text-white font-medium text-base sm:text-lg mb-2">
                グローバル市場整合レート
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                ブランド中古商材および貴金属地金の評価は、ロンドン金値極、世界中のセカンダリー市場取引履歴データ、そして為替相場を統合した独自の査定アルゴリズムにより。お客様へ、極めて有利、かつ不透明性のない公正取引をお約束します。
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
