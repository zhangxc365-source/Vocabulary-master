import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/gameHelpers';
import { BookOpen, Trophy, Swords, Zap, HelpCircle } from 'lucide-react';

interface IntroductionProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onClose: () => void;
}

export default function Introduction({ currentLanguage, onLanguageChange, onClose }: IntroductionProps) {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-4xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl p-6 md:p-8"
      id="intro-page-container"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-black pb-5 mb-6">
        <div>
          <h2 className="text-3xl font-black text-[#1A1A1A] flex items-center gap-3 uppercase tracking-tighter">
            <BookOpen className="text-[#FF5252] w-8 h-8" />
            {t.ruleTitle}
          </h2>
          <p className="text-xs text-gray-500 font-bold uppercase mt-1">★ {t.gameVersion} ★</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center" id="intro-language-switch-group">
          <button
            onClick={() => onLanguageChange(Language.ZH)}
            className={`px-2.5 py-1.5 rounded-xl border-2 border-black font-black text-xs transition-all ${
              currentLanguage === Language.ZH
                ? 'bg-[#FFEB3B] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            id="intro-lang-zh-btn"
          >
            🇨🇳 汉语
          </button>
          <button
            onClick={() => onLanguageChange(Language.MN)}
            className={`px-2.5 py-1.5 rounded-xl border-2 border-black font-black text-xs transition-all ${
              currentLanguage === Language.MN
                ? 'bg-[#FFEB3B] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            id="intro-lang-mn-btn"
          >
            🇲🇳 Монгол
          </button>
          <button
            onClick={() => onLanguageChange(Language.EN)}
            className={`px-2.5 py-1.5 rounded-xl border-2 border-black font-black text-xs transition-all ${
              currentLanguage === Language.EN
                ? 'bg-[#FFEB3B] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            id="intro-lang-en-btn"
          >
            🇬🇧 EN
          </button>


        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Single Player Rule */}
        <div className="bg-[#FFF3E0] border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-extrabold text-xl md:text-2xl text-[#EF6C00] flex items-center gap-2 mb-4 uppercase tracking-tight">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              🎮
            </motion.div>
            {t.singleRuleTitle}
          </h3>
          <p className="text-base md:text-lg text-gray-800 font-bold leading-relaxed whitespace-pre-line">
            {t.singleRuleDesc}
          </p>
        </div>

        {/* Double Player Rule */}
        <div className="bg-[#F1F8E9] border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-extrabold text-xl md:text-2xl text-[#33691E] flex items-center gap-2 mb-4 uppercase tracking-tight">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              👥
            </motion.div>
            {t.dualRuleTitle}
          </h3>
          <p className="text-base md:text-lg text-gray-800 font-bold leading-relaxed whitespace-pre-line">
            {t.dualRuleDesc}
          </p>
        </div>
      </div>

      {/* Numerical Regulations */}
      <div className="bg-slate-50 rounded-2xl border-4 border-black p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-black text-[#1A1A1A] flex items-center gap-2 mb-4 uppercase tracking-tight">
          <Trophy className="text-[#FFC107] w-6 h-6 animate-pulse" />
          {t.ruleScoreTitle}
        </h3>
        <p className="text-base md:text-lg text-gray-700 font-bold leading-relaxed whitespace-pre-line">
          {t.ruleScoreDesc}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center border-t-4 border-black pt-5">
        <button
          onClick={onClose}
          className="px-8 py-3.5 bg-[#FF5252] hover:bg-[#FF1744] text-white font-black rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer uppercase text-sm tracking-widest"
          id="intro-close-btn"
        >
          {t.resumeBtn} / {t.backBtn}
        </button>
      </div>
    </motion.div>
  );
}
