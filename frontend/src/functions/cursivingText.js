export default function cursivingText(text) {
  const regex = /\/(.*?)\//g;

  // Массивы для хранения результатов
  let cursives = [];
  let normal = [];

  // Функция для добавления текста в массив обычного текста
  const addNormalText = (text, start, end) => {
    if (start < end) {
      normal.push(text.slice(start, end).trim());
    }
  };

  // Переменная для отслеживания последнего индекса
  let lastIndex = 0;

  // Поиск всех фраз в курсиве и добавление их в массив
  text.replace(regex, (match, group1, offset) => {
    cursives.push(group1);
    addNormalText(text, lastIndex, offset);
    lastIndex = offset + match.length;
  });

  // Добавление оставшегося текста после последней фразы в курсиве
  addNormalText(text, lastIndex, text.length);
  // Функция для оборачивания курсивных строк в теги <span>
  const wrapCursives = (match, group1) => `<span class="cursive">${group1}</span>`;

  // Собираем итоговую строку, заменяя курсивные фразы на фразы в тегах <span>
  const ready = text.replace(regex, wrapCursives);

  return ready;
}
