const PHOTO_COUNT = 25;

const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;

const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const DESCRIPTIONS = [
  'Закат на берегу моря',
  'Мой завтрак — идеальный повод для фото',
  'Горы, которые я покорил этим летом',
  'Старый двор, в котором прошло детство',
  'Селфи с лучшим другом',
  'Город после дождя',
  'Первый снег в этом году',
  'Котик уснул прямо на клавиатуре',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Полина',
  'Сергей',
  'Анна',
  'Дмитрий',
  'Екатерина',
];

// Случайное целое число из диапазона [min, max]
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генератор уникальных идентификаторов для комментариев
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

// Текст комментария — одно или два случайных предложения
const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(MESSAGES)
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    { length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX) },
    createComment
  ),
});

const createPhotos = () => Array.from(
  { length: PHOTO_COUNT },
  (_element, index) => createPhoto(index + 1)
);

createPhotos();
