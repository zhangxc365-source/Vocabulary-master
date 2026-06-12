import React from 'react';
import { YCTWord, Language } from '../types';
import { TRANSLATIONS } from '../utils/gameHelpers';
import { ArrowLeft } from 'lucide-react';

interface WordDetailProps {
  words: YCTWord[];
  currentLanguage: Language;
  onStartGame: () => void;
  onBack: () => void;
  selectedLevel: number;
  selectedLesson: number;
}

export default function WordDetail({
  words,
  currentLanguage,
  onStartGame,
  onBack,
  selectedLevel,
  selectedLesson
}: WordDetailProps) {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-3 flex flex-col items-center" id="word-prep-wrapper">
      {/* Top action row with Back button */}
      <div className="w-full flex justify-start mb-4">
        <button
          onClick={onBack}
          className="px-5 py-2.5 bg-[#FFC107] border-4 border-black hover:bg-[#FFB300] text-black rounded-2xl text-xs font-black transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center gap-1.5 uppercase"
          id="prep-back-btn"
        >
          <ArrowLeft size={14} className="stroke-[3]" />
          <span>{t.backBtn}</span>
        </button>
      </div>

      {/* 1. Header info card */}
      <div className="w-full text-center mb-6 bg-white border-4 border-black p-5 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter" id="word-detail-title">
          {t.readyPageTitle}
        </h2>
        <p className="text-xs text-gray-500 font-black uppercase mt-1.5">
          YCT Level {selectedLevel} • Lesson {selectedLesson}
        </p>
        <p className="text-xs text-slate-500 font-bold mt-1 uppercase">
          {t.readyPageDesc}
        </p>
      </div>

      {/* 2. Core Words Grid - showing only Chinese, English, Pinyin */}
      <div className="w-full bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="prep-word-grid">
          {words.map((w, index) => (
            <div
              key={w.id || index}
              className="flex flex-col items-center justify-center text-center p-5 bg-[#F9F9F9] border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#E1F5FE] transition-colors relative min-h-[185px]"
            >
              {/* Sequential Number badge */}
              <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-black text-[#FFF9C4] flex items-center justify-center font-black font-mono text-xs shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                {index + 1}
              </div>

              {/* Word Chinese character, English translation, and Pinyin stacked with Pinyin on top (Enlarged for readability) */}
              <div className="flex flex-col items-center mt-4 w-full">
                <span className="text-sm sm:text-base font-mono font-black text-[#FF5252] tracking-wide lowercase mb-1">
                  [{w.translation.pinyin.toLowerCase()}]
                </span>
                <span className="text-4xl sm:text-5xl font-black text-[#1A1A1A] tracking-tight leading-none my-1">
                  {w.word}
                </span>
                <div className="text-xs sm:text-sm font-black text-gray-500 mt-2 uppercase break-words w-full px-1">
                  {w.translation.en}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Action Button START GAME centered */}
      <button
        onClick={onStartGame}
        className="w-full max-w-sm py-4 bg-[#FF5252] hover:bg-[#FF1744] text-white font-black rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer text-center text-lg uppercase tracking-wider"
        id="start-level-challenge-btn"
      >
        START GAME
      </button>
    </div>
  );
}
