import { YCTWord, CategoryTag } from '../types';

export const CATEGORIES: CategoryTag[] = [
  {
    id: 'Roles',
    zh: '人物角色',
    en: 'Roles',
    mn: 'Мэргэжил ба дүр',
    icon: 'GraduationCap',
    color: 'bg-indigo-300 border-indigo-500 text-indigo-950 shadow-indigo-250',
    distractors: ['Family Members', 'Places']
  },
  {
    id: 'Numbers',
    zh: '数字',
    en: 'Numbers',
    mn: 'Тоо',
    icon: 'Hash',
    color: 'bg-amber-400 border-amber-600 text-amber-950 shadow-amber-300',
    distractors: ['Time', 'Measure Words']
  },
  {
    id: 'Communication',
    zh: '沟通交流',
    en: 'Communication',
    mn: 'Харилцаа',
    icon: 'MessageSquare',
    color: 'bg-blue-300 border-blue-500 text-blue-950 shadow-blue-250',
    distractors: ['Daily Actions', 'States']
  },
  {
    id: 'States',
    zh: '状态与情感',
    en: 'States',
    mn: 'Төлөв байдал, сэтгэл хөдлөл',
    icon: 'Activity',
    color: 'bg-rose-300 border-rose-500 text-rose-950 shadow-rose-250',
    distractors: ['Adjectives', 'Communication']
  },
  {
    id: 'Family Members',
    zh: '家庭成员',
    en: 'Family Members',
    mn: 'Гэр бүлийн гишүүд',
    icon: 'Users',
    color: 'bg-teal-400 border-teal-600 text-teal-950 shadow-teal-300',
    distractors: ['Roles', 'Places']
  },
  {
    id: 'Places',
    zh: '场所与空间',
    en: 'Places',
    mn: 'Газар орны чиглэл',
    icon: 'MapPin',
    color: 'bg-pink-400 border-pink-600 text-pink-950 shadow-pink-300',
    distractors: ['Family Members', 'Roles']
  },
  {
    id: 'Measure Words',
    zh: '量词',
    en: 'Measure Words',
    mn: 'Хэмжих үгс',
    icon: 'Scale',
    color: 'bg-purple-300 border-purple-500 text-purple-950 shadow-purple-250',
    distractors: ['Numbers', 'Adjectives']
  },
  {
    id: 'Body Parts',
    zh: '身体部位',
    en: 'Body Parts',
    mn: 'Биеийн хэсэг',
    icon: 'Heart',
    color: 'bg-red-400 border-red-600 text-red-950 shadow-red-300',
    distractors: ['Adjectives', 'Daily Actions']
  },
  {
    id: 'Adjectives',
    zh: '形容词',
    en: 'Adjectives',
    mn: 'Тэмдэг нэр',
    icon: 'Sparkles',
    color: 'bg-violet-400 border-violet-600 text-violet-950 shadow-violet-300',
    distractors: ['States', 'Measure Words']
  },
  {
    id: 'Animals and Insects',
    zh: '动物与昆虫',
    en: 'Animals and Insects',
    mn: 'Амьтан, шавьж',
    icon: 'Cat',
    color: 'bg-emerald-400 border-emerald-600 text-emerald-950 shadow-emerald-300',
    distractors: ['Food', 'Fruit']
  },
  {
    id: 'Daily Actions',
    zh: '日常动作',
    en: 'Daily Actions',
    mn: 'Өдөр тутмын үйлдэл',
    icon: 'CheckSquare',
    color: 'bg-yellow-400 border-yellow-600 text-yellow-950 shadow-yellow-300',
    distractors: ['Communication', 'States']
  },
  {
    id: 'Time',
    zh: '时间与日期',
    en: 'Time',
    mn: 'Цаг хугацаа',
    icon: 'Calendar',
    color: 'bg-fuchsia-400 border-fuchsia-600 text-fuchsia-950 shadow-fuchsia-300',
    distractors: ['Numbers', 'Places']
  },
  {
    id: 'Food',
    zh: '食品',
    en: 'Food',
    mn: 'Хоол хүнс',
    icon: 'Utensils',
    color: 'bg-orange-400 border-orange-600 text-orange-950 shadow-orange-300',
    distractors: ['Fruit', 'Drinks']
  },
  {
    id: 'Fruit',
    zh: '水果',
    en: 'Fruit',
    mn: 'Жимс',
    icon: 'Apple',
    color: 'bg-lime-400 border-lime-600 text-lime-950 shadow-lime-300',
    distractors: ['Food', 'Drinks']
  },
  {
    id: 'Drinks',
    zh: '饮料',
    en: 'Drinks',
    mn: 'Ундаа, уух зүйл',
    icon: 'CupSoda',
    color: 'bg-cyan-300 border-cyan-500 text-cyan-950 shadow-cyan-250',
    distractors: ['Food', 'Fruit']
  },
  {
    id: 'Home/Appliances',
    zh: '家具电器',
    en: 'Home/Appliances',
    mn: 'Гэр ба тавилга',
    icon: 'Tv',
    color: 'bg-amber-300 border-amber-500 text-amber-950 shadow-amber-250',
    distractors: ['Places', 'Stationery']
  },
  {
    id: 'Stationery',
    zh: '文具',
    en: 'Stationery',
    mn: 'Бичиг хэрэг',
    icon: 'Pen',
    color: 'bg-sky-300 border-sky-500 text-sky-950 shadow-sky-250',
    distractors: ['Home/Appliances', 'Places']
  },
  {
    id: 'Study',
    zh: '学习',
    en: 'Study',
    mn: 'Суралцах',
    icon: 'BookOpen',
    color: 'bg-indigo-300 border-indigo-500 text-indigo-950 shadow-indigo-250',
    distractors: ['Places', 'Adjectives', 'Roles']
  },
  {
    id: 'Direction',
    zh: '方位',
    en: 'Direction',
    mn: 'Зүг чиглэл',
    icon: 'Compass',
    color: 'bg-teal-300 border-teal-500 text-teal-950 shadow-teal-250',
    distractors: ['Places', 'Adjectives']
  },
  {
    id: 'Color',
    zh: '颜色',
    en: 'Color',
    mn: 'Өнгө',
    icon: 'Palette',
    color: 'bg-pink-300 border-pink-500 text-pink-950 shadow-pink-250',
    distractors: ['Adjectives', 'Fruit']
  },
  {
    id: 'Sports/Hobby',
    zh: '运动与兴趣',
    en: 'Sports/Hobby',
    mn: 'Спорт, сонирхол',
    icon: 'Trophy',
    color: 'bg-emerald-300 border-emerald-500 text-emerald-950 shadow-emerald-250',
    distractors: ['Daily Actions', 'Roles']
  },
  {
    id: 'Nature',
    zh: '自然',
    en: 'Nature',
    mn: 'Байгаль',
    icon: 'Sun',
    color: 'bg-emerald-200 border-emerald-400 text-emerald-950 shadow-emerald-200',
    distractors: ['Weather', 'Plants']
  },
  {
    id: 'Manual Actions',
    zh: '手部动作',
    en: 'Manual Actions',
    mn: 'Гарын үйлдэл',
    icon: 'Hand',
    color: 'bg-rose-300 border-rose-500 text-rose-950 shadow-rose-250',
    distractors: ['Daily Actions', 'Communication']
  },
  {
    id: 'Clothing',
    zh: '服装说明',
    en: 'Clothing',
    mn: 'Хувцас',
    icon: 'Shirt',
    color: 'bg-indigo-300 border-indigo-500 text-indigo-950 shadow-indigo-250',
    distractors: ['Color', 'Body Parts']
  },
  {
    id: 'Daily Necessities',
    zh: '日常用品',
    en: 'Daily Necessities',
    mn: 'Өдөр тутмын хэрэглэл',
    icon: 'Gift',
    color: 'bg-violet-300 border-violet-500 text-violet-950 shadow-violet-250',
    distractors: ['Stationery', 'Home/Appliances']
  },
  {
    id: 'Plants',
    zh: '植物',
    en: 'Plants',
    mn: 'Ургамал',
    icon: 'Flower2',
    color: 'bg-lime-300 border-lime-500 text-lime-950 shadow-lime-250',
    distractors: ['Food', 'Fruit']
  },
  {
    id: 'Weather',
    zh: '天气',
    en: 'Weather',
    mn: 'Цаг агаар',
    icon: 'CloudRain',
    color: 'bg-cyan-300 border-cyan-500 text-cyan-950 shadow-cyan-250',
    distractors: ['Places', 'Time']
  },
  {
    id: 'Electronics',
    zh: '电子产品',
    en: 'Electronics',
    mn: 'Цахим хэрэгсэл',
    icon: 'Smartphone',
    color: 'bg-indigo-300 border-indigo-500 text-indigo-950 shadow-indigo-250',
    distractors: ['Home/Appliances', 'Daily Necessities']
  },
  {
    id: 'Kitchenware',
    zh: '餐具',
    en: 'Kitchenware',
    mn: 'Гал тогооны хэрэгсэл',
    icon: 'CupSoda',
    color: 'bg-amber-300 border-amber-500 text-amber-950 shadow-amber-250',
    distractors: ['Home/Appliances', 'Food']
  },
  {
    id: 'Transportation',
    zh: '交通工具',
    en: 'Transportation',
    mn: 'Тээврийн хэрэгсэл',
    icon: 'Car',
    color: 'bg-sky-400 border-sky-600 text-sky-950 shadow-sky-300',
    distractors: ['Places', 'Daily Actions']
  },
  {
    id: 'Accessories',
    zh: '配饰',
    en: 'Accessories',
    mn: 'Гоёл чимэглэл',
    icon: 'Glasses',
    color: 'bg-teal-200 border-teal-400 text-teal-950 shadow-teal-200',
    distractors: ['Clothing', 'Daily Necessities']
  },
  {
    id: 'Season',
    zh: '季节',
    en: 'Season',
    mn: 'Улирал',
    icon: 'CloudSun',
    color: 'bg-green-200 border-green-400 text-green-950 shadow-green-200',
    distractors: ['Weather', 'Time']
  }
];

export const YCT_WORDS: YCTWord[] = [
  // ==================== YCT LEVEL 1 ====================
  // Lesson 1
  {
    id: 'y1_l1_1',
    word: '老师',
    translation: { zh: '老师', pinyin: 'lǎo shī', en: 'teacher', mn: 'багш' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_2',
    word: '一',
    translation: { zh: '一', pinyin: 'yī', en: 'one', mn: 'нэг' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_3',
    word: '二',
    translation: { zh: '二', pinyin: 'èr', en: 'two', mn: 'хоёр' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_4',
    word: '三',
    translation: { zh: '三', pinyin: 'sān', en: 'three', mn: 'гурав' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_5',
    word: '四',
    translation: { zh: '四', pinyin: 'sì', en: 'four', mn: 'дөрөв' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_6',
    word: '五',
    translation: { zh: '五', pinyin: 'wǔ', en: 'five', mn: 'тав' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_7',
    word: '六',
    translation: { zh: '六', pinyin: 'liù', en: 'six', mn: 'зургаа' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_8',
    word: '七',
    translation: { zh: '七', pinyin: 'qī', en: 'seven', mn: 'долоо' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_9',
    word: '八',
    translation: { zh: '八', pinyin: 'bā', en: 'eight', mn: 'найм' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_10',
    word: '九',
    translation: { zh: '九', pinyin: 'jiǔ', en: 'nine', mn: 'ес' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },
  {
    id: 'y1_l1_11',
    word: '十',
    translation: { zh: '十', pinyin: 'shí', en: 'ten', mn: 'арав' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 1, lesson: 1
  },

  // Lesson 2
  {
    id: 'y1_l2_1',
    word: '叫',
    translation: { zh: '叫', pinyin: 'jiào', en: 'to be called', mn: 'дуудах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 1, lesson: 2
  },
  {
    id: 'y1_l2_2',
    word: '高兴',
    translation: { zh: '高兴', pinyin: 'gāo xìng', en: 'glad', mn: 'баяртай' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 1, lesson: 2
  },

  // Lesson 4
  {
    id: 'y1_l4_1',
    word: '爸爸',
    translation: { zh: '爸爸', pinyin: 'bà ba', en: 'father', mn: 'аав' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 1, lesson: 4
  },
  {
    id: 'y1_l4_2',
    word: '妈妈',
    translation: { zh: '妈妈', pinyin: 'mā ma', en: 'mother', mn: 'ээж' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 1, lesson: 4
  },
  {
    id: 'y1_l4_3',
    word: '哥哥',
    translation: { zh: '哥哥', pinyin: 'gē ge', en: 'big brother', mn: 'ах' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 1, lesson: 4
  },
  {
    id: 'y1_l4_4',
    word: '姐姐',
    translation: { zh: '姐姐', pinyin: 'jiě jie', en: 'big sister', mn: 'эгч' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 1, lesson: 4
  },
  {
    id: 'y1_l4_5',
    word: '妹妹',
    translation: { zh: '妹妹', pinyin: 'mèi mei', en: 'little sister', mn: 'эмэгтэй дүү' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 1, lesson: 4
  },
  {
    id: 'y1_l4_6',
    word: '家',
    translation: { zh: '家', pinyin: 'jiā', en: 'family', mn: 'гэр бүл' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 1, lesson: 4
  },
  {
    id: 'y1_l4_7',
    word: '口',
    translation: { zh: '口', pinyin: 'kǒu', en: '(measure word)', mn: 'ам (бүл)' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 1, lesson: 4
  },
  {
    id: 'y1_l4_8',
    word: '个',
    translation: { zh: '个', pinyin: 'gè', en: '(measure word)', mn: 'ширхэг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 1, lesson: 4
  },

  // Lesson 5
  {
    id: 'y1_l5_1',
    word: '岁',
    translation: { zh: '岁', pinyin: 'suì', en: 'years old', mn: 'нас' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 1, lesson: 5
  },

  // Lesson 6
  {
    id: 'y1_l6_1',
    word: '个子',
    translation: { zh: '个子', pinyin: 'gè zi', en: 'height', mn: 'нурууны өндөр' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_2',
    word: '小',
    translation: { zh: '小', pinyin: 'xiǎo', en: 'small', mn: 'жижиг' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_3',
    word: '大',
    translation: { zh: '大', pinyin: 'dà', en: 'big', mn: 'том' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_4',
    word: '长',
    translation: { zh: '长', pinyin: 'cháng', en: 'long', mn: 'урт' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_5',
    word: '高',
    translation: { zh: '高', pinyin: 'gāo', en: 'tall', mn: 'өндөр' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_6',
    word: '鼻子',
    translation: { zh: '鼻子', pinyin: 'bí zi', en: 'nose', mn: 'хамар' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_7',
    word: '头发',
    translation: { zh: '头发', pinyin: 'tóu fa', en: 'hair', mn: 'үс' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_8',
    word: '眼睛',
    translation: { zh: '眼睛', pinyin: 'yǎn jing', en: 'eye', mn: 'нүд' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_9',
    word: '手',
    translation: { zh: '手', pinyin: 'shǒu', en: 'hand', mn: 'гар' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 1, lesson: 6
  },
  {
    id: 'y1_l6_10',
    word: '耳朵',
    translation: { zh: '耳朵', pinyin: 'ěr duo', en: 'ear', mn: 'чих' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 1, lesson: 6
  },

  // Lesson 7
  {
    id: 'y1_l7_1',
    word: '猫',
    translation: { zh: '猫', pinyin: 'māo', en: 'cat', mn: 'муур' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 1, lesson: 7
  },
  {
    id: 'y1_l7_2',
    word: '狗',
    translation: { zh: '狗', pinyin: 'gǒu', en: 'dog', mn: 'нохой' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 1, lesson: 7
  },
  {
    id: 'y1_l7_3',
    word: '鱼',
    translation: { zh: '鱼', pinyin: 'yú', en: 'fish', mn: 'загас' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 1, lesson: 7
  },
  {
    id: 'y1_l7_4',
    word: '鸟',
    translation: { zh: '鸟', pinyin: 'niǎo', en: 'bird', mn: 'шувуу' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 1, lesson: 7
  },
  {
    id: 'y1_l7_5',
    word: '多',
    translation: { zh: '多', pinyin: 'duō', en: 'many', mn: 'олон' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 1, lesson: 7
  },

  // Lesson 8
  {
    id: 'y1_l8_1',
    word: '学校',
    translation: { zh: '学校', pinyin: 'xué xiào', en: 'school', mn: 'сургууль' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 1, lesson: 8
  },
  {
    id: 'y1_l8_2',
    word: '商店',
    translation: { zh: '商店', pinyin: 'shāng diàn', en: 'store', mn: 'дэлгүүр' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 1, lesson: 8
  },
  {
    id: 'y1_l8_3',
    word: '去',
    translation: { zh: '去', pinyin: 'qù', en: 'go', mn: 'явах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 1, lesson: 8
  },

  // Lesson 9
  {
    id: 'y1_l9_1',
    word: '生日',
    translation: { zh: '生日', pinyin: 'shēng rì', en: 'birthday', mn: 'төрсөн өдөр' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_2',
    word: '星期一',
    translation: { zh: '星期一', pinyin: 'xīng qī yī', en: 'Monday', mn: 'Даваа' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_3',
    word: '星期二',
    translation: { zh: '星期二', pinyin: 'xīng qī èr', en: 'Tuesday', mn: 'Мягмар' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_4',
    word: '星期三',
    translation: { zh: '星期三', pinyin: 'xīng qї sān', en: 'Wednesday', mn: 'Лхагва' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_5',
    word: '星期四',
    translation: { zh: '星期四', pinyin: 'xīng qī sì', en: 'Thursday', mn: 'Пүрэв' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_6',
    word: '星期五',
    translation: { zh: '星期五', pinyin: 'xīng qī wǔ', en: 'Friday', mn: 'Баасан' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_7',
    word: '星期六',
    translation: { zh: '星期六', pinyin: 'xīng qī liù', en: 'Saturday', mn: 'Бямба' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_8',
    word: '星期天',
    translation: { zh: '星期天', pinyin: 'xīng qī tiān', en: 'Sunday', mn: 'Ням' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_9',
    word: '月',
    translation: { zh: '月', pinyin: 'yuè', en: 'month', mn: 'сар' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_10',
    word: '号',
    translation: { zh: '号', pinyin: 'hào', en: 'date', mn: 'өдөр' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_11',
    word: '今天',
    translation: { zh: '今天', pinyin: 'jīn tiān', en: 'today', mn: 'өнөөдөр' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_12',
    word: '星期',
    translation: { zh: '星期', pinyin: 'xīng qī', en: 'week', mn: 'долоо хоног' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_13',
    word: '明天',
    translation: { zh: '明天', pinyin: 'míng tiān', en: 'tomorrow', mn: 'маргааш' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 9
  },
  {
    id: 'y1_l9_14',
    word: '喜欢',
    translation: { zh: '喜欢', pinyin: 'xǐ huān', en: 'like', mn: 'дуртай' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 1, lesson: 9
  },

  // Lesson 10
  {
    id: 'y1_l10_1',
    word: '现在',
    translation: { zh: '现在', pinyin: 'xiàn zài', en: 'now', mn: 'одоо' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 10
  },
  {
    id: 'y1_l10_2',
    word: '点',
    translation: { zh: '点', pinyin: 'diǎn', en: "o’clock", mn: 'цаг' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 10
  },
  {
    id: 'y1_l10_3',
    word: '分',
    translation: { zh: '分', pinyin: 'fēn', en: 'minute', mn: 'минут' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 10
  },
  {
    id: 'y1_l10_4',
    word: '早上',
    translation: { zh: '早上', pinyin: 'zǎo shang', en: 'morning', mn: 'өглөө' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 1, lesson: 10
  },

  // Lesson 11
  {
    id: 'y1_l11_1',
    word: '米饭',
    translation: { zh: '米饭', pinyin: 'mǐ fàn', en: 'rice', mn: 'агшаасан будаа' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_2',
    word: '面条',
    translation: { zh: '面条', pinyin: 'miàn tiáo', en: 'noodles', mn: 'гоймон' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_3',
    word: '苹果',
    translation: { zh: '苹果', pinyin: 'píng guǒ', en: 'apple', mn: 'алим' },
    category: 'Fruit', categoryZh: '水果', categoryEn: 'Fruit', categoryMn: 'Жимс',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_4',
    word: '牛奶',
    translation: { zh: '牛奶', pinyin: 'niú nǎi', en: 'milk', mn: 'сүү' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_5',
    word: '水',
    translation: { zh: '水', pinyin: 'shuǐ', en: 'water', mn: 'ус' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_6',
    word: '蛋糕',
    translation: { zh: '蛋糕', pinyin: 'dàn gāo', en: 'cake', mn: 'бялуу' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_7',
    word: '吃',
    translation: { zh: '吃', pinyin: 'chī', en: 'eat', mn: 'идэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_8',
    word: '喝',
    translation: { zh: '喝', pinyin: 'hē', en: 'drink', mn: 'уух' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 1, lesson: 11
  },
  {
    id: 'y1_l11_9',
    word: '爱',
    translation: { zh: '爱', pinyin: 'ài', en: 'love', mn: 'хайрлах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 1, lesson: 11
  },

  // ==================== YCT LEVEL 2 ====================
  // Lesson 1
  {
    id: 'y2_l1_1',
    word: '坐',
    translation: { zh: '坐', pinyin: 'zuò', en: 'sit', mn: 'суух' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 2, lesson: 1
  },
  {
    id: 'y2_l1_2',
    word: '说话',
    translation: { zh: '说话', pinyin: 'shuō huà', en: 'talk', mn: 'ярих' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 2, lesson: 1
  },

  // Lesson 2
  {
    id: 'y2_l2_1',
    word: '起床',
    translation: { zh: '起床', pinyin: 'qǐ chuáng', en: 'get up', mn: 'босох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 2, lesson: 2
  },
  {
    id: 'y2_l2_2',
    word: '睡觉',
    translation: { zh: '睡觉', pinyin: 'shuì jiào', en: 'sleep', mn: 'унтах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 2, lesson: 2
  },
  {
    id: 'y2_l2_3',
    word: '早上',
    translation: { zh: '早上', pinyin: 'zǎo shang', en: 'morning', mn: 'өглөө' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 2, lesson: 2
  },
  {
    id: 'y2_l2_4',
    word: '晚上',
    translation: { zh: '晚上', pinyin: 'wǎn shang', en: 'evening', mn: 'орой / шөнө' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 2, lesson: 2
  },

  // Lesson 3
  {
    id: 'y2_l3_1',
    word: '矮',
    translation: { zh: '矮', pinyin: 'ǎi', en: 'short', mn: 'намхан' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_2',
    word: '床',
    translation: { zh: '床', pinyin: 'chuáng', en: 'bed', mn: 'ор' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_3',
    word: '房间',
    translation: { zh: '房间', pinyin: 'fáng jiān', en: 'room', mn: 'өрөө' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_4',
    word: '电视',
    translation: { zh: '电视', pinyin: 'diàn shì', en: 'TV', mn: 'зурагт' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_5',
    word: '桌子',
    translation: { zh: '桌子', pinyin: 'zhuō zi', en: 'table', mn: 'ширээ' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_6',
    word: '椅子',
    translation: { zh: '椅子', pinyin: 'yǐ zi', en: 'chair', mn: 'сандал' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_7',
    word: '铅笔',
    translation: { zh: '铅笔', pinyin: 'qiān bǐ', en: 'pencil', mn: 'харандаа' },
    category: 'Stationery', categoryZh: '文具', categoryEn: 'Stationery', categoryMn: 'Бичиг хэрэг',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_8',
    word: '书包',
    translation: { zh: '书包', pinyin: 'shū bāo', en: 'schoolbag', mn: 'цүнх' },
    category: 'Stationery', categoryZh: '文具', categoryEn: 'Stationery', categoryMn: 'Бичиг хэрэг',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_9',
    word: '里',
    translation: { zh: '里', pinyin: 'lǐ', en: 'inside', mn: 'дотор / дотор тал' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 2, lesson: 3
  },
  {
    id: 'y2_l3_10',
    word: '上',
    translation: { zh: '上', pinyin: 'shàng', en: 'on', mn: 'дээр / дээр тал' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 2, lesson: 3
  },

  // Lesson 4
  {
    id: 'y2_l4_1',
    word: '红色',
    translation: { zh: '红色', pinyin: 'hóng sè', en: 'red', mn: 'улаан өнгө' },
    category: 'Color', categoryZh: '颜色', categoryEn: 'Color', categoryMn: 'Өнгө',
    level: 2, lesson: 4
  },
  {
    id: 'y2_l4_2',
    word: '黄色',
    translation: { zh: '黄色', pinyin: 'huáng sè', en: 'yellow', mn: 'шар өнгө' },
    category: 'Color', categoryZh: '颜色', categoryEn: 'Color', categoryMn: 'Өнгө',
    level: 2, lesson: 4
  },
  {
    id: 'y2_l4_3',
    word: '绿色',
    translation: { zh: '绿色', pinyin: 'lǜ sè', en: 'green', mn: 'ногоон өнгө' },
    category: 'Color', categoryZh: '颜色', categoryEn: 'Color', categoryMn: 'Өнгө',
    level: 2, lesson: 4
  },
  {
    id: 'y2_l4_4',
    word: '漂亮',
    translation: { zh: '漂亮', pinyin: 'piào liang', en: 'beautiful', mn: 'үзэсгэлэнтэй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 2, lesson: 4
  },
  {
    id: 'y2_l4_5',
    word: '只',
    translation: { zh: '只', pinyin: 'zhī', en: '(measure word)', mn: 'толгой / ш' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 2, lesson: 4
  },
  {
    id: 'y2_l4_6',
    word: '两',
    translation: { zh: '两', pinyin: 'liǎng', en: 'two', mn: 'хоёр (хэмжээ)' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 2, lesson: 4
  },
  {
    id: 'y2_l4_7',
    word: '本',
    translation: { zh: '本', pinyin: 'běn', en: '(measure word)', mn: 'боть / ширхэг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 2, lesson: 4
  },

  // Lesson 5
  {
    id: 'y2_l5_1',
    word: '包子',
    translation: { zh: '包子', pinyin: 'bāo zi', en: 'steamed bun', mn: 'бууз' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 2, lesson: 5
  },
  {
    id: 'y2_l5_2',
    word: '医生',
    translation: { zh: '医生', pinyin: 'yī shēng', en: 'doctor', mn: 'эмч' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 2, lesson: 5
  },
  {
    id: 'y2_l5_3',
    word: '厨师',
    translation: { zh: '厨师', pinyin: 'chú shī', en: 'chef', mn: 'тогооч' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 2, lesson: 5
  },
  {
    id: 'y2_l5_4',
    word: '做饭',
    translation: { zh: '做饭', pinyin: 'zuò fàn', en: 'cook', mn: 'хоол хийх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 2, lesson: 5
  },
  {
    id: 'y2_l5_5',
    word: '好吃',
    translation: { zh: '好吃', pinyin: 'hǎo chī', en: 'delicious', mn: 'амттай' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 2, lesson: 5
  },

  // Lesson 6
  {
    id: 'y2_l6_1',
    word: '钱',
    translation: { zh: '钱', pinyin: 'qián', en: 'money', mn: 'мөнгө' },
    category: 'Stationery', categoryZh: '文具', categoryEn: 'Stationery', categoryMn: 'Бичиг хэрэг',
    level: 2, lesson: 6
  },
  {
    id: 'y2_l6_2',
    word: '茶',
    translation: { zh: '茶', pinyin: 'chá', en: 'tea', mn: 'цай' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 2, lesson: 6
  },
  {
    id: 'y2_l6_3',
    word: '买',
    translation: { zh: '买', pinyin: 'mǎi', en: 'buy', mn: 'худалдаж авах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 2, lesson: 6
  },
  {
    id: 'y2_l6_4',
    word: '块',
    translation: { zh: '块', pinyin: 'kuài', en: '(measure word)', mn: 'юань / хэсэг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 2, lesson: 6
  },
  {
    id: 'y2_l6_5',
    word: '杯',
    translation: { zh: '杯', pinyin: 'bēi', en: '(measure word)', mn: 'аяга' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 2, lesson: 6
  },

  // Lesson 7
  {
    id: 'y2_l7_1',
    word: '冷',
    translation: { zh: '冷', pinyin: 'lěng', en: 'cold', mn: 'хүйтэн' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 2, lesson: 7
  },
  {
    id: 'y2_l7_2',
    word: '热',
    translation: { zh: '热', pinyin: 'rè', en: 'hot', mn: 'халуун' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 2, lesson: 7
  },
  {
    id: 'y2_l7_3',
    word: '昨天',
    translation: { zh: '昨天', pinyin: 'zuó tiān', en: 'yesterday', mn: 'өчигдөр' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 2, lesson: 7
  },
  {
    id: 'y2_l7_4',
    word: '好喝',
    translation: { zh: '好喝', pinyin: 'hǎo hē', en: 'good to drink', mn: 'амттай ундаа' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 2, lesson: 7
  },
  {
    id: 'y2_l7_5',
    word: '冰水',
    translation: { zh: '冰水', pinyin: 'bīng shuǐ', en: 'ice water', mn: 'мөстэй ус' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 2, lesson: 7
  },

  // Lesson 8
  {
    id: 'y2_l8_1',
    word: '弟弟',
    translation: { zh: '弟弟', pinyin: 'dì di', en: 'little brother', mn: 'эрэгтэй дүү' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 2, lesson: 8
  },
  {
    id: 'y2_l8_2',
    word: '妹妹',
    translation: { zh: '妹妹', pinyin: 'mèi mei', en: 'little sister', mn: 'эмэгтэй дүү' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 2, lesson: 8
  },
  {
    id: 'y2_l8_3',
    word: '同学',
    translation: { zh: '同学', pinyin: 'tóng xué', en: 'classmate', mn: 'ангийн анд' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 2, lesson: 8
  },
  {
    id: 'y2_l8_4',
    word: '朋友',
    translation: { zh: '朋友', pinyin: 'péng you', en: 'friend', mn: 'найз' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ba дүр',
    level: 2, lesson: 8
  },
  {
    id: 'y2_l8_5',
    word: '学生',
    translation: { zh: '学生', pinyin: 'xué shēng', en: 'student', mn: 'сурагч' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 2, lesson: 8
  },

  // Lesson 9
  {
    id: 'y2_l9_1',
    word: '香蕉',
    translation: { zh: '香蕉', pinyin: 'xiāng jiāo', en: 'banana', mn: 'гадил' },
    category: 'Fruit', categoryZh: '水果', categoryEn: 'Fruit', categoryMn: 'Жимс',
    level: 2, lesson: 9
  },
  {
    id: 'y2_l9_2',
    word: '熊猫',
    translation: { zh: '熊猫', pinyin: 'xióng māo', en: 'panda', mn: 'хулсны баавгай' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 2, lesson: 9
  },
  {
    id: 'y2_l9_3',
    word: '画',
    translation: { zh: '画', pinyin: 'huà', en: 'draw', mn: 'зурах' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 2, lesson: 9
  },

  // Lesson 10
  {
    id: 'y2_l10_1',
    word: '脚',
    translation: { zh: '脚', pinyin: 'jiǎo', en: 'foot', mn: 'хөл' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 2, lesson: 10
  },
  {
    id: 'y2_l10_2',
    word: '医院',
    translation: { zh: '医院', pinyin: 'yī yuàn', en: 'hospital', mn: 'эмнэлэг' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 2, lesson: 10
  },
  {
    id: 'y2_l10_3',
    word: '疼',
    translation: { zh: '疼', pinyin: 'téng', en: 'hurt', mn: 'өвдөх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 2, lesson: 10
  },

  // Lesson 11
  {
    id: 'y2_l11_1',
    word: '零',
    translation: { zh: '零', pinyin: 'líng', en: 'zero', mn: 'тэг' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 2, lesson: 11
  },
  {
    id: 'y2_l11_2',
    word: '学习',
    translation: { zh: '学习', pinyin: 'xué xí', en: 'study', mn: 'суралцах' },
    category: 'Study', categoryZh: '学习', categoryEn: 'Study', categoryMn: 'Суралцах',
    level: 2, lesson: 11
  },
  {
    id: 'y2_l11_3',
    word: '玩',
    translation: { zh: '玩', pinyin: 'wán', en: 'play', mn: 'тоглох' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 2, lesson: 11
  },
  {
    id: 'y2_l11_4',
    word: '打电话',
    translation: { zh: '打电话', pinyin: 'dǎ diàn huà', en: 'make a call', mn: 'утасдах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 2, lesson: 11
  },



  // ==================== YCT LEVEL 3 ====================
  // Lesson 1
  {
    id: 'y3_l1_1',
    word: '新',
    translation: { zh: '新', pinyin: 'xīn', en: 'new', mn: 'шинэ' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 3, lesson: 1
  },
  {
    id: 'y3_l1_2',
    word: '男',
    translation: { zh: '男', pinyin: 'nán', en: 'male', mn: 'эрэгтэй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 3, lesson: 1
  },
  {
    id: 'y3_l1_3',
    word: '女',
    translation: { zh: '女', pinyin: 'nǚ', en: 'female', mn: 'эмэгтэй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 3, lesson: 1
  },

  // Lesson 2
  {
    id: 'y3_l2_1',
    word: '游泳',
    translation: { zh: '游泳', pinyin: 'yóu yǒng', en: 'swim', mn: 'усанд сэлэх' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 3, lesson: 2
  },
  {
    id: 'y3_l2_2',
    word: '打篮球',
    translation: { zh: '打篮球', pinyin: 'dǎ lán qiú', en: 'play basketball', mn: 'сагсан бөмбөг тоглох' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 3, lesson: 2
  },
  {
    id: 'y3_l2_3',
    word: '踢足球',
    translation: { zh: '踢足球', pinyin: 'tī zú qiú', en: 'play football', mn: 'хөлбөмбөг тоглох' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 3, lesson: 2
  },

  // Lesson 3
  {
    id: 'y3_l3_1',
    word: '太阳',
    translation: { zh: '太阳', pinyin: 'tài yáng', en: 'sun', mn: 'нар' },
    category: 'Nature', categoryZh: '自然', categoryEn: 'Nature', categoryMn: 'Байгаль',
    level: 3, lesson: 3
  },
  {
    id: 'y3_l3_2',
    word: '月亮',
    translation: { zh: '月亮', pinyin: 'yuè liang', en: 'moon', mn: 'сар' },
    category: 'Nature', categoryZh: '自然', categoryEn: 'Nature', categoryMn: 'Байгаль',
    level: 3, lesson: 3
  },
  {
    id: 'y3_l3_3',
    word: '跑步',
    translation: { zh: '跑步', pinyin: 'pǎo bù', en: 'run', mn: 'гүйх' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 3, lesson: 3
  },
  {
    id: 'y3_l3_4',
    word: '爷爷',
    translation: { zh: '爷爷', pinyin: 'yé ye', en: 'grandfather', mn: 'өвөө' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 3, lesson: 3
  },
  {
    id: 'y3_l3_5',
    word: '奶奶',
    translation: { zh: '奶奶', pinyin: 'nǎi nai', en: 'grandmother', mn: 'эмээ' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 3, lesson: 3
  },
  {
    id: 'y3_l3_6',
    word: '唱歌',
    translation: { zh: '唱歌', pinyin: 'chàng gē', en: 'sing', mn: 'дуулах' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 3, lesson: 3
  },
  {
    id: 'y3_l3_7',
    word: '跳舞',
    translation: { zh: '跳舞', pinyin: 'tiào wǔ', en: 'dance', mn: 'бүжиглэх' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 3, lesson: 3
  },

  // Lesson 4
  {
    id: 'y3_l4_1',
    word: '找',
    translation: { zh: '找', pinyin: 'zhǎo', en: 'look for', mn: 'хайх / олох' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 3, lesson: 4
  },
  {
    id: 'y3_l4_2',
    word: '问',
    translation: { zh: '问', pinyin: 'wèn', en: 'ask', mn: 'асуух' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 3, lesson: 4
  },

  // Lesson 5
  {
    id: 'y3_l5_1',
    word: '面条儿',
    translation: { zh: '面条儿', pinyin: 'miàn tiáo er', en: 'noodles', mn: 'гоймон' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 3, lesson: 5
  },
  {
    id: 'y3_l5_2',
    word: '饺子',
    translation: { zh: '饺子', pinyin: 'jiǎo zi', en: 'dumplets', mn: 'банш' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 3, lesson: 5
  },
  {
    id: 'y3_l5_3',
    word: '饿',
    translation: { zh: '饿', pinyin: 'è', en: 'hungry', mn: 'өлсөх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 3, lesson: 5
  },
  {
    id: 'y3_l5_4',
    word: '饱',
    translation: { zh: '饱', pinyin: 'bǎo', en: 'full', mn: 'цадах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 3, lesson: 5
  },
  {
    id: 'y3_l5_5',
    word: '给',
    translation: { zh: '给', pinyin: 'gěi', en: 'give', mn: 'өгөх' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 3, lesson: 5
  },

  // Lesson 6
  {
    id: 'y3_l6_1',
    word: '衣服',
    translation: { zh: '衣服', pinyin: 'yī fu', en: 'clothes', mn: 'хувцас' },
    category: 'Clothing', categoryZh: '服装说明', categoryEn: 'Clothing', categoryMn: 'Хувцас',
    level: 3, lesson: 6
  },
  {
    id: 'y3_l6_2',
    word: '穿',
    translation: { zh: '穿', pinyin: 'chuān', en: 'wear', mn: 'өмсөх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 3, lesson: 6
  },
  {
    id: 'y3_l6_3',
    word: '鞋',
    translation: { zh: '鞋', pinyin: 'xié', en: 'shoes', mn: 'гутал' },
    category: 'Clothing', categoryZh: '服装说明', categoryEn: 'Clothing', categoryMn: 'Хувцас',
    level: 3, lesson: 6
  },

  // Lesson 7
  {
    id: 'y3_l7_1',
    word: '生日',
    translation: { zh: '生日', pinyin: 'shēng rì', en: 'birthday', mn: 'төрсөн өдөр' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 3, lesson: 7
  },
  {
    id: 'y3_l7_2',
    word: '礼物',
    translation: { zh: '礼物', pinyin: 'lǐ wù', en: 'gift', mn: 'бэлэг' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 3, lesson: 7
  },
  {
    id: 'y3_l7_3',
    word: '花',
    translation: { zh: '花', pinyin: 'huā', en: 'flower', mn: 'цэцэг' },
    category: 'Plants', categoryZh: '植物', categoryEn: 'Plants', categoryMn: 'Ургамал',
    level: 3, lesson: 7
  },
  {
    id: 'y3_l7_4',
    word: '蛋糕',
    translation: { zh: '蛋糕', pinyin: 'dàn gāo', en: 'cake', mn: 'бялуу' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 3, lesson: 7
  },
  {
    id: 'y3_l7_5',
    word: '快乐',
    translation: { zh: '快乐', pinyin: 'kuài lè', en: 'happy', mn: 'аз жаргалтай' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 3, lesson: 7
  },
  {
    id: 'y3_l7_6',
    word: '送',
    translation: { zh: '送', pinyin: 'sòng', en: 'give / send', mn: 'бэлэглэх' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 3, lesson: 7
  },

  // Lesson 8
  {
    id: 'y3_l8_1',
    word: '下雪',
    translation: { zh: '下雪', pinyin: 'xià xuě', en: 'snow', mn: 'цас орох' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 3, lesson: 8
  },
  {
    id: 'y3_l8_2',
    word: '听',
    translation: { zh: '听', pinyin: 'tīng', en: 'listen', mn: 'сонсох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 3, lesson: 8
  },
  {
    id: 'y3_l8_3',
    word: '作业',
    translation: { zh: '作业', pinyin: 'zuò yè', en: 'homework', mn: 'гэрийн даалгавар' },
    category: 'Study', categoryZh: '学习', categoryEn: 'Study', categoryMn: 'Суралцах',
    level: 3, lesson: 8
  },
  {
    id: 'y3_l8_4',
    word: '外面',
    translation: { zh: '外面', pinyin: 'wài miàn', en: 'outside', mn: 'гадаа / гадна тал' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 3, lesson: 8
  },
  {
    id: 'y3_l8_5',
    word: '下雨',
    translation: { zh: '下雨', pinyin: 'xià yǔ', en: 'rain', mn: 'бороо орох' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 3, lesson: 8
  },

  // Lesson 9
  {
    id: 'y3_l9_1',
    word: '哭',
    translation: { zh: '哭', pinyin: 'kū', en: 'cry', mn: 'уйлах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 3, lesson: 9
  },
  {
    id: 'y3_l9_2',
    word: '笑',
    translation: { zh: '笑', pinyin: 'xiào', en: 'smile', mn: 'инээх / баясах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 3, lesson: 9
  },
  {
    id: 'y3_l9_3',
    word: '东西',
    translation: { zh: '东西', pinyin: 'dōng xi', en: 'thing', mn: 'юм / бараа' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 3, lesson: 9
  },

  // Lesson 10
  {
    id: 'y3_l10_1',
    word: '老虎',
    translation: { zh: '老虎', pinyin: 'lǎo hǔ', en: 'tiger', mn: 'бар' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 3, lesson: 10
  },
  {
    id: 'y3_l10_2',
    word: '胖',
    translation: { zh: '胖', pinyin: 'pàng', en: 'fat', mn: 'тарган' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 3, lesson: 10
  },
  {
    id: 'y3_l10_3',
    word: '瘦',
    translation: { zh: '瘦', pinyin: 'shòu', en: 'thin', mn: 'туранхай' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 3, lesson: 10
  },
  {
    id: 'y3_l10_4',
    word: '快',
    translation: { zh: '快', pinyin: 'kuài', en: 'fast', mn: 'хурдан' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 3, lesson: 10
  },

  // Lesson 11
  {
    id: 'y3_l11_1',
    word: '糖',
    translation: { zh: '糖', pinyin: 'táng', en: 'sugar', mn: 'чихэр' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 3, lesson: 11
  },
  {
    id: 'y3_l11_2',
    word: '西瓜',
    translation: { zh: '西瓜', pinyin: 'xī guā', en: 'watermelon', mn: 'тарвас' },
    category: 'Fruit', categoryZh: '水果', categoryEn: 'Fruit', categoryMn: 'Жимс',
    level: 3, lesson: 11
  },
  {
    id: 'y3_l11_3',
    word: '鸡蛋',
    translation: { zh: '鸡蛋', pinyin: 'jī dàn', en: 'egg', mn: 'өндөг' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 3, lesson: 11
  },

  // ==================== YCT LEVEL 4 ====================
  // Lesson 1
  {
    id: 'y4_l1_1',
    word: '手机',
    translation: { zh: '手机', pinyin: 'shǒu jī', en: 'mobile phone', mn: 'гар утас' },
    category: 'Electronics', categoryZh: '电子产品', categoryEn: 'Electronics', categoryMn: 'Цахим хэрэгсэл',
    level: 4, lesson: 1
  },
  {
    id: 'y4_l1_2',
    word: '电脑',
    translation: { zh: '电脑', pinyin: 'diàn nǎo', en: 'computer', mn: 'компьютер' },
    category: 'Electronics', categoryZh: '电子产品', categoryEn: 'Electronics', categoryMn: 'Цахим хэрэгсэл',
    level: 4, lesson: 1
  },
  {
    id: 'y4_l1_3',
    word: '零',
    translation: { zh: '零', pinyin: 'líng', en: 'zero', mn: 'тэг' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 4, lesson: 1
  },
  {
    id: 'y4_l1_4',
    word: '上网',
    translation: { zh: '上网', pinyin: 'shàng wǎng', en: 'go online', mn: 'интернэт орох' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 4, lesson: 1
  },
  {
    id: 'y4_l1_5',
    word: '百',
    translation: { zh: '百', pinyin: 'bǎi', en: 'hundred', mn: 'зуу' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 4, lesson: 1
  },
  {
    id: 'y4_l1_6',
    word: '千',
    translation: { zh: '千', pinyin: 'qiān', en: 'thousand', mn: 'мянга' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 4, lesson: 1
  },
  {
    id: 'y4_l1_7',
    word: '少',
    translation: { zh: '少', pinyin: 'shǎo', en: 'less', mn: 'цөөн' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 4, lesson: 1
  },
 
  // Lesson 3
  {
    id: 'y4_l3_1',
    word: '开',
    translation: { zh: '开', pinyin: 'kāi', en: 'open', mn: 'нээх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 3
  },
  {
    id: 'y4_l3_2',
    word: '关',
    translation: { zh: '关', pinyin: 'guān', en: 'close', mn: 'хаах / унтраах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 3
  },
  {
    id: 'y4_l3_3',
    word: '门',
    translation: { zh: '门', pinyin: 'mén', en: 'door', mn: 'хаалга' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 4, lesson: 3
  },
  {
    id: 'y4_l3_4',
    word: '杯子',
    translation: { zh: '杯子', pinyin: 'bēi zi', en: 'cup', mn: 'аяга' },
    category: 'Kitchenware', categoryZh: '餐具', categoryEn: 'Kitchenware', categoryMn: 'Гал тогооны хэрэгсэл',
    level: 4, lesson: 3
  },
  {
    id: 'y4_l3_5',
    word: '中午',
    translation: { zh: '中午', pinyin: 'zhōng wǔ', en: 'noon', mn: 'үд дунд' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 4, lesson: 3
  },
  {
    id: 'y4_l3_6',
    word: '卖',
    translation: { zh: '卖', pinyin: 'mài', en: 'sell', mn: 'зарах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 3
  },

  // Lesson 4
  {
    id: 'y4_l4_1',
    word: '舒服',
    translation: { zh: '舒服', pinyin: 'shū fu', en: 'comfortable', mn: 'тухтай' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 4, lesson: 4
  },
  {
    id: 'y4_l4_2',
    word: '生病',
    translation: { zh: '生病', pinyin: 'shēng bìng', en: 'be sick', mn: 'өвдөх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 4, lesson: 4
  },
  {
    id: 'y4_l4_3',
    word: '感冒',
    translation: { zh: '感冒', pinyin: 'gǎn mào', en: 'have a cold', mn: 'ханиад хүрэх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 4, lesson: 4
  },
  {
    id: 'y4_l4_4',
    word: '休息',
    translation: { zh: '休息', pinyin: 'xiū xi', en: 'rest', mn: 'амрах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 4
  },
  {
    id: 'y4_l4_5',
    word: '疼',
    translation: { zh: '疼', pinyin: 'téng', en: 'hurt', mn: 'өвдөх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 4, lesson: 4
  },
  {
    id: 'y4_l4_6',
    word: '药',
    translation: { zh: '药', pinyin: 'yào', en: 'medicine', mn: 'эм' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 4, lesson: 4
  },

  // Lesson 5
  {
    id: 'y4_l5_1',
    word: '果汁',
    translation: { zh: '果汁', pinyin: 'guǒ zhī', en: 'juice', mn: 'жимсний шүүс' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 4, lesson: 5
  },
  {
    id: 'y4_l5_2',
    word: '鱼',
    translation: { zh: '鱼', pinyin: 'yú', en: 'fish', mn: 'загас' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 4, lesson: 5
  },
  {
    id: 'y4_l5_3',
    word: '菜',
    translation: { zh: '菜', pinyin: 'cài', en: 'dish', mn: 'хоол / ногоо' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 4, lesson: 5
  },
  {
    id: 'y4_l5_4',
    word: '洗澡',
    translation: { zh: '洗澡', pinyin: 'xǐ zǎo', en: 'take a shower', mn: 'усанд орох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 5
  },

  // Lesson 6
  {
    id: 'y4_l6_1',
    word: '前',
    translation: { zh: '前', pinyin: 'qián', en: 'front', mn: 'өмнө' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 4, lesson: 6
  },
  {
    id: 'y4_l6_2',
    word: '后',
    translation: { zh: '后', pinyin: 'hòu', en: 'behind', mn: 'ард' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 4, lesson: 6
  },
  {
    id: 'y4_l6_3',
    word: '左',
    translation: { zh: '左', pinyin: 'zuǒ', en: 'left', mn: 'зүүн' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 4, lesson: 6
  },
  {
    id: 'y4_l6_4',
    word: '右',
    translation: { zh: '右', pinyin: 'yòu', en: 'right', mn: 'баруун' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 4, lesson: 6
  },
  {
    id: 'y4_l6_5',
    word: '教室',
    translation: { zh: '教室', pinyin: 'jiào shì', en: 'classroom', mn: 'анги танхим' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 4, lesson: 6
  },
  {
    id: 'y4_l6_6',
    word: '走',
    translation: { zh: '走', pinyin: 'zǒu', en: 'walk', mn: 'алхах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 6
  },

  // Lesson 7
  {
    id: 'y4_l7_1',
    word: '公共汽车',
    translation: { zh: '公共汽车', pinyin: 'gōng gòng qì chē', en: 'bus', mn: 'автобус' },
    category: 'Transportation', categoryZh: '交通工具', categoryEn: 'Transportation', categoryMn: 'Тээврийн хэрэгсэл',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_2',
    word: '动物园',
    translation: { zh: '动物园', pinyin: 'dòng wù yuán', en: 'zoo', mn: 'амьтны хүрээлэн' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_3',
    word: '车站',
    translation: { zh: '车站', pinyin: 'chē zhàn', en: 'station', mn: 'буудал' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_4',
    word: '开',
    translation: { zh: '开', pinyin: 'kāi', en: 'drive', mn: 'жолоодох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_5',
    word: '路',
    translation: { zh: '路', pinyin: 'lù', en: 'road', mn: 'зам' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_6',
    word: '远',
    translation: { zh: '远', pinyin: 'yuǎn', en: 'far', mn: 'хол' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_7',
    word: '近',
    translation: { zh: '近', pinyin: 'jìn', en: 'near', mn: 'ойр' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_8',
    word: '旁边',
    translation: { zh: '旁边', pinyin: 'páng biān', en: 'beside', mn: 'хажууд' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 4, lesson: 7
  },
  {
    id: 'y4_l7_9',
    word: '条',
    translation: { zh: '条', pinyin: 'tiáo', en: 'measure word', mn: 'ширхэг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 4, lesson: 7
  },

  // Lesson 8
  {
    id: 'y4_l8_1',
    word: '雨伞',
    translation: { zh: '雨伞', pinyin: 'yǔ sǎn', en: 'umbrella', mn: 'шүхэр' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 4, lesson: 8
  },
  {
    id: 'y4_l8_2',
    word: '拿',
    translation: { zh: '拿', pinyin: 'ná', en: 'take', mn: 'авах' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 4, lesson: 8
  },
  {
    id: 'y4_l8_3',
    word: '蓝',
    translation: { zh: '蓝', pinyin: 'lán', en: 'blue', mn: 'хөх' },
    category: 'Color', categoryZh: '颜色', categoryEn: 'Color', categoryMn: 'Өнгө',
    level: 4, lesson: 8
  },
  {
    id: 'y4_l8_4',
    word: '慢',
    translation: { zh: '慢', pinyin: 'màn', en: 'slow', mn: 'удаан' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 4, lesson: 8
  },

  // Lesson 9
  {
    id: 'y4_l9_1',
    word: '飞机',
    translation: { zh: '飞机', pinyin: 'fēi jī', en: 'plane', mn: 'онгоц' },
    category: 'Transportation', categoryZh: '交通工具', categoryEn: 'Transportation', categoryMn: 'Тээврийн хэрэгсэл',
    level: 4, lesson: 9
  },
  {
    id: 'y4_l9_2',
    word: '累',
    translation: { zh: '累', pinyin: 'lèi', en: 'tired', mn: 'ядарсан' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 4, lesson: 9
  },

  // Lesson 10
  {
    id: 'y4_l10_1',
    word: '电影',
    translation: { zh: '电影', pinyin: 'diàn yǐng', en: 'movie', mn: 'кино' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 4, lesson: 10
  },
  {
    id: 'y4_l10_2',
    word: '忙',
    translation: { zh: '忙', pinyin: 'máng', en: 'busy', mn: 'завгүй' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 4, lesson: 10
  },
  {
    id: 'y4_l10_3',
    word: '事情',
    translation: { zh: '事情', pinyin: 'shì qing', en: 'thing', mn: 'хэрэг явдал / ажил' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 4, lesson: 10
  },

  // Lesson 11
  {
    id: 'y4_l11_1',
    word: '裙子',
    translation: { zh: '裙子', pinyin: 'qún zi', en: 'dress', mn: 'юбка' },
    category: 'Clothing', categoryZh: '服装说明', categoryEn: 'Clothing', categoryMn: 'Хувцас',
    level: 4, lesson: 11
  },
  {
    id: 'y4_l11_2',
    word: '裤子',
    translation: { zh: '裤子', pinyin: 'kù zi', en: 'trousers', mn: 'өмд' },
    category: 'Clothing', categoryZh: '服装说明', categoryEn: 'Clothing', categoryMn: 'Хувцас',
    level: 4, lesson: 11
  },
  {
    id: 'y4_l11_3',
    word: '可爱',
    translation: { zh: '可爱', pinyin: 'kě ài', en: 'cute', mn: 'хөөрхөн' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 4, lesson: 11
  },
  {
    id: 'y4_l11_4',
    word: '白色',
    translation: { zh: '白色', pinyin: 'bái sè', en: 'white', mn: 'цагаан өнгө' },
    category: 'Color', categoryZh: '颜色', categoryEn: 'Color', categoryMn: 'Өнгө',
    level: 4, lesson: 11
  },
  {
    id: 'y4_l11_5',
    word: '黑色',
    translation: { zh: '黑色', pinyin: 'hēi sè', en: 'black', mn: 'хар өнгө' },
    category: 'Color', categoryZh: '颜色', categoryEn: 'Color', categoryMn: 'Өнгө',
    level: 4, lesson: 11
  },
  {
    id: 'y4_l11_6',
    word: '长',
    translation: { zh: '长', pinyin: 'zhǎng', en: 'grow', mn: 'өсөх' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 4, lesson: 11
  },
  {
    id: 'y4_l11_7',
    word: '件',
    translation: { zh: '件', pinyin: 'jiàn', en: 'measure word', mn: 'ширхэг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 4, lesson: 11
  },
  {
    id: 'y4_l11_8',
    word: '出生',
    translation: { zh: '出生', pinyin: 'chū shēng', en: 'be born', mn: 'төрөх' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 4, lesson: 11
  },

  // ==================== YCT LEVEL 5 ====================
  // Lesson 1
  {
    id: 'y5_l1_1',
    word: '功夫',
    translation: { zh: '功夫', pinyin: 'gōng fu', en: 'kung fu', mn: 'кунг-фу' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 1
  },
  {
    id: 'y5_l1_2',
    word: '飞',
    translation: { zh: '飞', pinyin: 'fēi', en: 'fly', mn: 'нисэх' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 5, lesson: 1
  },
  {
    id: 'y5_l1_3',
    word: '帮助',
    translation: { zh: '帮助', pinyin: 'bāng zhù', en: 'help', mn: 'туслах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 5, lesson: 1
  },

  // Lesson 2
  {
    id: 'y5_l2_1',
    word: '兔子',
    translation: { zh: '兔子', pinyin: 'tù zi', en: 'rabbit', mn: 'туулай' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 5, lesson: 2
  },
  {
    id: 'y5_l2_2',
    word: '大象',
    translation: { zh: '大象', pinyin: 'dà xiàng', en: 'elephant', mn: 'заан' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 5, lesson: 2
  },
  {
    id: 'y5_l2_3',
    word: '蝴蝶',
    translation: { zh: '蝴蝶', pinyin: 'hú dié', en: 'butterfly', mn: 'эрвээхэй' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 5, lesson: 2
  },
  {
    id: 'y5_l2_4',
    word: '虫子',
    translation: { zh: '虫子', pinyin: 'chóng zi', en: 'insect', mn: 'хорхой' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 5, lesson: 2
  },
  {
    id: 'y5_l2_5',
    word: '尾巴',
    translation: { zh: '尾巴', pinyin: 'wěi ba', en: 'tail', mn: 'сүүл' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 5, lesson: 2
  },
  {
    id: 'y5_l2_6',
    word: '矮',
    translation: { zh: '矮', pinyin: 'ǎi', en: 'short', mn: 'намхан' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 2
  },
  {
    id: 'y5_l2_7',
    word: '短',
    translation: { zh: '短', pinyin: 'duǎn', en: 'short', mn: 'богино' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 2
  },
  {
    id: 'y5_l2_8',
    word: '胖',
    translation: { zh: '胖', pinyin: 'pàng', en: 'fat', mn: 'тарган' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 2
  },

  // Lesson 3
  {
    id: 'y5_l3_1',
    word: '楼',
    translation: { zh: '楼', pinyin: 'lóu', en: 'building', mn: 'барилга' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 5, lesson: 3
  },
  {
    id: 'y5_l3_2',
    word: '空调',
    translation: { zh: '空调', pinyin: 'kōng tiáo', en: 'air conditioner', mn: 'агааржуулагч' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 5, lesson: 3
  },
  {
    id: 'y5_l3_3',
    word: '窗户',
    translation: { zh: '窗户', pinyin: 'chuāng hu', en: 'window', mn: 'цонх' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 5, lesson: 3
  },
  {
    id: 'y5_l3_4',
    word: '沙发',
    translation: { zh: '沙发', pinyin: 'shā fā', en: 'sofa', mn: 'буйдан' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 5, lesson: 3
  },
  {
    id: 'y5_l3_5',
    word: '洗手间',
    translation: { zh: '洗手间', pinyin: 'xǐ shǒu jiān', en: 'bathroom', mn: 'бие засах газар' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 5, lesson: 3
  },
  {
    id: 'y5_l3_6',
    word: '放',
    translation: { zh: '放', pinyin: 'fàng', en: 'put', mn: 'тавих' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 5, lesson: 3
  },

  // Lesson 4
  {
    id: 'y5_l4_1',
    word: '咖啡',
    translation: { zh: '咖啡', pinyin: 'kā fēi', en: 'coffee', mn: 'кофе' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 5, lesson: 4
  },
  {
    id: 'y5_l4_2',
    word: '弹钢琴',
    translation: { zh: '弹钢琴', pinyin: 'tán gāng qín', en: 'play the piano', mn: 'төгөлдөр хуур тоглох' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 4
  },
  {
    id: 'y5_l4_3',
    word: '公园',
    translation: { zh: '公园', pinyin: 'gōng yuán', en: 'park', mn: 'цэцэрлэгт хүрээлэн' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 5, lesson: 4
  },
  {
    id: 'y5_l4_4',
    word: '散步',
    translation: { zh: '散步', pinyin: 'sàn bù', en: 'take a walk', mn: 'салхинд алхах' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 4
  },
  {
    id: 'y5_l4_5',
    word: '爬山',
    translation: { zh: '爬山', pinyin: 'pá shān', en: 'climb mountain', mn: 'ууланд авирах' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 4
  },

  // Lesson 5
  {
    id: 'y5_l5_1',
    word: '儿子',
    translation: { zh: '儿子', pinyin: 'ér zi', en: 'son', mn: 'хүү' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_2',
    word: '阿姨',
    translation: { zh: '阿姨', pinyin: 'ā yí', en: 'aunt', mn: 'авга эгч' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_3',
    word: '帅',
    translation: { zh: '帅', pinyin: 'shuài', en: 'handsome', mn: 'царайлаг' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_4',
    word: '女儿',
    translation: { zh: '女儿', pinyin: 'nǚ ér', en: 'daughter', mn: 'охин' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_5',
    word: '年轻',
    translation: { zh: '年轻', pinyin: 'nián qīng', en: 'young', mn: 'залуу' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_6',
    word: '照相',
    translation: { zh: '照相', pinyin: 'zhào xiàng', en: 'take a photo', mn: 'зураг авах' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_7',
    word: '张',
    translation: { zh: '张', pinyin: 'zhāng', en: 'measure word', mn: 'ширхэг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_8',
    word: '照片',
    translation: { zh: '照片', pinyin: 'zhào piàn', en: 'photo', mn: 'зураг' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_9',
    word: '孩子',
    translation: { zh: '孩子', pinyin: 'hái zi', en: 'child', mn: 'хүүхэд' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_10',
    word: '叔叔',
    translation: { zh: '叔叔', pinyin: 'shū shu', en: 'uncle', mn: 'авга ах' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 5, lesson: 5
  },
  {
    id: 'y5_l5_11',
    word: '孙子',
    translation: { zh: '孙子', pinyin: 'sūn zi', en: 'grandson', mn: 'ач хүү' },
    category: 'Family Members', categoryZh: '家庭成员', categoryEn: 'Family Members', categoryMn: 'Гэр бүлийн гишүүд',
    level: 5, lesson: 5
  },

  // Lesson 6
  {
    id: 'y5_l6_1',
    word: '站',
    translation: { zh: '站', pinyin: 'zhàn', en: 'stand', mn: 'зогсох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 6
  },
  {
    id: 'y5_l6_2',
    word: '眼镜',
    translation: { zh: '眼镜', pinyin: 'yǎn jìng', en: 'glasses', mn: 'нүдний шил' },
    category: 'Accessories', categoryZh: '配饰', categoryEn: 'Accessories', categoryMn: 'Гоёл чимэглэл',
    level: 5, lesson: 6
  },
  {
    id: 'y5_l6_3',
    word: '项圈',
    translation: { zh: '项圈', pinyin: 'xiàng quān', en: 'collar', mn: 'хүзүүвч' },
    category: 'Accessories', categoryZh: '配饰', categoryEn: 'Accessories', categoryMn: 'Гоёл чимэглэл',
    level: 5, lesson: 6
  },
  {
    id: 'y5_l6_4',
    word: '号码',
    translation: { zh: '号码', pinyin: 'hào mǎ', en: 'number', mn: 'дугаар' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 5, lesson: 6
  },

  // Lesson 7
  {
    id: 'y5_l7_1',
    word: '锻炼',
    translation: { zh: '锻炼', pinyin: 'duàn liàn', en: 'exercise', mn: 'дасгал хийх' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 7
  },
  {
    id: 'y5_l7_2',
    word: '流汗',
    translation: { zh: '流汗', pinyin: 'liú hàn', en: 'sweat', mn: 'хөлрөх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 5, lesson: 7
  },
  {
    id: 'y5_l7_3',
    word: '网球',
    translation: { zh: '网球', pinyin: 'wǎng qiú', en: 'tennis', mn: 'теннис' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 7
  },
  {
    id: 'y5_l7_4',
    word: '排球',
    translation: { zh: '排球', pinyin: 'pái qiú', en: 'volleyball', mn: 'волейбол' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 7
  },
  {
    id: 'y5_l7_5',
    word: '乒乓球',
    translation: { zh: '乒乓球', pinyin: 'pīng pāng qiú', en: 'table tennis', mn: 'ширээний теннис' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 7
  },
  {
    id: 'y5_l7_6',
    word: '体育馆',
    translation: { zh: '体育馆', pinyin: 'tǐ yù guǎn', en: 'gym', mn: 'спортын ордон' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 5, lesson: 7
  },

  // Lesson 8
  {
    id: 'y5_l8_1',
    word: '晴',
    translation: { zh: '晴', pinyin: 'qíng', en: 'sunny', mn: 'цэлмэг' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_2',
    word: '阴',
    translation: { zh: '阴', pinyin: 'yīn', en: 'cloudy', mn: 'бүрхэг' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_3',
    word: '刮风',
    translation: { zh: '刮风', pinyin: 'guā fēng', en: 'windy', mn: 'салхилах' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_4',
    word: '春',
    translation: { zh: '春', pinyin: 'chūn', en: 'spring', mn: 'хавар' },
    category: 'Season', categoryZh: '季节', categoryEn: 'Season', categoryMn: 'Улирал',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_5',
    word: '夏',
    translation: { zh: '夏', pinyin: 'xià', en: 'summer', mn: 'зун' },
    category: 'Season', categoryZh: '季节', categoryEn: 'Season', categoryMn: 'Улирал',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_6',
    word: '秋',
    translation: { zh: '秋', pinyin: 'qiū', en: 'autumn', mn: 'намар' },
    category: 'Season', categoryZh: '季节', categoryEn: 'Season', categoryMn: 'Улирал',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_7',
    word: '冬',
    translation: { zh: '冬', pinyin: 'dōng', en: 'winter', mn: 'өвөл' },
    category: 'Season', categoryZh: '季节', categoryEn: 'Season', categoryMn: 'Улирал',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_8',
    word: '暖和',
    translation: { zh: '暖和', pinyin: 'nuǎn huo', en: 'warm', mn: 'дулаахан' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_9',
    word: '凉快',
    translation: { zh: '凉快', pinyin: 'liáng kuai', en: 'cool', mn: 'сэрүүн' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_10',
    word: '堆雪人',
    translation: { zh: '堆雪人', pinyin: 'duī xuě rén', en: 'make a snowman', mn: 'цасан хүн хийх' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 8
  },
  {
    id: 'y5_l8_11',
    word: '变化',
    translation: { zh: '变化', pinyin: 'biàn huà', en: 'change', mn: 'өөрчлөлт' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 5, lesson: 8
  },

  // Lesson 9
  {
    id: 'y5_l9_1',
    word: '饮料',
    translation: { zh: '饮料', pinyin: 'yǐn liào', en: 'drink', mn: 'ундаа' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_2',
    word: '巧克力',
    translation: { zh: '巧克力', pinyin: 'qiǎo kè lì', en: 'chocolate', mn: 'шоколад' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_3',
    word: '饼干',
    translation: { zh: '饼干', pinyin: 'bǐng gān', en: 'cookie', mn: 'жигнэмэг' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_4',
    word: '冰淇淋',
    translation: { zh: '冰淇淋', pinyin: 'bīng qí lín', en: 'ice cream', mn: 'зайрмаг' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_5',
    word: '玩具',
    translation: { zh: '玩具', pinyin: 'wán jù', en: 'toy', mn: 'тоглоом' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_6',
    word: '超市',
    translation: { zh: '超市', pinyin: 'chāo shì', en: 'supermarket', mn: 'супермаркет' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_7',
    word: '手表',
    translation: { zh: '手表', pinyin: 'shǒu biǎo', en: 'watch', mn: 'бугуйн цаг' },
    category: 'Accessories', categoryZh: '配饰', categoryEn: 'Accessories', categoryMn: 'Гоёл чимэглэл',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_8',
    word: '尝',
    translation: { zh: '尝', pinyin: 'cháng', en: 'taste', mn: 'амтлах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 9
  },
  {
    id: 'y5_l9_9',
    word: '办法',
    translation: { zh: '办法', pinyin: 'bàn fǎ', en: 'way', mn: 'арга' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 5, lesson: 9
  },

  // Lesson 10
  {
    id: 'y5_l10_1',
    word: '聊天儿',
    translation: { zh: '聊天儿', pinyin: 'liáo tiān er', en: 'chat', mn: 'ярилцах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 5, lesson: 10
  },

  // Lesson 11
  {
    id: 'y5_l11_1',
    word: '烤鸭',
    translation: { zh: '烤鸭', pinyin: 'kǎo yā', en: 'roast duck', mn: 'шарсан нугас' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_2',
    word: '服务员',
    translation: { zh: '服务员', pinyin: 'fú wù yuán', en: 'waiter', mn: 'зөөгч' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_3',
    word: '盘子',
    translation: { zh: '盘子', pinyin: 'pán zi', en: 'plate', mn: 'таваг' },
    category: 'Kitchenware', categoryZh: '餐具', categoryEn: 'Kitchenware', categoryMn: 'Гал тогооны хэрэгсэл',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_4',
    word: '碗',
    translation: { zh: '碗', pinyin: 'wǎn', en: 'bowl', mn: 'аяга' },
    category: 'Kitchenware', categoryZh: '餐具', categoryEn: 'Kitchenware', categoryMn: 'Гал тогооны хэрэгсэл',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_5',
    word: '筷子',
    translation: { zh: '筷子', pinyin: 'kuài zi', en: 'chopsticks', mn: 'савх' },
    category: 'Kitchenware', categoryZh: '餐具', categoryEn: 'Kitchenware', categoryMn: 'Гал тогооны хэрэгсэл',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_6',
    word: '盘',
    translation: { zh: '盘', pinyin: 'pán', en: 'measure word', mn: 'таваг (хэмжээ)' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_7',
    word: '碗',
    translation: { zh: '碗', pinyin: 'wǎn', en: 'measure word', mn: 'аяга (хэмжээ)' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_8',
    word: '叉子',
    translation: { zh: '叉子', pinyin: 'chā zi', en: 'fork', mn: 'сэрээ' },
    category: 'Kitchenware', categoryZh: '餐具', categoryEn: 'Kitchenware', categoryMn: 'Гал тогооны хэрэгсэл',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_9',
    word: '羊肉',
    translation: { zh: '羊肉', pinyin: 'yáng ròu', en: 'lamb', mn: 'хонины мах' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_10',
    word: '汤',
    translation: { zh: '汤', pinyin: 'tāng', en: 'soup', mn: 'шөл' },
    category: 'Drinks', categoryZh: '饮料', categoryEn: 'Drinks', categoryMn: 'Ундаа, уух зүйл',
    level: 5, lesson: 11
  },
  {
    id: 'y5_l11_11',
    word: '双',
    translation: { zh: '双', pinyin: 'shuāng', en: 'measure word', mn: 'хос' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 5, lesson: 11
  },

  // Lesson 12
  {
    id: 'y5_l12_1',
    word: '地铁',
    translation: { zh: '地铁', pinyin: 'dì tiě', en: 'subway', mn: 'метро' },
    category: 'Transportation', categoryZh: '交通工具', categoryEn: 'Transportation', categoryMn: 'Тээврийн хэрэгсэл',
    level: 5, lesson: 12
  },
  {
    id: 'y5_l12_2',
    word: '火车',
    translation: { zh: '火车', pinyin: 'huǒ chē', en: 'train', mn: 'гал тэрэг' },
    category: 'Transportation', categoryZh: '交通工具', categoryEn: 'Transportation', categoryMn: 'Тээврийн хэрэгсэл',
    level: 5, lesson: 12
  },

  // Lesson 13
  {
    id: 'y5_l13_1',
    word: '刷牙',
    translation: { zh: '刷牙', pinyin: 'shuā yá', en: 'brush teeth', mn: 'шүд угаах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 13
  },
  {
    id: 'y5_l13_2',
    word: '护士',
    translation: { zh: '护士', pinyin: 'hù shi', en: 'nurse', mn: 'сувилагч' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 5, lesson: 13
  },
  {
    id: 'y5_l13_3',
    word: '肚子',
    translation: { zh: '肚子', pinyin: 'dù zi', en: 'stomach', mn: 'гэдэс' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 5, lesson: 13
  },
  {
    id: 'y5_l13_4',
    word: '发烧',
    translation: { zh: '发烧', pinyin: 'fā shāo', en: 'have a fever', mn: 'халуурах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 5, lesson: 13
  },
  {
    id: 'y5_l13_5',
    word: '打针',
    translation: { zh: '打针', pinyin: 'dǎ zhēn', en: 'get an injection', mn: 'тариа хийлгэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 13
  },
  {
    id: 'y5_l13_6',
    word: '补牙',
    translation: { zh: '补牙', pinyin: 'bǔ yá', en: 'fix a tooth', mn: 'шүд ломбодуулах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 13
  },
  {
    id: 'y5_l13_7',
    word: '躺',
    translation: { zh: '躺', pinyin: 'tǎng', en: 'lie', mn: 'хэвтэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 13
  },

  // Lesson 14
  {
    id: 'y5_l14_1',
    word: '地图',
    translation: { zh: '地图', pinyin: 'dì tú', en: 'map', mn: 'газрын зураг' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 5, lesson: 14
  },
  {
    id: 'y5_l14_2',
    word: '小笼包',
    translation: { zh: '小笼包', pinyin: 'xiǎo lóng bāo', en: 'soup dumplings', mn: 'баози' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 5, lesson: 14
  },
  {
    id: 'y5_l14_3',
    word: '长城',
    translation: { zh: '长城', pinyin: 'cháng chéng', en: 'Great Wall', mn: 'Цагаан хэрэм' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 5, lesson: 14
  },
  {
    id: 'y5_l14_4',
    word: '旅游',
    translation: { zh: '旅游', pinyin: 'lǚ yóu', en: 'travel', mn: 'аялах' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 5, lesson: 14
  },
  
  // ==================== YCT LEVEL 6 ====================
  // Lesson 1
  {
    id: 'y6_l1_1',
    word: '勇敢',
    translation: { zh: '勇敢', pinyin: 'yǒng gǎn', en: 'brave', mn: 'зоригтой' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_2',
    word: '聪明',
    translation: { zh: '聪明', pinyin: 'cōng ming', en: 'clever', mn: 'ухаалаг' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_3',
    word: '祝贺',
    translation: { zh: '祝贺', pinyin: 'zhù hè', en: 'congratulate', mn: 'баяр хүргэх' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_4',
    word: '初中',
    translation: { zh: '初中', pinyin: 'chū zhōng', en: 'junior high school', mn: 'дунд сургууль' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_5',
    word: '挂',
    translation: { zh: '挂', pinyin: 'guà', en: 'hang', mn: 'өлгөх' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_6',
    word: '节日',
    translation: { zh: '节日', pinyin: 'jié rì', en: 'festival', mn: 'баяр наадам' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_7',
    word: '猴子',
    translation: { zh: '猴子', pinyin: 'hóu zi', en: 'monkey', mn: 'сармагчин' },
    category: 'Animals and Insects', categoryZh: '动物与昆虫', categoryEn: 'Animals and Insects', categoryMn: 'Амьтан, шавьж',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_8',
    word: '毕业',
    translation: { zh: '毕业', pinyin: 'bì yè', en: 'graduate', mn: 'төгсөх' },
    category: 'Study', categoryZh: '学习', categoryEn: 'Study', categoryMn: 'Суралцах',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_9',
    word: '信封',
    translation: { zh: '信封', pinyin: 'xìn fēng', en: 'envelope', mn: 'дугтуй' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_10',
    word: '春节',
    translation: { zh: '春节', pinyin: 'chūn jié', en: 'Spring Festival', mn: 'Цагаан сар' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 6, lesson: 1
  },
  {
    id: 'y6_l1_11',
    word: '灯笼',
    translation: { zh: '灯笼', pinyin: 'deng long', en: 'lantern', mn: 'дэнлүү' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 6, lesson: 1
  },

  // Lesson 2
  {
    id: 'y6_l2_1',
    word: '容易',
    translation: { zh: '容易', pinyin: 'róng yì', en: 'easy', mn: 'амархан' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 2
  },
  {
    id: 'y6_l2_2',
    word: '明白',
    translation: { zh: '明白', pinyin: 'míng bai', en: 'understand', mn: 'ойлгох' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 2
  },
  {
    id: 'y6_l2_3',
    word: '骑',
    translation: { zh: '骑', pinyin: 'qì', en: 'ride', mn: 'унах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 2
  },
  {
    id: 'y6_l2_4',
    word: '希望',
    translation: { zh: '希望', pinyin: 'xī wàng', en: 'hope', mn: 'найдах / хүсэх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 2
  },
  {
    id: 'y6_l2_5',
    word: '万',
    translation: { zh: '万', pinyin: 'wàn', en: 'ten thousand', mn: 'түм / арван mянга' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 6, lesson: 2
  },
  {
    id: 'y6_l2_6',
    word: '数学',
    translation: { zh: '数学', pinyin: 'shù xué', en: 'math', mn: 'математик' },
    category: 'Study', categoryZh: '学习', categoryEn: 'Study', categoryMn: 'Суралцах',
    level: 6, lesson: 2
  },
  {
    id: 'y6_l2_7',
    word: '自行车',
    translation: { zh: '自行车', pinyin: 'zì xíng chē', en: 'bike', mn: 'унадаг дугуй' },
    category: 'Transportation', categoryZh: '交通工具', categoryEn: 'Transportation', categoryMn: 'Тээврийн хэрэгсэл',
    level: 6, lesson: 2
  },
  {
    id: 'y6_l2_8',
    word: '比赛',
    translation: { zh: '比赛', pinyin: 'bǐ sài', en: 'competition', mn: 'тэмцээн' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 6, lesson: 2
  },

  // Lesson 3
  {
    id: 'y6_l3_1',
    word: '醒',
    translation: { zh: '醒', pinyin: 'xǐng', en: 'wake up', mn: 'сэрэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_2',
    word: '刻',
    translation: { zh: '刻', pinyin: 'kè', en: 'quarter', mn: '15 минут' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_3',
    word: '响',
    translation: { zh: '响', pinyin: 'xiǎng', en: 'ring', mn: 'дуугарах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_4',
    word: '着急',
    translation: { zh: '着急', pinyin: 'zháo jí', en: 'worried', mn: 'санаа зовох' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_5',
    word: '上班',
    translation: { zh: '上班', pinyin: 'shàng bān', en: 'go to work', mn: 'ажилдаа явах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_6',
    word: '闹钟',
    translation: { zh: '闹钟', pinyin: 'nào zhōng', en: 'alarm clock', mn: 'сэрүүлэгтэй цаг' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_7',
    word: '安静',
    translation: { zh: '安静', pinyin: 'ān jìng', en: 'quiet', mn: 'нам гүм / чимээгүй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_8',
    word: '起来',
    translation: { zh: '起来', pinyin: 'qǐ lai', en: 'get up', mn: 'босох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_9',
    word: '校园',
    translation: { zh: '校园', pinyin: 'xiào yuán', en: 'campus', mn: 'сургуулийн хашаа' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_10',
    word: '树',
    translation: { zh: '树', pinyin: 'shù', en: 'tree', mn: 'мод' },
    category: 'Plants', categoryZh: '植物', categoryEn: 'Plants', categoryMn: 'Ургамал',
    level: 6, lesson: 3
  },
  {
    id: 'y6_l3_11',
    word: '声音',
    translation: { zh: '声音', pinyin: 'shēng yīn', en: 'sound', mn: 'дуу чимээ' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 6, lesson: 3
  },

  // Lesson 4
  {
    id: 'y6_l4_1',
    word: '面粉',
    translation: { zh: '面粉', pinyin: 'miàn fěn', en: 'flour', mn: 'гурил' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_2',
    word: '接',
    translation: { zh: '接', pinyin: 'jiē', en: 'pick up', mn: 'авах / тосох' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_3',
    word: '够',
    translation: { zh: '够', pinyin: 'gòu', en: 'enough', mn: 'хангалттай' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_4',
    word: '打扫',
    translation: { zh: '打扫', pinyin: 'dǎ sǎo', en: 'clean', mn: 'цэвэрлэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_5',
    word: '干净',
    translation: { zh: '干净', pinyin: 'gān jìng', en: 'clean', mn: 'цэвэрхэн' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_6',
    word: '修剪',
    translation: { zh: '修剪', pinyin: 'xiū jiǎn', en: 'trim', mn: 'засах / тайрах' },
    category: 'Manual Actions', categoryZh: '手部动作', categoryEn: 'Manual Actions', categoryMn: 'Гарын үйлдэл',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_7',
    word: '照顾',
    translation: { zh: '照顾', pinyin: 'zhào gù', en: 'take care of', mn: 'асрах / халамжлах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_8',
    word: '睡着',
    translation: { zh: '睡着', pinyin: 'shuì zháo', en: 'fall asleep', mn: 'унтах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_9',
    word: '生活',
    translation: { zh: '生活', pinyin: 'shēng huó', en: 'life', mn: 'амьдрал' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_10',
    word: '斤',
    translation: { zh: '斤', pinyin: 'jīn', en: 'jin', mn: 'жин' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_11',
    word: '葡萄',
    translation: { zh: '葡萄', pinyin: 'pú tao', en: 'grape', mn: 'усан үзэм' },
    category: 'Fruit', categoryZh: '水果', categoryEn: 'Fruit', categoryMn: 'Жимс',
    level: 6, lesson: 4
  },
  {
    id: 'y6_l4_12',
    word: '草地',
    translation: { zh: '草地', pinyin: 'cǎo dì', en: 'lawn', mn: 'зүлэг' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 4
  },

  // Lesson 5
  {
    id: 'y6_l5_1',
    word: '表扬',
    translation: { zh: '表扬', pinyin: 'biǎo yáng', en: 'praise', mn: 'сайшаах / магтах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 6, lesson: 5
  },
  {
    id: 'y6_l5_2',
    word: '有意思',
    translation: { zh: '有意思', pinyin: 'yǒu yì si', en: 'interesting', mn: 'сонирхолтой' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 5
  },
  {
    id: 'y6_l5_3',
    word: '马虎',
    translation: { zh: '马虎', pinyin: 'mǎ hu', en: 'careless', mn: 'хайнга / анхааралгүй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 5
  },
  {
    id: 'y6_l5_4',
    word: '错',
    translation: { zh: '错', pinyin: 'cuò', en: 'wrong', mn: 'буруу' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 5
  },
  {
    id: 'y6_l5_5',
    word: '渴',
    translation: { zh: '渴', pinyin: 'kě', en: 'thirsty', mn: 'цангах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 5
  },
  {
    id: 'y6_l5_6',
    word: '停',
    translation: { zh: '停', pinyin: 'tíng', en: 'stop', mn: 'зогсох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 5
  },
  {
    id: 'y6_l5_7',
    word: '钥匙',
    translation: { zh: '钥匙', pinyin: 'yào shi', en: 'key', mn: 'түлхүүр' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 6, lesson: 5
  },
  {
    id: 'y6_l5_8',
    word: '生气',
    translation: { zh: '生气', pinyin: 'shēng qì', en: 'angry', mn: 'уурлах' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 5
  },

  // Lesson 6
  {
    id: 'y6_l6_1',
    word: '警察',
    translation: { zh: '警察', pinyin: 'jǐng chá', en: 'police', mn: 'цагдаа' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_2',
    word: '售票员',
    translation: { zh: '售票员', pinyin: 'shòu piào yuán', en: 'ticket seller', mn: 'тасалбар түгээгч' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_3',
    word: '记者',
    translation: { zh: '记者', pinyin: 'jì zhě', en: 'reporter', mn: 'сурвалжлагч' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_4',
    word: '演员',
    translation: { zh: '演员', pinyin: 'yǎn yuán', en: 'actor', mn: 'жүжигчин' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_5',
    word: '表演',
    translation: { zh: '表演', pinyin: 'biǎo yǎn', en: 'perform', mn: 'тоглох / үзүүлэх' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_6',
    word: '节目',
    translation: { zh: '节目', pinyin: 'jié mù', en: 'program', mn: 'нэвтрүүлэг / хөтөлбөр' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_7',
    word: '电灯',
    translation: { zh: '电灯', pinyin: 'diàn dēng', en: 'electric light', mn: 'чийдэн' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_8',
    word: '当',
    translation: { zh: '当', pinyin: 'dāng', en: 'be', mn: 'болох / ажиллах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_9',
    word: '重要',
    translation: { zh: '重要', pinyin: 'zhòng yào', en: 'important', mn: 'чухал' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_10',
    word: '看见',
    translation: { zh: '看见', pinyin: 'kàn jiàn', en: 'see', mn: 'харах үзэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 6
  },
  {
    id: 'y6_l6_11',
    word: '新闻',
    translation: { zh: '新闻', pinyin: 'xīn wén', en: 'news', mn: 'мэдээ' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 6, lesson: 6
  },

  // Lesson 7
  {
    id: 'y6_l7_1',
    word: '词典',
    translation: { zh: '词典', pinyin: 'cí diǎn', en: 'dictionary', mn: 'толь бичиг' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_2',
    word: '脸',
    translation: { zh: '脸', pinyin: 'liàn', en: 'face', mn: 'нүүр' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_3',
    word: '圆',
    translation: { zh: '圆', pinyin: 'yuán', en: 'round', mn: 'дугуй / бөөрөнхий' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_4',
    word: '先生',
    translation: { zh: '先生', pinyin: 'xiān sheng', en: 'sir', mn: 'ноён' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_5',
    word: '儿童车',
    translation: { zh: '儿童车', pinyin: 'ér tóng chē', en: 'baby stroller', mn: 'хүүхдийн тэрэг' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_6',
    word: '借',
    translation: { zh: '借', pinyin: 'jiè', en: 'borrow', mn: 'зээлэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_7',
    word: '页',
    translation: { zh: '页', pinyin: 'yè', en: 'page', mn: 'хуудас' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_8',
    word: '像',
    translation: { zh: '像', pinyin: 'xiàng', en: 'like', mn: 'адилхан' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 7
  },
  {
    id: 'y6_l7_9',
    word: '牌子',
    translation: { zh: '牌子', pinyin: 'pái zi', en: 'sign', mn: 'хаяг / брэнд' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 6, lesson: 7
  },

  // Lesson 8
  {
    id: 'y6_l8_1',
    word: '鱼缸',
    translation: { zh: '鱼缸', pinyin: 'yú gāng', en: 'fish tank', mn: 'загасны шилэн хорго' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 6, lesson: 8
  },
  {
    id: 'y6_l8_2',
    word: '种',
    translation: { zh: '种', pinyin: 'zhǒng', en: 'kind', mn: 'төрөл / зүйл' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 6, lesson: 8
  },
  {
    id: 'y6_l8_3',
    word: '游戏',
    translation: { zh: '游戏', pinyin: 'yóu xì', en: 'game', mn: 'тоглоом' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 6, lesson: 8
  },
  {
    id: 'y6_l8_4',
    word: '批评',
    translation: { zh: '批评', pinyin: 'pī píng', en: 'criticize', mn: 'шүүмжлэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 8
  },
  {
    id: 'y6_l8_5',
    word: '开始',
    translation: { zh: '开始', pinyin: 'kāi shǐ', en: 'start', mn: 'эхлэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 8
  },
  {
    id: 'y6_l8_6',
    word: '破',
    translation: { zh: '破', pinyin: 'pò', en: 'broken', mn: 'эвдэрсэн / урагдсан' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 8
  },
  {
    id: 'y6_l8_7',
    word: '难过',
    translation: { zh: '难过', pinyin: 'nán guò', en: 'sad', mn: 'гунигтай' },
    category: 'Feelings', categoryZh: '情绪与感觉', categoryEn: 'Feelings & Emotions', categoryMn: 'Сэтгэл хөдлөл',
    level: 6, lesson: 8
  },

  // Lesson 9
  {
    id: 'y6_l9_1',
    word: '图书馆',
    translation: { zh: '图书馆', pinyin: 'tú shū guǎn', en: 'library', mn: 'номын сан' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_2',
    word: '报纸',
    translation: { zh: '报纸', pinyin: 'bào zhǐ', en: 'newspaper', mn: 'сонин' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_3',
    word: '杂志',
    translation: { zh: '杂志', pinyin: 'zá zhì', en: 'magazine', mn: 'сэтгүүл' },
    category: 'Daily Necessities', categoryZh: '日常用品', categoryEn: 'Daily Necessities', categoryMn: 'Өдөр тутмын хэрэглэл',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_4',
    word: '超人',
    translation: { zh: '超人', pinyin: 'chāo rén', en: 'superman', mn: 'супермэн' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_5',
    word: '搬家',
    translation: { zh: '搬家', pinyin: 'bān jiā', en: 'move house', mn: 'нүүх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_6',
    word: '附近',
    translation: { zh: '附近', pinyin: 'fù jìn', en: 'nearby', mn: 'ойр орчим' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_7',
    word: '出发',
    translation: { zh: '出发', pinyin: 'chū fā', en: 'set off', mn: 'хөдлөх / замд гарах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_8',
    word: '见面',
    translation: { zh: '见面', pinyin: 'jiàn miàn', en: 'meet', mn: 'уулзах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_9',
    word: '行',
    translation: { zh: '行', pinyin: 'xíng', en: 'OK', mn: 'болно / зүгээр' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_10',
    word: '力气',
    translation: { zh: '力气', pinyin: 'lì qi', en: 'strength', mn: 'хүч чадал' },
    category: 'Body Parts', categoryZh: '身体部位', categoryEn: 'Body Parts', categoryMn: 'Биеийн хэсэг',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_11',
    word: '老',
    translation: { zh: '老', pinyin: 'lǎo', en: 'old', mn: 'хөгшин' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_12',
    word: '电子邮件',
    translation: { zh: '电子邮件', pinyin: 'diàn zǐ yóu jiàn', en: 'email', mn: 'цахим шуудан' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 6, lesson: 9
  },
  {
    id: 'y6_l9_13',
    word: '故事',
    translation: { zh: '故事', pinyin: 'gù shi', en: 'story', mn: 'үлгэр' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 6, lesson: 9
  },

  // Lesson 10
  {
    id: 'y6_l10_1',
    word: '月饼',
    translation: { zh: '月饼', pinyin: 'yuè bǐng', en: 'mooncake', mn: 'саран боов' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 6, lesson: 10
  },
  {
    id: 'y6_l10_2',
    word: '大海',
    translation: { zh: '大海', pinyin: 'dà hǎi', en: 'sea', mn: 'далай' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 10
  },
  {
    id: 'y6_l10_3',
    word: '草原',
    translation: { zh: '草原', pinyin: 'cǎo yuán', en: 'grassland', mn: 'тал нутаг' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 10
  },
  {
    id: 'y6_l10_4',
    word: '云',
    translation: { zh: '云', pinyin: 'yún', en: 'cloud', mn: 'үүл' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 6, lesson: 10
  },
  {
    id: 'y6_l10_5',
    word: '骑马',
    translation: { zh: '骑马', pinyin: 'qí mǎ', en: 'ride a horse', mn: 'морь унах' },
    category: 'Sports/Hobby', categoryZh: '运动与兴趣', categoryEn: 'Sports/Hobby', categoryMn: 'Спорт, сонирхол',
    level: 6, lesson: 10
  },
  {
    id: 'y6_l10_6',
    word: '星星',
    translation: { zh: '星星', pinyin: 'xīng xing', en: 'star', mn: 'од' },
    category: 'Weather', categoryZh: '天气', categoryEn: 'Weather', categoryMn: 'Цаг агаар',
    level: 6, lesson: 10
  },
  {
    id: 'y6_l10_7',
    word: '公里',
    translation: { zh: '公里', pinyin: 'gōng lǐ', en: 'kilometer', mn: 'километр' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 6, lesson: 10
  },
  {
    id: 'y6_l10_8',
    word: '离',
    translation: { zh: '离', pinyin: 'lí', en: 'away from', mn: 'холдох' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 6, lesson: 10
  },

  // Lesson 11
  {
    id: 'y6_l11_1',
    word: '元',
    translation: { zh: '元', pinyin: 'yuán', en: 'yuan', mn: 'юань' },
    category: 'Numbers', categoryZh: '数字', categoryEn: 'Numbers', categoryMn: 'Тоо',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_2',
    word: '贵',
    translation: { zh: '贵', pinyin: 'guì', en: 'expensive', mn: 'үнэтэй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_3',
    word: '花',
    translation: { zh: '花', pinyin: 'huā', en: 'spend', mn: 'зарцуулах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_4',
    word: '帽子',
    translation: { zh: '帽子', pinyin: 'mào zi', en: 'hat', mn: 'малгай' },
    category: 'Clothing', categoryZh: '服装说明', categoryEn: 'Clothing', categoryMn: 'Хувцас',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_5',
    word: '换',
    translation: { zh: '换', pinyin: 'huàn', en: 'change', mn: 'солих' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_6',
    word: '旧',
    translation: { zh: '旧', pinyin: 'jiù', en: 'old', mn: 'хуучин' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_7',
    word: '试',
    translation: { zh: '试', pinyin: 'shì', en: 'try', mn: 'туршиж үзэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_8',
    word: '合适',
    translation: { zh: '合适', pinyin: 'hé shì', en: 'suitable', mn: 'тохиромжтой' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_9',
    word: '辆',
    translation: { zh: '辆', pinyin: 'liàng', en: 'measure word', mn: 'ширхэг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_10',
    word: '紧张',
    translation: { zh: '紧张', pinyin: 'jǐn zhāng', en: 'nervous', mn: 'сандарсан' },
    category: 'Feelings', categoryZh: '情绪与感觉', categoryEn: 'Feelings & Emotions', categoryMn: 'Сэтгэл хөдлөл',
    level: 6, lesson: 11
  },
  {
    id: 'y6_l11_11',
    word: '害怕',
    translation: { zh: '害怕', pinyin: 'hài pà', en: 'afraid', mn: 'айх' },
    category: 'Feelings', categoryZh: '情绪与感觉', categoryEn: 'Feelings & Emotions', categoryMn: 'Сэтгэл хөдлөл',
    level: 6, lesson: 11
  },

  // Lesson 12
  {
    id: 'y6_l12_1',
    word: '身',
    translation: { zh: '身', pinyin: 'shēn', en: 'measure word', mn: 'хослол' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 6, lesson: 12
  },
  {
    id: 'y6_l12_2',
    word: '礼貌',
    translation: { zh: '礼貌', pinyin: 'lǐ mào', en: 'polite', mn: 'боловсон / эелдэг' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 12
  },
  {
    id: 'y6_l12_3',
    word: '小心',
    translation: { zh: '小心', pinyin: 'xiǎo xīn', en: 'careful', mn: 'болгоомжтой' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 12
  },
  {
    id: 'y6_l12_4',
    word: '危险',
    translation: { zh: '危险', pinyin: 'wēi xiǎn', en: 'dangerous', mn: 'аюултай' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 12
  },
  {
    id: 'y6_l12_5',
    word: '脱',
    translation: { zh: '脱', pinyin: 'tuō', en: 'take off', mn: 'тайлах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 12
  },
  {
    id: 'y6_l12_6',
    word: '排队',
    translation: { zh: '排队', pinyin: 'pái duì', en: 'line up', mn: 'оочирлох / жагсах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 12
  },
  {
    id: 'y6_l12_7',
    word: '中间',
    translation: { zh: '中间', pinyin: 'zhōng jiān', en: 'middle', mn: 'дунд / дундаж' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 6, lesson: 12
  },

  // Lesson 13
  {
    id: 'y6_l13_1',
    word: '辣',
    translation: { zh: '辣', pinyin: 'là', en: 'spicy', mn: 'халуун ногоотой' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_2',
    word: '甜',
    translation: { zh: '甜', pinyin: 'tián', en: 'sweet', mn: 'чихэрлэг' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_3',
    word: '盒',
    translation: { zh: '盒', pinyin: 'hé', en: 'measure word', mn: 'хайрцаг' },
    category: 'Measure Words', categoryZh: '量词', categoryEn: 'Measure Words', categoryMn: 'Хэмжих үгс',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_4',
    word: '同意',
    translation: { zh: '同意', pinyin: 'tóng yì', en: 'agree', mn: 'зөвшөөрөх' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_5',
    word: '讨论',
    translation: { zh: '讨论', pinyin: 'tǎo lùn', en: 'discuss', mn: 'хэлэлцэх' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_6',
    word: '冰箱',
    translation: { zh: '冰箱', pinyin: 'bīng xiāng', en: 'refrigerator', mn: 'хөргөгч' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_7',
    word: '西红柿',
    translation: { zh: '西红柿', pinyin: 'xī hóng shì', en: 'tomato', mn: 'улаан лооль' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_8',
    word: '瘦',
    translation: { zh: '瘦', pinyin: 'shòu', en: 'thin', mn: 'туранхай' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 13
  },
  {
    id: 'y6_l13_9',
    word: '糖',
    translation: { zh: '糖', pinyin: 'táng', en: 'sugar', mn: 'чихэр' },
    category: 'Food', categoryZh: '食品', categoryEn: 'Food', categoryMn: 'Хоол хүнс',
    level: 6, lesson: 13
  },

  // Lesson 14
  {
    id: 'y6_l14_1',
    word: '打扰',
    translation: { zh: '打扰', pinyin: 'dǎ rǎo', en: 'excuse me', mn: 'саад болох' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_2',
    word: '熟悉',
    translation: { zh: '熟悉', pinyin: 'shú xi', en: 'familiar', mn: 'сайн мэдэх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_3',
    word: '清楚',
    translation: { zh: '清楚', pinyin: 'qīng chu', en: 'clear', mn: 'тодорхой / цэвэр' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_4',
    word: '小姐',
    translation: { zh: '小姐', pinyin: 'xiǎo jie', en: 'Miss', mn: 'бүсгүй' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_5',
    word: '东',
    translation: { zh: '东', pinyin: 'dōng', en: 'east', mn: 'зүүн' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_6',
    word: '西',
    translation: { zh: '西', pinyin: 'xī', en: 'west', mn: 'баруун' },
    category: 'Direction', categoryZh: '方位', categoryEn: 'Direction', categoryMn: 'Зүг чиглэл',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_7',
    word: '竹子',
    translation: { zh: '竹子', pinyin: 'zhú zi', en: 'bamboo', mn: 'хулс' },
    category: 'Plants', categoryZh: '植物', categoryEn: 'Plants', categoryMn: 'Ургамал',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_8',
    word: '往',
    translation: { zh: '往', pinyin: 'wǎng', en: 'toward', mn: 'чиглэл рүү' },
    category: '', categoryZh: '', categoryEn: '', categoryMn: '',
    level: 6, lesson: 14
  },
  {
    id: 'y6_l14_9',
    word: '转',
    translation: { zh: '转', pinyin: 'zhuǎn', en: 'turn', mn: 'эргэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 14
  },
  // Added by user request:
  {
    id: 'add_y1_l10_1',
    word: '见',
    translation: { zh: '见', pinyin: 'jiàn', en: 'meet', mn: 'уулзах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 1, lesson: 10
  },
  {
    id: 'add_y2_l11_1',
    word: '分钟',
    translation: { zh: '分钟', pinyin: 'fēn zhōng', en: 'minute', mn: 'минут' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 2, lesson: 11
  },
  {
    id: 'add_y2_l11_2',
    word: '来',
    translation: { zh: '来', pinyin: 'lái', en: 'come', mn: 'ирэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 2, lesson: 11
  },
  {
    id: 'add_y2_l11_3',
    word: '年',
    translation: { zh: '年', pinyin: 'nián', en: 'year', mn: 'жил' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 2, lesson: 11
  },
  {
    id: 'add_y3_l2_1',
    word: '欢迎',
    translation: { zh: '欢迎', pinyin: 'huān yíng', en: 'welcome', mn: 'тавтай морил' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 3, lesson: 2
  },
  {
    id: 'add_y3_l4_1',
    word: '回',
    translation: { zh: '回', pinyin: 'huí', en: 'go back', mn: 'буцах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 3, lesson: 4
  },
  {
    id: 'add_y3_l5_1',
    word: '想',
    translation: { zh: '想', pinyin: 'xiǎng', en: 'think', mn: 'бодох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 3, lesson: 5
  },
  {
    id: 'add_y3_l8_1',
    word: '出',
    translation: { zh: '出', pinyin: 'chū', en: 'go out', mn: 'гарах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 3, lesson: 8
  },
  {
    id: 'add_y3_l9_1',
    word: '丢',
    translation: { zh: '丢', pinyin: 'diū', en: 'lose', mn: 'гээх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 3, lesson: 9
  },
  {
    id: 'add_y4_l2_1',
    word: '小时',
    translation: { zh: '小时', pinyin: 'xiǎo shí', en: 'hour', mn: 'цаг' },
    category: 'Time', categoryZh: '时间与日期', categoryEn: 'Time', categoryMn: 'Цаг хугацаа',
    level: 4, lesson: 2
  },
  {
    id: 'add_y4_l6_1',
    word: '进',
    translation: { zh: '进', pinyin: 'jìn', en: 'come in', mn: 'орох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 6
  },
  {
    id: 'add_y4_l8_1',
    word: '坏',
    translation: { zh: '坏', pinyin: 'huài', en: 'bad', mn: 'муу' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 4, lesson: 8
  },
  {
    id: 'add_y4_l8_2',
    word: '迟到',
    translation: { zh: '迟到', pinyin: 'chí dào', en: 'be late', mn: 'хоцрох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 4, lesson: 8
  },
  {
    id: 'add_y5_l1_1',
    word: '感兴趣',
    translation: { zh: '感兴趣', pinyin: 'gǎn xìng qù', en: 'be interested in', mn: 'сонирхох' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 5, lesson: 1
  },
  {
    id: 'add_y5_l1_2',
    word: '厉害',
    translation: { zh: '厉害', pinyin: 'lì hai', en: 'awesome', mn: 'мундаг' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 1
  },
  {
    id: 'add_y5_l2_1',
    word: '讨厌',
    translation: { zh: '讨厌', pinyin: 'tǎo yàn', en: 'hate', mn: 'дургүйцэх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 5, lesson: 2
  },
  {
    id: 'add_y5_l2_2',
    word: '告诉',
    translation: { zh: '告诉', pinyin: 'gào su', en: 'tell', mn: 'хэлэх' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 5, lesson: 2
  },
  {
    id: 'add_y5_l3_1',
    word: '电梯',
    translation: { zh: '电梯', pinyin: 'diàn tī', en: 'elevator', mn: 'цахилгаан шат' },
    category: 'Home/Appliances', categoryZh: '家具电器', categoryEn: 'Home/Appliances', categoryMn: 'Гэр ба тавилга',
    level: 5, lesson: 3
  },
  {
    id: 'add_y5_l3_2',
    word: '等',
    translation: { zh: '等', pinyin: 'děng', en: 'wait', mn: 'хүлээх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 3
  },
  {
    id: 'add_y5_l3_3',
    word: '住',
    translation: { zh: '住', pinyin: 'zhù', en: 'live', mn: 'амьдрах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 3
  },
  {
    id: 'add_y5_l4_1',
    word: '邻居',
    translation: { zh: '邻居', pinyin: 'lín jū', en: 'neighbor', mn: 'хөрш' },
    category: 'Roles', categoryZh: '人物角色', categoryEn: 'Roles', categoryMn: 'Мэргэжил ба дүр',
    level: 5, lesson: 4
  },
  {
    id: 'add_y5_l4_2',
    word: '习惯',
    translation: { zh: '习惯', pinyin: 'xí guàn', en: 'habit', mn: 'зуршил' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 4
  },
  {
    id: 'add_y5_l4_3',
    word: '奇怪',
    translation: { zh: '奇怪', pinyin: 'qǐ guài', en: 'strange', mn: 'хачин' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 4
  },
  {
    id: 'add_y5_l6_1',
    word: '戴',
    translation: { zh: '戴', pinyin: 'dài', en: 'wear', mn: 'зүүх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 6
  },
  {
    id: 'add_y5_l6_2',
    word: '联系',
    translation: { zh: '联系', pinyin: 'lián xì', en: 'contact', mn: 'холбоо барих' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 5, lesson: 6
  },
  {
    id: 'add_y5_l7_1',
    word: '选择',
    translation: { zh: '选择', pinyin: 'xuǎn zé', en: 'choose', mn: 'сонгох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 7
  },
  {
    id: 'add_y5_l7_2',
    word: '健康',
    translation: { zh: '健康', pinyin: 'jiàn kāng', en: 'healthy', mn: 'эрүүл' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 7
  },
  {
    id: 'add_y5_l7_3',
    word: '心情',
    translation: { zh: '心情', pinyin: 'xīn qíng', en: 'mood', mn: 'сэтгэл санаа' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 5, lesson: 7
  },
  {
    id: 'add_y5_l10_1',
    word: '准备',
    translation: { zh: '准备', pinyin: 'zhǔn bèi', en: 'prepare', mn: 'бэлтгэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 10
  },
  {
    id: 'add_y5_l10_2',
    word: '努力',
    translation: { zh: '努力', pinyin: 'nǔ lì', en: 'hard', mn: 'хичээнгүй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 10
  },
  {
    id: 'add_y5_l10_3',
    word: '认真',
    translation: { zh: '认真', pinyin: 'rèn zhēn', en: 'seriously', mn: 'нухацтай' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 10
  },
  {
    id: 'add_y5_l10_4',
    word: '相信',
    translation: { zh: '相信', pinyin: 'xiāng xìn', en: 'believe', mn: 'итгэх' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 5, lesson: 10
  },
  {
    id: 'add_y5_l11_1',
    word: '离开',
    translation: { zh: '离开', pinyin: 'lí kāi', en: 'leave', mn: 'явах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 11
  },
  {
    id: 'add_y5_l12_1',
    word: '担心',
    translation: { zh: '担心', pinyin: 'dān xīn', en: 'worry', mn: 'санаа зовох' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 5, lesson: 12
  },
  {
    id: 'add_y5_l12_2',
    word: '工作',
    translation: { zh: '工作', pinyin: 'gōng zuò', en: 'work', mn: 'ажиллах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 12
  },
  {
    id: 'add_y5_l12_3',
    word: '出差',
    translation: { zh: '出差', pinyin: 'chū chāi', en: 'go on business', mn: 'томилолтоор явах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 12
  },
  {
    id: 'add_y5_l12_4',
    word: '安全',
    translation: { zh: '安全', pinyin: 'ān quán', en: 'safe', mn: 'аюулгүй' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 12
  },
  {
    id: 'add_y5_l12_5',
    word: '准时',
    translation: { zh: '准时', pinyin: 'zhǔn shí', en: 'on time', mn: 'цагтаа' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 12
  },
  {
    id: 'add_y5_l13_1',
    word: '开药',
    translation: { zh: '开药', pinyin: 'kāi yào', en: 'prescribe medicine', mn: 'эм бичиж өгөх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 5, lesson: 13
  },
  {
    id: 'add_y5_l14_1',
    word: '有名',
    translation: { zh: '有名', pinyin: 'yǒu míng', en: 'famous', mn: 'алдартай' },
    category: 'Adjectives', categoryZh: '形容词', categoryEn: 'Adjectives', categoryMn: 'Тэмдэг нэр',
    level: 5, lesson: 14
  },
  {
    id: 'add_y5_l14_2',
    word: '介绍',
    translation: { zh: '介绍', pinyin: 'jiè shào', en: 'introduce', mn: 'танилцуулах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 5, lesson: 14
  },
  {
    id: 'add_y6_l1_1',
    word: '属',
    translation: { zh: '属', pinyin: 'shǔ', en: 'be born in the year of', mn: 'жилтэй' },
    category: 'States', categoryZh: '状态与情感', categoryEn: 'States', categoryMn: 'Төлөв байдал, сэтгэл хөдлөл',
    level: 6, lesson: 1
  },
  {
    id: 'add_y6_l1_2',
    word: '收到',
    translation: { zh: '收到', pinyin: 'shōu dào', en: 'receive', mn: 'хүлээн авах' },
    category: 'Communication', categoryZh: '沟通交流', categoryEn: 'Communication', categoryMn: 'Харилцаа',
    level: 6, lesson: 1
  },
  {
    id: 'add_y6_l2_1',
    word: '参加',
    translation: { zh: '参加', pinyin: 'cān jiā', en: 'take part in', mn: 'оролцох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 2
  },
  {
    id: 'add_y6_l3_1',
    word: '开会',
    translation: { zh: '开会', pinyin: 'kāi huì', en: 'have a meeting', mn: 'хуралдах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 3
  },
  {
    id: 'add_y6_l5_1',
    word: '忘记',
    translation: { zh: '忘记', pinyin: 'wàng jì', en: 'forget', mn: 'мартах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 5
  },
  {
    id: 'add_y6_l6_1',
    word: '猜',
    translation: { zh: '猜', pinyin: 'cāi', en: 'guess', mn: 'таах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 6
  },
  {
    id: 'add_y6_l8_1',
    word: '决定',
    translation: { zh: '决定', pinyin: 'jué dìng', en: 'decide', mn: 'шийдэх' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 8
  },
  {
    id: 'add_y6_l9_1',
    word: '迷路',
    translation: { zh: '迷路', pinyin: 'mí lù', en: 'get lost', mn: 'төөрөх' },
    category: 'Places', categoryZh: '场所与空间', categoryEn: 'Places', categoryMn: 'Газар орны чиглэл',
    level: 6, lesson: 9
  },
  {
    id: 'add_y6_l12_1',
    word: '注意',
    translation: { zh: '注意', pinyin: 'zhù yì', en: 'pay attention', mn: 'анхаарах' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 12
  },
  {
    id: 'add_y6_l12_2',
    word: '记住',
    translation: { zh: '记住', pinyin: 'jì zhù', en: 'remember', mn: 'тогтоох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 12
  },
  {
    id: 'add_y6_l14_11',
    word: '参观',
    translation: { zh: '参观', pinyin: 'cān guān', en: 'visit', mn: 'үзэж сонирхох' },
    category: 'Daily Actions', categoryZh: '日常动作', categoryEn: 'Daily Actions', categoryMn: 'Өдөр тутмын үйлдэл',
    level: 6, lesson: 14
  }
];

