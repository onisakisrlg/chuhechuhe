import React from 'react';
import { Gem, ArrowUp, Mail, MapPin } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="corporate-footer" className="bg-[#080b13] border-t border-slate-900 text-slate-400 py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Block: Corporate Identity */}
          <div className="md:col-span-5 space-y-4">
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={handleScrollTop}
            >
              <div className="w-8 h-8 rounded-lg bg-gold-400 p-0.5">
                <div className="w-full h-full bg-[#0b0f19] rounded-[6px] flex items-center justify-center">
                  <Gem className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-base tracking-widest leading-none">
                  株式会社初禾
                </span>
                <span className="font-sans text-[8px] tracking-wider text-gold-400/80 uppercase font-medium mt-1">
                  HATSUKA CO., LTD.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-light leading-relaxed max-w-sm">
              大阪府大阪市都島区に本社を置き、確かなプロの真贋査定力とグローバルな輸出入ネットワークを基盤に、各種ブランド品、貴金属、アクセサリーの販売・輸出入事業を展開しております。
            </p>

            <div className="space-y-2 pt-2 text-xs font-light text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400/80 shrink-0 mt-0.5" />
                <span>大阪府大阪市都島区内代町１丁目４－１７－２０２</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                <span>hanxiao1948@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Middle Block: Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-serif text-white font-medium text-xs tracking-wider uppercase mb-4">
                ナビゲーション
              </h4>
              <ul className="space-y-2 text-xs font-light">
                <li>
                  <button onClick={() => handleNavClick('home')} className="hover:text-gold-400 transition-colors cursor-pointer">
                    {t.navHome}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('business')} className="hover:text-gold-400 transition-colors cursor-pointer">
                    {t.navBusiness}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('about')} className="hover:text-gold-400 transition-colors cursor-pointer">
                    {t.navAbout}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-white font-medium text-xs tracking-wider uppercase mb-4">
                コーポレート
              </h4>
              <ul className="space-y-2 text-xs font-light">
                <li>
                  <button onClick={() => handleNavClick('profile')} className="hover:text-gold-400 transition-colors cursor-pointer">
                    {t.navProfile}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('access')} className="hover:text-gold-400 transition-colors cursor-pointer">
                    {t.navAccess}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('contact')} className="hover:text-gold-400 transition-colors cursor-pointer">
                    {t.navContact}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Block: Safe Legal terms placeholder & Back-To-Top button */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end md:justify-between h-full gap-6">
            <button
              onClick={handleScrollTop}
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-gold-400/30 text-slate-300 hover:text-white text-xs font-medium tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{t.heroScroll.split(' ')[0]} TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-gold-400" />
            </button>

            <div className="text-left md:text-right space-y-1">
              <p className="text-[10px] text-slate-600">
                古物商許可番号: 大阪府公安委員会 第1234567890号 (仮)
              </p>
              <p className="text-[10px] text-slate-600">
                輸出入取引者コード: 10000XXXXXXX (仮)
              </p>
            </div>
          </div>

        </div>

        {/* Cohesive copyright line */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <p>© 2026 株式会社初禾 (Hatsuka Co., Ltd.). {t.footerRights}</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-500 transition-colors cursor-pointer">プライバシーポリシー</span>
            <span>•</span>
            <span className="hover:text-slate-500 transition-colors cursor-pointer">情報セキュリティ基本方針</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
