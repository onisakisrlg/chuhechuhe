import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Clock } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang];

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-[#0d1322] overflow-hidden"
    >
      {/* Decorative vectors */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

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
            {t.contactSubtitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            {t.contactTitle}
          </motion.h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-300 text-sm sm:text-base font-light leading-relaxed"
          >
            {t.contactDesc}
          </motion.p>
        </div>

        {/* Centered Premium Info Cards */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Hour & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#0b0f19]/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-850/80 hover:border-gold-400/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-400/5 border border-gold-400/15 flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white tracking-wide mb-6">
                  {lang === 'zh' ? '营业时间与服务' : lang === 'en' ? 'Hours & Availability' : 'お急ぎの方 / 営業時間'}
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1.5 font-medium">
                      {lang === 'zh' ? '营业时间 (Business Hours)' : lang === 'en' ? 'Business Hours' : '営業時間 (Business Hours)'}
                    </span>
                    <span className="block text-sm text-slate-200 font-light">
                      {lang === 'zh' ? '工作日 10:00 〜 18:00 (双休及法定节假日休息)' : lang === 'en' ? 'Weekdays 10:00 - 18:00 (Closed on weekends & holidays)' : '平日 10:00 〜 18:00 (土日祝定休)'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1.5 font-medium">
                      {lang === 'zh' ? '服务形式 (Support Mode)' : lang === 'en' ? 'Support Mode' : 'サポート体制 (Support)'}
                    </span>
                    <span className="block text-sm text-slate-200 font-light">
                      {lang === 'zh' ? '支持电子邮件、官方LINE、预约现场面谈' : lang === 'en' ? 'Email, official LINE, and in-person consultations' : 'メール・公式LINE・対面応対に対応'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Direct Corporate Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0b0f19]/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-850/80 hover:border-gold-400/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-400/5 border border-gold-400/15 flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white tracking-wide mb-6">
                  {lang === 'zh' ? '直接联系我们' : lang === 'en' ? 'Direct Contact' : '直接のご連絡'}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                      {lang === 'zh' ? '电子邮件 (Email Address)' : lang === 'en' ? 'Email Address' : 'メールアドレス (Email)'}
                    </span>
                    <a 
                      href="mailto:hanxiao1948@gmail.com" 
                      className="text-base font-medium text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-2"
                    >
                      <span>hanxiao1948@gmail.com</span>
                    </a>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                      {lang === 'zh' ? '电话咨询 (Phone inquiries)' : lang === 'en' ? 'Phone Inquiry' : '電話でのお問い合わせ'}
                    </span>
                    <span className="text-sm text-slate-200 font-light leading-relaxed">
                      {lang === 'zh' ? '代表: (电话咨询实行预约制)' : lang === 'en' ? 'Representative: (Phone inquiry by appointment only)' : '代表: (お電話でのお問い合わせは予約制)'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Privacy Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 p-5 bg-gold-400/5 rounded-2xl border border-gold-400/10 text-center text-xs text-gold-400/80 max-w-xl mx-auto leading-relaxed"
          >
            {lang === 'zh' 
              ? '您的所有个人信息与商业往来细节，均将根据本公司严格制定的个人信息保护方针（隐私政策）得到妥善管理与绝对保密。'
              : lang === 'en'
              ? 'All of your personal and commercial inquiries will be strictly handled and protected in full compliance with our corporate privacy policy.'
              : '安心の厳重な暗号化および個人信息保護方針（プライバシーポリシー）を遵守して管理されます。'}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
