import React from 'react';
import { motion } from 'motion/react';
import { GameScore, Language, YCTWord } from '../types';
import { CATEGORIES } from '../data/vocabulary';
import { TRANSLATIONS } from '../utils/gameHelpers';
import { Award, CheckCircle, XCircle, AlertTriangle, ArrowRight, RotateCcw, Home, Smile } from 'lucide-react';
import LucideIcon from './LucideIcon';

interface ScoreBoardProps {
  scoreReport: GameScore;
  currentLanguage: Language;
  onRestart: () => void;
  onHome: () => void;
  onNextLevel?: () => void;
  hasNextLevel?: boolean;
}

export default function ScoreBoard({
  scoreReport,
  currentLanguage,
  onRestart,
  onHome,
  onNextLevel,
  hasNextLevel = false
}: ScoreBoardProps) {
  const t = TRANSLATIONS[currentLanguage];

  // SVG parameters for circular accuracy ring
  const ringRadius = 36;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringStrokeOffset = ringCircumference - (scoreReport.accuracy / 100) * ringCircumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden"
      id="scoreboard-canvas"
    >
      {/* Upper congratulations */}
      <div className="text-center mb-2 flex-shrink-0">
        <div className="inline-flex items-center justify-center p-1.5 bg-[#FFEBEE] border-2 border-black text-[#FF5252] rounded-full mb-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Award size={20} />
        </div>
        <h2 className="text-xl md:text-2xl font-black uppercase text-slate-800 tracking-tighter" id="report-title">
          {t.reportTitle}
        </h2>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">★ {t.gameVersion} ★</p>
      </div>

      {/* METRIC OVERVIEW GIRD WITH ARC RING ACCURACY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch mb-2.5 flex-shrink-0">
        
        {/* Left chart progress circle */}
        <div className="bg-slate-50 border-4 border-black rounded-2xl py-3.5 px-6 flex flex-row items-center justify-center gap-5 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center flex-shrink-0">
            {/* Background ring */}
            <svg className="absolute w-20 h-20 sm:w-24 sm:h-24 rotate-270" viewBox="0 0 96 96">
              <circle
                cx="48"
                cy="48"
                r={ringRadius}
                className="stroke-slate-200 fill-none"
                strokeWidth="8"
              />
              {/* Highlight accurate ring value */}
              <motion.circle
                cx="48"
                cy="48"
                r={ringRadius}
                className="stroke-[#FF5252] fill-none"
                strokeWidth="8"
                strokeDasharray={ringCircumference}
                initial={{ strokeDashoffset: ringCircumference }}
                animate={{ strokeDashoffset: ringStrokeOffset }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center z-10">
              <div className="text-base sm:text-xl font-black font-mono text-slate-800">{scoreReport.accuracy}%</div>
              <div className="text-[8px] sm:text-[9px] text-gray-550 font-bold uppercase tracking-wider">accuracy</div>
            </div>
          </div>
          <div>
            <h4 className="font-black text-[#1A1A1A] uppercase tracking-tight text-sm sm:text-lg">{t.reportAccuracy}</h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 font-semibold">{scoreReport.accuracy >= 80 ? 'Excellent job!' : 'Keep practicing!'}</p>
          </div>
        </div>

        {/* Dynamic score summary blocks */}
        <div className="bg-[#FFFEF0] border-4 border-black rounded-2xl py-3.5 px-6 flex flex-row items-center justify-center gap-5 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-2 bg-[#FFC107] border-2 border-black text-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
            <Award size={24} />
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-black font-mono text-amber-700 leading-none mb-0.5">{scoreReport.score} <span className="text-sm text-gray-700 font-extrabold tracking-wide">pts</span></div>
            <div className="text-xs sm:text-base text-gray-700 uppercase font-extrabold tracking-wide">
              {currentLanguage === Language.ZH ? '最终得分' : currentLanguage === Language.MN ? 'Эцсийн Оноо' : 'Final Score'}
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 font-bold">
              {currentLanguage === Language.ZH ? '（每个正确 +10 分）' : '(+10 points per correct word)'}
            </p>
          </div>
        </div>
      </div>

      {/* WORD TRACKER SECTION: CORRECT AND INCORRECT WORDS */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3" id="word-review-panels">
        
        {/* A. CORRECT WORDS LIST */}
        <div className="flex flex-col h-full min-h-0">
          <h3 className="text-xs font-black text-[#2E7D32] flex items-center gap-1.5 mb-1.5 uppercase tracking-wide flex-shrink-0">
            <CheckCircle className="text-[#4CAF50]" size={14} />
            {currentLanguage === Language.ZH ? '正确分类的词语' : currentLanguage === Language.MN ? 'Зөв Ангилсан Үгс' : 'Correctly Classified Words'} ({scoreReport.correctList?.length || 0})
          </h3>

          <div className="flex-1 min-h-0 rounded-xl border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-y-auto">
            {scoreReport.correctList && scoreReport.correctList.length > 0 ? (
              <div className="flex flex-col gap-1.5 w-full">
                {scoreReport.correctList.map((word, idx) => {
                  const correctCat = CATEGORIES.find(c => c.id === word.category);
                  const isMn = currentLanguage === Language.MN;
                  const meaning = isMn ? word.translation.mn : word.translation.en;
                  return (
                    <div 
                      key={idx} 
                      className="flex w-full items-center justify-between gap-2 px-3 py-2 bg-[#E8F5E9] border-2 border-black rounded-lg shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-xs animate-fade-in hover:scale-101 transition-transform font-bold"
                    >
                      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                        <span className="font-black text-[#1B5E20] text-xl sm:text-2xl tracking-normal">{word.word}</span>
                        <span className="text-xs sm:text-sm text-emerald-800 font-mono font-bold">[{word.translation.pinyin.toLowerCase()}]</span>
                        <span className="text-xs sm:text-sm text-slate-705 font-extrabold">— {meaning}</span>
                      </div>
                      {correctCat && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white border-2 border-slate-400 text-slate-800 text-[10px] sm:text-xs flex-shrink-0 font-extrabold shadow-sm">
                          <LucideIcon name={correctCat.icon} size={12} />
                          <span>
                            {currentLanguage === Language.ZH && correctCat.zh}
                            {currentLanguage === Language.EN && correctCat.en}
                            {currentLanguage === Language.MN && correctCat.mn}
                          </span>
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-4 text-center text-xs text-gray-400 font-bold uppercase select-none">
                {currentLanguage === Language.ZH ? '无正确分类词汇' : 'No correct classifications'}
              </div>
            )}
          </div>
        </div>
  
        {/* B. INCORRECT & MISSED WORDS LIST */}
        <div className="flex flex-col h-full min-h-0">
          <h3 className="text-xs font-black text-[#C62828] flex items-center gap-1.5 mb-1.5 uppercase tracking-wide flex-shrink-0">
            <XCircle className="text-[#FF5252]" size={14} />
            {currentLanguage === Language.ZH ? '错误/漏选的词语' : currentLanguage === Language.MN ? 'Буруу Ангилсан Үгс' : 'Incorrect & Missed Words'} ({scoreReport.errorsList?.length || 0})
          </h3>
 
          <div className="flex-1 min-h-0 rounded-xl border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-y-auto">
            {scoreReport.errorsList && scoreReport.errorsList.length > 0 ? (
              <div className="flex flex-col gap-1.5 w-full">
                {scoreReport.errorsList.map((err, idx) => {
                  const correctCat = CATEGORIES.find(c => c.id === err.correctAnswer);
                  const isMn = currentLanguage === Language.MN;
                  const meaning = isMn ? err.word.translation.mn : err.word.translation.en;
                  return (
                    <div 
                      key={idx} 
                      className="flex w-full items-center justify-between gap-2 px-3 py-2 bg-[#FFEBEE] border-2 border-black rounded-lg shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-xs animate-fade-in hover:scale-101 transition-transform font-bold"
                    >
                      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                        <span className="font-black text-[#C62828] text-xl sm:text-2xl tracking-normal">{err.word.word}</span>
                        <span className="text-xs sm:text-sm text-red-800 font-mono font-bold">[{err.word.translation.pinyin.toLowerCase()}]</span>
                        <span className="text-xs sm:text-sm text-slate-705 font-extrabold">— {meaning}</span>
                      </div>
                      {correctCat && (
                        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md border-2 border-black text-[10px] sm:text-xs flex-shrink-0 font-extrabold shadow-sm ${correctCat.color.split(' ')[0]} ${correctCat.color.split(' ')[2]}`}>
                          <LucideIcon name={correctCat.icon} size={12} />
                          <span>
                            {currentLanguage === Language.ZH && correctCat.zh}
                            {currentLanguage === Language.EN && correctCat.en}
                            {currentLanguage === Language.MN && correctCat.mn}
                          </span>
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-4 text-center text-xs text-emerald-600 font-bold uppercase select-none">
                {currentLanguage === Language.ZH ? '完美通关！没有任何错误' : 'Perfect performance! No mistakes'}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* FOOTER ACTIONS AND NAVIGATION */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 border-t-4 border-black pt-3 flex-shrink-0">
        
        <button
          onClick={onRestart}
          className="w-full sm:w-auto px-6 py-3 bg-[#FFC107] hover:bg-[#FFB300] text-black border-4 border-black rounded-2xl flex items-center justify-center gap-2 font-black transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none hover:-translate-y-0.5 text-sm uppercase"
          id="rechallenge-btn"
        >
          <RotateCcw size={15} />
          {t.reviewBtn}
        </button>

        <button
          onClick={onHome}
          className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-black border-4 border-black rounded-2xl flex items-center justify-center gap-2 font-black transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none hover:-translate-y-0.5 text-sm uppercase"
          id="return-home-btn"
        >
          <Home size={15} />
          {t.homeBtn}
        </button>

        {hasNextLevel && onNextLevel && (
          <button
            onClick={onNextLevel}
            className="w-full sm:w-auto px-7 py-3 bg-[#FF5252] hover:bg-[#FF1744] text-white border-4 border-black rounded-2xl flex items-center justify-center gap-2 font-black transition-all cursor-pointer shadow-[3px_3px_0px_0px_#D50000] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            id="next-level-btn"
          >
            {t.nextLevelBtn}
            <ArrowRight size={15} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
