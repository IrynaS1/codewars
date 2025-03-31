/* Задача

Вам будет предоставлен массив объектов (ассоциативных массивов в PHP, таблиц в COBOL), 
представляющих данные о разработчиках, которые зарегистрировались для участия в следующем собрании программистов, которое вы организуете.

Ваша задача - вернуться:

true если зарегистрировался хотя бы один разработчик Ruby; или
false если не будет разработчиков Ruby.
Например, учитывая следующий входной массив:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
ваша функция должна вернуть значение true.

Примечания:

Входной массив всегда будет корректным и отформатированным, как в примере выше.


*/

function isRubyComing(list) {
  let isRubyDevelopers = list.filter((el) => el.language === "Ruby");
  console.log(isRubyDevelopers.length > 0 ? true : false);
  return isRubyDevelopers.length > 0 ? true : false;
}

const list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

isRubyComing(list1);
