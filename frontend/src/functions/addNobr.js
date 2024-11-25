export default function addNobr(text) {
  // Массив предлогов и союзов
  const rusWords = [
    "в",
    "во",
    "на",
    "вокруг",
    "с",
    "со",
    "из",
    "от",
    "к",
    "по",
    "через",
    "для",
    "о",
    "об",
    "при",
    "между",
    "над",
    "под",
    "без",
    "до",
    "после",
    "из-за",
    "вместо",
    "кроме",
    "в следствии",
    "в течение",
    "и",
    "а",
    "но",
    "или",
    "да",
    "также",
    "ли",
    "что",
    "потому что",
    "хотя",
    "если",
    "когда",
    "где",
    "пока",
    "чтобы",
    "как",
    "дабы",
    "раз",
    "тем более",
    "либо",
    "то есть",
    "около",
  ];

  const engWords = [
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "among",
    "around",
    "at",
    "before",
    "behind",
    "below",
    "beside",
    "between",
    "beyond",
    "by",
    "during",
    "for",
    "from",
    "in",
    "inside",
    "into",
    "near",
    "of",
    "off",
    "on",
    "once",
    "out",
    "over",
    "through",
    "to",
    "toward",
    "under",
    "up",
    "with",
    "without",
    "and",
    "but",
    "or",
    "nor",
    "for",
    "so",
    "yet",
    "although",
    "though",
    "because",
    "since",
    "until",
    "while",
    "whereas",
    "whether",
    "a",
    "an",
    "the",
    "&",
  ];

  const wordsToCheck = [...rusWords, ...engWords];

  // Регулярное выражение для поиска пробелов
  const regex = new RegExp(`(${wordsToCheck.join("|")})\\s+`, "g");

  // Заменяем пробелы на &nbsp; только после предлогов и союзов
  const preResult = text.toLowerCase().replace(regex, (match, p1) => `${p1}&nbsp;`);

  const result = capitalizeSentences(preResult);

  return result;
}

function capitalizeSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    .join(" ");
}
