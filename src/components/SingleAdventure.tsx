import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { YCTWord, CategoryTag, Language, GameScore, YCTWordError } from '../types';
import { CATEGORIES, YCT_WORDS } from '../data/vocabulary';
import { getNextGameWord, getSemanticCategoryDistractors, TRANSLATIONS } from '../utils/gameHelpers';
import { Heart, Timer, Pause, Play, Snowflake, Eye, Sparkles, AlertCircle, ArrowDown, GraduationCap, RotateCcw, X } from 'lucide-react';
import LucideIcon from './LucideIcon';

interface SingleAdventureProps {
  currentLanguage: Language;
  currentWords: YCTWord[];
  reviewWords: YCTWord[];
  onGameOver: (score: GameScore) => void;
  onExit: () => void;
}

interface ActiveWordBlock {
  id: string;
  word: YCTWord;
  y: number; // 0 to 100 percentage from top
  x: number; // horizontal offset percentage
  speed: number; // speed percentage increment per frame
  isSlashing?: boolean;
  shapeType: 'circle' | 'square' | 'rounded-rect' | 'pill' | 'scalloped';
}

const getShapeStyle = (shapeType: 'circle' | 'square' | 'rounded-rect' | 'pill' | 'scalloped') => {
  switch (shapeType) {
    case 'circle':
      return {
        container: 'rounded-full w-36 h-36 aspect-square flex flex-col items-center justify-center p-3 text-center',
        title: 'text-3xl font-black text-[#1A1A1A] tracking-tight leading-tight',
        pinyin: 'text-xs sm:text-sm font-mono text-red-500 font-extrabold lowercase mb-1 whitespace-nowrap truncate max-w-[124px] px-1 tracking-tight'
      };
    case 'square':
      return {
        container: 'rounded-[6px] w-36 h-36 flex flex-col items-center justify-center p-3 text-center',
        title: 'text-3xl font-black text-[#1A1A1A] tracking-tight leading-tight',
        pinyin: 'text-xs sm:text-sm font-mono text-red-500 font-extrabold lowercase mb-1 whitespace-nowrap truncate max-w-[124px] px-1 tracking-tight'
      };
    case 'pill':
      return {
        container: 'rounded-full px-8 py-5 min-w-[200px] min-h-[120px] flex flex-col items-center justify-center text-center',
        title: 'text-4xl font-black text-[#1A1A1A] tracking-tight',
        pinyin: 'text-base sm:text-lg font-mono text-red-500 font-extrabold lowercase mb-1 whitespace-nowrap truncate max-w-[155px] px-2 tracking-tight'
      };
    case 'scalloped':
      return {
        container: 'rounded-[2.5rem_0.5rem_2.5rem_0.5rem] px-7 py-5 min-w-[190px] min-h-[120px] flex flex-col items-center justify-center text-center',
        title: 'text-4xl font-black text-[#1A1A1A] tracking-tight',
        pinyin: 'text-base sm:text-lg font-mono text-red-500 font-extrabold lowercase mb-1 whitespace-nowrap truncate max-w-[145px] px-2 tracking-tight'
      };
    case 'rounded-rect':
    default:
      return {
        container: 'rounded-3xl px-7 py-5 min-w-[190px] min-h-[120px] flex flex-col items-center justify-center text-center',
        title: 'text-4xl font-black text-[#1A1A1A] tracking-tight',
        pinyin: 'text-base sm:text-lg font-mono text-red-500 font-extrabold lowercase mb-1 whitespace-nowrap truncate max-w-[145px] px-2 tracking-tight'
      };
  }
};

export default function SingleAdventure({
  currentLanguage,
  currentWords,
  reviewWords,
  onGameOver,
  onExit
}: SingleAdventureProps) {
  const t = TRANSLATIONS[currentLanguage];

  // Game States
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [secondsLeft, setSecondsLeft] = useState<number>(180);
  const [combo, setCombo] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(true);

  // Active word falling
  const [activeWordBlock, setActiveWordBlock] = useState<ActiveWordBlock | null>(null);
  const [baskets, setBaskets] = useState<CategoryTag[]>([]);
  const [correctBasketId, setCorrectBasketId] = useState<string>('');

  // Active powerups inventory (starts at 0)
  const [freezeCount, setFreezeCount] = useState<number>(0);
  const [slowLensCount, setSlowLensCount] = useState<number>(0);
  const [hintCount, setHintCount] = useState<number>(0);

  // Track if powerups have been earned this round (at most 1 of each per game)
  const [freezeEarned, setFreezeEarned] = useState<boolean>(false);
  const [slowLensEarned, setSlowLensEarned] = useState<boolean>(false);
  const [hintEarned, setHintEarned] = useState<boolean>(false);

  // Target powerup type currently being practiced
  const [targetedPowerUpType, setTargetedPowerUpType] = useState<'FREEZE' | 'SLOW' | 'HINT' | null>(null);

  // Feedback glow state (correct is green glow, wrong is red glow)
  const [feedbackBasket, setFeedbackBasket] = useState<{ id: string; status: 'correct' | 'wrong' } | null>(null);

  // Quiz Overlay States for earning power-ups
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [quizWord, setQuizWord] = useState<YCTWord | null>(null);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [quizIsCorrect, setQuizIsCorrect] = useState<boolean>(false);
  const [awardedPowerUp, setAwardedPowerUp] = useState<'FREEZE' | 'SLOW' | 'HINT' | null>(null);

  // Powerup active state
  const [isFrozen, setIsFrozen] = useState<boolean>(false);
  const [isSlowLens, setIsSlowLens] = useState<boolean>(false);
  const [highlightCorrectBasket, setHighlightCorrectBasket] = useState<boolean>(false);

  // Draggable hover state & glow detection helper
  const [hoveredBasketId, setHoveredBasketId] = useState<string | null>(null);
  const [isWordDragging, setIsWordDragging] = useState<boolean>(false);
  const [isSnapping, setIsSnapping] = useState<boolean>(false);
  const [dragResetId, setDragResetId] = useState<number>(0);

  const isBasketGlowing = (basketId: string) => {
    if (highlightCorrectBasket && basketId === correctBasketId) return true;
    if (basketId === correctBasketId && hoveredBasketId === correctBasketId) {
      return true;
    }
    if (activeWordBlock && basketId === correctBasketId) {
      const currentColumnIndex = Math.min(3, Math.max(0, Math.round((activeWordBlock.x - 12.5) / 25)));
      const fallingColumnBasketId = baskets[currentColumnIndex]?.id;
      if (fallingColumnBasketId === correctBasketId && activeWordBlock.y >= 45) {
        return true;
      }
    }
    return false;
  };

  // Tracks already tested words
  const testedWordsRef = useRef<Set<string>>(new Set());
  const errorLogRef = useRef<YCTWordError[]>([]);
  const correctWordsRef = useRef<YCTWord[]>([]);
  const gameplayStatsRef = useRef({ correctCount: 0, wrongCount: 0, missedCount: 0 });
  const lastSpawnTimeRef = useRef<number>(0);

  // References for container size
  const containerRef = useRef<HTMLDivElement>(null);
  const wordBlockRef = useRef<HTMLDivElement>(null);

  const activeWordBlockRef = useRef<ActiveWordBlock | null>(null);
  activeWordBlockRef.current = activeWordBlock;

  const getLabel = (key: 'continue' | 'restart' | 'home', lang: Language) => {
    const dictionary = {
      continue: {
        [Language.ZH]: '继续游戏',
        [Language.EN]: 'Continue',
        [Language.MN]: 'Үргэлжлүүлэх'
      },
      restart: {
        [Language.ZH]: '重新开始',
        [Language.EN]: 'Restart',
        [Language.MN]: 'Дахин эхлүүлэх'
      },
      home: {
        [Language.ZH]: '返回主页',
        [Language.EN]: 'Back to Home',
        [Language.MN]: 'Нүүр хуудасруу буцах'
      }
    };
    return dictionary[key][lang] || dictionary[key][Language.EN];
  };

  const handleRestart = () => {
    setScore(0);
    setLives(3);
    setSecondsLeft(180);
    setCombo(0);
    setIsPaused(false);
    setIsStarted(true);
    setActiveWordBlock(null);
    setFreezeCount(0);
    setSlowLensCount(0);
    setHintCount(0);
    setFreezeEarned(false);
    setSlowLensEarned(false);
    setHintEarned(false);
    setTargetedPowerUpType(null);
    setFeedbackBasket(null);
    setShowQuiz(false);
    setQuizWord(null);
    setQuizOptions([]);
    setSelectedQuizOption(null);
    setQuizAnswered(false);
    setQuizIsCorrect(false);
    setAwardedPowerUp(null);
    setIsFrozen(false);
    setIsSlowLens(false);
    setHighlightCorrectBasket(false);
    setHoveredBasketId(null);
    setIsWordDragging(false);
    setIsSnapping(false);
    setDragResetId(prev => prev + 1);

    testedWordsRef.current = new Set();
    errorLogRef.current = [];
    correctWordsRef.current = [];
    gameplayStatsRef.current = { correctCount: 0, wrongCount: 0, missedCount: 0 };
    lastSpawnTimeRef.current = 0;
  };

  // Spawn word block
  const spawnNewWord = () => {
    if (lives <= 0 || secondsLeft <= 0 || activeWordBlock) return;

    // Guard against StrictMode double triggers using a timestamp check
    const now = Date.now();
    if (now - lastSpawnTimeRef.current < 150) {
      return;
    }
    lastSpawnTimeRef.current = now;

    if (testedWordsRef.current.size >= 8) {
      triggerGameOver();
      return;
    }

    const wordsPool = (currentWords && currentWords.length > 0 ? currentWords : YCT_WORDS.filter(w => w.level === 1 && w.lesson === 1))
      .filter(w => w.category !== '');
    const fallbackReviewPool = (reviewWords && reviewWords.length > 0 ? reviewWords : wordsPool)
      .filter(w => w.category !== '');

    const nextWord = getNextGameWord(wordsPool, fallbackReviewPool, testedWordsRef.current);
    if (!nextWord) {
      triggerGameOver();
      return;
    }
    testedWordsRef.current.add(nextWord.id);

    // Get 1 correct category and 3 distracting ones to make 4 baskets total
    let currentCorrectBasket = CATEGORIES.find(c => c.id === nextWord.category);
    if (!currentCorrectBasket) {
      currentCorrectBasket = CATEGORIES[0];
    }

    const chosenDistractors = getSemanticCategoryDistractors(nextWord, 3);
    const combinedBaskets = [currentCorrectBasket, ...chosenDistractors].sort(() => Math.random() - 0.5);

    // Setup positions: Snap exactly to the center line of one of the 4 basket columns
    const colIndex = Math.floor(Math.random() * 4);
    const colX = 12.5 + colIndex * 25; // 12.5%, 37.5%, 62.5%, 87.5% depending on lane
    
    // Dynamic difficulty speed tuning based on current combo hits - accelerated slightly as requested
    const baseSpeed = 0.15; // default exciting but manageable pace
    const dynamicSpeedComboFactor = Math.min(combo * 0.006, 0.06); // subtle capping factor
    const finalSpeed = baseSpeed + dynamicSpeedComboFactor;

    // Pick a randomized visual shape to make cards non-uniform! ("周边可以适当变为圆形或者正方形")
    const shapes: ('circle' | 'square' | 'rounded-rect' | 'pill' | 'scalloped')[] = [
      'circle',
      'square',
      'rounded-rect',
      'pill',
      'scalloped'
    ];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    setBaskets(combinedBaskets);
    setCorrectBasketId(nextWord.category);
    setHighlightCorrectBasket(false);

    setActiveWordBlock({
      id: Math.random().toString(),
      word: nextWord,
      y: 0,
      x: colX, // exact lane center, eliminates misalignment
      speed: finalSpeed,
      shapeType: randomShape
    });
  };

  // Triggering the timer ticker
  useEffect(() => {
    if (isPaused || !isStarted) return;

    const timer = setInterval(() => {
      if (!isFrozen) {
        setSecondsLeft(prev => Math.max(0, prev - 1));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isStarted, isFrozen]);

  // Falling animation engine loop (strict-mode & double-trigger safe)
  useEffect(() => {
    if (isPaused || !isStarted || !activeWordBlock || isWordDragging || isSnapping) return;

    const timer = setTimeout(() => {
      const speedModifier = (isFrozen ? 0.0 : 1.0) * (isSlowLens ? 0.3 : 1.0);
      const nextY = activeWordBlock.y + activeWordBlock.speed * speedModifier;

      if (nextY >= 76) {
        // Fall catchment into basket!
        const basketIndex = Math.min(3, Math.max(0, Math.round((activeWordBlock.x - 12.5) / 25)));
        const hitBasket = baskets[basketIndex];
        if (hitBasket) {
          if (hitBasket.id === correctBasketId) {
            handleCorrectChoice(hitBasket.id, activeWordBlock);
          } else {
            handleIncorrectChoice(hitBasket.id, activeWordBlock);
          }
        } else {
          handleMissedWord(activeWordBlock.word);
        }
        setActiveWordBlock(null);
      } else {
        setActiveWordBlock({ ...activeWordBlock, y: nextY });
      }
    }, 16);

    return () => clearTimeout(timer);
  }, [isPaused, isStarted, activeWordBlock, isFrozen, isSlowLens, isWordDragging, isSnapping, baskets, correctBasketId]);

  // Trigger spawn when activeWordBlock is missing with a 1.2-second delay
  const spawnTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!activeWordBlock && isStarted) {
      if (spawnTimeoutRef.current) {
        clearTimeout(spawnTimeoutRef.current);
      }
      const isFirstSpawn = testedWordsRef.current.size === 0;
      const delay = isFirstSpawn ? 200 : 1200; // near-instant for first word, comfortable delay for subsequent ones

      spawnTimeoutRef.current = setTimeout(() => {
        spawnNewWord();
      }, delay);
    }
    return () => {
      if (spawnTimeoutRef.current) {
        clearTimeout(spawnTimeoutRef.current);
      }
    };
  }, [activeWordBlock, isStarted, currentWords, reviewWords]);

  // Game over check linked cleanly to lives and secondsLeft state updates
  useEffect(() => {
    if (isStarted && (lives <= 0 || secondsLeft <= 0)) {
      const timer = setTimeout(triggerGameOver, 200);
      return () => clearTimeout(timer);
    }
  }, [lives, secondsLeft, isStarted]);

  const triggerGameOver = () => {
    // Collect all words in currentWords (unplayed or skipped when game ends count as incorrect)
    const wordsPool = currentWords && currentWords.length > 0 ? currentWords : YCT_WORDS.filter(w => w.level === 1 && w.lesson === 1);
    
    wordsPool.forEach(word => {
      const isCorrect = correctWordsRef.current.some(w => w.id === word.id);
      const isWrong = errorLogRef.current.some(e => e.word.id === word.id);
      if (!isCorrect && !isWrong) {
        errorLogRef.current.push({
          word: word,
          userSelection: 'Unanswered / Skill Skip (未回答)',
          correctAnswer: word.category,
          timestamp: new Date().toLocaleTimeString()
        });
        gameplayStatsRef.current.missedCount += 1;
      }
    });

    // Ensure absolute zero duplicate cards in both lists ("不要出现相同卡片")
    const uniqueErrors: YCTWordError[] = [];
    const seenErrors = new Set<string>();
    errorLogRef.current.forEach(e => {
      if (!seenErrors.has(e.word.id)) {
        seenErrors.add(e.word.id);
        uniqueErrors.push(e);
      }
    });

    const uniqueCorrects: YCTWord[] = [];
    const seenCorrects = new Set<string>();
    correctWordsRef.current.forEach(w => {
      if (!seenCorrects.has(w.id) && !seenErrors.has(w.id)) {
        seenCorrects.add(w.id);
        uniqueCorrects.push(w);
      }
    });

    const totalCalculated = uniqueCorrects.length + uniqueErrors.length;
    const finalAccuracy = totalCalculated > 0
      ? Math.round((uniqueCorrects.length / totalCalculated) * 100)
      : 0;

    const finalScoreReport: GameScore = {
      score: uniqueCorrects.length * 10,
      correctHits: uniqueCorrects.length,
      wrongHits: uniqueErrors.filter(e => e.userSelection !== 'Unanswered / Skill Skip (未回答)').length,
      missed: uniqueErrors.filter(e => e.userSelection === 'Unanswered / Skill Skip (未回答)').length,
      accuracy: finalAccuracy,
      gameDuration: 180 - secondsLeft,
      errorsList: uniqueErrors,
      correctList: uniqueCorrects
    };
    onGameOver(finalScoreReport);
  };

  // Correct categorizer selection
  const handleCorrectChoice = (basketId: string, currentBlock: ActiveWordBlock | null = activeWordBlockRef.current) => {
    setScore(prev => prev + 10);
    setCombo(prev => prev + 1);
    gameplayStatsRef.current.correctCount += 1;
    if (currentBlock) {
      correctWordsRef.current.push(currentBlock.word);
    }
    setActiveWordBlock(null); // triggers spawn

    // Category flash green feedback
    setFeedbackBasket({ id: basketId, status: 'correct' });
    setTimeout(() => {
      setFeedbackBasket(p => p?.id === basketId && p?.status === 'correct' ? null : p);
    }, 1000);
  };

  // Wrong basket choice
  const handleIncorrectChoice = (chosenBasketId: string, currentBlock: ActiveWordBlock | null = activeWordBlockRef.current) => {
    if (!currentBlock) return;
    setCombo(0); // reset combo count
    gameplayStatsRef.current.wrongCount += 1;
    setLives(prev => Math.max(0, prev - 1));

    // Log the error
    errorLogRef.current.push({
      word: currentBlock.word,
      userSelection: chosenBasketId,
      correctAnswer: correctBasketId,
      timestamp: new Date().toLocaleTimeString()
    });

    setActiveWordBlock(null);

    // Category flash red feedback
    setFeedbackBasket({ id: chosenBasketId, status: 'wrong' });
    setTimeout(() => {
      setFeedbackBasket(p => p?.id === chosenBasketId && p?.status === 'wrong' ? null : p);
    }, 1000);
  };

  // Power-up English Meaning Quiz Logic
  const startPowerUpQuiz = (type: 'FREEZE' | 'SLOW' | 'HINT') => {
    if (currentWords.length === 0) return;
    setIsPaused(true);
    setTargetedPowerUpType(type);
    
    // Pick a random word from the current list
    const randomWord = currentWords[Math.floor(Math.random() * currentWords.length)];
    
    // Choose 3 English distractors from other words
    const otherWords = currentWords.filter(w => w.translation.en !== randomWord.translation.en);
    let distractors = Array.from(new Set(otherWords.map(w => w.translation.en))).slice(0, 3);
    
    // Fallback if not enough other words in current pool, pull from YCT_WORDS
    if (distractors.length < 3) {
      const fallbackOptions = YCT_WORDS.filter(w => w.translation.en !== randomWord.translation.en).map(w => w.translation.en);
      const shuffledFallbacks = [...fallbackOptions].sort(() => Math.random() - 0.5);
      while (distractors.length < 3 && shuffledFallbacks.length > 0) {
        const item = shuffledFallbacks.pop();
        if (item && !distractors.includes(item)) {
          distractors.push(item);
        }
      }
    }
    
    // Merge options and shuffle
    const options = [randomWord.translation.en, ...distractors].sort(() => Math.random() - 0.5);
    
    setQuizWord(randomWord);
    setQuizOptions(options);
    setSelectedQuizOption(null);
    setQuizAnswered(false);
    setQuizIsCorrect(false);
    setAwardedPowerUp(null);
    setShowQuiz(true);
  };

  const handleQuizAnswer = (option: string) => {
    if (quizAnswered || !targetedPowerUpType) return;
    setSelectedQuizOption(option);
    setQuizAnswered(true);

    const isCorrect = option === quizWord?.translation.en;
    setQuizIsCorrect(isCorrect);

    if (isCorrect) {
      setAwardedPowerUp(targetedPowerUpType);

      if (targetedPowerUpType === 'FREEZE') {
        setFreezeCount(1);
        setFreezeEarned(true);
      } else if (targetedPowerUpType === 'SLOW') {
        setSlowLensCount(1);
        setSlowLensEarned(true);
      } else if (targetedPowerUpType === 'HINT') {
        setHintCount(1);
        setHintEarned(true);
      }
    }
  };

  const closeQuiz = () => {
    setShowQuiz(false);
    setQuizWord(null);
    setTargetedPowerUpType(null);
    setIsPaused(false);
  };

  // Dropped out bounds (missed) - completely side-effect free & safe
  const handleMissedWord = (word: YCTWord) => {
    setCombo(0);
    gameplayStatsRef.current.missedCount += 1;
    setLives(prev => Math.max(0, prev - 1));

    // Log miss
    errorLogRef.current.push({
      word: word,
      userSelection: 'Dropped Outside (漏选)',
      correctAnswer: correctBasketId,
      timestamp: new Date().toLocaleTimeString()
    });
  };

  // Helper to reliably map physical screen X coordinates to the correct basket index
  const getBasketIndexFromScreenCoordinates = (x: number) => {
    if (!containerRef.current) return 0;

    // Use percentage ratio coordinates of container as first and primary highly stable check
    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const pct = (relativeX / containerRect.width) * 100;
    const mathIndex = Math.min(3, Math.max(0, Math.floor(pct / 25)));

    const sensors = Array.from(containerRef.current.querySelectorAll('.basket-sensor'));
    if (sensors.length !== 4) {
      return mathIndex;
    }

    try {
      // Direct bounding check with reliable data ID state index lookup
      const mappedSensors = sensors
        .map((el) => {
          const htmlEl = el as HTMLElement;
          const rect = htmlEl.getBoundingClientRect();
          const basketId = htmlEl.getAttribute('data-basket-id') || '';
          const originalIndex = baskets.findIndex(b => b.id === basketId);
          return { htmlEl, rect, originalIndex };
        })
        .filter(item => item.originalIndex !== -1);

      if (mappedSensors.length === 4) {
        let matchedIndex = -1;
        let closestIndex = -1;
        let minDistance = Infinity;

        // Sort left-to-right
        const sortedSensors = [...mappedSensors].sort((a, b) => a.rect.left - b.rect.left);

        sortedSensors.forEach((sensor, orderIndex) => {
          if (x >= sensor.rect.left && x <= sensor.rect.right) {
            matchedIndex = orderIndex;
          }
          const centerX = sensor.rect.left + sensor.rect.width / 2;
          const distance = Math.abs(x - centerX);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = orderIndex;
          }
        });

        const finalOrderIndex = matchedIndex !== -1 ? matchedIndex : closestIndex;
        if (finalOrderIndex >= 0 && finalOrderIndex < sortedSensors.length) {
          return sortedSensors[finalOrderIndex].originalIndex;
        }
      }
    } catch (e) {
      console.error("Error matching sensor coordinates physically:", e);
    }

    return mathIndex;
  };

  // Framer-motion Draggability real-time hover update using 100% position-accurate client rects (iframe safe)
  const handleDrag = (_event: any, _info: any) => {
    if (!isWordDragging) {
      setIsWordDragging(true);
    }
    if (!activeWordBlock || !wordBlockRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const wordRect = wordBlockRef.current.getBoundingClientRect();

    const wordCenterX = wordRect.left + wordRect.width / 2;
    const wordCenterY = wordRect.top + wordRect.height / 2;

    const relativeY = wordCenterY - containerRect.top;
    const percentageY = (relativeY / containerRect.height) * 100;

    const matchedBasketIndex = getBasketIndexFromScreenCoordinates(wordCenterX);
    const hoveredBasket = baskets[matchedBasketIndex];

    // If hovered in the lower basket container zone (>64% height), highlight it!
    if (percentageY > 64 && hoveredBasket) {
      setHoveredBasketId(hoveredBasket.id);
    } else {
      setHoveredBasketId(null);
    }
  };

  // Framer-motion Draggability precision collision check and spatial tracking
  const handleDragEnd = (_event: any, _info: any) => {
    setHoveredBasketId(null);
    setIsWordDragging(false);
    setIsSnapping(true);
    
    const currentBlock = activeWordBlockRef.current;
    if (!containerRef.current || !wordBlockRef.current || !currentBlock) {
      setIsSnapping(false);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const wordRect = wordBlockRef.current.getBoundingClientRect();

    const wordCenterX = wordRect.left + wordRect.width / 2;
    const wordCenterY = wordRect.top + wordRect.height / 2;

    const relativeY = wordCenterY - containerRect.top;
    const percentageY = (relativeY / containerRect.height) * 100;

    const matchedBasketIndex = getBasketIndexFromScreenCoordinates(wordCenterX);
    const collidedBasket = baskets[matchedBasketIndex];

    // If the drag ended in the lower basket zone (>64% height), classify it!
    if (percentageY > 64 && collidedBasket) {
      if (collidedBasket.id === correctBasketId) {
        handleCorrectChoice(collidedBasket.id, currentBlock);
      } else {
        handleIncorrectChoice(collidedBasket.id, currentBlock);
      }
      setIsSnapping(false);
    } else {
      // Re-map the drop column position cleanly to the nearest lane center
      const snappedX = 12.5 + matchedBasketIndex * 25;
      setActiveWordBlock({
        ...currentBlock,
        x: snappedX,
        y: percentageY
      });
      // Incrementing dragResetId forces framer-motion to clear translation-3d style bounds
      setDragResetId(prev => prev + 1);
      setTimeout(() => {
        setIsSnapping(false);
      }, 100);
    }
  };

  // Clickable/tappable basket handler for alternate intuitive selection
  const handleBasketClick = (basketId: string) => {
    const currentBlock = activeWordBlockRef.current;
    if (!currentBlock || isPaused) return;
    if (basketId === correctBasketId) {
      handleCorrectChoice(basketId, currentBlock);
    } else {
      handleIncorrectChoice(basketId, currentBlock);
    }
  };

  // Use Powerups methods
  const triggerFreeze = () => {
    if (freezeCount <= 0 || isFrozen) return;
    setFreezeCount(prev => prev - 1);
    setIsFrozen(true);
    setTimeout(() => setIsFrozen(false), 5000);
  };

  const triggerSlowLens = () => {
    if (slowLensCount <= 0 || isSlowLens) return;
    setSlowLensCount(prev => prev - 1);
    setIsSlowLens(true);
    setTimeout(() => setIsSlowLens(false), 5000);
  };

  const triggerHint = () => {
    if (hintCount <= 0 || highlightCorrectBasket) return;
    setHintCount(prev => prev - 1);
    setHighlightCorrectBasket(true);
  };

  return (
    <div
      ref={containerRef}
      className={`w-full h-full bg-[#E1F5FE] text-[#1A1A1A] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black relative select-none flex flex-col justify-between ${
        isFrozen ? 'ring-4 ring-cyan-400' : ''
      }`}
      style={{ height: '100%', minHeight: '520px' }}
      id="single-arena"
    >
      {/* 1. Header indicators */}
      <div className="bg-white pb-3 pt-3 px-6 flex items-center justify-between border-b-4 border-black z-20">
        <div className="flex items-center gap-4">
          {/* Pause toggler */}
          <button
            onClick={() => setIsPaused(p => !p)}
            className="p-2 bg-[#FFC107] border-2 border-black hover:bg-[#FFB300] active:scale-95 transition-all text-black rounded-xl cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            id="paused-btn"
          >
            {isPaused ? <Play size={15} /> : <Pause size={15} />}
          </button>

          {/* Scoring panel */}
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{t.scoreLabel}</div>
            <div className="text-xl font-black font-mono text-black" id="single-score-count">
              {score}
            </div>
          </div>

          {/* Combo Multipliers */}
          {combo > 1 && (
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: [1, 1.2, 1], rotate: [-5, 5, -5] }}
              className="bg-[#FF5252] text-white border-2 border-black px-2.5 py-0.5 rounded-lg text-[10px] font-black tracking-wider uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              id="combo-indicator"
            >
              Combo ×{combo}
            </motion.div>
          )}
        </div>

        {/* Central visual indicator */}
        <div className="hidden sm:block text-xs font-black text-gray-600 uppercase tracking-wide">
          {t.singlePrompt}
        </div>

        {/* Health Hearts and Timer countdown */}
        <div className="flex items-center gap-5">
          {/* Chronos Timer */}
          <div className="flex items-center gap-1.5 bg-white border-2 border-black px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-black">
            <Timer className={`w-4 h-4 ${secondsLeft <= 10 ? 'text-[#FF5252] animate-pulse' : 'text-[#2196F3]'}`} />
            <span className="text-sm font-black font-mono">{secondsLeft}s</span>
          </div>

          {/* Life Bars standard hearts */}
          <div className="flex items-center gap-1">
            {[1, 2, 3].map(heartId => (
              <Heart
                key={heartId}
                className={`w-5 h-5 transition-transform ${
                  heartId <= lives ? 'text-[#FF5252] fill-[#FF5252] scale-100' : 'text-slate-300 opacity-20 scale-90'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. falling gameplay area: Buffer cloud drops */}
      <div className="flex-1 relative bg-[#E1F5FE]">
        
        {/* Spawn corridor guide */}
        <div className="absolute top-0 inset-x-0 h-10 bg-white/20 border-b-2 border-black/10 flex items-center justify-center pointer-events-none">
          <div className="text-[10px] font-mono tracking-widest text-[#01579B] flex items-center gap-1 uppercase font-black">
            <span>[ WORD BUFFER CLOUD ]</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </div>
        </div>

        {/* PAUSE OVERLAY MASK */}
        <AnimatePresence>
          {isPaused && !showQuiz && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#FFF9C4]/95 border-b-4 border-black z-50 flex flex-col items-center justify-center space-y-6 shadow-inner"
              id="pause-layer"
            >
              <Pause size={64} className="text-[#FF5252] animate-bounce" />
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">{t.pauseTitle}</h2>
              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={() => setIsPaused(false)}
                  className="px-8 py-4 bg-[#4CAF50] hover:bg-[#43A047] text-white border-4 border-black font-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-base sm:text-lg md:text-xl uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-3"
                  id="resume-btn"
                >
                  <Play size={20} />
                  {getLabel('continue', currentLanguage)}
                </button>
                <button
                  onClick={handleRestart}
                  className="px-8 py-4 bg-[#FF9800] hover:bg-[#F57C00] text-white border-4 border-black font-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-base sm:text-lg md:text-xl uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-3"
                  id="restart-btn"
                >
                  <RotateCcw size={20} />
                  {getLabel('restart', currentLanguage)}
                </button>
                <button
                  onClick={onExit}
                  className="px-8 py-4 bg-white text-black border-4 border-black font-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-base sm:text-lg md:text-xl uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-3"
                  id="exit-btn"
                >
                  <X size={20} />
                  {getLabel('home', currentLanguage)}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QUIZ TO EARN POWERUP OVERLAY */}
        <AnimatePresence>
          {showQuiz && quizWord && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              id="quiz-backdrop"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                className="bg-[#FFFDE7] border-4 border-black p-6 rounded-3xl w-full max-w-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-5 text-black"
                id="quiz-modal"
              >
                {/* Header */}
                <div className="text-center space-y-1">
                  <div className="flex justify-center">
                    <div className="bg-[#FF9800] text-black border-2 border-black p-1.5 px-3 rounded-xl flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black">
                      <GraduationCap size={16} />
                      <span className="text-[10px] uppercase font-black tracking-wider">LEARN & EARN</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight mt-1.5">
                    {currentLanguage === Language.ZH ? '答题赢道具' : 'Quiz for Power-up'}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                    {currentLanguage === Language.ZH ? '选择正确的英文含义' : 'Choose the correct English meaning'}
                  </p>
                </div>

                {/* Target Word Display Card */}
                <div className="bg-white border-4 border-black p-5 rounded-2xl text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-sm sm:text-base font-mono font-bold text-[#FF5252] lowercase mb-1">
                    [{quizWord.translation.pinyin.toLowerCase()}]
                  </div>
                  <div className="text-4xl font-black text-[#1A1A1A]">{quizWord.word}</div>
                </div>

                {/* Question Options */}
                <div className="grid grid-cols-1 gap-3">
                  {quizOptions.map((opt, idx) => {
                    const isSelected = selectedQuizOption === opt;
                    const isCorrectOption = opt === quizWord.translation.en;
                    
                    let btnStyle = "w-full text-left p-4 px-6 bg-white hover:bg-amber-50 text-base sm:text-lg font-black border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between cursor-pointer";
                    
                    if (quizAnswered) {
                      if (isCorrectOption) {
                        btnStyle = "w-full text-left p-4 px-6 bg-[#E8F5E9] border-3 border-[#4CAF50] text-[#2E7D32] text-base sm:text-lg font-black rounded-xl shadow-[3px_3px_0px_0px_rgba(76,175,80,0.5)] flex items-center justify-between";
                      } else if (isSelected) {
                        btnStyle = "w-full text-left p-4 px-6 bg-[#FFEBEE] border-3 border-[#EF5350] text-[#C62828] text-base sm:text-lg font-black rounded-xl shadow-[3px_3px_0px_0px_rgba(239,83,80,0.5)] flex items-center justify-between";
                      } else {
                        btnStyle = "w-full text-left p-4 px-6 bg-white border-3 border-gray-100 text-gray-300 text-base sm:text-lg font-medium rounded-xl pointer-events-none flex items-center justify-between";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(opt)}
                        disabled={quizAnswered}
                        className={btnStyle}
                      >
                        <span>{opt}</span>
                        {quizAnswered && isCorrectOption && <span className="text-[#2E7D32] text-sm sm:text-base font-black">✓ Correct</span>}
                        {quizAnswered && isSelected && !isCorrectOption && <span className="text-[#C62828] text-sm sm:text-base font-black">✗ Wrong</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Success or Error Feedback Alert */}
                {quizAnswered && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`border-3 border-black rounded-2xl p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                      quizIsCorrect ? 'bg-[#E8F5E9] border-[#4CAF50]' : 'bg-[#FFEBEE] border-[#EF5350]'
                    }`}
                  >
                    {quizIsCorrect ? (
                      <div className="space-y-1">
                        <div className="text-sm sm:text-base font-black text-[#2E7D32] uppercase tracking-tight">
                          🎉 {currentLanguage === Language.ZH ? '回答正确！' : 'Superb! Correct!'}
                        </div>
                        <div className="text-xs sm:text-sm text-[#1A1A1A] font-bold">
                          {currentLanguage === Language.ZH 
                            ? `恭喜你赢得了道具：` 
                            : `Outstanding! You acquired a:`}
                          <span className="ml-1 text-red-500 font-black font-mono">
                            {awardedPowerUp === 'FREEZE' && `❄️ ${t.powerFreeze}`}
                            {awardedPowerUp === 'SLOW' && `👁️ ${t.powerSizereducer}`}
                            {awardedPowerUp === 'HINT' && `✨ ${t.powerTip}`}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-sm sm:text-base font-black text-[#C62828] uppercase tracking-tight">
                          ❌ {currentLanguage === Language.ZH ? '回答错误！' : 'Wrong Choice!'}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-700 font-bold">
                          {currentLanguage === Language.ZH ? '正确含义是：' : 'Correct option was: '}{' '}
                          <span className="font-black text-[#1A1A1A] underline">
                            {quizWord.translation.en}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Continue/Close Button */}
                {quizAnswered && (
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={closeQuiz}
                      className="w-full py-4 bg-[#FF5252] hover:bg-[#FF1744] text-white font-black border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider text-base sm:text-lg cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                      id="close-quiz-btn"
                    >
                      {currentLanguage === Language.ZH ? '回往游戏' : 'Resume Arena'}
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ACTIVE DRIFTING WORD BUBBLE */}
        <AnimatePresence>
          {activeWordBlock && !isPaused && (() => {
            const shapeStyle = getShapeStyle(activeWordBlock.shapeType || 'rounded-rect');
            return (
              <motion.div
                key={activeWordBlock.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                  position: 'absolute',
                  top: `${activeWordBlock.y}%`,
                  left: `${activeWordBlock.x}%`,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                }}
                className="z-50"
              >
                <motion.div
                  key={`${activeWordBlock.id}-${dragResetId}`}
                  ref={wordBlockRef}
                  drag
                  dragMomentum={false}
                  dragConstraints={containerRef}
                  onDragStart={() => setIsWordDragging(true)}
                  onDrag={handleDrag}
                  onDragEnd={handleDragEnd}
                  style={{
                    touchAction: 'none',
                  }}
                  className="pointer-events-auto cursor-grab active:cursor-grabbing touch-none"
                  id="active-game-bubble"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 1.15, rotate: 3, shadow: "10px 10px 0px 0px rgba(0,0,0,1)" }}
                    className={`bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold transition-all ${shapeStyle.container}`}
                  >
                    {/* Pinyin hint displayed above */}
                    <span className={shapeStyle.pinyin}>
                      [{activeWordBlock.word.translation.pinyin.toLowerCase()}]
                    </span>
                    {/* Chinese representation font size display is bold */}
                    <span className={shapeStyle.title}>
                      {activeWordBlock.word.word}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* FLAMES/FROZEN VISUAL NOTIFICATIONS */}
        <div className="absolute right-4 top-14 space-y-2 pointer-events-none z-10">
          <AnimatePresence>
            {isFrozen && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="bg-cyan-50 text-cyan-800 text-[10px] px-3 py-1.5 rounded-full border-2 border-black flex items-center gap-1 font-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <Snowflake size={11} className="animate-spin" />
                {t.frozenActive}
              </motion.div>
            )}
            {combo >= 5 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="bg-orange-50 text-orange-850 text-[10px] px-3 py-1.5 rounded-full border-2 border-black flex items-center gap-1 font-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <Sparkles size={11} className="animate-pulse" />
                {t.highDifficultyActive}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-3 z-10" id="baskets-container">
          {baskets.map((basket, index) => {
            const isTargetBasket = basket.id === correctBasketId;
            const highlighted = highlightCorrectBasket && isTargetBasket;
            const isGlowing = isBasketGlowing(basket.id);
            const isCurrentFeedback = feedbackBasket?.id === basket.id;
            const feedbackStatus = isCurrentFeedback ? feedbackBasket?.status : null;

            const defaultColors = [
              "bg-[#FFF0F0] hover:bg-[#FFDEDE]", // Column 1 - Light Pastel Pink
              "bg-[#EDE7F6] hover:bg-[#D1C4E9]", // Column 2 - Light Pastel Lavender
              "bg-[#E8F5E9] hover:bg-[#D8F0DA]", // Column 3 - Light Pastel Green
              "bg-[#FFF3E0] hover:bg-[#FFEADA]"  // Column 4 - Light Pastel Orange/Yellow
            ];
            const defaultColorClass = defaultColors[index % defaultColors.length];

            let basketStyleClass = `basket-sensor flex flex-col items-center justify-between p-4 rounded-3xl ${defaultColorClass} border-4 border-black relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all`;
            
            if (feedbackStatus === 'correct') {
              basketStyleClass = "basket-sensor flex flex-col items-center justify-between p-4 rounded-3xl bg-[#E8F5E9] border-4 border-green-600 shadow-[0_0_24px_8px_rgba(76,175,80,0.85),_4px_4px_0px_0px_rgba(0,0,0,1)] scale-[1.05] z-30 ring-4 ring-green-300 animate-bounce cursor-pointer transition-all";
            } else if (feedbackStatus === 'wrong') {
              basketStyleClass = "basket-sensor flex flex-col items-center justify-between p-4 rounded-3xl bg-[#FFEBEE] border-4 border-red-600 shadow-[0_0_24px_8px_rgba(244,67,54,0.85),_4px_4px_0px_0px_rgba(0,0,0,1)] scale-[1.05] z-30 ring-4 ring-red-300 animate-pulse cursor-pointer transition-all";
            } else if (isGlowing) {
              basketStyleClass += " border-[#FFC107] shadow-[0_0_22px_7px_rgba(255,193,7,0.85),_4px_4px_0px_0px_rgba(0,0,0,1)] scale-[1.05] z-10";
            } else if (highlighted) {
              basketStyleClass += " border-[#FF5252] shadow-[4px_4px_0px_0px_#C62828] scale-[1.02] animate-pulse z-10";
            }

            return (
              <button
                key={`${basket.id}-${index}`}
                data-basket-id={basket.id}
                className={basketStyleClass}
                style={{ height: '125px' }}
                id={`basket-detector-${basket.id}`}
                onClick={() => handleBasketClick(basket.id)}
              >
                {/* Visual pocket half pouch decoration */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-black/5 rounded-b-[20px] border-t border-black/10 pointer-events-none" />

                {/* Micro Category Icon in custom color block decoration */}
                <div className={`p-2 rounded-xl border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] ${basket.color.split(' ')[0]} ${basket.color.split(' ')[2]} z-10`}>
                  <LucideIcon name={basket.icon} size={22} />
                </div>

                <div className="text-center mt-1 z-10">
                  <div className="text-sm font-black text-[#1A1A1A] uppercase tracking-wide">
                    {currentLanguage === Language.ZH && basket.zh}
                    {currentLanguage === Language.EN && basket.en}
                    {currentLanguage === Language.MN && basket.mn}
                  </div>
                  <div className="text-[10px] font-mono text-gray-555 font-bold uppercase tracking-widest mt-0.5">
                    {basket.id}
                  </div>
                </div>

                {/* Overlying guidance dot for highlights */}
                {highlighted && (
                  <div className="absolute -top-2 right-2 bg-[#FF5252] text-white border-2 border-black rounded-full px-1.5 py-0.5 text-[8px] font-black uppercase font-mono shadow-md flex items-center gap-0.5 z-20">
                    <Sparkles size={6} /> target
                  </div>
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* 3. Slim, elegant actions and powerups tray */}
      <div className="bg-white py-4 px-4 sm:py-5 sm:px-6 border-t-4 border-black z-20">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full">
          <div className="flex items-center justify-center gap-1 flex-shrink-0">
            <span className="text-xs sm:text-sm text-gray-500 font-black uppercase tracking-wider flex items-center gap-1">
              🔮 {t.powerUpTitle || '道具区'}
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap w-full max-w-2xl">
            {/* Freeze launcher tool */}
            {!freezeEarned ? (
              // Practice state
              <button
                onClick={() => startPowerUpQuiz('FREEZE')}
                disabled={isPaused}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-[#FFF8E1] hover:bg-[#FFECB3] active:translate-y-0.5 text-black font-black border-3 border-dashed border-[#FF8F00] rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-sm sm:text-base disabled:opacity-40 disabled:pointer-events-none"
                title={currentLanguage === Language.ZH ? '答题通过获取冰冻道具' : 'Answer correct to earn ICE FREEZE'}
                id="powerup-freeze-practice"
              >
                <GraduationCap size={18} className="text-[#FF8F00]" />
                <span>{currentLanguage === Language.ZH ? '练习 ❄️ (0/1)' : 'Get ❄️ (0/1)'}</span>
              </button>
            ) : freezeCount === 1 ? (
              // Earned & useable state
              <button
                onClick={triggerFreeze}
                disabled={isPaused || isFrozen}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-[#81D4FA] hover:bg-[#4FC3F7] active:translate-y-0.5 text-black font-black border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-sm sm:text-base animate-pulse disabled:opacity-40 disabled:pointer-events-none"
                title={t.powerFreezeDesc}
                id="powerup-freeze-launcher"
              >
                <Snowflake size={18} className={isFrozen ? 'animate-spin' : 'animate-bounce'} />
                <span>{currentLanguage === Language.ZH ? '使用 ❄️' : 'Use ❄️'}</span>
              </button>
            ) : (
              // Already used state
              <button
                disabled
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-gray-100 text-gray-400 font-bold border-3 border-gray-300 rounded-xl cursor-default text-sm sm:text-base opacity-70"
                id="powerup-freeze-used"
              >
                <Snowflake size={18} />
                <span>{currentLanguage === Language.ZH ? '已用 ❄️' : 'Used ❄️'}</span>
              </button>
            )}

            {/* Slow Rate Buffer tool */}
            {!slowLensEarned ? (
              // Practice state
              <button
                onClick={() => startPowerUpQuiz('SLOW')}
                disabled={isPaused}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-[#FFF8E1] hover:bg-[#FFECB3] active:translate-y-0.5 text-black font-black border-3 border-dashed border-[#FF8F00] rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-sm sm:text-base disabled:opacity-40 disabled:pointer-events-none"
                title={currentLanguage === Language.ZH ? '答题通过获取慢速道具' : 'Answer correct to earn SLOW LENS'}
                id="powerup-slow-practice"
              >
                <GraduationCap size={18} className="text-[#FF8F00]" />
                <span>{currentLanguage === Language.ZH ? '练习 👁️ (0/1)' : 'Get 👁️ (0/1)'}</span>
              </button>
            ) : slowLensCount === 1 ? (
              // Earned & useable state
              <button
                onClick={triggerSlowLens}
                disabled={isPaused || isSlowLens}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-[#CE93D8] hover:bg-[#BA68C8] active:translate-y-0.5 text-black font-black border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-sm sm:text-base animate-pulse disabled:opacity-40 disabled:pointer-events-none"
                title={t.powerSizereducerDesc}
                id="powerup-buffer-launcher"
              >
                <Eye size={18} className="animate-bounce" />
                <span>{currentLanguage === Language.ZH ? '使用 👁️' : 'Use 👁️'}</span>
              </button>
            ) : (
              // Already used state
              <button
                disabled
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-gray-100 text-gray-400 font-bold border-3 border-gray-300 rounded-xl cursor-default text-sm sm:text-base opacity-70"
                id="powerup-slow-used"
              >
                <Eye size={18} />
                <span>{currentLanguage === Language.ZH ? '已用 👁️' : 'Used 👁️'}</span>
              </button>
            )}

            {/* Hint category highlighter tool */}
            {!hintEarned ? (
              // Practice state
              <button
                onClick={() => startPowerUpQuiz('HINT')}
                disabled={isPaused}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-[#FFF8E1] hover:bg-[#FFECB3] active:translate-y-0.5 text-black font-black border-3 border-dashed border-[#FF8F00] rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-sm sm:text-base disabled:opacity-40 disabled:pointer-events-none"
                title={currentLanguage === Language.ZH ? '答题通过获取提示道具' : 'Answer correct to earn CORRECT HIGH HINT'}
                id="powerup-hint-practice"
              >
                <GraduationCap size={18} className="text-[#FF8F00]" />
                <span>{currentLanguage === Language.ZH ? '练习 ✨ (0/1)' : 'Get ✨ (0/1)'}</span>
              </button>
            ) : hintCount === 1 ? (
              // Earned & useable state
              <button
                onClick={triggerHint}
                disabled={isPaused || highlightCorrectBasket}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-[#A5D6A7] hover:bg-[#81C784] active:translate-y-0.5 text-black font-black border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-sm sm:text-base animate-pulse disabled:opacity-40 disabled:pointer-events-none"
                title={t.powerTipDesc}
                id="powerup-hint-launcher"
              >
                <Sparkles size={18} className={highlightCorrectBasket ? 'animate-pulse' : 'animate-bounce'} />
                <span>{currentLanguage === Language.ZH ? '使用 ✨' : 'Use ✨'}</span>
              </button>
            ) : (
              // Already used state
              <button
                disabled
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2.5 sm:p-3 px-4 sm:px-5 bg-gray-100 text-gray-400 font-bold border-3 border-gray-300 rounded-xl cursor-default text-sm sm:text-base opacity-70"
                id="powerup-hint-used"
              >
                <Sparkles size={18} />
                <span>{currentLanguage === Language.ZH ? '已用 ✨' : 'Used ✨'}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
