/* Задача

Вам будет предоставлен массив объектов (хешей в Ruby), представляющих данные о разработчиках, 
которые зарегистрировались для участия в встрече программистов, которую вы организуете впервые.

Ваша задача — вернуть количество разработчиков JavaScript из Европы.

Например, приведен следующий список:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
ваша функция должна возвращать число 1.

Если в Европе нет разработчиков JavaScript, то ваша функция должна возвращать 0.

Примечания:

Формат строк всегда будет таким Europe и JavaScript.
Все данные всегда будут достоверными и единообразными, как в приведенном выше примере.


*/

function countDevelopers(list) {
  list = list.filter((el) => {
    return el.continent === "Europe" && el.language === "JavaScript";
  });
  console.lod(list.length);
  return list.length;
}

list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

countDevelopers(list1);
