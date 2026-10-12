const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};

checkStringLength('проверяемая строка', 20);
isPalindrome('Лёша на полке клопа нашёл ');

// Переводит время в формате 'часы:минуты' в количество минут с начала суток
const parseTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};

// Проверяет, укладывается ли встреча в рамки рабочего дня
const isMeetingWithinWorkday = (dayStart, dayEnd, meetingStart, duration) => {
  const dayStartInMinutes = parseTimeToMinutes(dayStart);
  const dayEndInMinutes = parseTimeToMinutes(dayEnd);
  const meetingStartInMinutes = parseTimeToMinutes(meetingStart);

  return meetingStartInMinutes >= dayStartInMinutes
    && meetingStartInMinutes + duration <= dayEndInMinutes;
};

isMeetingWithinWorkday('08:00', '17:30', '14:00', 90);
