/* Задача

Вам будет предоставлен массив объектов (ассоциативных массивов в PHP, таблиц в COBOL), представляющих данные о разработчиках, 
которые зарегистрировались для участия в следующем собрании программистов, которое вы организуете.

Ваша задача - вернуть либо:

true если все разработчики в списке пишут код на одном языке; или
false в противном случае.
Например, учитывая следующий входной массив:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
ваша функция должна вернуть значение true.

Примечания:

Строки, представляющие данный язык, всегда будут отформатированы одинаково (например, 'JavaScript' 
всегда будет отформатирован заглавными буквами 'J' и 'S'
Входной массив всегда будет корректным и отформатированным, как в примере выше.

*/

function isSameLanguage(list) {
  let filteredList = list.filter((el) => el.language === list[0].language);

  console.log(list.length === filteredList.length ? true : false);
  return list.length === filteredList.length ? true : false;
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

isSameLanguage(list1);
