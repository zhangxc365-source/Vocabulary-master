import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, GameMode, YCTWord, GameScore } from './types';
import { YCT_WORDS } from './data/vocabulary';
import { DUAL_DISTRACTORS } from './data/dualDistractors';
import { getGameWordsPool, getSinglePlayerGamePool, generate6DualRounds, isLessonPlayable, TRANSLATIONS } from './utils/gameHelpers';

// Subcomponents
import Introduction from './components/Introduction';
import WordDetail from './components/WordDetail';
import SingleAdventure from './components/SingleAdventure';
import DualBattle from './components/DualBattle';
import ScoreBoard from './components/ScoreBoard';

// Icons
import { Sparkles, Globe, Swords, BookOpen, Trophy, Info, Compass, ChevronRight, GraduationCap, ArrowLeft } from 'lucide-react';

export default function App() {
  // Global Settings
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.EN);
  const [activeScreen, setActiveScreen] = useState<'HOME' | 'LEVEL_SELECT' | 'PREPARE' | 'PLAY_SINGLE' | 'PLAY_DUAL' | 'SCOREBOARD'>('HOME');

  // Persistence of Game Mode selection
  const [selectedGameMode, setSelectedGameMode] = useState<'SINGLE' | 'DUAL' | null>(null);

  // Selected YCT level & lesson path
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [selectedLesson, setSelectedLesson] = useState<number>(1);

  // Find lessons dynamically based on level: YCT1-4 has 12 lessons, YCT5-6 has 15 lessons
  const availableLessons = React.useMemo(() => {
    const totalLessons = selectedLevel <= 4 ? 12 : 15;
    return Array.from({ length: totalLessons }, (_, i) => i + 1);
  }, [selectedLevel]);

  // Prevent out-of-bound lesson selection when changing levels and find first playable lesson
  React.useEffect(() => {
    const maxLesson = selectedLevel <= 4 ? 12 : 15;
    let targetLesson = selectedLesson > maxLesson ? 1 : selectedLesson;

    const gameModeStr = selectedGameMode === 'DUAL' ? 'DUAL' : 'SINGLE';
    if (!isLessonPlayable(selectedLevel, targetLesson, gameModeStr)) {
      const lessonsList = Array.from({ length: maxLesson }, (_, i) => i + 1);
      const firstPlayable = lessonsList.find(les => isLessonPlayable(selectedLevel, les, gameModeStr));
      if (firstPlayable) {
        targetLesson = firstPlayable;
      }
    }
    setSelectedLesson(targetLesson);
  }, [selectedLevel, selectedGameMode]);

  // Vocabulary sets
  const [currentLevelPool, setCurrentLevelPool] = useState<YCTWord[]>([]);
  const [currentReviewPool, setCurrentReviewPool] = useState<YCTWord[]>([]);

  // Current multiplayer or single player scores
  const [lastGameReport, setLastGameReport] = useState<GameScore | null>(null);

  // Interactive popup states
  const [showIntroPopup, setShowIntroPopup] = useState<boolean>(false);

  // Quick helper map
  const t = TRANSLATIONS[currentLanguage];

  const handleSelectMode = (mode: 'SINGLE' | 'DUAL' | 'INTRO') => {
    if (mode === 'INTRO') {
      setShowIntroPopup(true);
    } else if (mode === 'SINGLE') {
      setSelectedGameMode('SINGLE');
      // Directs to level selector first
      setActiveScreen('LEVEL_SELECT');
    } else if (mode === 'DUAL') {
      setSelectedGameMode('DUAL');
      // Dual battles require level selects as well
      setActiveScreen('LEVEL_SELECT');
    }
  };

  const handleStartPracticeList = (level: number, lesson: number) => {
    setSelectedLevel(level);
    setSelectedLesson(lesson);

    const isReview = (level <= 4 && lesson === 12) || (level >= 5 && lesson === 15);

    // Populate pools based on selected mode
    if (selectedGameMode === 'SINGLE') {
      const pool = getSinglePlayerGamePool(level, lesson);
      setCurrentLevelPool(pool);
      setCurrentReviewPool(pool);
    } else {
      // Dual mode prep screen should show ONLY the words of the current lesson
      if (isReview) {
        const allLevelWords = YCT_WORDS.filter(w => w.level === level && w.lesson < lesson);
        const shuffled = [...allLevelWords].sort(() => Math.random() - 0.5);
        const lessonWords = shuffled.slice(0, 12);
        setCurrentLevelPool(lessonWords);
        setCurrentReviewPool(lessonWords);
      } else {
        const coreWords = YCT_WORDS.filter(w => w.level === level && w.lesson === lesson);
        const distractorWords = DUAL_DISTRACTORS.filter(w => w.level === level && w.lesson === lesson);
        const lessonWords = [...coreWords, ...distractorWords];
        setCurrentLevelPool(lessonWords);
        setCurrentReviewPool(lessonWords);
      }
    }

    // Move to preparation previews
    setActiveScreen('PREPARE');
  };

  // Process to gameplay
  const triggerActualGameplay = () => {
    if (currentLevelPool.length === 0) {
      const isReview = (selectedLevel <= 4 && selectedLesson === 12) || (selectedLevel >= 5 && selectedLesson === 15);

      if (selectedGameMode === 'SINGLE') {
        const pool = getSinglePlayerGamePool(selectedLevel, selectedLesson);
        setCurrentLevelPool(pool);
        setCurrentReviewPool(pool);
      } else {
        if (isReview) {
          const allLevelWords = YCT_WORDS.filter(w => w.level === selectedLevel && w.lesson < selectedLesson);
          const shuffled = [...allLevelWords].sort(() => Math.random() - 0.5);
          const lessonWords = shuffled.slice(0, 12);
          setCurrentLevelPool(lessonWords);
          setCurrentReviewPool(lessonWords);
        } else {
          const coreWords = YCT_WORDS.filter(w => w.level === selectedLevel && w.lesson === selectedLesson);
          const distractorWords = DUAL_DISTRACTORS.filter(w => w.level === selectedLevel && w.lesson === selectedLesson);
          const lessonWords = [...coreWords, ...distractorWords];
          setCurrentLevelPool(lessonWords);
          setCurrentReviewPool(lessonWords);
        }
      }
    }

    if (lastGameReport) setLastGameReport(null);

    // Determine screen path using selected mode state
    if (currentLevelPool.length > 0 && selectedLesson) {
      if (selectedGameMode === 'DUAL') {
        setActiveScreen('PLAY_DUAL');
      } else {
        setActiveScreen('PLAY_SINGLE');
      }
    }
  };

  // Complete game
  const handleGameEndReport = (report: GameScore) => {
    setLastGameReport(report);
    setActiveScreen('SCOREBOARD');
  };

  // Progression to successive lessons/levels
  const handleNextChallenge = () => {
    let nextLesson = selectedLesson + 1;
    let nextLevel = selectedLevel;

    // Determine the maximum lesson based on level: YCT1-4 has 12 lessons, YCT5-6 has 15 lessons
    const maxLessonForLevel = selectedLevel <= 4 ? 12 : 15;

    if (nextLesson > maxLessonForLevel) {
      nextLesson = 1;
      nextLevel = selectedLevel + 1;
    }

    if (nextLevel > 6) {
      // reset back to Level 1 Lesson 1 if completed YCT 6
      nextLevel = 1;
      nextLesson = 1;
    }

    setSelectedLevel(nextLevel);
    setSelectedLesson(nextLesson);

    const isNextReview = (nextLevel <= 4 && nextLesson === 12) || (nextLevel >= 5 && nextLesson === 15);

    if (selectedGameMode === 'SINGLE') {
      const pools = getGameWordsPool(nextLevel, nextLesson);
      if (isNextReview) {
        const pool = getSinglePlayerGamePool(nextLevel, nextLesson);
        setCurrentLevelPool(pool);
        setCurrentReviewPool(pool);
      } else {
        setCurrentLevelPool(pools.currentWords);
        setCurrentReviewPool(pools.reviewWords);
      }
    } else {
      if (isNextReview) {
        const allLevelWords = YCT_WORDS.filter(w => w.level === nextLevel && w.lesson < nextLesson);
        const shuffled = [...allLevelWords].sort(() => Math.random() - 0.5);
        const lessonWords = shuffled.slice(0, 12);
        setCurrentLevelPool(lessonWords);
        setCurrentReviewPool(lessonWords);
      } else {
        const coreWords = YCT_WORDS.filter(w => w.level === nextLevel && w.lesson === nextLesson);
        const distractorWords = DUAL_DISTRACTORS.filter(w => w.level === nextLevel && w.lesson === nextLesson);
        const lessonWords = [...coreWords, ...distractorWords];
        setCurrentLevelPool(lessonWords);
        setCurrentReviewPool(lessonWords);
      }
    }

    setLastGameReport(null);
    setActiveScreen('PREPARE');
  };

  const isGameplayActive = activeScreen === 'PLAY_SINGLE' || activeScreen === 'PLAY_DUAL' || activeScreen === 'SCOREBOARD';

  return (
    <div className={`bg-[#FFF9C4] flex flex-col justify-between selection:bg-pink-105 text-[#1A1A1A] font-sans ${isGameplayActive ? 'h-screen w-screen overflow-hidden p-[38px]' : 'min-h-screen py-6 px-4'}`}>
      
      {/* 2. DYNAMIC APP CONTROLLER PORTS */}
      <main className={`flex-1 w-full ${isGameplayActive ? 'max-w-none h-full overflow-hidden' : 'max-w-6xl'} mx-auto flex items-center justify-center`}>
        <AnimatePresence mode="wait">
          
          {/* A. HOME SELECT AREA */}
          {activeScreen === 'HOME' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full max-w-3xl text-center space-y-8"
              id="home-screen"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="inline-block bg-[#FFEBEE] border-2 border-black text-[#FF5252] px-5 py-2 rounded-full text-xs font-black font-mono tracking-widest uppercase mb-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  🚀 YCT 1 - 6 Vocabulary Arena
                </motion.div>
                <div className="space-y-1">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#FF5252] tracking-tight leading-normal py-1">
                    汉字词汇大师
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1A1A1A] uppercase tracking-tighter leading-none mt-2">
                    Vocabulary Master
                  </h1>
                </div>
                <p className="text-sm md:text-base font-bold text-gray-700 max-w-xl mx-auto leading-relaxed">
                  {t.readyPageDesc}
                </p>
              </div>

              {/* THREE COLOR BUTTON MECHANICS (Single Player, Dual, Info) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {/* Single Player: Coral Green orange color button */}
                <button
                  onClick={() => handleSelectMode('SINGLE')}
                  className="group bg-[#E8F5E9] border-4 border-black p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#C8E6C9] transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden cursor-pointer flex flex-col items-center justify-center min-h-[145px]"
                  id="mode-card-single"
                >
                  <div className="bg-[#4CAF50] border-2 border-black w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-auto">🎮</div>
                  <h3 className="font-extrabold text-[#1B5E20] text-lg uppercase tracking-tight leading-tight">{t.singlePlayer}</h3>
                </button>

                {/* Double Player: Warm Blue gradient color button */}
                <button
                  onClick={() => handleSelectMode('DUAL')}
                  className="group bg-[#E1F5FE] border-4 border-black p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#B3E5FC] transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden cursor-pointer flex flex-col items-center justify-center min-h-[145px]"
                  id="mode-card-dual"
                >
                  <div className="bg-[#2196F3] border-2 border-black w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-auto">👥</div>
                  <h3 className="font-extrabold text-[#01579B] text-lg uppercase tracking-tight leading-tight">{t.dualPlayer}</h3>
                </button>

                {/* Manual instructions: Magenta Rose colored button */}
                <button
                  onClick={() => handleSelectMode('INTRO')}
                  className="group bg-[#FFF3E0] border-4 border-black p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFE0B2] transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden cursor-pointer flex flex-col items-center justify-center min-h-[145px]"
                  id="mode-card-intro"
                >
                  <div className="bg-[#FF9800] border-2 border-black w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-auto">✨</div>
                  <h3 className="font-extrabold text-[#EF6C00] text-lg uppercase tracking-tight leading-tight">{t.instructions}</h3>
                </button>
              </div>

              {/* Home footer detail */}
              <div className="bg-white border-2 border-black inline-flex rounded-full px-5 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-bold text-gray-700 items-center gap-1.5">
                <Globe className="text-[#FF5252]" size={12} />
                <span>Supports Chinese Pinyin, English, and Cyrillic Mongolian</span>
              </div>
            </motion.div>
          )}

          {/* B. LEVEL & LESSON VIEW SELECTOR */}
          {activeScreen === 'LEVEL_SELECT' && (
            <motion.div
              key="selector"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-5xl bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-[2.5rem] p-8 md:p-10 space-y-8 animate-fade-in"
              id="selection-portal"
            >
              {/* Headings */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b-4 border-black pb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Top-left Return Button */}
                  <button
                    onClick={() => setActiveScreen('HOME')}
                    className="px-5 py-3 bg-[#FFC107] border-4 border-black hover:bg-[#FFB300] text-black rounded-2xl text-xs font-black transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center gap-1.5 uppercase shrink-0"
                    id="back-to-home-btn"
                  >
                    <ArrowLeft size={14} className="stroke-[3]" />
                    <span>{t.backBtn}</span>
                  </button>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter">
                      {t.selectLevel} & {t.selectLesson}
                    </h2>
                    <p className="text-sm text-gray-550 font-bold uppercase mt-1">Customize your vocabulary syllabus path below</p>
                  </div>
                </div>
              </div>

              {/* SEGMENT 1: LEVEL CHOICE (YCT 1-6) */}
              <div className="space-y-4">
                <span className="text-sm font-mono uppercase tracking-widest text-[#1A1A1A] font-black flex items-center gap-2">
                  <GraduationCap size={18} className="text-[#FF5252]" />
                  Section 1: {t.selectLevel} YCT (1 - 6)
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  {[1, 2, 3, 4, 5, 6].map(levelNum => {
                    const isSelected = selectedLevel === levelNum;
                    return (
                      <button
                        key={levelNum}
                        onClick={() => setSelectedLevel(levelNum)}
                        className={`py-4 px-2 rounded-2xl font-black transition-all text-base md:text-lg border-4 border-black cursor-pointer ${
                          isSelected
                            ? 'bg-[#FF5252] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform scale-[1.03]'
                            : 'bg-white hover:bg-slate-50 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none'
                        }`}
                        id={`level-button-${levelNum}`}
                      >
                        YCT {levelNum}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SEGMENT 2: LESSONS (Dynamic Layout based on Selected Level) */}
              <div className="space-y-4 pt-4">
                <span className="text-sm font-mono uppercase tracking-widest text-[#1A1A1A] font-black flex items-center gap-2">
                  <BookOpen size={18} className="text-[#FF5252]" />
                  Section 2: {t.selectLesson} Lesson (L1 - L{availableLessons[availableLessons.length - 1]})
                </span>
                
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  {availableLessons.map(les => {
                    const isSelected = selectedLesson === les;
                    const isLast = les === availableLessons[availableLessons.length - 1];
                    const gameModeStr = selectedGameMode === 'DUAL' ? 'DUAL' : 'SINGLE';
                    const isPlayable = isLessonPlayable(selectedLevel, les, gameModeStr);

                    let label = `Lesson ${les}`;
                    if (isLast) {
                      label = `L${les} REVIEW`;
                    }

                    return (
                      <button
                        key={les}
                        onClick={() => {
                          if (isPlayable) {
                            setSelectedLesson(les);
                          }
                        }}
                        disabled={!isPlayable}
                        className={`py-5 px-3 rounded-2xl font-black transition-all text-sm md:text-base border-4 cursor-pointer ${
                          !isPlayable
                            ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-50 shadow-none'
                            : isSelected
                            ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform scale-[1.03]'
                            : isLast
                            ? 'bg-[#FFF9C4] border-black hover:bg-[#FFF59D] text-amber-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white border-black hover:bg-slate-50 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none'
                        }`}
                        id={`lesson-button-${les}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DYNAMIC ACTION TRIGGER: CLICK TO START BUTTON */}
              <div className="border-t-4 border-black pt-8 flex flex-col items-center justify-center space-y-4">
                {(() => {
                  const gameModeStr = selectedGameMode === 'DUAL' ? 'DUAL' : 'SINGLE';
                  const isSelectedPlayable = isLessonPlayable(selectedLevel, selectedLesson, gameModeStr);
                  
                  return (
                    <button
                      onClick={() => {
                        if (isSelectedPlayable) {
                          handleStartPracticeList(selectedLevel, selectedLesson);
                        }
                      }}
                      disabled={!isSelectedPlayable}
                      className={`w-full max-w-xl py-5 border-4 border-black font-black rounded-2xl text-lg md:text-xl uppercase text-center flex items-center justify-center gap-2.5 transition-all ${
                        isSelectedPlayable
                          ? 'bg-[#FF5252] hover:bg-[#FF1744] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer animate-pulse'
                          : 'bg-gray-200 border-gray-300 text-gray-400 shadow-none cursor-not-allowed opacity-50'
                      }`}
                      id="selection-start-game-btn"
                    >
                      <Sparkles size={24} className={isSelectedPlayable ? "text-yellow-300" : "text-gray-400"} />
                      <span>
                        {!isSelectedPlayable ? (
                          currentLanguage === Language.ZH ? '本课词数不足，无法游戏' : 
                          currentLanguage === Language.MN ? 'Үг дутуу тул тоглох боломжгүй' : 
                          'NOT ENOUGH WORDS TO PLAY'
                        ) : (
                          currentLanguage === Language.ZH ? '点击开始挑战' : 
                          currentLanguage === Language.MN ? 'ДАВТАХ СТАРТ' : 
                          'CLICK TO START'
                        )}
                        {isSelectedPlayable && ` (YCT ${selectedLevel} • L${selectedLesson === (selectedLevel <= 4 ? 12 : 15) ? 'REVIEW' : selectedLesson})`}
                      </span>
                      {isSelectedPlayable && <ChevronRight size={24} />}
                    </button>
                  );
                })()}
                <p className="text-xs md:text-sm font-black text-gray-500 uppercase tracking-wider">
                  {currentLanguage === Language.ZH ? `当前已选: YCT ${selectedLevel}级 - 第${selectedLesson}课` :
                   currentLanguage === Language.MN ? `Сонгосон: YCT ${selectedLevel} • Хичээл ${selectedLesson}` :
                   `Selected: YCT Level ${selectedLevel} • Lesson ${selectedLesson}`}
                </p>
              </div>
            </motion.div>
          )}

          {/* C. WORDS PREPARE CAROUSEL */}
          {activeScreen === 'PREPARE' && (
            <motion.div
              key="prepare"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <WordDetail
                words={currentLevelPool}
                currentLanguage={currentLanguage}
                selectedLevel={selectedLevel}
                selectedLesson={selectedLesson}
                onStartGame={triggerActualGameplay}
                onBack={() => {
                  setActiveScreen('LEVEL_SELECT');
                }}
              />
            </motion.div>
          )}

          {/* D. SINGLE PLAYER GAMEPLAY SCREEN */}
          {activeScreen === 'PLAY_SINGLE' && (
            <motion.div
              key="singleplay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col"
            >
              <SingleAdventure
                currentLanguage={currentLanguage}
                currentWords={currentLevelPool}
                reviewWords={currentReviewPool}
                onGameOver={handleGameEndReport}
                onExit={() => {
                  setActiveScreen('HOME');
                  setLastGameReport(null);
                }}
              />
            </motion.div>
          )}

          {/* E. DUAL BATTLE SPLIT SCREEN */}
          {activeScreen === 'PLAY_DUAL' && (
            <motion.div
              key="dualplay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col"
            >
              <DualBattle
                currentLanguage={currentLanguage}
                selectedLevel={selectedLevel}
                selectedLesson={selectedLesson}
                onExit={() => {
                  setActiveScreen('HOME');
                }}
              />
            </motion.div>
          )}

          {/* F. END GAME SCOREBOARD REPORTS */}
          {activeScreen === 'SCOREBOARD' && lastGameReport && (
            <motion.div
              key="report"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col"
            >
              <ScoreBoard
                scoreReport={lastGameReport}
                currentLanguage={currentLanguage}
                onRestart={() => {
                  setLastGameReport(null);
                  if (selectedGameMode === 'DUAL') {
                    setActiveScreen('PLAY_DUAL');
                  } else {
                    setActiveScreen('PLAY_SINGLE');
                  }
                }}
                onHome={() => {
                  setLastGameReport(null);
                  setActiveScreen('HOME');
                }}
                onNextLevel={handleNextChallenge}
                hasNextLevel={true}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. POPUP MODAL WINDOWS FOR RULES */}
      <AnimatePresence>
        {showIntroPopup && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Introduction
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
              onClose={() => setShowIntroPopup(false)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* 4. FOOTER */}
      {!isGameplayActive && (
        <footer className="w-full text-center text-[10px] text-slate-400 font-mono mt-8 border-t border-slate-100 pt-4 flex flex-col sm:flex-row justify-between max-w-6xl mx-auto gap-2">
          <span>© 2026 词汇大师 Vocabulary Master. All Rights Reserved.</span>
          <span className="flex items-center justify-center gap-1">
            Developed under <strong className="text-pink-500 font-semibold">[Google AI Studio Build Team]</strong>
          </span>
        </footer>
      )}
    </div>
  );
}
