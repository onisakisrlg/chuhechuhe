import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang];

  // Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('trade');
  const [message, setMessage] = useState('');

  // Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; name?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; name?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = t.formErrRequired;
    if (!message.trim()) newErrors.message = t.formErrRequired;
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = t.formErrRequired;
    } else if (!emailRegex.test(email)) {
      newErrors.email = t.formErrEmail;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API Submission safely
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form fields
      setName('');
      setCompany('');
      setEmail('');
      setMessage('');
      setType('trade');
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-[#0d1322] overflow-hidden"
    >
      {/* Decorative vectors */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-gold-400/2 rounded-full blur-3xl pointer-events-none" />

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
            className="text-slate-300 text-sm sm:text-base font-light"
          >
            {t.contactDesc}
          </motion.p>
        </div>

        {/* Dynamic Inner Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Corporate Contacts card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            {/* Hour and availability */}
            <div className="bg-[#0b0f19] p-6 rounded-xl border border-slate-850/80 flex flex-col gap-5">
              <h3 className="font-serif text-base font-semibold text-white tracking-wide border-b border-slate-800 pb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>お急ぎの方 / 営業時間</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mb-1">
                    営業時間 (Business Hours)
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-200 font-light">
                    平日 10:00 〜 18:00 (土日祝定休)
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mb-1">
                    サポート体制 (Support)
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-200 font-light">
                    メール・公式LINE・対面応対に対応
                  </span>
                </div>
              </div>
            </div>

            {/* General Direct Support */}
            <div className="bg-[#0b0f19] p-6 rounded-xl border border-slate-850/80 flex flex-col gap-6">
              <h3 className="font-serif text-base font-semibold text-white tracking-wide border-b border-slate-800 pb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>直接のご連絡</span>
              </h3>
              
              <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>info@hatsukachuka.co.jp</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>代表: (お電話でのお問い合わせは予約制)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gold-400/5 rounded-xl border border-gold-400/10 text-center text-[10px] sm:text-xs text-gold-400/85">
              安心の厳重な暗号化および個人情報保護方針（プライバシーポリシー）を遵守して管理されます。
            </div>
          </motion.div>

          {/* Right Column: Dynamic submission form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bg-[#0b0f19] p-6 sm:p-10 rounded-2xl border border-slate-800/80 shadow-2xl relative min-h-[450px]"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="relative">
                      <label className="block text-xs text-gold-400 tracking-wider font-semibold mb-2 uppercase">
                        {t.formName} <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                        }}
                        className={`w-full bg-slate-950/85 border ${
                          errors.name ? 'border-red-500/80' : 'border-slate-800 focus:border-gold-400/50'
                        } rounded-lg px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none transition-colors`}
                        placeholder="山田 太郎"
                      />
                      {errors.name && (
                        <div className="absolute right-0 top-0 flex items-center gap-1 text-[10px] text-red-400 font-light mt-1 pl-2">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Company input */}
                    <div>
                      <label className="block text-xs text-gold-400 tracking-wider font-semibold mb-2 uppercase">
                        {t.formCompany}
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-slate-950/85 border border-slate-800 focus:border-gold-400/50 rounded-lg px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none transition-colors"
                        placeholder="〇〇株式会社"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="block text-xs text-gold-400 tracking-wider font-semibold mb-2 uppercase">
                      {t.formEmail} <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                      }}
                      className={`w-full bg-slate-950/85 border ${
                        errors.email ? 'border-red-500/80' : 'border-slate-800 focus:border-gold-400/50'
                      } rounded-lg px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none transition-colors`}
                      placeholder="yamada@example.com"
                    />
                    {errors.email && (
                      <div className="absolute right-0 top-0 flex items-center gap-1 text-[10px] text-red-400 font-light mt-1 pl-2">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Inquiry Type Division selection */}
                  <div>
                    <label className="block text-xs text-gold-400 tracking-wider font-semibold mb-2 uppercase">
                      {t.formType}
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full bg-slate-950/85 border border-slate-800 focus:border-gold-400/50 rounded-lg px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none cursor-pointer"
                    >
                      <option value="trade">{t.formType1}</option>
                      <option value="evaluation">{t.formType2}</option>
                      <option value="general">{t.formType3}</option>
                    </select>
                  </div>

                  {/* Content message input */}
                  <div className="relative">
                    <label className="block text-xs text-gold-400 tracking-wider font-semibold mb-2 uppercase">
                      {t.formMsg} <span className="text-red-500 font-bold">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                      }}
                      className={`w-full bg-slate-950/85 border ${
                        errors.message ? 'border-red-500/80' : 'border-slate-800 focus:border-gold-400/50'
                      } rounded-lg px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none transition-colors resize-none`}
                      placeholder="お問い合わせ内容を詳しくご記入ください。"
                    />
                    {errors.message && (
                      <div className="absolute right-0 top-0 flex items-center gap-1 text-[10px] text-red-400 font-light mt-1 pl-2">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-[#0b0f19] font-semibold tracking-wider text-xs sm:text-sm uppercase shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 active:translate-y-px transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0b0f19] border-t-transparent rounded-full animate-spin" />
                        <span>{t.formSubmitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.formSubmit}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10"
                >
                  <CheckCircle className="w-16 h-16 text-gold-400 mb-6 animate-pulse" />
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4">
                    {t.formSuccessTitle}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light max-w-md leading-relaxed mb-8">
                    {t.formSuccessMsg}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full border border-slate-850 hover:border-gold-400/50 text-slate-400 hover:text-gold-400 transition-colors text-xs font-semibold tracking-wide cursor-pointer"
                  >
                    新しくメッセージを送る
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
