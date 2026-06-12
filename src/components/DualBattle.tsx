import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { YCTWord, CategoryTag, Language } from '../types';
import { CATEGORIES } from '../data/vocabulary';
import { generate6DualRounds, TRANSLATIONS } from '../utils/gameHelpers';
import { Trophy, Timer, X, Zap, Swords, Smartphone, ZapOff, Play, RotateCcw, Heart, Pause, XCircle } from 'lucide-react';
import LucideIcon from './LucideIcon';

interface DualBattleProps {
  currentLanguage: Language;
  selectedLevel: number;
  selectedLesson: number;
  onExit: () => void;
}

interface DualWordCard {
  id: string;
  word: YCTWord;
  isOdd: boolean;
  isSlicedP1: boolean;
  isSlicedP2: boolean;
}

interface DualMistake {
  roundNumber: number;
  commonCategory: CategoryTag | null;
  slicedWord: YCTWord;
}

export default function DualBattle({
  currentLanguage,
  selectedLevel,
  selectedLesson,
  onExit
}: DualBattleProps) {
  const t = TRANSLATIONS[currentLanguage];

  // Screen layout state (responsive)
  const [isMobileLayout, setIsMobileLayout] = useState<boolean>(false);

  // Independent player States
  const [p1RoundNumber, setP1RoundNumber] = useState<number>(1);
  const [p2RoundNumber, setP2RoundNumber] = useState<number>(1);

  const [p1Words, setP1Words] = useState<DualWordCard[]>([]);
  const [p2Words, setP2Words] = useState<DualWordCard[]>([]);

  const [p1CommonCategory, setP1CommonCategory] = useState<CategoryTag | null>(null);
  const [p2CommonCategory, setP2CommonCategory] = useState<CategoryTag | null>(null);

  const [p1Finished, setP1Finished] = useState<boolean>(false);
  const [p2Finished, setP2Finished] = useState<boolean>(false);

  // Mistakes tracking local states
  const [p1Mistakes, setP1Mistakes] = useState<DualMistake[]>([]);
  const [p2Mistakes, setP2Mistakes] = useState<DualMistake[]>([]);

  // Sliced correct lists tracking
  const [p1Correct, setP1Correct] = useState<YCTWord[]>([]);
  const [p2Correct, setP2Correct] = useState<YCTWord[]>([]);

  // Scores
  const [p1Score, setP1Score] = useState<number>(0);
  const [p2Score, setP2Score] = useState<number>(0);

  // Player lives
  const [p1Lives, setP1Lives] = useState<number>(3);
  const [p2Lives, setP2Lives] = useState<number>(3);

  // Game timer: 180s
  const [secondsLeft, setSecondsLeft] = useState<number>(180);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Recent slashes animation tracking
  const [p1Slashes, setP1Slashes] = useState<{ id: string; x: number; y: number }[]>([]);
  const [p2Slashes, setP2Slashes] = useState<{ id: string; x: number; y: number }[]>([]);

  // Refs to hold pre-generated 6 dual rounds independently for each player
  const p1RoundsRef = useRef<any[]>([]);
  const p2RoundsRef = useRef<any[]>([]);
  const p1TransitioningRef = useRef<boolean>(false);
  const p2TransitioningRef = useRef<boolean>(false);
  const slicedCardIdsP1Ref = useRef<Set<string>>(new Set());
  const slicedCardIdsP2Ref = useRef<Set<string>>(new Set());

  const initRounds = () => {
    p1RoundsRef.current = generate6DualRounds(selectedLevel, selectedLesson);
    p2RoundsRef.current = generate6DualRounds(selectedLevel, selectedLesson);
  };

  // Check screen width for auto layout allocation (left/right vs top/bottom)
  useEffect(() => {
    const handleResize = () => {
      setIsMobileLayout(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Spawn rounds for Player 1
  const startNewRoundP1 = (customRoundNum?: number) => {
    p1TransitioningRef.current = false;
    slicedCardIdsP1Ref.current.clear();
    const currentRoundIndex = (customRoundNum !== undefined ? customRoundNum : p1RoundNumber) - 1;

    if (currentRoundIndex >= 6) {
      setP1Finished(true);
      return;
    }

    if (p1RoundsRef.current.length === 0) {
      p1RoundsRef.current = generate6DualRounds(selectedLevel, selectedLesson);
    }

    const roundData = p1RoundsRef.current[currentRoundIndex];
    if (!roundData) return;

    const mappedCards = roundData.words.map((w: any, index: number) => ({
      id: `${w.id}-${index}-${currentRoundIndex + 1}-p1`,
      word: w,
      isOdd: w.isOdd,
      isSlicedP1: false,
      isSlicedP2: false
    }));

    setP1Words(mappedCards);
    setP1CommonCategory(roundData.commonCategory);
  };

  // Spawn rounds for Player 2
  const startNewRoundP2 = (customRoundNum?: number) => {
    p2TransitioningRef.current = false;
    slicedCardIdsP2Ref.current.clear();
    const currentRoundIndex = (customRoundNum !== undefined ? customRoundNum : p2RoundNumber) - 1;

    if (currentRoundIndex >= 6) {
      setP2Finished(true);
      return;
    }

    if (p2RoundsRef.current.length === 0) {
      p2RoundsRef.current = generate6DualRounds(selectedLevel, selectedLesson);
    }

    const roundData = p2RoundsRef.current[currentRoundIndex];
    if (!roundData) return;

    const mappedCards = roundData.words.map((w: any, index: number) => ({
      id: `${w.id}-${index}-${currentRoundIndex + 1}-p2`,
      word: w,
      isOdd: w.isOdd,
      isSlicedP1: false,
      isSlicedP2: false
    }));

    setP2Words(mappedCards);
    setP2CommonCategory(roundData.commonCategory);
  };

  // Triggering the timer ticker
  useEffect(() => {
    if (isPaused || isGameOver) return;

    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isGameOver]);

  // Handle spawn when round increments
  useEffect(() => {
    startNewRoundP1();
  }, [p1RoundNumber]);

  useEffect(() => {
    startNewRoundP2();
  }, [p2RoundNumber]);

  // Initialize rounds on startup or configuration changes
  useEffect(() => {
    initRounds();
    setP1RoundNumber(1);
    setP2RoundNumber(1);
    setP1Finished(false);
    setP2Finished(false);
    setP1Lives(3);
    setP2Lives(3);
    setP1Mistakes([]);
    setP2Mistakes([]);
    setP1Correct([]);
    setP2Correct([]);
    startNewRoundP1(1);
    startNewRoundP2(1);
  }, [selectedLevel, selectedLesson]);

  // End game when both players have finished their respective 6 rounds
  useEffect(() => {
    if (p1Finished && p2Finished) {
      setIsGameOver(true);
    }
  }, [p1Finished, p2Finished]);

  // Populate unanswered mistakes when game ends
  useEffect(() => {
    if (isGameOver) {
      // Player 1 unanswered rounds
      if (!p1Finished && p1RoundsRef.current.length > 0) {
        const unfinishedRounds = p1RoundsRef.current.slice(p1RoundNumber - 1);
        setP1Mistakes(prev => {
          const updated = [...prev];
          unfinishedRounds.forEach((round, index) => {
            const rNum = p1RoundNumber + index;
            const oddWord = round.words.find((w: any) => w.isOdd);
            if (oddWord) {
              const alreadyExists = updated.some(m => m.roundNumber === rNum && m.slicedWord.id === oddWord.id);
              if (!alreadyExists) {
                updated.push({
                  roundNumber: rNum,
                  commonCategory: round.commonCategory,
                  slicedWord: oddWord,
                  isUnanswered: true
                });
              }
            }
          });
          return updated;
        });
      }

      // Player 2 unanswered rounds
      if (!p2Finished && p2RoundsRef.current.length > 0) {
        const unfinishedRounds = p2RoundsRef.current.slice(p2RoundNumber - 1);
        setP2Mistakes(prev => {
          const updated = [...prev];
          unfinishedRounds.forEach((round, index) => {
            const rNum = p2RoundNumber + index;
            const oddWord = round.words.find((w: any) => w.isOdd);
            if (oddWord) {
              const alreadyExists = updated.some(m => m.roundNumber === rNum && m.slicedWord.id === oddWord.id);
              if (!alreadyExists) {
                updated.push({
                  roundNumber: rNum,
                  commonCategory: round.commonCategory,
                  slicedWord: oddWord,
                  isUnanswered: true
                });
              }
            }
          });
          return updated;
        });
      }
    }
  }, [isGameOver, p1Finished, p2Finished, p1RoundNumber, p2RoundNumber]);

  // Track Player 1 score/slicing
  useEffect(() => {
    if (p1Words.length === 0 || isGameOver || p1Finished || p1TransitioningRef.current) return;

    const totalOddCount = p1Words.filter(w => w.isOdd).length;
    const slicedOddP1Count = p1Words.filter(w => w.isOdd && w.isSlicedP1).length;

    if (slicedOddP1Count === totalOddCount) {
      p1TransitioningRef.current = true;
      setP1Score(p => p + 10);
      const oddWord = p1Words.find(w => w.isOdd)?.word;
      if (oddWord) {
        setP1Correct(prev => {
          if (prev.some(w => w.id === oddWord.id)) return prev;
          return [...prev, oddWord];
        });
      }
      playRoundEndAnimation('p1');
    }
  }, [p1Words]);

  // Track Player 2 score/slicing
  useEffect(() => {
    if (p2Words.length === 0 || isGameOver || p2Finished || p2TransitioningRef.current) return;

    const totalOddCount = p2Words.filter(w => w.isOdd).length;
    const slicedOddP2Count = p2Words.filter(w => w.isOdd && w.isSlicedP2).length;

    if (slicedOddP2Count === totalOddCount) {
      p2TransitioningRef.current = true;
      setP2Score(p => p + 10);
      const oddWord = p2Words.find(w => w.isOdd)?.word;
      if (oddWord) {
        setP2Correct(prev => {
          if (prev.some(w => w.id === oddWord.id)) return prev;
          return [...prev, oddWord];
        });
      }
      playRoundEndAnimation('p2');
    }
  }, [p2Words]);

  const playRoundEndAnimation = (winner: 'p1' | 'p2') => {
    setTimeout(() => {
      if (winner === 'p1') {
        setP1RoundNumber(r => {
          const next = r + 1;
          if (next > 6) {
            setP1Finished(true);
          }
          return next;
        });
      } else {
        setP2RoundNumber(r => {
          const next = r + 1;
          if (next > 6) {
            setP2Finished(true);
          }
          return next;
        });
      }
    }, 600);
  };

  // Player action: Swipe/Drag across a word card to slice/cut it
  const handleSliceGesture = (cardId: string, player: 'p1' | 'p2', e: React.MouseEvent | React.TouchEvent) => {
    if (isPaused || isGameOver) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let clientX = 0, clientY = 0;
    
    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX - rect.left;
      clientY = e.touches[0].clientY - rect.top;
    } else if ('clientX' in e) {
      clientX = e.clientX - rect.left;
      clientY = e.clientY - rect.top;
    }

    const slashId = Math.random().toString();
    
    // Read current card status first
    let isAlreadySliced = false;
    let isWrongChoice = false;
    let matchedCardWord: any = null;

    if (player === 'p1') {
      const card = p1Words.find(c => c.id === cardId);
      if (!card) return;
      isAlreadySliced = card.isSlicedP1;
      isWrongChoice = !card.isOdd;
      matchedCardWord = card.word;

      if (slicedCardIdsP1Ref.current.has(cardId)) return;
      slicedCardIdsP1Ref.current.add(cardId);
      setP1Slashes(prev => [...prev, { id: slashId, x: clientX, y: clientY }]);
      setTimeout(() => setP1Slashes(prev => prev.filter(s => s.id !== slashId)), 400);
    } else {
      const card = p2Words.find(c => c.id === cardId);
      if (!card) return;
      isAlreadySliced = card.isSlicedP2;
      isWrongChoice = !card.isOdd;
      matchedCardWord = card.word;

      if (slicedCardIdsP2Ref.current.has(cardId)) return;
      slicedCardIdsP2Ref.current.add(cardId);
      setP2Slashes(prev => [...prev, { id: slashId, x: clientX, y: clientY }]);
      setTimeout(() => setP2Slashes(prev => prev.filter(s => s.id !== slashId)), 400);
    }

    if (isAlreadySliced) return;

    if (player === 'p1') {
      setP1Words(prev =>
        prev.map(card => {
          if (card.id === cardId) {
            return {
              ...card,
              isSlicedP1: true
            };
          }
          return card;
        })
      );

      if (isWrongChoice) {
        setP1Score(s => Math.max(0, s - 5));
        setP1Lives(l => {
          const nextLives = Math.max(0, l - 1);
          if (nextLives === 0) {
            setP1Finished(true);
          }
          return nextLives;
        });
        setP1Mistakes(prevM => {
          const exists = prevM.some(m => m.roundNumber === p1RoundNumber && m.slicedWord.id === matchedCardWord.id);
          if (exists) return prevM;
          return [...prevM, {
            roundNumber: p1RoundNumber,
            commonCategory: p1CommonCategory,
            slicedWord: matchedCardWord
          }];
        });
      }
    } else {
      setP2Words(prev =>
        prev.map(card => {
          if (card.id === cardId) {
            return {
              ...card,
              isSlicedP2: true
            };
          }
          return card;
        })
      );

      if (isWrongChoice) {
        setP2Score(s => Math.max(0, s - 5));
        setP2Lives(l => {
          const nextLives = Math.max(0, l - 1);
          if (nextLives === 0) {
            setP2Finished(true);
          }
          return nextLives;
        });
        setP2Mistakes(prevM => {
          const exists = prevM.some(m => m.roundNumber === p2RoundNumber && m.slicedWord.id === matchedCardWord.id);
          if (exists) return prevM;
          return [...prevM, {
            roundNumber: p2RoundNumber,
            commonCategory: p2CommonCategory,
            slicedWord: matchedCardWord
          }];
        });
      }
    }
  };

  const handleRestart = () => {
    p1TransitioningRef.current = false;
    p2TransitioningRef.current = false;
    slicedCardIdsP1Ref.current.clear();
    slicedCardIdsP2Ref.current.clear();
    setP1Score(0);
    setP2Score(0);
    setP1Lives(3);
    setP2Lives(3);
    setSecondsLeft(180);
    setIsGameOver(false);
    setIsPaused(false);
    setP1Finished(false);
    setP2Finished(false);
    setP1Mistakes([]);
    setP2Mistakes([]);
    setP1Correct([]);
    setP2Correct([]);

    p1RoundsRef.current = generate6DualRounds(selectedLevel, selectedLesson);
    p2RoundsRef.current = generate6DualRounds(selectedLevel, selectedLesson);

    setP1RoundNumber(1);
    setP2RoundNumber(1);
    startNewRoundP1(1);
    startNewRoundP2(1);
  };

  const getQuestionText = (cat: CategoryTag | null) => {
    if (!cat) return '';
    if (currentLanguage === Language.ZH) {
      return `哪个不是${cat.zh}？`;
    } else if (currentLanguage === Language.MN) {
      return `Аль нь ${cat.mn} биш вэ?`;
    } else {
      return `Which is NOT ${cat.en}?`;
    }
  };

  const gridColsClass = "grid-cols-3 max-w-xl";

  return (
    <div 
      className="w-full h-full flex flex-col items-center justify-between bg-[#FFF9C4] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black relative"
      style={{ height: '100%', minHeight: '520px' }}
    >
      
      {/* GLOBAL HEADBOARD HUD CONTROLS */}
      <div className="w-full bg-white px-6 py-3 border-b-4 border-black flex items-center justify-between z-30">
        <button
          onClick={() => setIsPaused(p => !p)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFC107] hover:bg-[#FFB300] border-2 border-black font-black text-black rounded-lg text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
          id="dual-pause-btn"
        >
          {isPaused ? <Play size={13} /> : <Pause size={13} />}
        </button>

        {/* Sync Timer in the middle of HUD */}
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Timer className={`w-3.5 h-3.5 ${secondsLeft <= 10 ? 'text-[#FF5252] animate-pulse' : 'text-[#2196F3]'}`} />
          <span className="text-xs font-black font-mono tracking-wide text-black">{secondsLeft}s</span>
        </div>

        {/* General competition subtitle or winner indicator */}
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#E65100] font-black hidden sm:block">
          {isGameOver 
            ? `🏁 MATCH ENDED • ${p1Score > p2Score ? 'RED WINS!' : p2Score > p1Score ? 'BLUE WINS!' : 'DRAW TIE!'}` 
            : '⚔️ DUAL CATEGORY ARENA'}
        </div>
      </div>

      {/* DETAILED CATEGORY PROMPT SUMMARY BAR */}
      <div className="w-full bg-[#FFFFD1] py-2.5 px-4 text-center border-b-4 border-black z-20 flex flex-wrap justify-center items-center gap-2">
        <span className="text-[11px] text-gray-800 font-black uppercase tracking-wider flex items-center gap-1.5">
          <Swords className="w-4 h-4 text-[#FF5252]" />
          {t.sameDeviceDual} • {t.dualDesc}
        </span>
      </div>

      {/* SPLIT SCREEN LAYOUT PORT */}
      <div className={`flex-1 w-full grid ${isMobileLayout ? 'grid-rows-2 h-[80%]' : 'grid-cols-2 w-full'} gap-2 bg-[#FFF9C4] p-2 relative overflow-hidden`}>
        
        {/* ==================== PLAYER 1 (LEFT / BOTTOM SPLIT) ==================== */}
        <div
          className={`relative bg-[#E1F5FE] rounded-2xl border-4 border-black p-4 flex flex-col justify-between overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
            isMobileLayout ? 'row-start-2' : ''
          }`}
          id="dual-p1-arena-port"
        >
          {/* Scoring badge */}
          <div className="flex justify-between items-center bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-xs font-black text-[#FF5252] flex items-center gap-1.5 uppercase font-mono">
              🔴 {t.dualP1}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 mr-2">
                {[1, 2, 3].map(heartId => (
                  <Heart
                    key={heartId}
                    className={`w-4 h-4 transition-transform ${
                      heartId <= p1Lives ? 'text-[#FF5252] fill-[#FF5252] scale-100' : 'text-slate-300 opacity-20 scale-90'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-black font-mono text-black">{p1Score} pts</span>
            </div>
          </div>

          {/* If the game is over, render Player 1's isolated summary here */}
          {isGameOver ? (
            <div className="flex-1 flex flex-col justify-between py-2 text-black select-none">
              <div className="text-center">
                <div className="text-[10px] font-mono text-red-700 font-extrabold uppercase tracking-widest">
                  📊 PLAYBACK REPORT • PLAYER 1
                </div>
                
                <h2 className="text-xl sm:text-2xl font-black text-[#D32F2F] uppercase tracking-dense mt-1 animate-pulse">
                  {p1Score > p2Score ? '🏆 YOU WIN!' : p2Score > p1Score ? 'NICE TRY!' : '🤝 IT\'S A TIE!'}
                </h2>
                
                <div className="inline-block bg-white border-2 border-black px-4 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-1.5">
                  <span className="text-xs font-bold text-gray-500 uppercase">SCORE:</span>
                  <span className="text-xl font-black font-mono ml-2 text-black">{p1Score} pts</span>
                </div>
              </div>

              {/* Slices & Mistakes Log (De-duplicated & Question free) */}
              {(() => {
                const uniqueP1Mistakes: any[] = [];
                const seenP1MistakeIds = new Set<string>();
                p1Mistakes.forEach(m => {
                  if (!seenP1MistakeIds.has(m.slicedWord.id)) {
                    seenP1MistakeIds.add(m.slicedWord.id);
                    uniqueP1Mistakes.push(m);
                  }
                });

                const uniqueP1Correct: YCTWord[] = [];
                const seenP1CorrectIds = new Set<string>();
                p1Correct.forEach(w => {
                  if (!seenP1CorrectIds.has(w.id) && !seenP1MistakeIds.has(w.id)) {
                    seenP1CorrectIds.add(w.id);
                    uniqueP1Correct.push(w);
                  }
                });

                return (
                  <div className="flex-1 my-3 bg-white/95 border-2 border-black rounded-xl p-3 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[300px] md:max-h-[380px] overflow-y-auto text-left gap-3.5">
                    {/* Correct ones section */}
                    <div>
                      <div className="text-xs font-black text-emerald-700 uppercase tracking-wider border-b border-black pb-1 mb-2 flex items-center justify-between">
                        <span>🟢 正确 / CORRECT ({uniqueP1Correct.length})</span>
                      </div>
                      {uniqueP1Correct.length === 0 ? (
                        <p className="text-[10px] text-gray-550 font-bold uppercase">无 / None</p>
                      ) : (
                        <div className="flex flex-col gap-2 w-full">
                          {uniqueP1Correct.map((w, idx) => {
                            const isMn = currentLanguage === Language.MN;
                            const meaning = isMn ? w.translation.mn : w.translation.en;
                            const correctCat = CATEGORIES.find(c => c.id === w.category);
                            return (
                              <div key={`p1-c-item-${idx}`} className="flex w-full items-center justify-between gap-2 px-3 py-2.5 bg-emerald-50 border-2 border-slate-700 rounded-xl font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] flex-wrap sm:flex-nowrap">
                                <div className="flex items-center gap-2.5 flex-wrap text-left">
                                  <span className="font-extrabold text-[#1B5E20] text-lg sm:text-xl tracking-tight">{w.word}</span>
                                  <span className="text-xs sm:text-sm text-[#2E7D32] font-mono">[{w.translation.pinyin.toLowerCase()}]</span>
                                  <span className="text-xs text-slate-700 font-bold">— {meaning}</span>
                                </div>
                                {correctCat && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-400 text-slate-800 text-xs flex-shrink-0 font-extrabold shadow-sm">
                                    <LucideIcon name={correctCat.icon} size={13} />
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
                      )}
                    </div>

                    {/* Mistakes / Unanswered section */}
                    <div>
                      <div className="text-xs font-black text-rose-700 uppercase tracking-wider border-b border-black pb-1 mb-2 flex items-center justify-between">
                        <span>❌ 错误/未答 / FAILURE ({uniqueP1Mistakes.length})</span>
                      </div>
                      {uniqueP1Mistakes.length === 0 ? (
                        <p className="text-[10px] text-emerald-600 font-black uppercase">🏆 PERFECT!</p>
                      ) : (
                        <div className="flex flex-col gap-2 w-full">
                          {uniqueP1Mistakes.map((m, idx) => {
                            const w = m.slicedWord;
                            const isMn = currentLanguage === Language.MN;
                            const meaning = isMn ? w.translation.mn : w.translation.en;
                            const correctCat = CATEGORIES.find(c => c.id === w.category);
                            return (
                              <div key={`p1-m-item-${idx}`} className={`flex w-full items-center justify-between gap-2 px-3 py-2.5 border-2 border-slate-700 rounded-xl font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] flex-wrap sm:flex-nowrap ${m.isUnanswered ? 'bg-amber-50' : 'bg-red-50'}`}>
                                <div className="flex items-center gap-2.5 flex-wrap text-left">
                                  <span className="font-extrabold text-[#C62828] text-lg sm:text-xl tracking-tight">{w.word}</span>
                                  <span className="text-xs sm:text-sm text-red-500 font-mono">[{w.translation.pinyin.toLowerCase()}]</span>
                                  <span className="text-xs text-slate-700 font-bold">— {meaning}</span>
                                </div>
                                {correctCat && (
                                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border-2 border-slate-500 text-xs flex-shrink-0 font-extrabold shadow-sm ${correctCat.color.split(' ')[0]} ${correctCat.color.split(' ')[2]}`}>
                                    <LucideIcon name={correctCat.icon} size={13} />
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
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Local pane reset action buttons */}
              <div className="flex gap-2.5 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 bg-[#FF5252] hover:bg-[#FF1744] text-white border-2 border-black rounded-xl font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase"
                >
                  <RotateCcw size={12} className="inline mr-1" />
                  RELOAD
                </button>
                <button
                  onClick={onExit}
                  className="px-4 py-2 bg-white border-2 border-black hover:bg-slate-50 text-black rounded-xl font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase"
                >
                  MENU
                </button>
              </div>
            </div>
          ) : p1Finished ? (
            <div className={`flex-1 flex flex-col items-center justify-center text-center p-4 rounded-xl border-2 my-auto ${
              p1Lives === 0 
                ? 'bg-[#FFEBEE]/80 border-[#FF5252]' 
                : 'bg-[#E8F5E9]/80 border-[#4CAF50]'
            }`}>
              {p1Lives === 0 ? (
                <>
                  <XCircle className="text-[#FF5252] w-12 h-12 mb-2 animate-bounce" />
                  <p className="text-sm font-black text-[#C62828]">
                    {currentLanguage === Language.ZH ? '生命值已耗尽！正在等待对手...' : 
                     currentLanguage === Language.MN ? 'Амь дууслаа! Өрсөлдөгчөө хүлээж байна...' : 
                     'No lives left! Waiting for opponent...'}
                  </p>
                </>
              ) : (
                <>
                  <Trophy className="text-[#4CAF50] w-12 h-12 mb-2 animate-bounce" />
                  <p className="text-sm font-black text-[#2E7D32]">
                    {currentLanguage === Language.ZH ? '已完成所有关卡！等待对手中...' : 
                     currentLanguage === Language.MN ? 'Бүх үеийг дуусгалаа! Өрсөлдөгчөө хүлээж байна...' : 
                     'All rounds complete! Waiting for opponent...'}
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              {/* INDEPENDENT QUESTION ZONE FOR P1 (Moved to Top & Only Single English) */}
              <div className="my-2 bg-[#FFFDE7] border-4 border-black p-3 rounded-xl text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                  🎯 ROUND {p1RoundNumber}/6
                </div>
                <div className="text-base sm:text-lg md:text-xl font-black text-[#B71C1C] uppercase tracking-wide animate-pulse">
                  {getQuestionText(p1CommonCategory)}
                </div>
              </div>

              {/* Cards container with dynamic grid layout config */}
              <div className={`grid ${gridColsClass} gap-3 sm:gap-4 my-auto self-center w-full select-none justify-center`}>
                {p1Words.map((card) => {
                  return (
                    <div
                      key={`p1-${card.id}`}
                      onMouseDown={(e) => handleSliceGesture(card.id, 'p1', e)}
                      onTouchStart={(e) => handleSliceGesture(card.id, 'p1', e)}
                      onMouseEnter={(e) => {
                        // Allows sliding swipe cut with mouse dragged down
                        if (e.buttons === 1) handleSliceGesture(card.id, 'p1', e);
                      }}
                      className={`relative p-3 rounded-2xl text-center border-4 border-black transition-all flex flex-col justify-center items-center h-28 sm:h-32 md:h-36 transform active:scale-95 cursor-pointer overflow-hidden ${
                        card.isSlicedP1
                          ? card.isOdd
                            ? 'bg-[#E8F5E9] border-black scale-90 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-[#FFEBEE] border-black opacity-60 scale-90 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-white hover:bg-slate-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                      id={`p1-card-${card.id}`}
                    >
                      {/* Pinyin (Strictly Lowercase & Enlarged) */}
                      <span className="text-[11px] sm:text-xs md:text-sm font-mono text-red-500 font-bold lowercase mb-1 whitespace-nowrap truncate max-w-full px-1">
                        [{card.word.translation.pinyin.toLowerCase()}]
                      </span>

                      {/* Chinese Character (Enlarged) */}
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
                        {card.word.word}
                      </span>

                      {/* SLICE TRAIL GESTURE ANIMATION OVERLAY */}
                      {card.isSlicedP1 && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '130%' }}
                          className={`absolute h-1.5 -rotate-45 ${card.isOdd ? 'bg-[#4CAF50] shadow shadow-green-400' : 'bg-red-500 shadow shadow-red-500'}`}
                        />
                      )}

                      {/* Sliced correct status label */}
                      {card.isSlicedP1 && (
                        <span className="absolute bottom-1 text-[8px] font-black uppercase bg-black text-white p-0.5 px-1.5 rounded border border-black shadow-[1px_1px_0px_0px_black]">
                          {card.isOdd ? '🎯 Slice' : '❌ Wrong'}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Prompt banner footer */}
              <div className="text-[10px] font-mono text-center text-gray-600 bg-white/50 py-1.5 rounded-lg border-2 border-black font-semibold uppercase w-full">
                👉 {t.dualDesc}
              </div>
            </>
          )}
        </div>


        {/* ==================== PLAYER 2 (RIGHT / TOP SPLIT) ==================== */}
        <div
          className={`relative bg-[#F1F8E9] rounded-2xl border-4 border-black p-4 flex flex-col justify-between overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
            isMobileLayout ? 'row-start-1 rotate-180' : ''
          }`}
          id="dual-p2-arena-port"
        >
          {/* Scoring badge */}
          <div className="flex justify-between items-center bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-xs font-black text-[#2196F3] flex items-center gap-1.5 uppercase font-mono">
              🔵 {t.dualP2}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 mr-2">
                {[1, 2, 3].map(heartId => (
                  <Heart
                    key={heartId}
                    className={`w-4 h-4 transition-transform ${
                      heartId <= p2Lives ? 'text-[#2196F3] fill-[#2196F3] scale-100' : 'text-slate-300 opacity-20 scale-90'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-black font-mono text-black">{p2Score} pts</span>
            </div>
          </div>

          {/* If the game is over, render Player 2's isolated summary here */}
          {isGameOver ? (
            <div className="flex-1 flex flex-col justify-between py-2 text-black select-none">
              <div className="text-center">
                <div className="text-[10px] font-mono text-[#01579B] font-extrabold uppercase tracking-widest">
                  📊 PLAYBACK REPORT • PLAYER 2
                </div>
                
                <h2 className="text-xl sm:text-2xl font-black text-[#2196F3] uppercase tracking-dense mt-1 animate-pulse">
                  {p2Score > p1Score ? '🏆 YOU WIN!' : p1Score > p2Score ? 'NICE TRY!' : '🤝 IT\'S A TIE!'}
                </h2>
                
                <div className="inline-block bg-white border-2 border-black px-4 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-1.5">
                  <span className="text-xs font-bold text-gray-500 uppercase">SCORE:</span>
                  <span className="text-xl font-black font-mono ml-2 text-black">{p2Score} pts</span>
                </div>
              </div>

              {/* Slices & Mistakes Log (De-duplicated & Question free) */}
              {(() => {
                const uniqueP2Mistakes: any[] = [];
                const seenP2MistakeIds = new Set<string>();
                p2Mistakes.forEach(m => {
                  if (!seenP2MistakeIds.has(m.slicedWord.id)) {
                    seenP2MistakeIds.add(m.slicedWord.id);
                    uniqueP2Mistakes.push(m);
                  }
                });

                const uniqueP2Correct: YCTWord[] = [];
                const seenP2CorrectIds = new Set<string>();
                p2Correct.forEach(w => {
                  if (!seenP2CorrectIds.has(w.id) && !seenP2MistakeIds.has(w.id)) {
                    seenP2CorrectIds.add(w.id);
                    uniqueP2Correct.push(w);
                  }
                });

                return (
                  <div className="flex-1 my-3 bg-white/95 border-2 border-black rounded-xl p-3 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[300px] md:max-h-[380px] overflow-y-auto text-left gap-3.5">
                    {/* Correct ones section */}
                    <div>
                      <div className="text-xs font-black text-emerald-700 uppercase tracking-wider border-b border-black pb-1 mb-2 flex items-center justify-between">
                        <span>🟢 正确 / CORRECT ({uniqueP2Correct.length})</span>
                      </div>
                      {uniqueP2Correct.length === 0 ? (
                        <p className="text-[10px] text-gray-550 font-bold uppercase">无 / None</p>
                      ) : (
                        <div className="flex flex-col gap-2 w-full">
                          {uniqueP2Correct.map((w, idx) => {
                            const isMn = currentLanguage === Language.MN;
                            const meaning = isMn ? w.translation.mn : w.translation.en;
                            const correctCat = CATEGORIES.find(c => c.id === w.category);
                            return (
                              <div key={`p2-c-item-${idx}`} className="flex w-full items-center justify-between gap-2 px-3 py-2.5 bg-emerald-50 border-2 border-slate-700 rounded-xl font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] flex-wrap sm:flex-nowrap">
                                <div className="flex items-center gap-2.5 flex-wrap text-left">
                                  <span className="font-extrabold text-[#1B5E20] text-lg sm:text-xl tracking-tight">{w.word}</span>
                                  <span className="text-xs sm:text-sm text-[#2E7D32] font-mono">[{w.translation.pinyin.toLowerCase()}]</span>
                                  <span className="text-xs text-slate-700 font-bold">— {meaning}</span>
                                </div>
                                {correctCat && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-400 text-slate-800 text-xs flex-shrink-0 font-extrabold shadow-sm">
                                    <LucideIcon name={correctCat.icon} size={13} />
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
                      )}
                    </div>

                    {/* Mistakes / Unanswered section */}
                    <div>
                      <div className="text-xs font-black text-rose-700 uppercase tracking-wider border-b border-black pb-1 mb-2 flex items-center justify-between">
                        <span>❌ 错误/未答 / FAILURE ({uniqueP2Mistakes.length})</span>
                      </div>
                      {uniqueP2Mistakes.length === 0 ? (
                        <p className="text-[10px] text-emerald-600 font-black uppercase">🏆 PERFECT!</p>
                      ) : (
                        <div className="flex flex-col gap-2 w-full">
                          {uniqueP2Mistakes.map((m, idx) => {
                            const w = m.slicedWord;
                            const isMn = currentLanguage === Language.MN;
                            const meaning = isMn ? w.translation.mn : w.translation.en;
                            const correctCat = CATEGORIES.find(c => c.id === w.category);
                            return (
                              <div key={`p2-m-item-${idx}`} className={`flex w-full items-center justify-between gap-2 px-3 py-2.5 border-2 border-slate-700 rounded-xl font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] flex-wrap sm:flex-nowrap ${m.isUnanswered ? 'bg-amber-50' : 'bg-red-50'}`}>
                                <div className="flex items-center gap-2.5 flex-wrap text-left">
                                  <span className="font-extrabold text-[#C62828] text-lg sm:text-xl tracking-tight">{w.word}</span>
                                  <span className="text-xs sm:text-sm text-red-500 font-mono">[{w.translation.pinyin.toLowerCase()}]</span>
                                  <span className="text-xs text-slate-700 font-bold">— {meaning}</span>
                                </div>
                                {correctCat && (
                                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border-2 border-slate-500 text-xs flex-shrink-0 font-extrabold shadow-sm ${correctCat.color.split(' ')[0]} ${correctCat.color.split(' ')[2]}`}>
                                    <LucideIcon name={correctCat.icon} size={13} />
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
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Local pane reset action buttons */}
              <div className="flex gap-2.5 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 bg-[#FF5252] hover:bg-[#FF1744] text-white border-2 border-black rounded-xl font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase"
                >
                  <RotateCcw size={12} className="inline mr-1" />
                  RELOAD
                </button>
                <button
                  onClick={onExit}
                  className="px-4 py-2 bg-white border-2 border-black hover:bg-slate-50 text-black rounded-xl font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase"
                >
                  MENU
                </button>
              </div>
            </div>
          ) : p2Finished ? (
            <div className={`flex-1 flex flex-col items-center justify-center text-center p-4 rounded-xl border-2 my-auto ${
              p2Lives === 0 
                ? 'bg-[#FFEBEE]/80 border-[#FF5252]' 
                : 'bg-[#E8F5E9]/80 border-[#4CAF50]'
            }`}>
              {p2Lives === 0 ? (
                <>
                  <XCircle className="text-[#FF5252] w-12 h-12 mb-2 animate-bounce" />
                  <p className="text-sm font-black text-[#C62828]">
                    {currentLanguage === Language.ZH ? '生命值已耗尽！正在等待对手...' : 
                     currentLanguage === Language.MN ? 'Амь дууслаа! Өрсөлдөгчөө хүлээж байна...' : 
                     'No lives left! Waiting for opponent...'}
                  </p>
                </>
              ) : (
                <>
                  <Trophy className="text-[#4CAF50] w-12 h-12 mb-2 animate-bounce" />
                  <p className="text-sm font-black text-[#2E7D32]">
                    {currentLanguage === Language.ZH ? '已完成所有关卡！等待对手中...' : 
                     currentLanguage === Language.MN ? 'Бүх үеийг дуусгалаа! Өрсөлдөгчөө хүлээж байна...' : 
                     'All rounds complete! Waiting for opponent...'}
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              {/* INDEPENDENT QUESTION ZONE FOR P2 (Moved to Top & Only Single English) */}
              <div className="my-2 bg-[#FFFDE7] border-4 border-black p-3 rounded-xl text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                  🎯 ROUND {p2RoundNumber}/6
                </div>
                <div className="text-base sm:text-lg md:text-xl font-black text-[#1A237E] uppercase tracking-wide animate-pulse">
                  {getQuestionText(p2CommonCategory)}
                </div>
              </div>

              {/* Cards container with dynamic grid layout config */}
              <div className={`grid ${gridColsClass} gap-3 sm:gap-4 my-auto self-center w-full select-none justify-center`}>
                {p2Words.map((card) => {
                  return (
                    <div
                      key={`p2-${card.id}`}
                      onMouseDown={(e) => handleSliceGesture(card.id, 'p2', e)}
                      onTouchStart={(e) => handleSliceGesture(card.id, 'p2', e)}
                      onMouseEnter={(e) => {
                        if (e.buttons === 1) handleSliceGesture(card.id, 'p2', e);
                      }}
                      className={`relative p-3 rounded-2xl text-center border-4 border-black transition-all flex flex-col justify-center items-center h-28 sm:h-32 md:h-36 transform active:scale-95 cursor-pointer overflow-hidden ${
                        card.isSlicedP2
                          ? card.isOdd
                            ? 'bg-[#E8F5E9] border-black scale-90 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-[#FFEBEE] border-black opacity-60 scale-90 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-white hover:bg-slate-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                      id={`p2-card-${card.id}`}
                    >
                      {/* Pinyin (Strictly Lowercase & Enlarged) */}
                      <span className="text-[11px] sm:text-xs md:text-sm font-mono text-[#2196F3] font-bold lowercase mb-1 whitespace-nowrap truncate max-w-full px-1">
                        [{card.word.translation.pinyin.toLowerCase()}]
                      </span>

                      {/* Chinese Character (Enlarged) */}
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
                        {card.word.word}
                      </span>

                      {card.isSlicedP2 && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '130%' }}
                          className={`absolute h-1.5 rotate-45 ${card.isOdd ? 'bg-[#4CAF50] shadow shadow-green-400' : 'bg-red-500 shadow shadow-red-500'}`}
                        />
                      )}

                      {card.isSlicedP2 && (
                        <span className="absolute bottom-1 text-[8px] font-black uppercase bg-black text-white p-0.5 px-1.5 rounded border border-black shadow-[1px_1px_0px_0px_black]">
                          {card.isOdd ? '🎯 Slice' : '❌ Wrong'}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Prompt banner footer */}
              <div className="text-[10px] font-mono text-center text-gray-600 bg-white/50 py-1.5 rounded-lg border-2 border-black font-semibold uppercase w-full">
                👉 {t.dualDesc}
              </div>
            </>
          )}
        </div>

      </div>

      {/* PAUSE OVERLAY MASK */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#FFF9C4]/95 border-b-4 border-black z-50 flex flex-col items-center justify-center space-y-4 shadow-inner"
            id="dual-pause-layer"
          >
            <Pause size={48} className="text-[#FF5252] animate-bounce" />
            <h2 className="text-2xl font-black uppercase tracking-tight">{t.pauseTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsPaused(false)}
                className="px-6 py-2.5 bg-[#4CAF50] hover:bg-[#43A047] text-white border-4 border-black font-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-xs uppercase hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center gap-2"
                id="dual-resume-btn"
              >
                <Play size={14} />
                {currentLanguage === Language.ZH ? '继续游戏' : currentLanguage === Language.MN ? 'Үргэлжлүүлэх' : 'Continue'}
              </button>
              <button
                onClick={handleRestart}
                className="px-6 py-2.5 bg-[#FF9800] hover:bg-[#F57C00] text-white border-4 border-black font-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-xs uppercase hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center gap-2"
                id="dual-restart-btn"
              >
                <RotateCcw size={14} />
                {currentLanguage === Language.ZH ? '重新开始' : currentLanguage === Language.MN ? 'Дахин эхлүүлэх' : 'Restart'}
              </button>
              <button
                onClick={onExit}
                className="px-6 py-2.5 bg-white text-black border-4 border-black font-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-xs uppercase hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center gap-2"
                id="dual-exit-btn-overlay"
              >
                <X size={14} />
                {currentLanguage === Language.ZH ? '返回主页' : currentLanguage === Language.MN ? 'Нүүр хуудасруу буцах' : 'Back to Home'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
