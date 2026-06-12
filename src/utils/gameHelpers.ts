import { YCTWord, CategoryTag, Language } from '../types';
import { YCT_WORDS, CATEGORIES } from '../data/vocabulary';
import { DUAL_DISTRACTORS } from '../data/dualDistractors';

/**
 * Filter vocabulary based on selected level and lesson, implementing the 80/20 review split or total review lesson.
 * @param level YCT level (1-6)
 * @param lesson Selected lesson (1-12/15)
 * @returns Array of YCT words: 80% from current lesson, 20% from previous lessons/levels.
 */
export function getGameWordsPool(level: number, lesson: number): { currentWords: YCTWord[]; reviewWords: YCTWord[] } {
  const isReviewLesson = (level <= 4 && lesson === 12) || (level >= 5 && lesson === 15);

  // Current target words
  const currentWords = isReviewLesson
    ? YCT_WORDS.filter(w => w.level === level && w.lesson < lesson)
    : YCT_WORDS.filter(w => w.level === level && w.lesson === lesson);

  // Review pool: earlier lessons in this level, and if lesson <= 2, any lessons in lower levels
  let reviewWords = YCT_WORDS.filter(w => {
    if (lesson <= 2) {
      if (w.level < level) return true;
    }
    if (w.level === level && w.lesson < lesson) return true;
    return false;
  });

  // If there are no review words (e.g. Level 1, Lesson 1), use other words from this lesson only
  if (reviewWords.length === 0) {
    reviewWords = [...currentWords];
  }

  return { currentWords, reviewWords };
}

/**
 * Generate exactly 8 words for single player game, including all words from current lesson,
 * filled with randomly chosen words from previous lessons or levels.
 * For the review lessons (L12 or L15), it extracts 8 completely random words from this level.
 */
export function getSinglePlayerGamePool(level: number, lesson: number): YCTWord[] {
  const isReviewLesson = (level <= 4 && lesson === 12) || (level >= 5 && lesson === 15);

  const currentWords = isReviewLesson
    ? YCT_WORDS.filter(w => w.level === level && w.lesson < lesson)
    : YCT_WORDS.filter(w => w.level === level && w.lesson === lesson);

  const resultPool: YCTWord[] = [];
  const addedIds = new Set<string>();

  const addWord = (w: YCTWord) => {
    if (!addedIds.has(w.id)) {
      addedIds.add(w.id);
      resultPool.push(w);
      return true;
    }
    return false;
  };

  // Add all words from the current selected lesson first
  if (isReviewLesson) {
    // For review lesson, shuffle currentWords and take all of them up to a reasonable limit, or just add them then shuffle
    currentWords.forEach(addWord);
  } else {
    currentWords.forEach(addWord);
  }

  // If already have >= 8, shuffle and keep exactly 8
  if (resultPool.length >= 8) {
    const shuffled = [...resultPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 8);
  }

  // Draw from earlier lessons in the same level, and if lesson <= 2, lower levels
  const previousSameLevelWords = YCT_WORDS.filter(w => {
    if (lesson <= 2) {
      if (w.level < level) return true;
    }
    if (w.level === level && w.lesson < lesson) return true;
    return false;
  });
  const shuffledPrevious = [...previousSameLevelWords].sort(() => Math.random() - 0.5);

  for (const word of shuffledPrevious) {
    if (resultPool.length >= 8) break;
    addWord(word);
  }

  // Draw from current words as fallback if still short, avoiding subsequent lessons
  if (resultPool.length < 8) {
    const shuffledCurrent = [...currentWords].sort(() => Math.random() - 0.5);
    let index = 0;
    while (resultPool.length < 8 && shuffledCurrent.length > 0) {
      resultPool.push(shuffledCurrent[index % shuffledCurrent.length]);
      index++;
    }
  }

  return resultPool.slice(0, 8);
}

/**
 * Helper function to check if a category is allowed in a set of already present categories,
 * implementing study, stationery, daily actions, states, manual actions, communication, direction, and adjective mutual exclusions.
 */
export function isCategoryAllowedInSet(candidateCat: string, presentCats: Set<string>): boolean {
  if (candidateCat === 'Daily Actions') {
    if (presentCats.has('Study') || presentCats.has('States') || presentCats.has('Manual Actions') || presentCats.has('Communication') || presentCats.has('Stationery')) {
      return false;
    }
  }
  if (candidateCat === 'States') {
    if (presentCats.has('Daily Actions')) return false;
  }
  if (candidateCat === 'Manual Actions') {
    if (presentCats.has('Daily Actions') || presentCats.has('Communication')) return false;
  }
  if (candidateCat === 'Communication') {
    if (presentCats.has('Daily Actions') || presentCats.has('Manual Actions')) return false;
  }
  if (candidateCat === 'Direction') {
    if (presentCats.has('Adjectives')) return false;
  }
  if (candidateCat === 'Adjectives') {
    if (presentCats.has('Direction')) return false;
  }
  if (candidateCat === 'Study') {
    if (presentCats.has('Stationery') || presentCats.has('Daily Actions')) return false;
  }
  if (candidateCat === 'Stationery') {
    if (presentCats.has('Study') || presentCats.has('Daily Actions')) return false;
  }
  return true;
}

/**
 * Generate semantic distractors for a word
 * @param targetWord The correct word
 * @param count Number of distractor categories to retrieve
 */
export function getSemanticCategoryDistractors(targetWord: YCTWord, count: number = 3): CategoryTag[] {
  const correctCategory = CATEGORIES.find(c => c.id === targetWord.category);
  if (!correctCategory) return CATEGORIES.slice(0, count);

  const initialSet = new Set<string>([targetWord.category]);
  const filteredCategories = CATEGORIES.filter(c => c.id !== targetWord.category && isCategoryAllowedInSet(c.id, initialSet));

  // Get categorized distractors
  const primaryDistractorIds = correctCategory.distractors;
  const primaryDistractors = filteredCategories.filter(c => primaryDistractorIds.includes(c.id));

  // Get other neutral categories
  const physicalMatches = filteredCategories.filter(
    c => !primaryDistractorIds.includes(c.id)
  );

  // Shuffle lists to keep things random
  const shuffledPrimary = [...primaryDistractors].sort(() => Math.random() - 0.5);
  const shuffledNeutral = [...physicalMatches].sort(() => Math.random() - 0.5);

  const result: CategoryTag[] = [];
  const candidates = [...shuffledPrimary, ...shuffledNeutral];

  for (const cat of candidates) {
    if (result.length >= count) break;
    // Check if adding this category violates any simultaneous appearance rules with already added categories + targetWord
    const activeCats = new Set<string>([...result.map(r => r.id), targetWord.category]);
    if (isCategoryAllowedInSet(cat.id, activeCats)) {
      result.push(cat);
    }
  }

  return result;
}

/**
 * For Double Player: generates a set of 4-6 words which includes 1-2 distinct distractor elements (Odd-one-out)
 */
export function generateOddOneOutRound(
  level: number,
  lesson: number,
  wordCount: number = 5
): {
  words: (YCTWord & { isOdd: boolean })[];
  commonCategory: CategoryTag;
  oddCategory: CategoryTag;
} {
  // 1. Pick a main category that has ample words (restricting to this lesson/previous lessons)
  const validWords = YCT_WORDS.filter(w => {
    if (w.category === '') return false;
    if (lesson <= 2) {
      if (w.level < level) return true;
    }
    if (w.level === level && w.lesson <= lesson) return true;
    return false;
  });
  const categoryWordCountMap = validWords.reduce((acc, word) => {
    acc[word.category] = (acc[word.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const viableCategories = CATEGORIES.filter(c => (categoryWordCountMap[c.id] || 0) >= 3);
  const selectedCategoryTag = viableCategories[Math.floor(Math.random() * viableCategories.length)] || CATEGORIES[0];
  const sameCategoryWords = validWords.filter(w => w.category === selectedCategoryTag.id);

  // 2. Select the odd category from its distractors to enable semantic high-difficulty sorting
  const primaryDistractorIds = selectedCategoryTag.distractors;

  const currentSet = new Set<string>([selectedCategoryTag.id]);

  const oddCategoryTagCandidates = CATEGORIES.filter(c => {
    if (!isCategoryAllowedInSet(c.id, currentSet)) return false;
    const hasDistractor = primaryDistractorIds.includes(c.id);
    const hasWords = validWords.some(w => w.category === c.id);
    return hasDistractor && hasWords;
  });

  const selectedOddCategoryTag = oddCategoryTagCandidates.length > 0
    ? oddCategoryTagCandidates[Math.floor(Math.random() * oddCategoryTagCandidates.length)]
    : CATEGORIES.find(c => c.id !== selectedCategoryTag.id && isCategoryAllowedInSet(c.id, currentSet) && validWords.some(w => w.category === c.id)) || CATEGORIES[1];

  const oddCategoryWords = validWords.filter(w => w.category === selectedOddCategoryTag.id);

  // Shuffle both lists
  const shuffledSame = [...sameCategoryWords].sort(() => Math.random() - 0.5);
  const shuffledOdd = [...oddCategoryWords].sort(() => Math.random() - 0.5);

  // Determine how many odd items to place: 1 or 2
  const oddCount = Math.floor(Math.random() * 2) + 1; // 1 or 2 odd items
  const mainCount = wordCount - oddCount;

  const roundWords: (YCTWord & { isOdd: boolean })[] = [];

  // Take main items
  shuffledSame.slice(0, mainCount).forEach(w => {
    roundWords.push({ ...w, isOdd: false });
  });

  // Take odd items
  shuffledOdd.slice(0, oddCount).forEach(w => {
    roundWords.push({ ...w, isOdd: true });
  });

  // Shuffle combined array
  roundWords.sort(() => Math.random() - 0.5);

  return {
    words: roundWords,
    commonCategory: selectedCategoryTag,
    oddCategory: selectedOddCategoryTag
  };
}

export interface DualRound {
  words: (YCTWord & { isOdd: boolean })[];
  commonCategory: CategoryTag;
  oddCategory?: CategoryTag;
}

/**
 * Gets a set of unique words of a specific category, prioritizing current lesson words,
 * then previously learned lessons/levels, then any other words.
 */
function getUniqueWordsByCategory(
  catId: string,
  count: number,
  level: number,
  lesson: number,
  excludeIds: Set<string> = new Set(),
  wordPool: YCTWord[] = YCT_WORDS
): YCTWord[] {
  const currentWords = wordPool.filter(w => w.level === level && w.lesson === lesson && w.category === catId);
  const previouslyLearned = wordPool.filter(w => {
    if (w.category !== catId) return false;
    if (w.level < level) return true;
    if (w.level === level && w.lesson < lesson) return true;
    return false;
  });

  const pool = [
    ...currentWords,
    ...previouslyLearned
  ];

  const result: YCTWord[] = [];
  const seenIds = new Set<string>();

  for (const w of pool) {
    if (!seenIds.has(w.id) && !excludeIds.has(w.id)) {
      seenIds.add(w.id);
      result.push(w);
    }
  }

  // Shuffle to randomize selection within sections
  const shuffledCurrent = [...result.filter(w => w.level === level && w.lesson === lesson)].sort(() => Math.random() - 0.5);
  const shuffledPrevious = [...result.filter(w => w.level < level || (w.level === level && w.lesson < lesson))].sort(() => Math.random() - 0.5);

  let orderedResult = [...shuffledCurrent, ...shuffledPrevious];

  // Robust Fallback: if there are not enough words in this category up to this lesson,
  // find matching words from anywhere in the wordPool database for this category.
  if (orderedResult.length < count) {
    const extraCategoryWords = wordPool.filter(w => {
      if (w.category !== catId) return false;
      if (excludeIds.has(w.id)) return false;
      if (orderedResult.some(ow => ow.id === w.id)) return false;
      return true;
    }).sort(() => Math.random() - 0.5);

    orderedResult = [...orderedResult, ...extraCategoryWords];
  }

  // Double Check: if still short, expand list with random words to satisfy exact count requirement
  if (orderedResult.length < count) {
    const fillerWords = wordPool.filter(w => {
      if (excludeIds.has(w.id)) return false;
      if (orderedResult.some(ow => ow.id === w.id)) return false;
      return true;
    }).sort(() => Math.random() - 0.5);

    orderedResult = [...orderedResult, ...fillerWords];
  }

  return orderedResult.slice(0, count);
}

/**
 * Generate exactly 6 dual rounds (Odd One Out), non-repeating.
 * Each round features 6 words, prioritizing current lesson structure & previously learned content.
 * STRICTOR BOUNDARY: Never select words from lessons AFTER the selected lesson.
 */
export function generate6DualRounds(level: number, lesson: number): DualRound[] {
  // 1. Core learned words up to this level/lesson (from YCT_WORDS only)
  const validCoreWords = YCT_WORDS.filter(w => {
    if (w.category === '') return false;
    if (lesson <= 2) {
      if (w.level < level) return true;
    }
    if (w.level === level && w.lesson <= lesson) return true;
    return false;
  });

  const currentWords = YCT_WORDS.filter(w => w.level === level && w.lesson === lesson);

  // 2. Distractor words up to this level/lesson (from DUAL_DISTRACTORS only)
  const validDistractors = DUAL_DISTRACTORS.filter(w => {
    if (lesson <= 2) {
      if (w.level < level) return true;
    }
    if (w.level === level && w.lesson <= lesson) return true;
    return false;
  }).map(w => ({
    ...w,
    category: "Distractor",
    categoryZh: "干扰词",
    categoryEn: "Distractor",
    categoryMn: "Ташаар үг"
  }));

  // 3. Select eligible common categories (MUST have at least 4 core words in validCoreWords)
  let priorityCommonCats = CATEGORIES.filter(c => {
    const count = validCoreWords.filter(w => w.category === c.id).length;
    return count >= 4;
  });

  // Fallback if none of the categories have at least 4 words
  if (priorityCommonCats.length === 0) {
    priorityCommonCats = CATEGORIES.filter(c => {
      const count = validCoreWords.filter(w => w.category === c.id).length;
      return count >= 3;
    });
  }
  if (priorityCommonCats.length === 0) {
    priorityCommonCats = CATEGORIES.filter(c => {
      const count = validCoreWords.filter(w => w.category === c.id).length;
      return count >= 2;
    });
  }
  if (priorityCommonCats.length === 0) {
    priorityCommonCats = CATEGORIES.filter(c => {
      const count = validCoreWords.filter(w => w.category === c.id).length;
      return count >= 1;
    });
  }

  // If we literally have no eligible categories, return empty array
  if (priorityCommonCats.length === 0) {
    return [];
  }

  const rounds: DualRound[] = [];

  for (let r = 0; r < 6; r++) {
    // Select commonCategory
    const commonCategory = priorityCommonCats[r % priorityCommonCats.length];

    // Common pool MUST only consist of core vocabulary (YCT_WORDS), never dual distractors!
    const commonPool = validCoreWords.filter(w => w.category === commonCategory.id);

    // Study and other category exclusion logic to prevent simultaneous appearance (avoiding confusion)
    const currentSet = new Set<string>([commonCategory.id]);
    const coreOddPool = validCoreWords.filter(w => w.category !== commonCategory.id && isCategoryAllowedInSet(w.category, currentSet));
    const distractorOddPool = validDistractors.filter(w => w.category !== commonCategory.id && isCategoryAllowedInSet(w.category, currentSet));
    const oddPool = [...coreOddPool, ...distractorOddPool];

    // Determine target common and odd count
    let targetCommonCount = 5;
    if (commonPool.length < 5) {
      targetCommonCount = Math.max(1, commonPool.length);
    } else {
      // Randomly pick 4 or 5 common words
      targetCommonCount = (Math.random() < 0.5) ? 4 : 5;
    }
    const targetOddCount = 6 - targetCommonCount;

    // Shuffle and slice common words
    const shuffledCommonPool = [...commonPool].sort(() => Math.random() - 0.5);
    const selectedCommon = shuffledCommonPool.slice(0, targetCommonCount);

    // Shuffle and slice odd words safely avoiding mutually exclusive categories
    const shuffledOddPool = [...oddPool].sort(() => Math.random() - 0.5);
    const selectedOdd: any[] = [];
    for (const w of shuffledOddPool) {
      if (selectedOdd.length >= targetOddCount) break;
      const activeCats = new Set<string>([commonCategory.id, ...selectedOdd.map(so => so.category)]);
      if (isCategoryAllowedInSet(w.category, activeCats)) {
        selectedOdd.push(w);
      }
    }

    const roundWords: (YCTWord & { isOdd: boolean })[] = [];
    selectedCommon.forEach(w => {
      roundWords.push({ ...w, isOdd: false });
    });
    selectedOdd.forEach(w => {
      roundWords.push({ ...w, isOdd: true });
    });

    roundWords.sort(() => Math.random() - 0.5);

    rounds.push({
      words: roundWords,
      commonCategory
    });
  }

  // Ensure ALL current lesson words are represented in the generated rounds if possible
  for (const lWord of currentWords) {
    const isAlreadyIncluded = rounds.some(rnd => rnd.words.some(w => w.id === lWord.id));
    if (!isAlreadyIncluded) {
      // Find a round where this category matches commonCategory
      const matchingRound = rounds.find(rnd => rnd.commonCategory.id === lWord.category);
      if (matchingRound) {
        // Replace a common word that is NOT from the current lesson
        const replaceIdx = matchingRound.words.findIndex(w => !w.isOdd && (w.level !== level || w.lesson !== lesson));
        if (replaceIdx !== -1) {
          matchingRound.words[replaceIdx] = { ...lWord, isOdd: false };
        }
      } else {
        // If no round has commonCategory === lWord.category, let's insert it as an odd word, if permitted and valid
        const matchingOddRound = rounds.find(rnd => {
          if (rnd.commonCategory.id === lWord.category) return false;
          // Verify that including this odd category alongside the existing round categories is allowed
          const currentRoundCats = new Set<string>([rnd.commonCategory.id, ...rnd.words.filter(w => w.isOdd && w.category !== lWord.category).map(w => w.category)]);
          return isCategoryAllowedInSet(lWord.category, currentRoundCats);
        });
        if (matchingOddRound) {
          // Replace an odd word that is NOT from the current lesson
          const replaceIdx = matchingOddRound.words.findIndex(w => w.isOdd && (w.level !== level || w.lesson !== lesson));
          if (replaceIdx !== -1) {
            matchingOddRound.words[replaceIdx] = { ...lWord, isOdd: true };
          }
        }
      }
    }
  }

  // Strict Guarantee Post-Processing: Force exactly 6 items, perfect duplicates resolution, and 100% semantic correctness
  for (const round of rounds) {
    // 1. Remove undefined or broken elements
    round.words = round.words.filter(w => w && w.id && w.word && w.translation && w.translation.pinyin);

    // 2. Resolve duplicates
    const uniqueWordsInRound: (YCTWord & { isOdd: boolean })[] = [];
    const seenWordIds = new Set<string>();
    
    for (const w of round.words) {
      if (!seenWordIds.has(w.id)) {
        seenWordIds.add(w.id);
        uniqueWordsInRound.push(w);
      }
    }
    round.words = uniqueWordsInRound;

    // 3. ENFORCE 100% SEMANTIC CORRECTNESS
    // Override isOdd flags based strictly on whether the card actually belongs to the round's commonCategory!
    round.words.forEach(card => {
      card.isOdd = card.category !== round.commonCategory.id;
    });

    // 4. Adjust round words to guarantee exactly 6 total items and correct number of odd elements
    let commons = round.words.filter(w => !w.isOdd);
    let odds = round.words.filter(w => w.isOdd);

    // Filter out exclusions from existing odds dynamically using helper
    const activeCats = new Set<string>([round.commonCategory.id]);
    const filteredOdds: any[] = [];
    for (const o of odds) {
      if (isCategoryAllowedInSet(o.category, activeCats)) {
        filteredOdds.push(o);
        activeCats.add(o.category);
      }
    }
    odds = filteredOdds;

    // Set a target odd count to make the total exactly 6
    const targetCommonCount = Math.max(1, Math.min(commons.length, 5));
    const targetOddCount = 6 - targetCommonCount;

    // Truncate or pad odds
    if (odds.length > targetOddCount) {
      odds = odds.slice(0, targetOddCount);
    } else if (odds.length < targetOddCount) {
      // Get candidates from core odd pool or distractor list
      const coreOddCandidates = validCoreWords.filter(w => {
        if (w.category === round.commonCategory.id) return false;
        return !seenWordIds.has(w.id);
      }).sort(() => Math.random() - 0.5);

      const distractorOddCandidates = validDistractors.filter(w => {
        if (w.category === round.commonCategory.id) return false;
        return !seenWordIds.has(w.id);
      }).sort(() => Math.random() - 0.5);

      const oddCandidates = [...coreOddCandidates, ...distractorOddCandidates].sort(() => Math.random() - 0.5);

      while (odds.length < targetOddCount && oddCandidates.length > 0) {
        const candidate = oddCandidates.pop()!;
        const currentActiveCats = new Set<string>([round.commonCategory.id, ...odds.map(o => o.category)]);
        if (isCategoryAllowedInSet(candidate.category, currentActiveCats)) {
          seenWordIds.add(candidate.id);
          odds.push({ ...candidate, isOdd: true });
        }
      }
    }

    // Truncate or pad commons
    if (commons.length > targetCommonCount) {
      commons = commons.slice(0, targetCommonCount);
    } else if (commons.length < targetCommonCount) {
      const commonCandidates = validCoreWords.filter(w => {
        return w.category === round.commonCategory.id && !seenWordIds.has(w.id);
      }).sort(() => Math.random() - 0.5);

      while (commons.length < targetCommonCount && commonCandidates.length > 0) {
        const candidate = commonCandidates.pop()!;
        seenWordIds.add(candidate.id);
        commons.push({ ...candidate, isOdd: false });
      }
    }

    // Combine them to form exactly 6 items!
    round.words = [...commons, ...odds];

    // Ensure all elements have correct isOdd flag and there are no undefined records
    round.words = round.words.filter(w => w && w.id);
    round.words.forEach(card => {
      card.isOdd = card.category !== round.commonCategory.id;
    });

    // Finally, shuffle positions
    round.words.sort(() => Math.random() - 0.5);
  }

  return rounds;
}

/**
 * Check if a lesson can be played depending on the game mode and word pool limits
 */
export function isLessonPlayable(level: number, lesson: number, mode: 'SINGLE' | 'DUAL'): boolean {
  const isReviewLesson = (level <= 4 && lesson === 12) || (level >= 5 && lesson === 15);
  const currentWords = isReviewLesson
    ? YCT_WORDS.filter(w => w.level === level && w.lesson < lesson)
    : YCT_WORDS.filter(w => w.level === level && w.lesson === lesson);

  if (currentWords.length === 0) return false;

  if (mode === 'SINGLE') {
    // Single player needs at least 1 word inside the current lesson
    return currentWords.length > 0;
  } else {
    // Dual player needs:
    // 1. Total eligible core words up to this lesson is at least 6
    const eligibleCoreWords = YCT_WORDS.filter(w => {
      if (w.category === '') return false;
      if (lesson <= 2) {
        if (w.level < level) return true;
      }
      if (w.level === level && w.lesson <= lesson) return true;
      return false;
    });
    if (eligibleCoreWords.length < 6) return false;

    // 2. We need at least 1 category with at least 4 core words in eligibleCoreWords so we can do "Odd One Out"
    const hasEligibleCommonCategory = CATEGORIES.some(c => {
      const count = eligibleCoreWords.filter(w => w.category === c.id).length;
      return count >= 4;
    });
    if (!hasEligibleCommonCategory) return false;

    return true;
  }
}

/**
 * Get a random word keeping the 80/20 distribution
 */
export function getNextGameWord(
  currentPool: YCTWord[],
  reviewPool: YCTWord[],
  alreadyUsedIds: Set<string> = new Set()
): YCTWord {
  // Determine if this should be a new word (80%) or a review word (20%)
  const isReview = Math.random() < 0.20 && reviewPool.length > 0;
  const targetPool = isReview ? reviewPool : currentPool;

  // Filter out recently used words if possible, so players get a wide variety
  let available = targetPool.filter(w => !alreadyUsedIds.has(w.id));
  if (available.length === 0) {
    available = targetPool; // Reset filter if all have been used
  }

  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
}

/**
 * Global application content translations
 */
export const TRANSLATIONS = {
  [Language.ZH]: {
    gameName: '汉字词汇大师',
    gameVersion: 'YCT 词汇分类竞技系统',
    singlePlayer: 'SINGLE PLAYER',
    dualPlayer: 'DUAL BATTLE',
    instructions: 'HOW TO PLAY',
    selectLevel: '选择级别 (Level)',
    selectLesson: '选择课时 (Lesson)',
    reviewLesson: 'L12 全书总复习',
    readyPageTitle: '准备阶段 - 词汇预览',
    readyPageDesc: '在游戏开始前，请仔细预览本课重点词汇及其归属分类。',
    readyBtn: 'START GAME',
    learningList: '重点词汇表',
    levelLabel: '级别',
    lessonLabel: '课时',
    wordLabel: '汉字',
    pinyinLabel: '拼音',
    translationLabel: '含义',
    categoryLabel: '属性分类',
    scoreLabel: '得分',
    comboLabel: '连击',
    livesLabel: '生命值',
    timeLeft: '倒计时',
    pauseTitle: '游戏暂停',
    resumeBtn: 'RESUME',
    backBtn: 'BACK',
    ruleTitle: '✨ 游戏玩法说明 ✨',
    singleRuleTitle: '🎮 单人模式',
    singleRuleDesc: '拖拽词块到属于它的分类栏，比如“一”属于数字，看看谁做得最快。游戏时间为180s。请善用道具：\n- ❄️ 冻结：可以使时间暂停5s。\n- ⏳ 放慢：可以让词块下落放慢，时间为5s。\n- 💡 提示：可以告诉我们一道题的答案。',
    dualRuleTitle: '👥 双人分屏',
    dualRuleDesc: '点击与众不同的那个词语，每道题会有一到两个“卧底”，你能找到吗。',
    ruleScoreTitle: '🎯 积分规则',
    ruleScoreDesc: '每一局游戏的时间为 180 秒（180s）。归类或切割正确加 10 分，分类错误、切错错选扣 5 分。若词块滑落漏选，则扣 5 分并扣除生命值 1 颗心。生命值归零或者 180 秒倒计时结束，游戏即宣布结束！',
    lanToggle: '语言切换 (Language)',
    powerUpTitle: '🔮 道具背包',
    powerFreeze: '❄️ 冻结 (Freeze)',
    powerFreezeDesc: '可以使时间暂停5s',
    powerSizereducer: '⏳ 放慢 (Slow)',
    powerSizereducerDesc: '可以让词块下落放慢，时间为5s',
    powerTip: '💡 提示 (Hint)',
    powerTipDesc: '可以告诉我们一道题的答案',
    reportTitle: '挑战报告与反馈',
    reportScore: '最终得分',
    reportAccuracy: '完美归类率',
    reportCorrect: '正确击中',
    reportWrong: '分类失误',
    reportMiss: '漏选扣血',
    tableWord: '测试词汇',
    tablePinyin: '拼音',
    tableYourAns: '你的归类',
    tableCorrectAns: '正确分类',
    tableStatus: '错因复盘',
    reviewBtn: 'RETRY',
    homeBtn: 'MAIN MENU',
    nextLevelBtn: 'NEXT LEVEL',
    dualP1: '玩家 1 (红)',
    dualP2: '玩家 2 (蓝)',
    dualDesc: '快速找出异类并朝任意方向滑动切割剔除它！谁先完成得10分！',
    dualCommon: '大部分属于',
    sameDeviceDual: '本模式为同屏竞技（0延迟响应）',
    p1Score: 'P1 分数',
    p2Score: 'P2 分数',
    p1Win: '🎉 玩家 1 (红) 获胜！',
    p2Win: '🎉 玩家 2 (蓝) 获胜！',
    tie: '🤝 平局！不相上下！',
    singlePrompt: '拖拽词块进入正确的分类篮里！',
    frozenActive: '❄️ 冰冻时间！词块慢下来了！',
    highDifficultyActive: '⚠️ 干扰升级！逻辑混淆中！',
    aiAssistantTitle: '🤖 词汇大师 AI 助教',
    aiAssistantPrompt: '向 AI 提问有关这些 YCT 词汇语法或造词法...',
    aiAssistantPlaceholder: '例：请帮我造一个关于“熊猫”的简单句子',
    askAi: 'ASK AI',
    aiAnswering: 'AI Typing...'
  },
  [Language.EN]: {
    gameName: 'Vocabulary Master',
    gameVersion: 'YCT Vocab Arena',
    singlePlayer: 'SINGLE PLAYER',
    dualPlayer: 'DUAL BATTLE',
    instructions: 'HOW TO PLAY',
    selectLevel: 'Select YCT Level',
    selectLesson: 'Select Lesson',
    reviewLesson: 'L12 Global Review',
    readyPageTitle: 'Warm-up - Word Preview',
    readyPageDesc: 'Before the battle starts, preview this lesson\'s core vocabulary and categories.',
    readyBtn: 'START GAME',
    learningList: 'Vocabulary Checklist',
    levelLabel: 'Level',
    lessonLabel: 'Lesson',
    wordLabel: 'Character',
    pinyinLabel: 'Pinyin',
    translationLabel: 'Meaning',
    categoryLabel: 'Category',
    scoreLabel: 'Score',
    comboLabel: 'Combo',
    livesLabel: 'Hearts',
    timeLeft: 'Timer',
    pauseTitle: 'Game Paused',
    resumeBtn: 'RESUME',
    backBtn: 'BACK',
    ruleTitle: '✨ Rules & Instructions ✨',
    singleRuleTitle: '🎮 Single Player',
    singleRuleDesc: "Drag word blocks to their correct categories (e.g., '一' belongs to Numbers). Let's see who is the fastest! Game time is 180s. Use power-ups wisely:\n- ❄️ Freeze: Pauses the timer for 5s.\n- ⏳ Slow: Slows down falling words for 5s.\n- 💡 Hint: Shows correct answer of a word.",
    dualRuleTitle: '👥 Dual Battle',
    dualRuleDesc: "Click the odd-one-out word. There will be 1 or 2 'imposters' in each round. Can you find them?",
    ruleScoreTitle: '🎯 Scoring Mechanics',
    ruleScoreDesc: 'Each game has a duration of 180 seconds. Correct match points: +10 pts. Errors or missed cuts: -5 pts. Letting a bubble drop without matches: -5 pts and loses 1 heart. Game finishes when the 180 seconds timer reaches 0 or hearts run out!',
    lanToggle: 'Language Config',
    powerUpTitle: '🔮 Magic Bag',
    powerFreeze: '❄️ Freeze',
    powerFreezeDesc: 'Pauses the game timer for 5s',
    powerSizereducer: '⏳ Slow',
    powerSizereducerDesc: 'Slows down word block dropping for 5s',
    powerTip: '💡 Hint',
    powerTipDesc: 'Shows the correct answer of a word',
    reportTitle: 'Challenge Summary Report',
    reportScore: 'Final Score',
    reportAccuracy: 'Classification Accuracy',
    reportCorrect: 'Correct Classifications',
    reportWrong: 'Incorrect Guesses',
    reportMiss: 'Dropped (Lost Hearts)',
    tableWord: 'Word tested',
    tablePinyin: 'Pinyin',
    tableYourAns: 'Your Choice',
    tableCorrectAns: 'Correct Class',
    tableStatus: 'Review & Feedback',
    reviewBtn: 'RETRY',
    homeBtn: 'MAIN MENU',
    nextLevelBtn: 'NEXT LEVEL',
    dualP1: 'Player 1 (Red)',
    dualP2: 'Player 2 (Blue)',
    dualDesc: 'Find the odd-one-out and slice through them immediately!',
    dualCommon: 'Most belongs to',
    sameDeviceDual: 'Supports single-device split-screen (0ms latency)',
    p1Score: 'P1 Score',
    p2Score: 'P2 Score',
    p1Win: '🎉 Player 1 (Red) Wins!',
    p2Win: '🎉 Player 2 (Blue) Wins!',
    tie: '🤝 A Close Tie!',
    singlePrompt: 'Drag the word bubble into the right category basket!',
    frozenActive: '❄️ Ice Freeze! Words are falling slowly!',
    highDifficultyActive: '⚠️ Distortion Alert! Confusion mode!',
    aiAssistantTitle: '🤖 AI Tutor Hub',
    aiAssistantPrompt: 'Ask the AI tutor about these Chinese tokens or grammar tips...',
    aiAssistantPlaceholder: 'e.g., Make a short Chinese sentence using \"熊猫\" and pinyin.',
    askAi: 'ASK AI',
    aiAnswering: 'AI Typing...'
  },
  [Language.MN]: {
    gameName: 'Үгийн Магистр',
    gameVersion: 'YCT Шалгалтын бэлтгэл',
    singlePlayer: 'SINGLE PLAYER',
    dualPlayer: 'DUAL BATTLE',
    instructions: 'HOW TO PLAY',
    selectLevel: 'YCT Түвшин сонгох',
    selectLesson: 'Хичээл сонгох',
    reviewLesson: 'L12 Төгсөлтийн Давталт',
    readyPageTitle: 'Бэлтгэл үе - Үгийн Сан',
    readyPageDesc: 'Тоглоом эхлэхээс өмнө энэ хичээлийн гол үгс болон тэдгээрийн ангиллыг уншина уу.',
    readyBtn: 'START GAME',
    learningList: 'Үгсийн хуудас',
    levelLabel: 'Түвшин',
    lessonLabel: 'Хичээл',
    wordLabel: 'Хятад үг',
    pinyinLabel: 'Пиньинь',
    translationLabel: 'Орчуулга',
    categoryLabel: 'Ангилал',
    scoreLabel: 'Оноо',
    comboLabel: 'Комбо',
    livesLabel: 'Амь',
    timeLeft: 'Хугацаа',
    pauseTitle: 'Түр зогссон',
    resumeBtn: 'RESUME',
    backBtn: 'BACK',
    ruleTitle: '✨ Тоглох Заавар ✨',
    singleRuleTitle: '🎮 Ганц тоглогч',
    singleRuleDesc: "Үгийг харгалзах ангилалд чирж оруулна уу, жишээ нь '一' нь тоон ангилалд хамаарна. Түргэн хийгээрэй! Тоглоомын хугацаа 180 секунд. Дараах хэрэгслүүдийг ухаалгаар ашиглаарай:\n- ❄️ Царцаах: Тоглоомын цагийг 5 секунд зогсооно.\n- ⏳ Удаашруулах: Үг унах хурдыг 5 секунд удаашруулна.\n- 💡 Санамж: Нэг асуултын зөв хариултыг зааж өгнө.",
    dualRuleTitle: '👥 Хоёр тоглогч',
    dualRuleDesc: 'Бусдаас өөр үгийг олж товшино уу. Асуулт бүрд нэгээс хоёр "тагнуулч" үг байх болно, та олж чадах уу?',
    ruleScoreTitle: '🎯 Оноо авах дүрэм',
    ruleScoreDesc: 'Зөв ангилбал +10 оноо, алдвал -5 оноо. Амь унвал -5 оноо ба 1 зүрх хасагдана. Зүрх дуусах эсвэл 180 секунд дуусвал тоглоом дуусна!',
    lanToggle: 'Хэл Удирдах',
    powerUpTitle: '🔮 Ид шидийн цүнх',
    powerFreeze: '❄️ Царцаах',
    powerFreezeDesc: 'Хугацааг 5 секунд зогсооно',
    powerSizereducer: '⏳ Удаашруулах',
    powerSizereducerDesc: 'Үг унах хурдыг 5 секунд удаашруулна',
    powerTip: '💡 Санамж',
    powerTipDesc: 'Нэг асуултын зөв хариултыг заана',
    reportTitle: 'Тулааны тайлангийн тойм',
    reportScore: 'Эцсийн оноо',
    reportAccuracy: 'Ангилалтын нарийвчлал',
    reportCorrect: 'Зөв таасан',
    reportWrong: 'Алдаатай ангилсан',
    reportMiss: 'Алдагдсан орон (Зүрх хассан)',
    tableWord: 'Тестэлсэн үг',
    tablePinyin: 'Пиньинь',
    tableYourAns: 'Таны хуваарилалт',
    tableCorrectAns: 'Зөв ангилал',
    tableStatus: 'Алдааны дүгнэлт',
    reviewBtn: 'RETRY',
    homeBtn: 'MAIN MENU',
    nextLevelBtn: 'NEXT LEVEL',
    dualP1: 'Тоглогч 1 (Улаан)',
    dualP2: 'Тоглогч 2 (Хөх)',
    dualDesc: 'Өөр ангиллын илүү үгийг олж, хуваан зурж устгана уу!',
    dualCommon: 'Ихэнх нь',
    sameDeviceDual: 'Нэг дэлгэц дээр зэрэг тоглох боломжтой (0ms саатал)',
    p1Score: 'Тоглогч 1 оноо',
    p2Score: 'Тоглогч 2 оноо',
    p1Win: '🎉 Тоглогч 1 (Улаан) Яллаа!',
    p2Win: '🎉 Тоглогч 2 (Хөх) Яллаа!',
    tie: '🤝 Тэнцлээ! Ижил чадвартай байна!',
    singlePrompt: 'Үгийн хөөсийг доорх зөв ангиллын сагс руу чирнэ үү!',
    frozenActive: '❄️ Мөсөн царцалт! Үгс удаан унаж байна!',
    highDifficultyActive: '⚠️ Анхаар! Хэцүү ангилалт идэвхэжлээ!',
    aiAssistantTitle: '🤖 AI Багшийн Төв',
    aiAssistantPrompt: 'Хятад хэлний үгийн бүтэц, дүрмийн талаар AI багшаас асууна уу...',
    aiAssistantPlaceholder: 'Жишээ нь: "熊猫" үгийг ашиглан жижиг өгүүлбэр зохиож өгнө үү.',
    askAi: 'ASK AI',
    aiAnswering: 'AI Typing...'
  }
};
