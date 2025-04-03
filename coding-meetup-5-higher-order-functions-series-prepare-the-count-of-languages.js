/* Задача

Вам будет предоставлен массив объектов (ассоциативные массивы в PHP, таблицы в COBOL, словари в Python), 
представляющих данные о разработчиках, которые зарегистрировались для участия в следующем собрании программистов, которое вы организуете.

Ваша задача — вернуть объект (ассоциативный массив в PHP, таблицу в COBOL, словарь в Python), 
который содержит количество представителей каждого языка программирования на встрече.

Например, учитывая следующий входной массив:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
Ваша функция должна возвращать следующий объект (ассоциативный массив в PHP, таблицу в COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Примечания:

Порядок расположения языков в объекте не имеет значения.
Значение count должно быть допустимым числом.
Входной массив всегда будет корректным и отформатированным, как в примере выше.



*/

function countLanguages(list) {
  list = list.map((el) => el.language);
  let count = {};
  list.forEach((el) => (!count[el] ? (count[el] = 1) : count[el]++));
  console.log(count);
  return count;
}

const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

countLanguages(list1);
